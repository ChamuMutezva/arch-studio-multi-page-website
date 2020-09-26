const hamburger = document.querySelector(".hamburger");
const closemenu = document.querySelector(".closemenu");
const modal = document.querySelector(".modal");
const numSection = document.querySelector(".numSection");
const mediaQuery = window.matchMedia("(max-width: 1279px)");
console.log(numSection);

closemenu.addEventListener("click", () => {
    closemenu.classList.toggle("hide");
    hamburger.classList.toggle("hide");
    modal.classList.add("hide");
})
hamburger.addEventListener("click", () => {
    console.log("clicked")
    closemenu.classList.toggle("hide");
    hamburger.classList.toggle("hide");
    modal.classList.remove("hide");
})

if (numSection) {
    numSection.addEventListener("click", (event) => {
        const hero = document.querySelector(".hero")
        const slideNum = parseInt(event.target.innerText)
        const numSectionSlide = Array.from(document.querySelectorAll(".nums"))
        numSectionSlide.forEach(element => element.classList.remove("activeSection"))
        event.target.classList.add("activeSection")
        console.log(numSectionSlide)
        console.log(slideNum)
        console.log(event.target)
        slideTemplate(slideNum);
    })
}
console.log(hamburger)

const slideTemplate = (slide) => {
    const slideBackgroundImg = document.querySelector(".hero")
    const slideTitle = document.querySelector(".slideTitle");
    const slideBody = document.querySelector(".slideBody");

    // console.log(mediaQuery)
    slideTitle.innerText = slidesView[slide - 1].slidetitle;
    slideBody.innerText = slidesView[slide - 1].slidebody;
    slideBackgroundImg.style.backgroundImage = slidesView[slide - 1].slideImg.desktop;
    // slideBackgroundImg.style.backgroundImage = 'url"slidesView[1].slideImg.desktop"' ;
    // console.log = slidesView[slide - 1].slideImg.desktop;
    // slideBackgroundImg.style.backgroundImage = 'url("./assets/home/mobile/image-hero-seraph.jpg")'

}

const slidesView = [
    {
        slidetitle: "Project Paramour",
        slidebody: `Project made for an art museum near Southwest London. Project Paramour is
    a statement of bold, modern architecture.`,
        slideImg: {
            mobile: `url("./assets/home/mobile/image-hero-paramour.jpg")`,
            tablet: `url("./assets/home/tablet/image-hero-paramour.jpg")`,
            desktop: `url("./assets/home/desktop/image-hero-paramour.jpg")`
        }
    },
    {
        slidetitle: "Seraph Station",
        slidebody: `The Seraph Station project challenged us to design a unique station that would
   transport people through time. The result is a fresh and futuristic model
   inspired by space stations.`,
        slideImg: {
            mobile: `url("./assets/home/mobile/image-hero-seraph.jpg")`,
            tablet: `url("./assets/home/tablet/image-hero-seraph.jpg")`,
            desktop: `url("./assets/home/desktop/image-hero-seraph.jpg")`
        }
    },
    {
        slidetitle: "Federal II Tower",
        slidebody: `A sequel theme project for a tower originally built in the 1800s. We achieved
    this with a striking look of brutal minimalism with modern touches.`,
        slideImg: {
            mobile: `url("./assets/home/mobile/image-hero-federal.jpg")`,
            tablet: `url("./assets/home/tablet/image-hero-federal.jpg")`,
            desktop: `url("./assets/home/desktop/image-hero-federal.jpg")`
        }
    },
    {
        slidetitle: "Trinity Bank Tower",
        slidebody: `Trinity Bank challenged us to make a concept for a 84 story building located
    in the middle of a city with a high earthquake frequency. For this project we
    used curves to blend design and stability to meet our objectives.
  `,
        slideImg: {
            mobile: `url("./assets/home/mobile/image-hero-federal.jpg")`,
            tablet: `url("./assets/home/tablet/image-hero-federal.jpg")`,
            desktop: `url("./assets/home/desktop/image-hero-federal.jpg")`
        }
    }
]

/* for screens up to 1279px use default template
if (mediaQuery) {
    const slideBackgroundImg = document.querySelector(".hero")
    const slideTitle = document.querySelector(".slideTitle");
    const slideBody = document.querySelector(".slideBody");

    slideTitle.innerText = slidesView[0].slidetitle;
    slideBody.innerText = slidesView[0].slidebody;
    slideBackgroundImg.style.backgroundImage = slidesView[0].slideImg.desktop;

} */




