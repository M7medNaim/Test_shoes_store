//show list sla

let sla = document.getElementById("Cart");
let Product = document.querySelector(".Product-List");
let slaNumb = document.querySelector(".slanumb");

sla.onclick = (_) => {
  Product.classList.toggle("show");
};

//list big img src

let bigImg = document.querySelector(".bigImg");
let imgAll = document.querySelectorAll("div .img");

imgAll.forEach((element) => {
  element.onclick = (_) => {
    imgAll.forEach((element) => {
      element.classList.remove("active");
    });
    element.classList.add("active");

    bigImg.src = element.src;
  };
});

// plus and maunos Prodect

let price = document.getElementById("amount");
let mom = 0;
let plus = document.getElementById("Add");
let zplus = document.getElementById("Quantity");
plus.onclick = (_) => {
  zplus.innerText = ++mom;
  price.innerText = mom * 120;
};

let muns = document.getElementById("Less");
muns.onclick = (_) => {
  if (mom == 0) {
    zplus.innerText = 0;
  } else {
    zplus.innerText = --mom;
    price.innerText = mom * 120;
  }
};

//navbar active

let nav = document.querySelectorAll(".list-item");
nav.forEach((element) => {
  element.onclick = (_) => {
    nav.forEach((element) => {
      element.classList.remove("lineUn");
    });
    element.classList.add("lineUn");
  };
});

//Add cart in sla

let btnCArt = document.querySelector(".btn-Cart");
let orderSam = document.querySelector(".order-Summary");
let impt = document.querySelector("#Placeholder");
let titPro = document.querySelector("#titlePr");

Product.innerHTML = localStorage.getItem("priceProduct");


btnCArt.onclick = (_) => {
  slaNumb.style.display = "flex";
  // Product.classList.add("show");
  impt.innerText = "";
  if (price.innerHTML === "0") {
    Product.innerHTML = `<div  class="heading"><h4 >Cart</h4></div>
        <hr>
        <p id="Placeholder">Your Cart is Empty</p>`;
    slaNumb.innerHTML = 0;
  } else {
    slaNumb.innerHTML = "1";
    Product.innerHTML = `<li id="li1">Your Prodects</li>${titPro.innerText}<br><li id="li2">The Price Is<div style="color:green ;">($${price.innerText})</div><br> The Number Of Prodect Is<div style="color:green ;">(${mom})</div></li><button id="delete">Delete</button>
    
    `;
  }
  localStorage.setItem("priceProduct", Product.innerHTML);

  let dlt = document.querySelector("#delete");
    dlt.onclick = (_) => {
    Product.innerHTML = `<div  class="heading"><h4 >Cart</h4></div>
        <hr>
        <p id="Placeholder">Your Cart is Empty</p>`;
    zplus.innerText = 0;
    price.innerText = 0;
    slaNumb.innerHTML = 0;
  };

  //way 1
  // let data = document.createTextNode(`The Price Is$ (${price.innerText}) & The Number OF Prodect Is(${mom})`);
  // orderSam.append Child(data);
  // Product.appendChild(orderSam);
};
