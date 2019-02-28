renderer.renderBoard();
//обрабатываем событие если пользователь отпускает клавишу
window.addEventListener('keyup', function(event){
    mover.makeStep(event);
});