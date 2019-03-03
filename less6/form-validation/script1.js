let toggleOpenForm= document.getElementById("toggle-open-form");
let form = document.querySelector("form");
let nameField = document.getElementById("name");
let emailField = document.getElementById("email");
let emptyName = document.getElementById("emptyName");
let emptyEmail = document.getElementById("emptyEmail");
let notValudEmail = document.getElementById("notValudEmail");
console.log(nameField, emailField);
toggleOpenForm.addEventListener("click", function(event) {
    event.preventDefault(); // отменяем событие по нажатию поумолчанию
    form.classList.toggle("display-block");
    // это все чтобы убрать и показать форму по нажатию ссылки
});
form.addEventListener("submit", function(event){
    event.preventDefault(); // отменяем событие по нажатию поумолчанию
    clearFormClasses();
    if (!nameField.value.length) {  //проверяем пустое ли поле nameField (кол-во символов 0)
        console.log("Пустое поле");
        emptyName.classList.add("display-block");
        nameField.classList.add("error-input");
    }
    if (!emailField.value.length) {
        emptyEmail.classList.add("display-block");
        emailField.classList.add("error-input");
    }
    if (!isEmailValid(emailField.value)) {
        notValudEmail.classList.add("display-block");
    }

});

function isEmailValid(field) {
    // мы сделали стандартными средствами
    // но можно было бы используя регулярные выражения
    // с помощию ниж найти собаку и точку
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(field).toLowerCase());
   
}

function clearFormClasses() {
    emptyName.classList.remove("display-block");
        nameField.classList.remove("error-input");
        emptyEmail.classList.remove("display-block");
        emailField.classList.remove("error-input");
        notValudEmail.classList.remove("display-block");
}