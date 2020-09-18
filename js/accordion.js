(function () {
  let accordions = document.querySelectorAll(".accordion");

  accordions.forEach(function (el) {
    let headings = el.querySelectorAll(".accordion__heading");

    headings.forEach(function (el) {
      el.addEventListener("click", function (e) {
        let accordionBody = e.target.parentNode.querySelector(".accordion__body");

        if (Boolean(accordionBody.style.maxHeight)) {
          e.target.parentNode.classList.remove("is-open");
          accordionBody.style.paddingBottom = "0";
          accordionBody.style.maxHeight = null;
        } else {
          headings.forEach(function (el) {
            el.parentNode.classList.remove("is-open");
            el.parentNode.querySelector(".accordion__body").style.paddingBottom = "0";
            el.parentNode.querySelector(".accordion__body").style.maxHeight = null;
          });
          e.target.parentNode.classList.add("is-open");
          accordionBody.style.paddingBottom = "16px";
          accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        }
      });
    });
  });
})();
