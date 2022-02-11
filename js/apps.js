"use strict";
let employeeName = 'John Smith';
let studentName = "John Doe";
console.log(employeeName + studentName);
function startGame() {
    //strating a new  game
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultyMath! Starting a new game...';
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=apps.js.map