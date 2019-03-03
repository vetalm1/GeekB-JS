
let goodsArr =["Товар1", "Товар2", "Товар3", "Товар4"];
let priceArr =[100,200,300,400]
let basketOn =[];
let basketOnPrice=[];
let basket = {
    goodsList() {
        //let result = this.generateList();
        document.body.insertAdjacentHTML("afterbegin", this.generateList()); 
        
    },
    generateList() {
        let gList = "";
        for (let i = 0; i < goodsArr.length; i++) {
            gList += '<div class="gList">'+'<p>'+goodsArr[i]+'</p><p>цена - '+priceArr[i]+'р.</p> <p><a href="#" onclick="basket.addBasket(this.className)" class="'+goodsArr[i]+'">Добавить в корзину</a></p> </div>';
        }
        gList += '<br><br><a href="#" onclick="basket.basketDisplay()">Корзина</a>'
        return gList;
    },
    addBasket(param) {
        alert(param);
        basketOn.push(param);
        console.log(basketOn);
        basketOnPrice.push(priceArr[param.toString().slice(-1)-1]);
        console.log(basketOnPrice);
        this.basketSumm();
    },
    basketSumm() {
        let basketList = "";
        let summ=0;
        for (let i = 0; i < basketOn.length; i++) {
            summ += basketOnPrice[i];
            basketList += '<div class="gList">'+'<p>'+basketOn[i]+'</p><p>цена - '+basketOnPrice[i]+'р.</p></div>';
        }
        basketList += "Итого сумма = "+summ;
        return basketList;
    },
    basketDisplay() {
        
        document.body.insertAdjacentHTML("beforeEnd", this.basketSumm());
    }
};
basket.goodsList();