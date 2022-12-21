$(function() {
  var scanlines = $('.scanlines');
  var tv = $('.tv');

  var responses = {
    exit: '',
    camera: 'did you mean [[b;#fff;]camera()]?',
    grab: 'did you mean [[b;#fff;]grab()]?',
    play: 'did you mean [[b;#fff;]play()]?',
    pause: 'did you mean [[b;#fff;]pause()]?',
    echo: cmd.rest,
    help: 'Type [[b;#fff;]exit] to see turn off animation.\n' +
          'Type [[b;#fff;]grab()] function to get the screenshot from your camera\n' +
          'Type [[b;#fff;]camera()] to get video and [[b;#fff;]pause()]/[[b;#fff;]play()] to stop/play\n' +
          'Type [[b;#fff;]experiences()] to get the details about my past experiences\n' +
          'Type [[b;#fff;]skills()] to get the details about my skills\n' +
          'Type [[b;#fff;]projets()] to get the details about my projects\n' +
          'Type [[b;#fff;]help()] to see this message again',
    projects: 'A remplir',
    skills: 'Jsuis trop fort !',
    experiences: 'Administrateur systèmes, réseaux et sécurité | support N2 - KOESIO / 2022 - 2023\n' +
                 'technicien systèmes et réseaux | support N1 - KOESIO / 2021 - 2022\n' +
                 'informaticien - Cyberprovence / 2019 - 2021\n' +
                 'employé polyvalent - Mcdonalds / 2018 - 2020',
  };

  function exit() {
    tv.addClass('collapse');
    term.disable();
  }

  function evaluate(command) {
    // use safer approach such as the Function constructor or the vm module
  }

  var term = $('#terminal').terminal(function(command, term) {
    var cmd = $.terminal.parse_command(command);
    switch (cmd.name) {
      case 'exit':
        exit();
        break;
      case 'echo':
        term.echo(responses[cmd.name]);
        break;
      default:
        if (responses[cmd.name]) {
          term.echo(responses[cmd.name]);
        } else {
          try {
            var result = evaluate(command);
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
        break;
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
      this.echo('Type [[b;#fff;]grab()] function to get the screenshot from your camera');
      this.echo('Type [[b;#fff;]camera()] to get video and [[b;#fff;]pause()]/[[b;#fff;]play()] to stop/play');
      this.echo('Type [[b;#fff;]experiences()] to get the details about my past experiences');
      this.echo('Type [[b;#fff;]skills()] to get the details about my skills');
      this.echo('Type [[b;#fff;]projets()] to get the details about my projects');
      this.echo('Type [[b;#fff;]help()] to see this message again');
    },
  });
});

