
(function (window){
var byeSpeaker ={};
var speakWord = "Good Bye ";
byeSpeaker.speak = function () {
  console.log(speakWord + "John");
  console.log(speakWord + "Jen");
  console.log(speakWord + "Jason");
  console.log(speakWord + "Jim");
}
window.byeSpeaker = byeSpeaker;
})(window);
