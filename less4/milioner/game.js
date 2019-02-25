'use strict'

var i=1;
var v=0;
let game = {
    run() { //run game
        console.log("Игра началась!");
        for (i=1; i<=3; i++){
            let qNumber="вопрос"+i;
            let answer = "ans"+i;
            let ansTr = "ansTrue"+i;
            console.log(q1[qNumber]);
            console.log("1."+ans[answer][0]+"  2."+ans[answer][1]+"  3."+ans[answer][2]+"  4."+ans[answer][3]);
            let otvet = parseInt(prompt("Выберите правильный вариант 1,2,3,4"));
            otvet-=1;
            if (ans[ansTr][otvet]==1) {
                console.log("Верно"); v++;
            } else { console.log("Не верно, вы проиграли. Игра окончена"); break;}
        }
        if (v==3) {
            console.log("Вы угадали верно 3 вопроса. Поздравляем!!! Игра окончена");
        }
    },
    Init() {
        console.log("Игра кто хочет стать Милионером. 3 вопроса");
        //console.log("для начала игры наберите - game.run()");
    }
};
game.Init();
game.run();