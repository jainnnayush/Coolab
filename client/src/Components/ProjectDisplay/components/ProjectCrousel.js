import "./ProjectCrousel.css";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>;
const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
const ProjectCrousel = (project) => {
  return (
    <div class="carousel" data-carousel>
      <button class="carousel-button prev" data-carousel-button="prev">
        L
      </button>
      <button class="carousel-button next" data-carousel-button="next">
        R
      </button>
      <ul data-slides>
        <li class="slide" data-active>
          <img src={project.projectImage} alt="Nature  #1" />
        </li>
      </ul>
    </div>
  );
};

export default ProjectCrousel;
