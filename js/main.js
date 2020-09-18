// Navbar & Drawer
(function () {
  let navBurgers = document.querySelectorAll(".navbar-burger");
  let drawer = document.querySelector("#drawer");
  let drawerContent = document.querySelector("#drawer-content");
  let drawerClose = document.querySelector("#drawer-close");

  let body = document.querySelector("body");

  navBurgers.forEach(function (el) {
    el.addEventListener("click", function (event) {
      showDrawer();
    });
  });

  drawer.addEventListener("click", function (event) {
    if (event.target == this) {
      hideDrawer();
    }
  });

  drawerClose.addEventListener("click", function (event) {
    hideDrawer();
  });

  function showDrawer() {
    drawer.style.display = "block";
    setTimeout(function () {
      drawer.style.backgroundColor = "rgba(0,0,0, .3)";
      drawerContent.style.transform = "translateX(0)";
    }, 5);
  }

  function hideDrawer() {
    drawer.style.backgroundColor = "transparent";
    drawerContent.style.transform = "translateX(-100%)";
    setTimeout(function () {
      drawer.style.display = "none";
    }, 200);
  }

  // Detect scroll
  window.addEventListener("scroll", function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > 30) {
      body.classList.add("navbar-scroll");
    } else {
      body.classList.remove("navbar-scroll");
    }

    if (st > 70) {
      body.classList.add("navbar-active");
    } else {
      body.classList.remove("navbar-active");
    }
  });
})();

// Service filter
(function () {
  if (document.querySelector("#filter-drop")) {
    let filterDrop = document.querySelector("#filter-drop");
    let filterCategories = document.querySelector("#filter-categories");
    let navLinks = document.querySelectorAll(".filter__nav li a");

    navLinks.forEach(function (el) {
      el.addEventListener("click", function (event) {
        event.preventDefault();
        navLinks.forEach(function (el) {
          el.classList.remove("active");
        });

        this.classList.add("active");
      });
    });

    filterDrop.addEventListener("click", function (event) {
      event.preventDefault();
      if (!filterCategories.style.maxHeight) {
        filterCategories.style.maxHeight = filterCategories.scrollHeight + "px";
        filterDrop.classList.add("active-rotate");
        document.querySelector(".category-clear").style.display = "inherit";
      } else {
        filterCategories.style.maxHeight = null;
        filterDrop.classList.remove("active-rotate");
        document.querySelector(".category-clear").style.display = "none";
      }
    });
  }
})();

// Category filter
(function () {
  let filterLinks = document.querySelectorAll(".filter-link:not(.drop-icon)");
  let filterCards = document.querySelectorAll(".filter-card .filter-card");

  filterLinks.forEach(function (el) {
    el.addEventListener("click", function () {
      sortItems(this.dataset.filterId);
    });
  });

  function sortItems(data) {
    if (data != "all") {
      hideCategories();

      filterCards.forEach(function (el) {
        el.parentElement.style.opacity = 0;
        setTimeout(function () {
          el.parentElement.style.display = "none";
        }, 100);

        setTimeout(() => {
          filterCards.forEach(function (el) {
            if (el.classList.contains("item-" + data)) {
              el.parentElement.style.display = "block";
              setTimeout(function () {
                el.parentElement.style.opacity = 1;
              }, 100);
            }
          });
        }, 100);
      });
    } else {
      hideCategories();
      filterCards.forEach(function (el) {
        el.parentElement.style.display = "block";
        el.parentElement.style.opacity = "0";
        setTimeout(function () {
          el.parentElement.style.opacity = 1;
        }, 200);
      });
    }

    // Category dropdown
    function hideCategories() {
      let filterCategories = document.querySelector("#filter-categories");
      let filterDrop = document.querySelector("#filter-drop");

      filterCategories.style.maxHeight = null;
      filterDrop.classList.remove("active-rotate");
      document.querySelector(".category-clear").style.display = "none";
    }
  }

  if (location.search == "?tag=boost") {
    document.querySelector(`[data-filter-id="boost"]`).click();
  }
  if (location.search == "?tag=treat") {
    document.querySelector(`[data-filter-id="treat"]`).click();
  }
  if (location.search == "?tag=relax") {
    document.querySelector(`[data-filter-id="relax"]`).click();
  }
})();

