'use strict'
var i=0;
let game = {
    run() { //run game
        console.log("Игра начата");
        while (true){
            //получить направление игрока
            const direction = mover.getDirection();
            // условие выхода из игры
            if (direction === null) {
                console.log("Игра закончена");
                return;
            }
            // получить позицию игрока
            const nextPoint = mover.getNextPosition(direction);
            renderer.clear();
             // двигать игрока
            player.move(nextPoint);
            renderer.render();
            i++;
            console.log(i + "-й ход ");

        }
    },
    Init() {
        console.log("Ваше положение - о");
        renderer.render();
        console.log("для начала игры наберите - game.run()");
    }
};
game.Init();
