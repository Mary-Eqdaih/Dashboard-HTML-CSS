function toggleTooltips() {
  const isMobile = window.innerWidth <= 768;
  document.querySelectorAll(".sidebar .menu li").forEach((li) => {
    if (isMobile) {
      // Restore title from data-title
      if (li.dataset.title) li.setAttribute("title", li.dataset.title);
    } else {
      // Store in data-title and remove title
      if (li.getAttribute("title")) {
        li.dataset.title = li.getAttribute("title");
        li.removeAttribute("title");
      }
    }
  });
}

// Run on load and on resize
window.addEventListener("load", toggleTooltips);
window.addEventListener("resize", toggleTooltips);

let sidebar = document.querySelectorAll(".sidebar .menu li a");
sidebar.forEach((item) => {
  item.onclick = function () {
    sidebar.forEach((el) => {
      el.classList.remove("active");
    });
    item.classList.add("active");
  };
});
