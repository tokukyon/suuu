function initializeGallery() {
    console.log("Gallery loaded!");
    
    const figures = document.querySelectorAll("figure");

    figures.forEach((figure) => {
        figure.setAttribute("tabindex", "0"); // Make keyboard accessible

        figure.addEventListener("mouseover", function () {
            figure.style.borderColor = "blue";
            console.log("Mouse over on image");
        });

        figure.addEventListener("mouseleave", function () {
            figure.style.borderColor = "#ddd";
            console.log("Mouse left the image");
        });

        figure.addEventListener("focus", function () {
            figure.style.borderColor = "red";
            console.log("Image focused");
        });

        figure.addEventListener("blur", function () {
            figure.style.borderColor = "#ddd";
            console.log("Image lost focus");
        });
    });
}