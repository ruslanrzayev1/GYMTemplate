let cartCnt = document.querySelector(".cartCnt");

const displayCart = () => {
  cartCnt.innerHTML = "";
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.map((item, index) => {
    let prodCnts = document.createElement("div");
    prodCnts.className = "prodCnts";
    prodCnts.innerHTML = `
    <div><img src="${item.image}" alt="">
    <p>${item.name}</p>
    </div>
    <button onclick = "removeFromCart(${index})"><i class="fa-solid fa-xmark"></i></button>
    `;
    cartCnt.append(prodCnts);
  });
};

const removeFromCart = (index) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
};

window.onload = () => {
  displayCart();
};
