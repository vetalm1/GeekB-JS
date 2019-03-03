let image = document.getElementById("image_1");
//все наши картинки
let images = document.getElementsByTagName("img");
//обработчик событий

console.log(images.length);

for (let i = 0; i < images.length; i++) {
  console.log(images[i]);
  images[i].addEventListener("click", function(evt) {
    var appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    let image = document.createElement("img");
    image.src = "img/gallery/big/" + images[i].id.toString() + ".png";
    appDiv.appendChild(image);
  });
}
