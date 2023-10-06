    const openButton = document.getElementById("openButton");
    const closeButton = document.getElementById("closeButton");
    const popup = document.getElementById("popup");

    openButton.addEventListener("click", () => {
        popup.style.display = "block";
    });

    closeButton.addEventListener("click", () => {
        popup.style.display = "none";
    });