(function () {
  if (document.querySelector(".book-popup")) {
    let bookCards = document.querySelectorAll(".book-card--popup");
    let bookPopup = document.querySelector(".book-popup");
    let bookPopupContent = document.querySelector(".book-popup__content");
    let bookPopupClose = document.querySelector(".book-popup__close");

    bookCards.forEach(function (el) {
      el.addEventListener("click", function (event) {
        let cardTitle = this.querySelector(".book-card__title").textContent;
        let cardPrice = this.querySelector(".btn > span:last-child").textContent;
        showPopup(cardTitle, cardPrice);
      });
    });

    bookPopup.addEventListener("click", function (event) {
      if (event.target == this) {
        hidePopup();
      }
    });

    bookPopupClose.addEventListener("click", function (event) {
      hidePopup();
    });

    function showPopup(title, price) {
      bookPopup.style.display = "block";
      bookPopup.querySelector("#popup-title").textContent = title;
      bookPopup.querySelector("#price").textContent = price;

      setTimeout(function () {
        bookPopup.style.backgroundColor = "rgba(0,0,0, .3)";
        bookPopupContent.style.transform = "translateX(0)";
      }, 5);
    }

    function hidePopup() {
      bookPopup.style.backgroundColor = "transparent";
      bookPopupContent.style.transform = "translateX(-100%)";
      setTimeout(function () {
        bookPopup.style.display = "none";
      }, 200);
    }
  }
})();

// Local video
(function () {
  if (document.querySelector(".local-video__content")) {
    let play = document.querySelector(".local-video__content");
    let video = document.querySelector(".local-video video");

    play.addEventListener("click", function () {
      video.style.zIndex = 100;
      video.play();
    });
  }
})();

// Wordlist dropdown
(function () {
  if (document.querySelector(".letters__active")) {
    let letterActive = document.querySelector(".letters__active");
    let letterList = document.querySelector(".letters__list");

    letterActive.addEventListener("click", function () {
      if (letterList.style.maxHeight == 0) {
        showList();
      } else {
        hideList();
      }
    });

    document.querySelectorAll(".letters__list li").forEach(function (el) {
      el.addEventListener("click", function () {
        if (window.innerWidth < 768) {
          hideList();
        }
      });
    });

    function showList() {
      letterActive.classList.add("active");
      letterList.style.maxHeight = letterList.scrollHeight + "px";
    }

    function hideList() {
      letterActive.classList.remove("active");
      letterList.style.maxHeight = null;
    }
  }
})();

// Wordlist

(function () {
  let wordLetter = document.querySelectorAll(".word");
  wordLetter.forEach(function (el) {
    el.parentElement.insertAdjacentHTML(
      "afterBegin",
      `<div id="block-${el.textContent.toLocaleLowerCase().trim()}" class="anchor" ></div>`
    );
  });

  function wordCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveToWord(entry.target.querySelector(".word").textContent.trim().toLowerCase());
        document.querySelector(".letters__active").textContent = entry.target
          .querySelector(".word")
          .textContent.trim()
          .toUpperCase();
      }
    });
  }

  let letters = document.querySelectorAll(".letters__list li a");
  const words = document.querySelectorAll(".word-block");

  function setActiveToWord(word) {
    for (let i = 0; i < letters.length; i++) {
      letters[i].classList.remove("active");
      if (letters[i].textContent.toLowerCase() == word) {
        letters[i].classList.add("active");
      }
    }
  }

  let wordOptions = null;

  if (window.innerWidth >= 768) {
    wordOptions = {
      threshold: [0.4],
    };
  } else {
    wordOptions = {
      threshold: [0.2],
    };
  }

  const wordObserver = new IntersectionObserver(wordCallback, wordOptions);

  words.forEach((word) => wordObserver.observe(word));
})();

