// this is it

let products = [
  {
    id: 0,
    img: "./imgs/monitor-benq-zowie.png",
    title: 'Monitor BenQ ZOWIE XL2540K, 24.5", 240Hz, i zi',
    mainPrice: 299.5 + "€",
    oldPrice: 359.5 + "€",
    tvsh: "Përfshirë TVSH",
    btns: "Shto ne shport",
  },
  {
    id: 1,
    img: "./imgs/fenix-series-23.png",
    title:
      "Kompjuter Gjirafa50 FenixSeries 23, Intel Core i5-14400F, 16GB RAM, 500GB SSD, ASUS Dual RTX 4060 OC 8GB, i zi",
    mainPrice: 889.5 + "€",
    oldPrice: "1,172.15" + "€",
    tvsh: "Përfshirë TVSH",
    btns: "Shto ne shport",
  },
  {
    id: 2,
    img: "./imgs/samsung-galaxy-s24-ultra.png",
    title:
      "Celular Samsung Galaxy S24 Ultra, 6.8'', 12GB/ 512GB, Titanium Black",
    mainPrice: "1,599.50" + "€",
    oldPrice: "1,599.50" + "€",
    tvsh: "Përfshirë TVSH",
    btns: "Shto ne shport",
  },
  {
    id: 3,
    img: "./imgs/apple-macbook-pro-14inq.png",
    title:
      "Celular Samsung Galaxy S24 Ultra, 6.8'', 12GB/ 512GB, Titanium Black",
    mainPrice: "2,299.50" + "€",
    oldPrice: "2,499.50" + "€",
    tvsh: "Përfshirë TVSH",
    btns: "Shto ne shport",
  },
  {
    id: 4,
    img: "./imgs/qant-shpine-lenovo.png",
    title: "Çantë shpine Lenovo B210 për laptop, 15.6''",
    mainPrice: "14.50" + "€",
    oldPrice: "19.50" + "€",
    tvsh: "Përfshirë TVSH",
    btns: "Shto ne shport",
  },
  {
    id: 5,
    img: "./imgs/fenix-series-61.png",
    title:
      "Kompjuter Gjirafa50 Fenix Series 61, Intel Core i7-14700F, 32GB RAM DDR5, 1TB SSD M.2, MSI RTX 4070 SUPER VENTUS 2X OC 12GB , i zi",
    mainPrice: "1,669.50" + "€",
    oldPrice: "2,062.22" + "€",
    tvsh: "Përfshirë TVSH",
    btns: "Shto ne shport",
  },
  {
    id: 6,
    img: "./imgs/processor-intel-i5.png",
    title: "Procesor Intel Core i5-14600KF",
    mainPrice: "399.50" + "€",
    oldPrice: "416.50" + "€",
    tvsh: "Përfshirë TVSH",
    btns: "Shto ne shport",
  },
  {
    id: 7,
    img: "./imgs/degjuse-dudao-u10b.png",
    title: "Dëgjuese Dudao U10B, të bardha",
    mainPrice: "11.40" + "€",
    oldPrice: "17.00" + "€",
    tvsh: "Përfshirë TVSH",
    btns: "Shto ne shport",
  },
  {
    id: 8,
    img: "./imgs/usb-kingston.png",
    title: "USB Kingston Data Traveler Exodia, 128GB, e zezë",
    mainPrice: "8.50" + "€",
    oldPrice: "13.50" + "€",
    tvsh: "Përfshirë TVSH",
    btns: "Shto ne shport",
  },
  {
    id: 9,
    img: "./imgs/altropalant-gembird.png",
    title: "Altoparlant Gembird SPK-BT-11 2.1, i zi",
    mainPrice: "17.50" + "€",
    oldPrice: "" + "€",
    tvsh: "Përfshirë TVSH",
    btns: "Shto ne shport",
  },
];

let productsHTML = ""; // an empty string for products to put in HTML
let productsInRow = 5; // Number of products for each row

products.forEach((product, index) => {
  let productHTML = `
    <div class='col'>
    <div class='product-img-box'>
      <img class='product-img' src='${product.img}'>
    </div>
      <h1 class="main-title">${product.title}</h1>
      <h2 class="main-price">${product.mainPrice}</h2>
      <h2 class="old-price">${product.oldPrice}</h2>
      <span class='tvsh'>${product.tvsh}</span>
      <div class='btns'>
      <div class='cart-btn'>
      <h2 class='btn-text'>
      ${product.btns}
      </h2>
      </div>
      <div class='wishlist-btn'>
      <i class='fa-regular fa-heart'></i>
      </div>
      </div>
    </div>
  `;

  productsHTML += productHTML;

  if ((index + 1) % productsInRow === 0 || index === products.length - 1) {
    productsHTML = "<div class='row'>" + productsHTML + "</div>";

    document.write(productsHTML);

    productsHTML = "";
  }
});
