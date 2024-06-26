let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.text = "Pay";
tg.MainButton.setText("Pay");
tg.MainButton.textColor = "#000000";
tg.MainButton.color = "#FF8800";
tg.MainButton.setParams({"color": "#FF8800"});
tg.MainButton.show();
tg.MainButton.disable()

//products
let product_box = document.getElementById("Box");
let product_octopus = document.getElementById("Octopus");
let product_vase = document.getElementById("Vase");
let product_benchy = document.getElementById("Benchy");

//quantity buttons
let minus_button = document.getElementById("minus");
let plus_button = document.getElementById("plus");

//text information 
let name_text = document.getElementById("name");
let price_text = document.getElementById("price");
let total_text = document.getElementById("total_price")
let quantity_text = document.getElementById("quantity");

let price = 0;


var quantity = {
    "Box": 0,
    "Octopus": 0,
    "Vase": 0,
    "Benchy": 0
};
let key = "";

function count_total(){
    let prices = {"Box": 10,
                "Octopus": 13,
                "Vase": 23,
                "Benchy": 8};
    let total= 0;
    for (let q in prices){
        total += prices[q]*quantity[q];
    };
    return total;
};

product_benchy.addEventListener("click", function(){
    name_text.innerText = "Benchy";
    key = "Benchy";
    price = 8;
    quantity_text.innerHTML = quantity[key].toString() + "x";
    price_text.innerHTML = (quantity[key]*price).toString() + "zł";
      
});

product_box.addEventListener("click", function(){
    name_text.innerText = "Box";
    key = "Box"
    price = 10;
    quantity_text.innerHTML = quantity[key].toString() + "x";
    price_text.innerHTML = (quantity[key]*price).toString() + "zł";
      
});

product_octopus.addEventListener("click", function(){
    name_text.innerText = "Octopus";
    key = "Octopus"
    price = 13;
    quantity_text.innerHTML = quantity[key].toString() + "x";
    price_text.innerHTML = (quantity[key]*price).toString() + "zł";
     
});

product_vase.addEventListener("click", function(){
    name_text.innerText = "Vase";
    key = "Vase"
    price = 23;
    quantity_text.innerHTML = quantity[key].toString() + "x";
    price_text.innerHTML = (quantity[key]*price).toString() + "zł";
     
});

minus_button.addEventListener("click", function(){
    if (quantity[key] >0 && price > 0){
        quantity[key] -= 1;
        console.log(quantity[key]);
        console.log(key);
        quantity_text.innerHTML = quantity[key].toString() + "x";
        price_text.innerHTML = (quantity[key]*price).toString() + "zł";
        total_text.innerHTML = (count_total()).toString()+"zł";
    }
});
plus_button.addEventListener("click", function(){
    if (price > 0){   
        tg.MainButton.enable();
        quantity[key] += 1;
        console.log(quantity[key]);
        console.log(key);
        quantity_text.innerHTML = quantity[key].toString() + "x";
        price_text.innerHTML = (quantity[key]*price).toString() + "zł";
        total_text.innerHTML = (count_total()).toString()+"zł";
    }
});
tg.onEvent("mainButtonClicked", function(){
    let string = "";
    for (let x in quantity){
        string += `${x}: ${quantity[x]},`;
    };
    tg.sendData(string);
});
