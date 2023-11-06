// Start Main Slider Important
import { mainSlider } from "./slider/slider.js";
mainSlider();
// End Main Slider Important

// Start Render Data
import {
  filterData,
  filterWithPaginate,
  openMenu,
  renderData,
  webSiteDomain,
} from "./renderData.js";
// End Render Data

/* ----------------------- Start Open Menu Whit Click ----------------------- */
openMenu();
/* ------------------------ End Open Menu Whit Click ------------------------ */

//* Home Page
/* -------------------------- Start Deals-and-tabs -------------------------- */
// [1] Switch active class and show some Data
const main__card = document.querySelector(".main__card");
const dealsActive = document.querySelectorAll(".main_classic-link");
let getFilterData = await filterData("products", "featured", true);
let main__onSale = await filterWithPaginate("products", "onSale", true, 1, 6);

displaySomeProduct(getFilterData);
getQuickView();
dealsActive.forEach((link) => {
  dealsActive[0].classList.add("active");
  link.addEventListener("click", (e) => {
    let result;
    if (e.target.textContent === "Featured") {
      result = getFilterData;
    } else if (e.target.textContent === "On Sale") {
      result = main__onSale;
    }
    dealsActive.forEach((btn) => btn.classList.remove("active"));
    link.classList.add("active");
    displaySomeProduct(result);
    getQuickView();
  });
});
// [2] Get Data To Json Server

// [3] Show Data
function displaySomeProduct(data) {
  let temp = "";
  data.forEach((data) => {
    temp += `
        <div class="col-lg-4 col-md-6 col-sm-12 dataParent" data-id="${
          data.id
        }">
            <div class="card__content">
              <div class="card__content-top">
                <span class="card__content-top-category">${
                  data.categoryTitle
                }</span>
                <div class="openQuick">
                <h6 class="card__content-top-title">${data.description}</h6>
              </div>
              </div>
              <div class="card__content-img">
                <img src="${data.thumbnail}" alt="" />
              </div>
              <div
                class="card__content-body d-flex align-items-center justify-content-between "
              >
          ${
            data.onSale
              ? `
              <div class="card__content-prices">
                    <span class="card__content-price-old">$${data.oldPrice}</span>
                    <span class="card__content-price-new">$${data.newPrice}</span>
                    </div>  `
              : ` <span class="card__content-price-new">$${data.oldPrice}</span>`
          }
                
                <div class="card__content-add">
                  <span class="card__content-add-icon">
                    <i class="fa-solid fa-cart-arrow-down"></i>
                  </span>
                </div>
              </div>
              <div class="card__content-footer">
                <div class="card__content-compare">
                  <a href="compare.html" class="card__content-icon">
                    <i class="fa-solid fa-rotate"></i>
                    <h3 class="card__content-title">Compare</h3>
                  </a>
                </div>
                <div class="card__content-wishlist">
                  <a href="wishlist.html" class="card__content-icon">
                    <i class="fa-regular fa-heart"></i>
                    <h3 class="card__content-title">Add to Wishlist</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>  
    `;
  });
  main__card.innerHTML = temp;
}
// *Open Quick
function getQuickView() {
  const openQuick = document.querySelectorAll(".openQuick");
  openQuick.forEach((quick) => {
    quick.addEventListener("click", (e) => {
      let saveIdToLocal = e.target.closest(".dataParent").dataset.id;
      saveToLocal(saveIdToLocal);
    });
  });
}

function saveToLocal(saveIdToLocal) {
  localStorage.setItem("idProduct", saveIdToLocal);
  // Open Quick Page
  setTimeout(() => {
    location.assign("quick.html");
  }, 1000);
}
/* --------------------------- Start Spacial Overs -------------------------- */
const deals__card = document.querySelector(".deals__card-parent");
let getSpacialProduct = await filterData("products", "status", "special-offer");

displaySpacial(getSpacialProduct);

function displaySpacial(dataSpecial) {
  let result = "";
  dataSpecial.forEach((speData) => {
    result += `
        <div class="deals__card" data-id="${speData.id}">
          <div class="deals__card-top">
            <p class="deals__card-top-title">
              Special <br />
              Offer
            </p>
            <div class="deals__card-top-save">
              <span>save</span> <span>$120</span>
            </div>
          </div>
          <div class="deals__card-img">
            <img src="${speData.thumbnail}" alt="" />
          </div>
          <div class="deals__card-body">
            <span class="deals__card-body-link">
              ${speData.title}
            </span>
            <div class="deals__card-body-price">
              <span class="body__price-old">$${speData.oldPrice}</span>
              <span class="body__price-new">$${speData.newPrice}</span>
            </div>
            <div
              class="deals__card-body-available d-flex align-items-center justify-content-between"
            >
              <span>Available: <strong>${speData.stock}</strong></span>
              <span>Already Sold: <strong>28</strong></span>
            </div>
          </div>
          <div class="deals__card-countdown">
            <h6 class="countdown__title">Hurry Up! Offer ends in:</h6>
            <div class="countdown__parent">
              <div class="countdown__parent-item">
                <span class="countdown__parent-main countdown__parent-day"></span>
                <div class="countdown__parent-title">day</div>
              </div>
              <div class="countdown__parent-dotted">:</div>
              <div class="countdown__parent-item">
                <span class="countdown__parent-main countdown__parent-hour"></span>
                <div class="countdown__parent-title">hours</div>
              </div>
              <div class="countdown__parent-dotted">:</div>
              <div class="countdown__parent-item">
                <span class="countdown__parent-main countdown__parent-min">00</span>
                <div class="countdown__parent-title">Mins</div>
              </div>
              <div class="countdown__parent-dotted">:</div>
              <div class="countdown__parent-item">
                <span class="countdown__parent-main countdown__parent-sec">00</span>
                <div class="countdown__parent-title">Secs</div>
              </div>
            </div>
          </div>
        </div>
    `;
  });
  deals__card.innerHTML = result;
}

function ooopen() {
  let ope = document.querySelector(".deals__card-body-link");
  ope.addEventListener("click", (e) => {
    let saveIdToLocal = e.target.closest(".deals__card ").dataset.id;
    saveToLocal(saveIdToLocal);
  });
}
ooopen();

// *! ContDown Start
const counterContainer = new Date("Dec 31, 2023 23:59:59").getTime();
function countdown() {
  setInterval(() => {
    const dataNow = new Date().getTime();
    const dateDiff = counterContainer - dataNow;
    const day = Math.trunc(dateDiff / (1000 * 60 * 60 * 24));
    const hour = Math.trunc(
      (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const min = Math.trunc((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    const sec = Math.trunc((dateDiff % (1000 * 60)) / 1000);
    //
    let countdown__day = document.querySelector(".countdown__parent-day");
    let countdown__hours = document.querySelector(".countdown__parent-hour");
    let countdown__min = document.querySelector(".countdown__parent-min");
    let countdown__sec = document.querySelector(".countdown__parent-sec");

    countdown__day.textContent = day < 10 ? `0${day}` : day;
    countdown__hours.textContent = hour < 10 ? `0${hour}` : hour;
    countdown__min.textContent = min < 10 ? `0${min}` : min;
    countdown__sec.textContent = sec < 10 ? `0${sec}` : sec;
  }, 1000);
}
countdown();
// *! ContDown End
/* ---------------------------- End Spacial Overs --------------------------- */

/* -------------------------- End Deals-and-tabs -------------------------- */
