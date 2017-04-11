var imagen = document.getElementsByClassName("image");
var contentImg = document.getElementsByClassName("picture");
var body = document.getElementById("body");
var botonClose = document.getElementsByClassName("close");

for(var i = 0; i < imagen.length; i++){
  imagen[i].addEventListener("click", function (e) {
    e.target.parentNode.parentNode.parentNode.classList.add("modal");
    body.classList.add("overflow-hidden");
  })
}

for (var i = 0; i < botonClose.length; i++) {
  botonClose[i].addEventListener("click", function(e){
    e.target.parentNode.parentNode.classList.remove("modal");
    body.classList.remove("overflow-hidden");
  })
}
