"use strict";

let tableBody = document.querySelector("tbody");

{/* console.log(tableBody); */ }

let products = JSON.parse(localStorage.getItem("basket"));

let iconsum = document.querySelector("sup");

let price = document.querySelector(".price");

let clearBtn = document.querySelector(".btn-danger");


if (products != null) {
    for (const product of products) {

        tableBody.innerHTML += `<tr>
        <td>
        <img src="${product.img}" alt="">
        </td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>${product.count}</td>
        <td><button data-id = ${parseInt(product.id)} class="btn btn-primary delete">Delete</button></td>
        </tr>`
    }

    getBasketCount(products);

} else {
    document.querySelector("table").classList.add("d-none");
    document.querySelector(".totalprice").classList.add("d-none");
    document.querySelector(".alert-warning").classList.remove("d-none");
}


function getBasketCount(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item.count;
    }
    document.querySelector("sup").innerText = sum;
}


let sumprice = 0;

for (const product of products) {
    sumprice += product.price;
    price.innerText = sumprice;
}

clearBtn.addEventListener("click", function () {

    localStorage.removeItem("basket");


})



function deleteProduct(){
    let deleteBtns = document.querySelectorAll(".delete");

    for (const deleteBtn of deleteBtns) {
        deleteBtn.addEventListener("click", function () {


            let products =JSON.parse(localStorage.getItem("basket"));

            for (const product of products) {
               if (product.id == this.getAttribute("data-id")) {

                let prod = products.indexOf(product);
                  
               products.splice(prod,1);

               }
            }
              localStorage.setItem("basket",JSON.stringify(products));

            location.reload();

            if (products == "") {
                localStorage.removeItem("basket");
            }
         })
         
    }
}

deleteProduct();