// Animation
{
  function setAnimateClass(selector, delay) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.classList.add("text-animate");
      if (delay) {
        el.classList.add(delay);
      }
    });
  }

  setAnimateClass(".hero h1");
  setAnimateClass(".hero .hero__links", "delay-1");

  setAnimateClass(".section-about__body p.text-grey.text-sm");
  setAnimateClass(".section-about__body p.text-md.mt-4.w-max-656.w-max-lg-840", "delay-1");

  setAnimateClass(".category-item");

  setAnimateClass(".local-video__content .title-xl");
  setAnimateClass(".local-video__content .w-max-656.mt-3", "delay-1");
  setAnimateClass(".local-video__content .btn", "delay-2");

  setAnimateClass(".section-experience p.text-sm.text-grey");
  setAnimateClass(".section-experience .text-lg", "delay-1");
  setAnimateClass(".section-experience .experience-text", "delay-2");

  setAnimateClass(".col-lg-6 .text-center h2.title");
  setAnimateClass(".col-lg-6 p.w-max-656.w-max-lg-576", "delay-1");
  setAnimateClass(".col-lg-6 .btn.btn-white--outline ", "delay-2");

  setAnimateClass("section.text-center .container-fluid .text-sm.text-grey");
  setAnimateClass("section.text-center .container-fluid .w-max-656.w-max-lg-840", "delay-1");
  setAnimateClass("section.text-center .container-fluid div.mt40", "delay-2");

  setAnimateClass(".as-section .title-xl");
  setAnimateClass(".as-section p.mt-3", "delay-1");
  setAnimateClass(".as-section .btn", "delay-2");

  setAnimateClass(".cta-item h3");
  setAnimateClass(".cta-item p", "delay-1");
  setAnimateClass(".cta-item .btn", "delay-2");

  setAnimateClass(".footer-item__body img");
  setAnimateClass(".footer-item__body  h5", "delay-1");
  setAnimateClass(".footer-item__body p", "delay-2");
  setAnimateClass(".footer-item__body a.mt-3", "delay-2");

  setAnimateClass(".footer__nav");
  setAnimateClass(".footer__social", "delay-1");

  setAnimateClass(".container-fluid .title-xl");
  setAnimateClass(".container-fluid p.mt-3.mx-auto.w-max-720", "delay-1");
  setAnimateClass(".container-fluid p.mt-3.mx-auto.w-max-720 + .btn", "delay-2");

  setAnimateClass(".container-fluid p.mt-3.mx-auto.w-max-720 + div .list-bordered", "delay-2");

  setAnimateClass(".text-lg");
  setAnimateClass(".text-lg + p", "delay-1");
  setAnimateClass(".text-lg + p + .book-cards", "delay-2");

  setAnimateClass(".career p", "delay-2");
  setAnimateClass(".career a.btn", "delay-2");

  setAnimateClass(".form", "delay-1");

  setAnimateClass(".mt80.w-max-728.mx-auto.text-left h2");
  setAnimateClass(".mt80.w-max-728.mx-auto.text-left .accordion");

  setAnimateClass(".title");
  setAnimateClass(".types .type");

  setAnimateClass(".franchise-btn-group", "delay-1");

  setAnimateClass(".type-block .text-primary");
  setAnimateClass(".type-block p.mt-2");
  setAnimateClass(".type-block p.mt-4");
  setAnimateClass(".type-block p.mt-4 + *");

  setAnimateClass(".text-lg + .list-bordered li");
  setAnimateClass(".content p");
  setAnimateClass(".content ul");
  setAnimateClass(".content h3");
  setAnimateClass(".content .video");

  setAnimateClass(".title-xl");
  setAnimateClass(".filter__nav", "delay-1");
  setAnimateClass(".filter-card", "delay-1");
  setAnimateClass(".letters__list", "delay-1");

  setAnimateClass(".word-block");

  const options = {
    threshold: [0.2],
  };

  function blockCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;

        if (window.innerWidth >= 768) {
          if (el.classList.contains("delay-1")) {
            setTimeout(() => {
              el.classList.add("animate");
            }, 100);
          } else if (el.classList.contains("delay-2")) {
            setTimeout(() => {
              el.classList.add("animate");
            }, 200);
          } else {
            el.classList.add("animate");
          }
        } else {
          el.classList.add("animate");
        }
      }
    });
  }

  const blocks = document.querySelectorAll(".text-animate");
  const blockObserver = new IntersectionObserver(blockCallback, options);

  blocks.forEach((block) => blockObserver.observe(block));
}
