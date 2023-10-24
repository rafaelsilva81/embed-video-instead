// this code will be executed after page load
(function () {
  // find element of id  "error-screen"
  const elem = document.getElementById("error-screen");

  console.debug("elemFound", elem);

  // clear inner html of element
  elem.innerHTML = "";

  // get current url
  const url = window.location.href;

  // regex to get the videoId (https://www.youtube.com/watch?v=videoId)
  const regex = /v=(.*)/;

  // get videoId from url
  const videoId = url.match(regex)[1];
  console.debug("videoId", videoId);

  // create iframe element
  elem.innerHTML += `<iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="width: 100%; height: 100%"></iframe>`;

  // that is all
  console.debug("EVI done!");
})();
