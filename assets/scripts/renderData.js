export let webSiteDomain = " http://localhost:3000";
export async function renderData(endPoint) {
  return await fetch(`${webSiteDomain}/${endPoint}`).then((res) => res.json());
}

// Ge Filter Data

export async function filterData(endPoint, key, value) {
  return await fetch(`${webSiteDomain}/${endPoint}?${key}=${value}`).then(
    (filData) => filData.json()
  );
}

// Filter With Paginate

export async function filterWithPaginate(endPoint, key, value, page, limit) {
  return await fetch(
    `${webSiteDomain}/${endPoint}?${key}=${value}&?_page=${page}&_limit=${limit}`
  ).then((filData) => filData.json());
}

// Single Product
export async function singleProduct(endPoint, id) {
  return await fetch(`${webSiteDomain}/${endPoint}/${id}`).then((filData) =>
    filData.json()
  );
}

/* ------------------------------------ Start Open NavBar ----------------------------------- */

const burger_menu = document.querySelector(".burger_menu");
const header__menu = document.querySelector(".header__menu");
const close_aside = document.querySelector(".close_aside");
const overlay = document.querySelector(".overlay");

export function openMenu() {
  burger_menu.addEventListener("click", () => {
    burger_menu.classList.add("active");
    header__menu.style.left = "0";
    overlay.classList.remove("d-none");
  });
  close_aside.addEventListener("click", closeBtn);
  overlay.addEventListener("click", closeBtn);
}
function closeBtn() {
  header__menu.style.left = "-100%";
  burger_menu.classList.remove("active");
  overlay.classList.add("d-none");
}
/* ------------------------------------ End Open NavBar ----------------------------------- */
