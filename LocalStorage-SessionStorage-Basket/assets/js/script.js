"use strict";

// localStorage.setItem("name", "Cavid");

// localStorage.setItem("surname", "Ismayilzade");

// console.log(localStorage.getItem("name"));

// document.querySelector("button").onclick = function () {

//     localStorage.removeItem("name");
// }

// document.querySelector("button").onclick = function () {

//     console.log(localStorage.getItem("names"));
// }


// let names = ["Pervin","Elekber","Aqshin"];

// localStorage.setItem("names",JSON.stringify(names));

// document.querySelector("button").onclick = function () {

// console.log(localStorage.getItem("names"));
//console.log(JSON.parse(localStorage.getItem("names")));

//    let datas = JSON.parse(localStorage.getItem("names"));

//    for (let i = 0; i < datas.length; i++) {

//     console.log(datas[i]);

//    }
//}

// sessionStorage.setItem("email","testEmail@gmail.com");

// console.log(sessionStorage.getItem("email"));


let cardBtns = document.querySelectorAll("#shop a");

let products = [];

if (localStorage.getItem("basket") != null) {
    products = JSON.parse(localStorage.getItem("basket"));
}
cardBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        // console.log(this);
        let productImage = this.parentNode.previousElementSibling.getAttribute("src");
        let productName = this.parentNode.firstElementChild.innerText;
        let productDesc = document.querySelector(".card-text").innerText;
        let productPrice = parseInt(this.previousElementSibling.previousElementSibling.innerText);
        let productId = parseInt(this.parentNode.parentNode.getAttribute("data-id"));

        let existProduct = products.find(m => m.id == productId);

        if (existProduct != undefined) {
            existProduct.count += 1;
            existProduct.price+=productPrice;
        } else {
            products.push({
                id: productId,
                name: productName,
                img: productImage,
                description: productDesc,
                price: productPrice,
                count: 1,
               
            })
        }

        localStorage.setItem("basket", JSON.stringify(products));

        getBasketCount(products);

        //console.log(products);
        //    console.log(productImage);
        //    console.log(productName);
        //    console.log(productDesc);
    })
})

function getBasketCount(arr) {
    let sum = 0;
    for (const item of arr) {
        sum+= item.count;
    }
    document.querySelector("sup").innerText = sum;
};

getBasketCount(products);
