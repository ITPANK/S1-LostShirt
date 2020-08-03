(function () {
  const openingBtn = document.querySelector(".sidebar__hamburger");
  const closeBtn = document.querySelector(".sidebar__close");
  const sidebar = document.querySelector(".sidebar");

  openingBtn.addEventListener("click", (event) => {
    sidebar.classList.add("sidebar--opened");
  });

  closeBtn.addEventListener("click", (event) => {
    sidebar.classList.remove("sidebar--opened");
  });
})();
