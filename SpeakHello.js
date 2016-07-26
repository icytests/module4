
(function (window){
var helloSpeaker ={};
helloSpeaker.name = "Yaakov";
helloSpeaker.name2 = "Paul";
helloSpeaker.name3 = "Frank";
helloSpeaker.name4 = "Larry";
helloSpeaker.name5 = "Paula";
helloSpeaker.name6 = "Laura";
var speakWord = "Hello ";
helloSpeaker.speak = function () {
  console.log(speakWord + helloSpeaker.name);
  console.log(speakWord + helloSpeaker.name2);
  console.log(speakWord + helloSpeaker.name3);
  console.log(speakWord + helloSpeaker.name4);
  console.log(speakWord + helloSpeaker.name5);
  console.log(speakWord + helloSpeaker.name6);
}
window.helloSpeaker = helloSpeaker;
})(window);