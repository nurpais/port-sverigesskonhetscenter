function initPlayers() {
  let videos = document.querySelectorAll(".video");
  let videoArrs = [];

  videos.forEach(function (el) {
    var _player = new YT.Player(el.querySelector(".video__player"), {
      playerVars: {
        autoplay: 0,
        controls: 0,
        rel: 0,
        frameborder: 0,
      },
      videoId: el.querySelector(".video__player").dataset.videoId,
    });

    videoArrs.push(_player);

    el.addEventListener("click", function (e) {
      this.classList.add("active");
      onPlayerReady(this.querySelector(".video__player"));
    });

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      for (let i = 0; i < videoArrs.length; i++) {
        if (videoArrs[i].f == event) {
          videoArrs[i].playVideo();
        }
      }
    }
  });
}

//  This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  initPlayers();
}
