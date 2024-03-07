document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("video").playbackRate = 0.4;
  const omMegBtn = document.querySelector("#om-meg-btn");
  const kontaktMegBtn = document.querySelector("#kontakt-meg-btn");
  //
  //
  //
  omMegBtn.addEventListener("click", function () {
    console.log("clickt");
    omMegBtn.scroll({
      top: omMegBtn.clientHeight / 1,
      behavior: "smooth",
    });
  });
  //
  kontaktMegBtn.addEventListener("click", function () {
    console.log("clickt");
    footer.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });
});
