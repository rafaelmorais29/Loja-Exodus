export const darkMode = () => {
  const darkBtn = document.querySelector(".header__btn");

  darkBtn.addEventListener("click", () => {
      const html = document.querySelector("html");
      const result = html.classList.toggle("dark-mode");
      darkBtn.classList.toggle("header__btn--dark-mode");

      localStorage.setItem("@openMusic:dark-mode", result);
  })
}

export const verifyMode = () => {
  const darkInfo = JSON.parse(localStorage.getItem("@openMusic:dark-mode"));
  const html = document.querySelector("html");
  const btnIcone = document.querySelector(".header__btn");

  if(darkInfo) {
      html.classList.add("dark-mode");
      btnIcone.classList.add("header__btn--dark-mode");
  }

}