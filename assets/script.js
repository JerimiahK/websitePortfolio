const homeButton = $(".homeButton");
const projectsButton = $(".projectsButton");
const infoButton = $(".infoButton");
const homeInfo = $("#home");
const homeDot = $("#homeDot");
const projectsDot = $("#projectsDot");
const infoDot = $("#infoDot");
const projectInfo = $("#projects");
const info = $("#info");

projectsButton.on("click", function () {
  infoDot.addClass("hide");
  projectsButton.addClass("hide");
  homeDot.addClass("hide");
  homeInfo.addClass("hide");
  info.addClass("hide");
  projectsDot.removeClass("hide");
  homeButton.removeClass("hide");
  projectInfo.removeClass("hide");
  infoButton.removeClass("hide");
});

homeButton.on("click", function () {
  homeButton.addClass("hide");
  projectInfo.addClass("hide");
  projectsDot.addClass("hide");
  infoDot.addClass("hide");
  info.addClass("hide");
  homeDot.removeClass("hide");
  homeInfo.removeClass("hide");
  projectsButton.removeClass("hide");
  infoButton.removeClass("hide");
});

infoButton.on("click", function () {
  infoButton.addClass("hide");
  projectsDot.addClass("hide");
  homeDot.addClass("hide");
  homeInfo.addClass("hide");
  projectInfo.addClass("hide");
  info.removeClass("hide");
  infoDot.removeClass("hide");
  homeButton.removeClass("hide");
  projectsButton.removeClass("hide");
});
