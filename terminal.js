var scanlines = $('.scanlines');
var tv = $('.tv');
function exit() {
    $('.tv').addClass('collapse');
    term.disable();
}

// ref: https://stackoverflow.com/q/67322922/387194
var __EVAL = (s) => eval(`void (__EVAL = ${__EVAL}); ${s}`);
var term = $('#terminal').terminal(function(command, term) {
    var cmd = $.terminal.parse_command(command);
    if (cmd.name === 'exit') {
        exit();
    } else if (cmd.name === 'camera') {
        term.echo('did you mean [[b;#fff;]camera()]?');
    } else if (cmd.name === 'grab') {
        term.echo('did you mean [[b;#fff;]grab()]?');
    } else if (cmd.name === 'play') {
        term.echo('did you mean [[b;#fff;]play()]?');
    } else if (cmd.name === 'pause') {
        term.echo('did you mean [[b;#fff;]pause()]?');
    } else if (cmd.name === 'echo') {
        term.echo(cmd.rest);
    } else if (cmd.name === 'help()') {
        term.echo('Type [[b;#fff;]exit] to see turn off animation.');
        term.echo('Type [[b;#fff;]grab()] function to get the scre' +
                  'enshot from your camera');
        term.echo('Type [[b;#fff;]camera()] to get video and [[b;#fff;]pause()]/[[b;#fff;]play()] to stop/play');
        term.echo('Type [[b;#fff;]experiences()] to get the details about my past experiences');
        term.echo('Type [[b;#fff;]skills()] to get the details about my skills');
        term.echo('Type [[b;#fff;]projets()] to get the details about my projects');
        term.echo('Type [[b;#fff;]help()] to see this message again')
    } else if (command === 'projects()') {
        term.echo('Tiering model - Dans le cadre d\'un antécédent de piratage d\'un client, j\'ai été missionné sur la sécurisation de l\'infrastructure informatique de celui-ci. il s\'agissait de mettre en place un model en "oignon", tiering model avancé par microsoft. il est nommé ainsi car il se base sur les différentes couches d\'un oignon rapporté à la sécurité des systemes informatiques, la couche 0 étant la plus sécurisée. Cette sécurité à demandé la mise en place de LAPS permettant la sécurisation des comptes, de serveurs dit de passerelles pour faire le rebond entre les couches, et de nombreuses GPO visant à la l\'isolation des différentes couches. Aucun outil tiers n\'a étés utilisé lors de ce projet, puisque j\'avait développé a cet effet un script powershell me permettant la remodélisation complète de la structure AD, la création des GPO, des règles de firewall de chaque tiers, et bien d\'autres');
    } else if (command === 'skills()') {
        term.echo('Jsuis trop fort !');
    } else if (command === 'experiences()') {
        term.echo('Administrateur systèmes, réseaux et sécurité | support N2 - KOESIO / 2022 - 2023');
        term.echo('technicien systèmes et réseaux | support N1 - KOESIO / 2021 - 2022');
        term.echo('informaticien - Cyberprovence / 2019 - 2021');
        term.echo('employé polyvalent - Mcdonalds / 2018 - 2020');
    }else if (command !== '') {
        try {
            var result = __EVAL(command);
            if (result && result instanceof $.fn.init) {
                term.echo('<#jQuery>');
            } else if (result && typeof result === 'object') {
                tree(result);
            } else if (result !== undefined) {
                term.echo(new String(result));
            }
        } catch(e) {
            term.error(new String(e));
        }
    }
}, {
    name: 'js_demo',
    onResize: set_size,
    exit: false,
    // detect iframe codepen preview
    enabled: $('body').attr('onload') === undefined,
    onInit: function() {
        set_size();
        this.echo('Type [[b;#fff;]exit] to see turn off animation.');
        this.echo('Type [[b;#fff;]grab()] function to get the scre' +
                  'enshot from your camera');
        this.echo('Type [[b;#fff;]camera()] to get video and [[b;#fff;]pause()]/[[b;#fff;]play()] to stop/play');
        this.echo('Type [[b;#fff;]experiences()] to get the details about my past experiences')
        this.echo('Type [[b;#fff;]skills()] to get the details about my skills')
        this.echo('Type [[b;#fff;]projets()] to get the details about my projects')
        this.echo('Type [[b;#fff;]help()] to see this message again')
    },
    onClear: function() {
        console.log(this.find('video').length);
        this.find('video').map(function() {
            console.log(this.src);
            return this.src;
        });
    },
    prompt: 'js> '
});
// for codepen preview
if (!term.enabled()) {
    term.find('.cursor').addClass('blink');
}
function set_size() {
    // for window height of 170 it should be 2s
    var height = $(window).height();
    var width = $(window).width()
    var time = (height * 2) / 170;
    scanlines[0].style.setProperty("--time", time);
    tv[0].style.setProperty("--width", width);
    tv[0].style.setProperty("--height", height);
}

function tree(obj) {
    term.echo(treeify.asTree(obj, true, true));
}
var constraints = {
    audio: false,
    video: {
        width: { ideal: 1280 },
        height: { ideal: 1024 },
        facingMode: "environment"
    }
};
var acceptStream = (function() {
    return 'srcObject' in document.createElement('video');
})();
function camera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        term.pause();
        var media = navigator.mediaDevices.getUserMedia(constraints);
        media.then(function(mediaStream) {
            term.resume();
            var stream;
            if (!acceptStream) {
                stream = window.URL.createObjectURL(mediaStream);
            } else {
                stream = mediaStream;
            }
            term.echo('<video data-play="true" class="self"></video>', {
                raw: true,
                onClear: function() {
                    if (!acceptStream) {
                        URL.revokeObjectURL(stream);
                    }
                    mediaStream.getTracks().forEach(track => track.stop());
                },
                finalize: function(div) {
                    var video = div.find('video');
                    if (!video.length) {
                        return;
                    }
                    if (acceptStream) {
                        video[0].srcObject = stream;
                    } else {
                        video[0].src = stream;
                    }
                    if (video.data('play')) {
                        video[0].play();
                    }
                }
            });
        });
    }
}
       
var play = function() {
    var video = term.find('video').slice(-1);
    if (video.length) {
        video[0].play();
    }
}
function pause() {
    term.find('video').each(function() {
        this.pause(); 
    });
}

function grab() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        term.pause();
        var media = navigator.mediaDevices.getUserMedia(constraints);
        media.then(function(mediaStream) {
            const mediaStreamTrack = mediaStream.getVideoTracks()[0];
            const imageCapture = new ImageCapture(mediaStreamTrack);
            return imageCapture.takePhoto();
        }).then(function(blob) {
            term.echo('<img src="' + URL.createObjectURL(blob) + '" class="self"/>', {
                raw: true,
                finialize: function(div) {
                    div.find('img').on('load', function() {
                        URL.revokeObjectURL(this.src);
                    });
                }
            }).resume();
        }).catch(function(error) {
            term.error('Device Media Error: ' + error);
        });
    }
}
async function pictuteInPicture() {
    var [video] = $('video');
    try {
        if (video) {
            if (video !== document.pictureInPictureElement) {
                await video.requestPictureInPicture();
            } else {
                await document.exitPictureInPicture();
            }
        }
  } catch(error) {
      term.error(error);
  }
}
function clear() {
    term.clear();
}

github('jcubic/jquery.terminal');
cssVars(); // ponyfill
