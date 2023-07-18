// Using typeWriter Library Instructions
var app = document.getElementById('typeWriter');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('HTML')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Python')
    .pauseFor(1000)
    .deleteChars(7)
    .typeString('<strong>PHP</strong>')
    .pauseFor(1000)
    .deleteChars(7)
    .typeString('JavaScript')
    .pauseFor(1000)
    .deleteChars(10)
    .typeString('BASH')
    .pauseFor(2500)
    .start();
// TypeWriter ends