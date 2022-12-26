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
        this.echo('Type [[b;#D5D5D5;]exit] to see turn off animation.');
        this.echo('Type [[b;#D5D5D5;]grab()] function to get the screenshot from your camera');
        this.echo('Type [[b;#D5D5D5;]camera()] to get video and [[b;#fff;]pause()]/[[b;#fff;]play()] to stop/play');
        this.echo('Type [[b;#D5D5D5;]experiences()] to get the details about my past experiences')
        this.echo('Type [[b;#D5D5D5;]skills()] to get the details about my skills')
        this.echo('Type [[b;#D5D5D5;]projects()] to get the details about my projects')
        this.echo('Type [[b;#D5D5D5;]help()] to see this message again');
        this.echo('Type [[b;#D5D5D5;]camera()] for the hidden functionnality');
    } else if (command === 'projects()') {
        term.echo('');
        term.echo('- [[b;#D5D5D5;]TIERING MODEL] - [[b;#D5D5D5;]Dans le cadre d\'un antécédent de piratage d\'un client, j\'ai été missionné sur la sécurisation de l\'infrastructure informatique de celui-ci. il s\'agissait de mettre en place\nun model en "oignon", ou "tiering model" selon microsoft. il est nommé ainsi car il se base sur les différentes couches d\'un oignon rapporté à la sécurité des systemes informatiques\nla couche 0 étant la plus sécurisée. Cette sécurité a demandé la mise en place de LAPS permettant la sécurisation des comptes, de serveurs dit de passerelles pour faire le rebond entre les couches\net de nombreuses GPO visant à la l\'isolation des différentes couches. Aucun outil tiers n\'a étés utilisé lors de ce projet, puisque j\'avait développé à cet effet un script powershell me permettant\nune remodélisation complète de la structure AD, la création des GPO, des règles de firewall de chaque tiers, et bien d\'autres.\n\n]');
        term.echo('- [[b;#D5D5D5;]PENTEST] - [[b;#D5D5D5;]Mon intérèt pour la cybersécurité se retrouve au quotidien lorsque j\'étoffe mes compétences sur des sites spécialisés comme tryhack me, root-me ou encore hack the box\noù j\'ai atteint déjà un bon niveau, 7000 ème sur root-me, et 61172 ème sur 156 521 5 utilisateurs try hack me. Il vous est possible de me retrouver sur certains capture the flag\ncomme celui de la DGSE, le FSCE france cyber security challenge. Ce sont des challenges de piratage où il faut infecter une machine hôte et récupérer des "flags", un pour l\'utilisateur et un "root"\npour le system. Je prépare en amont quelques certifications comme l\'EJPT, le CEH ainsi que la pentest + de comptia. Dans cette optique la j\'utilise très souvent des outils tels que netcat\naircrack john the ripper, hydra, wireshark et bien d\'autres. Je parcours de nombreux sites tels que github et stack overflow qui me permettent l\'accès à une très large base de connaissance\net utilise des langages de programmation tels que batch, powershell, python, html, css ou encore php.\n\n]');
        term.echo('- [[b;#D5D5D5;]CLOUD] - [[b;#D5D5D5;]L\'avenir étant très porté sur le cloud j\'ai pu manipuler plusieurs plateformes comme AWS, AZURE, ou LINODE pour l\'hébergement de certaines VM. De plus étant passionné de\njeux vidéos il m\'est naturelement venu à l\'esprit d\'utiliser docker pour héberger plusieurs serveurs de jeux pour jouer avec mes amis aisément tout en les monitorant avec\ngrafana, prometheus et kubernetes. Lors d\'un souci à cause du quel nous avions perdus nos serveurs, j\'ai mis en place un failover avec Docker Swarm et un load balancing avec\nHAproxy et NGINX, ainsi qu\'un volume réel permétant aux données de ne pas êtres éffacées à l\'arret des containeurs. Chez KOESIO nous avions de notre côté un service hébergement & cloud\npermettant, comme son nom l\'indique l\'hébergement de son infrastructure informatique et ou\napplicative voir même sauvegarde dans nos datacenters.\n\n]');      
    } else if (command === 'skills()') {
        term.echo('[[b;#D5D5D5;]Lors de mes différentes expériences, j\'ai pu étendre encore un peu plus mes compétences. Bien que je sois jeune, ma passion pour ce milieu et mon autodidactisme me me procure une réelle force.\n]');
        term.echo('- [[b;#D5D5D5;]SKILLS] → [[b;#D5D5D5;]allant de 0 à 5]\n');
        term.echo('- [[b;#D5D5D5;]RESEAUX] -\n# [[b;#D5D5D5;]Vpn] ¤¤¤¤ [[b;#D5D5D5;]| Routage & Switching] ¤¤¤¤ [[b;#D5D5D5;]| Firewalls & securité] ¤¤¤¤¤ [[b;#D5D5D5;]| Troubleshooting] ¤¤¤¤ [[b;#D5D5D5;]| SD-Wan] ¤¤¤¤\n');
        term.echo('- [[b;#D5D5D5;]CLOUD] -\n# [[b;#D5D5D5;]Docker] ¤¤¤¤ [[b;#D5D5D5;]| Docker Swarm] ¤¤¤¤ [[b;#D5D5D5;]|Jenkins] ¤¤ [[b;#D5D5D5;]| Aws] ¤¤ [[b;#D5D5D5;]| Kubernetes] ¤¤ [[b;#D5D5D5;]| Ansible] ¤¤ [[b;#D5D5D5;]| teraform] ¤¤ [[b;#D5D5D5;]| Grafana] ¤¤ [[b;#D5D5D5;]| Prometheus] ¤¤¤\n');
        term.echo('- [[b;#D5D5D5;]SYSTEMS] -\n# [[b;#D5D5D5;]Windows OS & Servers] ¤¤¤¤¤ [[b;#D5D5D5;]| Linux] ¤¤¤¤ [[b;#D5D5D5;]| Mac Os] ¤¤¤]\n');
        term.echo('- [[b;#D5D5D5;]PROGRAMMATION] -\n# [[b;#D5D5D5;]JavaScript] ¤¤¤ [[b;#D5D5D5;]| Python] ¤¤¤¤ [[b;#D5D5D5;]| Powershell] ¤¤¤¤ [[b;#D5D5D5;]| Bash & Batch] ¤¤¤¤ [[b;#D5D5D5;]| Html & Css] ¤¤¤\n');
        term.echo('- [[b;#D5D5D5;]VIRTUALISATION] -\n# [[b;#D5D5D5;]Hyper-V] ¤¤¤¤ [[b;#D5D5D5;]| ESXi] ¤¤¤¤\n');
        
    } else if (command === 'experiences()') {
        term.echo('# [[b;#D5D5D5;]Administrateur systèmes, réseaux et sécurité | support N2 -] KOESIO [[b;#D5D5D5;]/ 2022 - 2023]');
        term.echo('[[b;#D5D5D5;]Reconnu pour ma motivation et mon envie d\'en apprendre toujours plus, j\'opère actuellement en tant qu\'administrateur systeme réseaux & sécurité au sein du support informatique au N2 / N3.\nDans ce cadre le maintient en condition opérationnel de nos 650 clients est notre maitre mot, et touchons pratiquement a toutes les technologies que l\'on peut trouver actuellement.\nLes qualitées qui me caractérisent le plus sont ma motivation, ma soif de connaissance en tout genre, et ma bonne humeur contagieuse. Par le biais de mon travail, j\'ai pu toucher\na de nombreuses marques comme Fortinet, Aruba, Stormshield, Pf sens, Data Core, Veeam et bien d\'autre. Nos clients ont bien souvent des serveurs windows\nmais certains d\'entre eux utilisent des serveurs linux, nous en avons aussi certains sur MAC, j\'ai donc une apétence particulière envers ces différents os / kernels.]\n');
        term.echo('# [[b;#D5D5D5;]technicien systèmes et réseaux | support N1 -] KOESIO [[b;#D5D5D5;]/ 2021 - 2022]');
        term.echo('[[b;#D5D5D5;]Au sein d\'un support informatique, j\'agissait en tant que technicien systemes reseau et securité N1]\n');
        term.echo('# [[b;#D5D5D5;]informaticien -] Cyberprovence [[b;#D5D5D5;]/ 2019 - 2021]');
        term.echo('[[b;#D5D5D5;]Nous travaillions en sous traitance pour plusieurs sociétés comme Wifirst ou encore 5com, qui nous faisaient aller chez les clients pour dépanner ou bien installer\nleurs différents systèmes informatique. J\'ai par ce biais pu commencer à etoffer mes compétences, principalement en réseau dans des hopitaux, des grands campings et même des bases militaires.\nNous avions aussi quelques clients directs composés principalement de particuliers et de PME, c\'est grâce à ceux-ci que j\'ai pu développer mes bases en système et sécurité.]\n');
        term.echo('# [[b;#D5D5D5;]employé polyvalent -] Mcdonalds [[b;#D5D5D5;]/ 2018 - 2020\n]');
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
    
    enabled: $('body').attr('onload') === undefined,
    onInit: function() {
        set_size();
        
        this.echo('- [[b;#fff;]PROFIL] - \n');
        this.echo('# [[b;#fff;]Grand passionné d\'informatique, j\'ai passé tout mon temps depuis mon plus jeune age à pivoter autour de ce milieu. J\'ai depuis quelques années développé\nun amour aigu pour la cyber sécurité et plus récemment le cloud, domaine dans lequels j\'opère et j\'apprends tous les soirs en self learning.\n]');
        this.echo('- [[b;#fff;]EXPERIENCES] - \n');
        this.echo('# [[b;#fff;]Administrateur systèmes, réseaux et sécurité | support N2 -] KOESIO [[b;#D5D5D5;]/ 2022 - 2023]');
        this.echo('# [[b;#fff;]Technicien systèmes et réseaux | support N1 -] KOESIO [[b;#D5D5D5;]/ 2021 - 2022]');
        this.echo('# [[b;#fff;]Informaticien -] Cyberprovence [[b;#D5D5D5;]/ 2019 - 2021]');
        this.echo('# [[b;#fff;]Employé polyvalent -] Mcdonalds [[b;#D5D5D5;]/ 2018 - 2020\n]');
        this.echo('- [[b;#fff;]MAIN SKILLS] - \n');
        this.echo('# [[b;#fff;]JavaScript | Firewall | Routage | VMWare ESX | Hyper-V | Network | Veeam | Scripting | Powershell | Docker]');
        this.echo('\n')
        this.echo('- [[b;#D5D5D5;]Type] help() [[b;#D5D5D5;]to see all the commands | Type] experiences() [[b;#D5D5D5;]to see the details about my experiences |] skills() [[b;#D5D5D5;]to see the details about my skills\nAnd type] projects() [[b;#D5D5D5;]to see all my projects] -\n');
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
