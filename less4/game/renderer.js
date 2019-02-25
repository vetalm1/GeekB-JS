'use strict'
let renderer = {
    map: "",
    render() {
        for(let row = 0; row<config.rowsCount; row++) {
            for(let col = 0; col<config.colsCount; col++) {
                //проверка на человечка
                if(player.y === row && player.x === col){
                    this.map+="o";
                } else {
                    this.map +="x";
                }

            }
            this.map+="\n"; // слэш н это переход на новую строчку
        }
        console.log(this.map);
    },
    clear() {
        console.log("clear");
        this.map="";
    }
};

