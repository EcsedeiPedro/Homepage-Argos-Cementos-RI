const dropDownItem = document.querySelectorAll(".dropdown-menu");

dropDownItem.forEach((dropDownItem) => {
  dropDownItem.addEventListener("click", function () {
    if (window.innerWidth < 1200) {
      dropDownItem.classList.toggle("active");
    }
  });
});

function openSearchPopUp() {
  const searchButton = document.querySelector(".search-desktop");
  const searchPopUp = document.querySelector(".search-pop-up");
  const closePopUp = document.querySelector(".search-close");

  searchButton.addEventListener("click", function () {
    searchPopUp.classList.add("active");
  });

  closePopUp.addEventListener("click", function () {
    searchPopUp.classList.remove("active");
  });
}

function menuMobile() {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", function () {
    window.scrollTo(0, 0);
    menu.classList.toggle("active");
    document.body.classList.toggle("overflow-y-hidden");
  });
}

AOS.init();

openSearchPopUp();

menuMobile();
