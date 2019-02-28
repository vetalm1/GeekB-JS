'use strict'
let renderer = {

    /* игровое поле */
    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML("afterbegin", result);
        //this.renderUserPosition({x:1, y:0});
        this.renderBlackSqr();
        this.renderDigitsAndLetters();
        
    },
    /*игровое поле (клетки)*/
    generateBoard() {
        let board = "";
        for (let y = 0; y < 10; y++) {
            board += "<tr>";
            for (let x = 0; x < 10; x++) {
            	 board += `<td data-x="${x}" data-y="${y}"></td>`;
            }
            board += "</tr>";
        }
        return `<table><tbody>${board}</tbody></table>`;
    },
        /*Метод генерирует игровое поле (клетки ч/б)*/
    renderBlackSqr() {
    	for (let y = 1; y < 9; y+=2) {
            for (let x = 1; x < 9; x+=2) {
            	document.querySelector(`[data-x="${x+1}"][data-y="${y}"]`).classList.add("user");
               	document.querySelector(`[data-x="${x}"][data-y="${y+1}"]`).classList.add("user");
            }
        }
    },
    renderDigitsAndLetters() {
    		let fig=['L','H','O','F','K','O','H','L'];
    		let dig=['a','b','c','d','e','f','g','h'];
            for (let x = 1; x < 9; x++) {
            	document.querySelector(`[data-x="${0}"][data-y="${x}"]`).innerHTML = x;
               	document.querySelector(`[data-x="${9}"][data-y="${x}"]`).innerHTML = x;
               	document.querySelector(`[data-x="${x}"][data-y="${1}"]`).innerHTML = ('<img src="img/b'+fig[x-1]+'.jpg" alt="'+fig[x-1]+'" >');
               	document.querySelector(`[data-x="${x}"][data-y="${2}"]`).innerHTML = ('<img src="bP.jpg" alt="P">');
               	document.querySelector(`[data-x="${x}"][data-y="${8}"]`).innerHTML = ('<img src="img/w'+fig[x-1]+'.jpg" alt="'+fig[x-1]+'" >');
               	document.querySelector(`[data-x="${x}"][data-y="${7}"]`).innerHTML = ('<img src="wP.jpg" alt="P">');
               	document.querySelector(`[data-x="${x}"][data-y="${0}"]`).innerHTML = dig[x-1];
               	document.querySelector(`[data-x="${x}"][data-y="${9}"]`).innerHTML = dig[x-1];
            }
     },
             
};

renderer.renderBoard();
