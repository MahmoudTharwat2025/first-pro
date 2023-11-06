import { openMenu, renderData, singleProduct } from "./renderData.js";
// Start Open Menu Whit Click
openMenu();
// End Open Menu Whit Click

const getSingleData = await singleProduct(
  "products",
  localStorage.getItem("idProduct")
);

displaySomeProduct(getSingleData);

function displaySomeProduct(data) {
  let listColor = "";
  data.color.forEach((color) => {
    listColor += `<li class="quick_popup_colors-item" style="background:${color}"></li>`;
  });

  let imgList = "";
  data.images.forEach((img) => {
    imgList += `
    <li class="quick_popup-item"> <img src="${img}"alt=""/></li>`;
  });

  document.querySelector(".rowSingleProduct").innerHTML = `
            <div class="col-xl-7 col-lg-6">
            <div class="quick_popup-left">
              <div class="popup_image">
                <img
                  class="popup_image-image"
                  src="${data.thumbnail}"
                  alt=""
                />
              </div>
            </div>
            <div class="quick_popup-bottom">
            <ul class="quick_popup-list">
            ${imgList}
            </ul>
            </div>

          </div>
          <div class="col-xl-5 col-lg-6">
            <div class="quick_popup-right">
              <div class="quick_popup_right-content">
                <span class="quick_popup-content-category">${
                  data.categoryTitle
                }</span>
                <h3 class="quick_popup-content-title">
                  ${data.title}
                </h3>
                <p class="quick_popup-content-description">
                  ${data.description.split(" ").slice(0, 20).join(" ")}
                </p>
              </div>
              ${
                data.onSale
                  ? `<div class="quick_popup_right-price">
                <span class="quick_popup_price-old">${data.oldPrice}</span>
                <span class="quick_popup_price-new">${data.newPrice}</span>
              </div> `
                  : `<span class="quick_popup_price-new">${data.oldPrice}</span>`
              }
              <div class="quick_popup_right-colors">
                <h3 class="quick_popup_right-main">Colors</h3>
                <ul class="quick_popup_colors-list">
                ${listColor}
                </div>
              </div>
              <div class="quick_popup_right-addAndQuantity">
                <h3 class="quick_popup_right-main">Quantity</h3>
                <div class="quick_popup_right-form">
                  <div class="quick_popup_right-qua">
                    <button class="dec">-</button>
                    <span class="quick_popup_right-counter">1</span>
                    <button class="inc">+</button>
                  </div>
                  <button class="quick_popup_right-addToCart">
                    Add To Cart
                  </button>
                </div>
                <button class="buy_now">Buy Now</button>
              </div>
              <div class="quick_popup-right-info py-3">
                <ul class="quick_popup-right-list">
                  <span class="quick_popup-right-title"
                    >SKU:
                    <li class="quick_popup-right-item">${data.SKU}</li></span
                  >
                  <span class="quick_popup-right-title"
                    >Category:
                    <li class="quick_popup-right-item">${
                      data.categoryTitle
                    }</li></span
                  >
                  <span class="quick_popup-right-title"
                    >Tag: ${data.tag}
                    <li class="quick_popup-right-item"></li></span
                  >
                </ul>
              </div>
              <div
                class="quick_popup-right-sharing py-3 align-items-center d-flex"
              >
                <span class="quick_popup-right-sharing-title">Share:</span>
                <ul class="quick_popup-right-sharing-list">
                  <li class="quick_popup-right-sharing-item">
                    <a href="#" class="quick_popup-right-sharing-link">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="quick_popup-right-sharing-item">
                    <a href="#" class="quick_popup-right-sharing-link">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li class="quick_popup-right-sharing-item">
                    <a href="#" class="quick_popup-right-sharing-link">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="quick_popup-right-police">
                <div class="quick_popup-right-police-header">
                  <div class="quick_popup-right-police-item">
                    <span><i class="fa-solid fa-check"></i></span>
                    <div class="quick_popup-right-police-item-description">
                      30 days easy returns
                    </div>
                  </div>
                  <div class="quick_popup-right-police-item">
                    <span><i class="fa-solid fa-check"></i></span>
                    <div class="quick_popup-right-police-item-description">
                      Order yours before 2.30pm for same day dispatch
                    </div>
                  </div>
                </div>
                <div class="quick_popup-right-police-buy">
                  <p>
                    Guaranteed safe <br />
                    &amp; secure checkout
                  </p>
                  <div class="quick_popup-right-police-buy-img">
                    <img src="assets/images/payment-option.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
  `;
}
switchImg();
function switchImg() {
  let mainImg = document.querySelector(".popup_image-image");
  let listImg = document.querySelectorAll(".quick_popup-item img");
  listImg.forEach((singleImg) => {
    singleImg.addEventListener("click", () => {
      console.log((mainImg.src = singleImg.src));
    });
  });
}
