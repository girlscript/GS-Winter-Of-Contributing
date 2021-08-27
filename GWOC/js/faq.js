document.querySelectorAll(".item_header").forEach(function (header) {
  header.addEventListener("click", () => {
    if (header.parentNode.classList.contains("active")) {
      header.parentNode.classList.remove("active");
      header.parentNode.style.height = "54px";
    } else {
      document.querySelectorAll(".item_header").forEach(function (header) {
        header.parentNode.classList.remove("active");
        header.parentNode.style.height = "54px";
      });
      header.parentNode.classList.add("active");

      let altPar = header.nextElementSibling.scrollHeight;
      let altura = altPar + 54;
      header.parentNode.style.height = altura + "px";
    }
  });
});
