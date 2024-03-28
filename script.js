let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.text = "Changed Text";
tg.MainButton.setText("ChangedText1");
tg.MainButton.textColor = "#F55353";
tg.MainButton.color = "#143F6B";
tg.MainButton.setParams({"color": "#143F6B"});
tg.MainButton.show();


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
let quantity_text = document.getElementById("quantity");

let price = 0;

let quantity = {
    "Box": 0,
    "Octopus": 0,
    "Vase": 0,
    "Benchy": 0
};
let key = "";

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
    if (quantity[key] >0){
        quantity[key] -= 1;
        console.log(quantity[key]);
        console.log(key);
        quantity_text.innerHTML = quantity[key].toString() + "x";
        price_text.innerHTML = (quantity[key]*price).toString() + "zł";
    }
})
plus_button.addEventListener("click", function(){
    quantity[key] += 1;
    console.log(quantity[key]);
    console.log(key);
    quantity_text.innerHTML = quantity[key].toString() + "x";
    price_text.innerHTML = (quantity[key]*price).toString() + "zł";
})
