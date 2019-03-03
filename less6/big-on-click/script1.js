//'use strict'
//let image = document.getElementById('image_1'); // получить элемент по ИД
let images = document.getElementsByTagName("img"); // берем все элементы с тегом имг
console.log(images);

for (let i=0; i<images.length; i++) {
    
    console.log(images[i]);
    images[i].addEventListener("click", function(event) {
        let appDiv = document.getElementById("big_pic"); //получаем элемент по ИД
        appDiv.innerHTML = ""; // похоже что обнуляем
        let img = document.createElement("img");  // cсоздаем имг
        img.setAttribute("onerror", "alert('Файл не найден');")
        img.src = "img/small/"+images[i].id.toString()+".png"; // генерируем путь к новому файлику и пихаем его в СРц имг
        appDiv.appendChild(img);
    });
}
