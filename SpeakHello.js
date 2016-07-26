
(function (window){
var helloSpeaker ={};
var speakWord = "Hello ";
helloSpeaker.speak = function () {
  console.log(speakWord + "Yaakov");
  console.log(speakWord + "Paul");
  console.log(speakWord + "Frank");
  console.log(speakWord + "Larry");
  console.log(speakWord + "Paula");
  console.log(speakWord + "Laura");
}
window.helloSpeaker = helloSpeaker;
})(window);