function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
  var uppercase = "Hello!"
    if (uppercase.toUpperCase()) === uppercase {
      return 'YES INDEED!'
    }
  var lowercase = 'hello!'
    if (lowercase.toLowerCase()) === lowercase {
      return 'I can\'t hear you!'
    }
  var mixedCase = 'Hi there!'
    if (mixedCase.toLowerCase()) === mixedCase && (mixedCase.toUpperCase()) === mixedCase {
      return 'I love you, too.'
    }

}
