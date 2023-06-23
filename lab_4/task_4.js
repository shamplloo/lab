/*
У елемент <ul id="test"></ul> потрібно додати три <li></li> елементи. 
Вибрати <ul> елемент за допомогою id = “test”. 
Створити кожен новий <li></li> елемент за допомогою методу createElement() 
та додати до списоку за допомогою методу appendChild().
 */

let ulElement = document.getElementById("test");

for (let i = 0; i < 3; i++) {
    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);
}