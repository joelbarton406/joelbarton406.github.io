document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".nav-item ");

  items.forEach((item) => {
    item.addEventListener("mouseover", function (e) {
      item.classList.add("hovered");
    });
    item.addEventListener("mouseout", function (e) {
      item.classList.remove("hovered");
    });
  });
});
