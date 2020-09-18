(function () {
    if (document.querySelector(".file-input")) {
      let fileInput = document.querySelector(".file-input");
      let fileName = document.querySelector(".file-name");
  
      fileInput.addEventListener("change", function (e) {
        if (e.target.files[0]) {
          fileName.textContent = e.target.files[0].name;
        }
      });
    }
  })();