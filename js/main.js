var keys = { r: false, v: false };
document.addEventListener("keydown", (e) => {
  if (e.key == "r") {
    keys.r = true;
    $("#r").text(keys["r"] ? "true" : "false");
  }
  if (e.key == "v") {
    keys.v = true;
    $("#v").text(keys["v"] ? "true" : "false");
  }
  if (keys.r && keys.v) {
    show_description();
  }
});
document.addEventListener("keyup", (e) => {
  if (e.key == "r") {
    keys.r = false;
    $("#r").text(keys["r"] ? "true" : "false");
  }
  if (e.key == "v") {
    keys.v = false;
    $("#v").text(keys["v"] ? "true" : "false");
  }
});
function show_description() {
  var elements = document.getElementById("right-side-container").children;

  Array.from(elements).forEach((element) => {
    element.style.display = "none";
  });
  document.getElementById("discription_of_finteza").style.display =
    "table-cell";
}

function form_generator() {
  var content = document.getElementById("discription_of_finteza");
  content.style.display = "none";
  var form = document.getElementById("211650936345860");
  form.style.display = "table-cell";
}
