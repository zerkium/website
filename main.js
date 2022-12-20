$(document).ready(function() {
	const textArray = textString.split('');
	const textElem = $('.hacking-animation__text');

	let count = 0;

	setInterval(() => {
			if(textArray[count] === "\n") {
					textElem.append("<br>");
			}
			else {
					textElem.append(`<span class="hacking-animation__character">${textArray[count]}</span>`);
			}

			count++;
			if (count === textArray.length) {
					count = 0;
			}
	}, 20);
});

var textString = `.
.
///cqrCyber Console///
    <umarcbs@hacking>:::cqrCyber
           Commence winterhacking module@cqrcyber.10.10.20
           ...Connecting Kashmir...NO ANSWER
...
...
//BornToHack&Crack\\\\
            ://StopcallingVictim...
            (**NO AnsWER**)....
                    PLEASE ...//STOP CALLING Victim...
{enter. your. Name.}/// -- \\\\Umar Farooq\\\\
  <M> Connecting Victim..:":":":
  ff

<original hacker...>
                / if
         -----sin close--
         ....hacker@hacking or admin@cqrCyber;
                     !!!HACKer/Cracker!!!!404
.
.
.
                        PLEASE;;'ENTER;;'PASSWORD
LOAD .       $%$%$qazWSXedcRFVtgbYHNujmIKol$%$%$%
      \\\\...Victim ACCEPTED your CALL...
      \\\\%^^attach{codemonkey}"'';

///
//
             /If victim has coffee [ ed happy 100% ]
               //or Hide ;
/
//
////CODEMONKEYSENGAGE...&*&&*&;
      [sd]
       {hard like Shirt}

ZXC..<>Ckfkd<>vkvodkskclc...
                         { VODKA3421D;CODE10011011101011
                        ( B+ HACKING..//YOULOSTALLYOURBITCOIN )
<\\\\boeie\\\\..www.btchackerscentral.com\\\\
**(AR)12. (696); (96).ffkeoslk
             0617513060 <<<<>OKAY
             {FOntsize}:Hard.. FONTMANAGE 22 //
             ((open duck)) //MONSTER_FRAME;
                           (port Opened)
                                (portisnotfound)// B1 }
..
..
.....
NORMALIZE CLothing ?? >> {STRING LOST}
                        BIND ERROR <<DOWNREGION EXPOSED>> ;;' /
                          0011011011101110110101101
                           -----v-----
                          (     |    )  <-----
                          /     |    \\
                         /     / \\    \\
                         |     | |    |

/string found
///BetterCheckYourDrawers
....ALSOFOUNDILDO
          ///(SHUTDOWN HACKING)
             {WHIPEDRIVE}
          whipe not found..
S1293 K // P 430
         @cqrcyber.. VERSION 10.10.20.1067
...
.....
...
....
...`



const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    // modal: true,
    width: '400px',
    height: '400px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '400px',
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})
