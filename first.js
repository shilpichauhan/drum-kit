// document.addEventListener("DOMContentLoaded",function(){
// document.querySelector("button").addEventListener("click", add);
// function add(){
//     alert("hiiii");
// }
// })
document.addEventListener("DOMContentLoaded", function () {
  var l = document.querySelectorAll(".drum").length;
  for (var i = 0; i < l; i++) {
    document
      .querySelectorAll(".drum")
      [i].addEventListener("click", function () {
        // alert("hiiiiiiii");
        var a = this.innerHTML;
        makesound(a);
        addanimation(a);
      });
  }
  document.addEventListener("keypress",function(event){
      makesound(event.key);
      addanimation(event.key);
  });
  function makesound(key){
    switch (key) {
        case "w":
          var audio = new Audio("crash.mp3");
          audio.play();
          break;
        case "a":
          var audio = new Audio("kick-bass.mp3");
          audio.play();
          break;
        case "s":
          var audio = new Audio("snare.mp3");
          audio.play();
          break;
        case "d":
          var audio = new Audio("tom-1.mp3");
          audio.play();
          break;
        case "j":
          var audio = new Audio("tom-2.mp3");
          audio.play();
          break;
        case "k":
          var audio = new Audio("tom-3.mp3");
          audio.play();
          break;
        case "l":
          var audio = new Audio("tom-4.mp3");
          audio.play();
          break;
        default:alert("plzzz....click right button");
      }
  }
});
function addanimation(cuurentKey){
    var n=document.querySelector("."+cuurentKey );
    n.classList.add("pressed");
    setTimeout(function(){
        n.classList.remove("pressed");

    },100);

}
// var l=document.querySelectorAll(".drum").length;
// for(var i=0;i<l;i++){
//     document.querySelector(".drum")[i].addEventListener("click",function(){
//         alert("hiiiiiiii");
//     });
// }
