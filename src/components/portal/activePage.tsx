export function activePageMark() {
    document.querySelector("header")?.classList.add("dark");
    document.querySelector("header")?.classList.remove("light");

    document.querySelector("header div.active")?.classList.remove("active");
    document
      .querySelector("header nav div:nth-child(1)")
      ?.classList.add("active");

      document.querySelector(".burgerMenuList div.active")?.classList.remove("active");
    document
      .querySelector(".burgerMenuList div:nth-child(1)")
      ?.classList.add("active");
}