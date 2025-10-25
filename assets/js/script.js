document.addEventListener("DOMContentLoaded", function() {
    const containerFull = document.querySelector(".container-full");
    const inputTheme = document.querySelector("#buttom-input");
    const buttomLanguage = document.querySelector(".language-buttom");
    const language = document.querySelector("#language");
    const btnMenu = document.querySelector("#btn-menu");

    btnMenu.addEventListener("click", function() {
        document.querySelector("nav").classList.toggle("active");
        if (document.querySelector("nav").classList.contains("active")) {
            btnMenu.innerHTML = '<i class="bi bi-x"></i>';
        } else {
            btnMenu.innerHTML = '<i class="bi bi-list"></i>';
        }
    });

    document.querySelector("nav").addEventListener("click", function() {
        document.querySelector("nav").classList.remove("active");
        btnMenu.innerHTML = '<i class="bi bi-list"></i>';
    });

    inputTheme.addEventListener("change", function() {
        if (inputTheme.checked) {
            containerFull.classList.add("black");
            containerFull.classList.remove("white");
        } else {
            containerFull.classList.add("white");
            containerFull.classList.remove("black");
        }
    });

    buttomLanguage.addEventListener("click", function() {
        if (language.textContent == "EN") {
            containerFull.classList.add("en");
            containerFull.classList.remove("pt");
            language.textContent = "PT";
            language.title = "trocar para Portugês";
        } else if (language.textContent == "PT") {
            containerFull.classList.add("pt");
            containerFull.classList.remove("en");
            language.textContent = "EN";
            language.title = "trocar para Inglês";
        }
    });

    // -------------------------------------------------------------------------

    const project = document.querySelectorAll(".card-project");
    const sectionProjects = document.querySelector("#projects");

    project.forEach(project => {
        project.addEventListener("click", function() {
            const projectName = project.querySelector(".txt-projects h1").textContent;
            const projectModal = document.querySelector(`.${projectName}`);
            projectModal.style.display = "flex";
            sectionProjects.scrollIntoView({ behavior: "smooth" });
            document.body.style.overflow = "hidden";
        });
    });

    const closeModal = document.querySelectorAll(".close-modal");

    closeModal.forEach(closeModal => {
        closeModal.addEventListener("click", function() {
            const projectModal = closeModal.closest(".container-modal-projects");
            projectModal.style.display = "none";
            document.body.style.overflow = "auto";
        });
    });

    // -------------------------------------------------------------------------

    const carousels = document.querySelectorAll(".modal-project");

    carousels.forEach(project => {
        const images = project.querySelectorAll(".carrousel-modal img");
        const prevBtn = project.querySelector(".btn-carrousel .prev");
        const nextBtn = project.querySelector(".btn-carrousel .next");
        const dotsContainer = project.querySelector(".btn-carrousel .dots");

        let currentIndex = 0;

        // cria os dots para cada carrossel
        images.forEach((_, index) => {
        const dot = document.createElement("i");
        dot.classList.add("bi", "bi-circle");
        if (index === 0) dot.classList.add("active");
        if (index === 0) dot.classList.remove("bi-circle");
        if (index === 0) dot.classList.add("bi-circle-fill");
        dot.addEventListener("click", () => showSlide(index));
        dotsContainer.appendChild(dot);
        });

        const dots = dotsContainer.querySelectorAll("i");

        function showSlide(index) {
            images[currentIndex].classList.remove("active");
            dots[currentIndex].classList.remove("active");
            dots[currentIndex].classList.remove("bi-circle-fill");
            dots[currentIndex].classList.add("bi-circle");

            currentIndex = (index + images.length) % images.length;

            images[currentIndex].classList.add("active");
            dots[currentIndex].classList.remove("bi-circle");
            dots[currentIndex].classList.add("bi-circle-fill");
            dots[currentIndex].classList.add("active");
        }

        prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));
        nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));
    });


























});