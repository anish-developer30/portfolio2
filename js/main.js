// ======icon name======>
let menu_Btn = document.querySelector("#menu");
let search_Btn = document.querySelector("#search");
let color_Btn = document.querySelector("#color");
let mode_Btn = document.querySelector("#moon");

// ======class name======>
let navbar = document.querySelector(".navbar");
let search = document.querySelector(".form_box");
let color = document.querySelector(".color_palette");

menu_Btn.onclick = () => {
  menu_Btn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
  search.classList.remove("active");
  color.classList.remove("active");
};

search_Btn.onclick = () => {
  search.classList.toggle("active");
  menu_Btn.classList.remove("fa-times");
  navbar.classList.remove("active");
  color.classList.remove("active");
};
// ===========================>
color_Btn.onclick = () => {
  color.classList.toggle("active");
  menu_Btn.classList.remove("fa-times");
  navbar.classList.remove("active");
  search.classList.remove("active");
};

document.querySelectorAll(".color_palette .color").forEach((btn) => {
  btn.onclick = () => {
    let select_color = btn.style.background;
    document
      .querySelector(":root")
      .style.setProperty("--main_color", select_color);
  };
});

window.onscroll = () => {
  menu_Btn.classList.remove("fa-times");
  navbar.classList.remove("active");
  search.classList.remove("active");
  color.classList.remove("active");
};
// =========darkMode==========>
mode_Btn.onclick = () => {
  mode_Btn.classList.toggle("fa-sun");
  if (mode_Btn.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};

// ==========input coolor selection=======>
// let inputcolor = document.querySelector("input");

// inputcolor.oninput = () => {
//   let choosecolr = inputcolor.value;
//   console.log(choosecolr);
//   document.querySelector(":root").style.setProperty("--main_color", choosecolr);
// };
