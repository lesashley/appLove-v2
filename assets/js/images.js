var parentProduct = document.getElementsByClassName("products")[0];

function createElements(e,texto){
  var contentParent = document.createElement("div");
  contentParent.setAttribute("class","picture");
  var content = document.createElement("div");
  var image = document.createElement("img");
  image.src="assets/img/img-"+e+".jpg";
  image.classList.add("image");
  var close = document.createElement("a");
  close.setAttribute("class","close");
  close.setAttribute("title","Close");
  close.innerHTML="x";
  var figcaption = document.createElement("figcaption");
  figcaption.innerHTML=texto;
  parentProduct.appendChild(contentParent);
  contentParent.appendChild(content);
  content.appendChild(image);
  content.appendChild(close);
  contentParent.appendChild(figcaption);
}

for(var i = 1; i<12; i++){
  createElements(i,"Nombre del Proyecto "+i);
}
