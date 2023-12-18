let prodsCnt = document.querySelector(".prodsCnt");
let loadMore = document.querySelector(".loadMore");
let searchBtn = document.querySelector(".searchBtn");
let inpSearch = document.querySelector(".inpSearch");
let productSearch = document.querySelector(".productSearch");
let db;
let limit = 3;
let page = 1;

const renderProd = () => {
  let skip = (1 - page) * limit;
  axios
    .get(
      `https://655c83c825b76d9884fd6f17.mockapi.io/products?limit=${limit}&page=${page}&skip=${skip}`
    )
    .then((res) => {
      db = res.data;
      db.map((item) => {
        let homeProds = document.createElement("div");
        homeProds.className = "homeProds";
        homeProds.innerHTML = `
            <img src="${item.image}" alt="" />
            <h2>${item.name}</h2>
            <span>${item.price}</span>
            <button onclick="addToCart(${item.id})">ADD</button>
            `;
            prodsCnt.append(homeProds);
      });
    });
};

loadMore.addEventListener("click", renderProd);

const findByName = () => {
  axios
    .get(`https://655c83c825b76d9884fd6f17.mockapi.io/products`)
    .then((res) => {
      db = res.data;
      let filteredData = db.filter((item) =>
        item.name.toLowerCase().startsWith(inpSearch.value.toLowerCase())
      );
      filteredData.map((item) => {
        let homeProds = document.createElement("div");
        homeProds.className = "homeProds";
        homeProds.innerHTML = `
            <img src="${item.image}" alt="" />
            <h2>${item.name}</h2>
            <span>${item.price}</span>
            <button onclick="addToCart(${item.id})">ADD</button>
            `;
            productSearch.appendChild(homeProds);
      });
    });
};

searchBtn.addEventListener("click", findByName);

const addToCart = (prodId) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(db.find((item) => item.id == prodId));
  localStorage.setItem("cart", JSON.stringify(cart));
};

window.onload = () => {
  renderProd();
};
