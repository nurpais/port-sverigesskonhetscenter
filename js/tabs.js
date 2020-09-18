let tabHeader = document.querySelectorAll(".tab-header");

let tabBody = document.querySelectorAll(".tab-body");

tabHeader.forEach(function (el) {
  if (el.classList.contains("active")) {
    el.click();
  }
  el.addEventListener("click", function (el) {
    tabHeader.forEach(function (el) {
      el.classList.remove("active");
    });
    this.classList.add("active");
  });
});

function openTab(event, id) {
  tabBody.forEach(function (el) {
    el.style.display = "none";
  });
  tabBody[id - 1].style.display = "block";
}
