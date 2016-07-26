
(function (window){
var byeSpeaker ={};
byeSpeaker.name = "John";
byeSpeaker.name2 = "Jen";
byeSpeaker.name3 = "Jason";
byeSpeaker.name4 = "Jim";
var speakWord = "Good Bye ";
byeSpeaker.speak = function () {
  console.log(speakWord + byeSpeaker.name);
  console.log(speakWord + byeSpeaker.name2);
  console.log(speakWord + byeSpeaker.name3);
  console.log(speakWord + byeSpeaker.name4);
}
window.byeSpeaker = byeSpeaker;
})(window);
