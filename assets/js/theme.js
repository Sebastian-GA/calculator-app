const themeSelectors = document.querySelectorAll(".theme-selector");
themeSelectors.forEach((themeSelector) => {
    themeSelector.addEventListener("click", (event) => {
        const theme = event.target.value;
        document.body.classList.remove("theme1", "theme2", "theme3");
        document.body.classList.add(theme);
    });
});
