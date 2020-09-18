// Footer map
(function () {
    let onMapButtons = document.querySelectorAll(".on-map");
    let footerMapBg = document.querySelector(".footer-map-bg");
    let footerMapCloseBtn = document.querySelector(".footer-map .btn-close");

    let footerMapItem = document.querySelectorAll(".footer-map__item--label");
    let body = document.querySelector("body");

    onMapButtons.forEach(function (el) {
        el.addEventListener("click", function (e) {
            e.preventDefault();
            body.classList.add("footer-map--active");

            footerMapItem.forEach(function (el) {
                el.classList.remove("active");
            });

            footerMapItem[this.dataset.item].classList.add("active");
            footerMapItem[this.dataset.item].click();
        });
    });

    footerMapItem.forEach(function (el) {
        el.addEventListener("click", function () {
            footerMapItem.forEach(function (el) {
                el.classList.remove("active");
            });

            this.classList.add("active");
        });
    });

    footerMapBg.addEventListener("click", function (e) {
        body.classList.remove("footer-map--active");
    });

    footerMapCloseBtn.addEventListener("click", function (e) {
        body.classList.remove("footer-map--active");
    });
})();

// Map init
(function () {
    google.maps.event.addDomListener(window, "load", init);

    let footerMapItem = document.querySelectorAll(".footer-map__item--label");

    let lat = 59.363773;
    let long = 17.966546;
    let mapImg = "images/map-place.png";
    let title = "AS Sundbyberg";
    let address = "Sturegatan 32 Sundbyberg";
    let workField = "Mon-Thu 10:00 - 20:00";
    let workField2 = "Fri 10:00 - 18:00";
    let workField3 = "";


    // 59.363751, 17.966577
    footerMapItem.forEach(function (el) {
        el.addEventListener("click", function () {
            lat = this.dataset.mapLat;
            long = this.dataset.mapLong;
            mapImg = this.dataset.mapImg;
            img = title = this.dataset.mapTitle;
            address = this.dataset.mapAddress;
            workField = this.dataset.mapWorkField;
            workField2 = this.dataset.mapWorkField2;
            workField3 = this.dataset.mapWorkField3;


            init();
        });
    });

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 15,
            disableDoubleClickZoom: true,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(lat, long),
            disableDefaultUI: true,
        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById("map");

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        var infowindow = new google.maps.InfoWindow({
          content: `        <div class="map-card">
        <img src="${mapImg}" alt="" />
        <div class="map-card__info">
          <div class="map-card__title">${title}</div>
          <div class="text-primary">${address}</div>
          <div>${workField}</div>
          <div>${workField2}</div>
          <div>${workField3}</div>
        </div>
      </div>`,
        });

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, long),
            map: map,
            title: "Snazzy!",
        });

        marker.setVisible(false);
        infowindow.open(map, marker);
    }
})();