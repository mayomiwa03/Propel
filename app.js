let wrapper = document.querySelector(".popularCoursesWrapper");
let container = document.querySelector(".mealsWrapper");
let courseNewp = document.querySelector(".courseNewP");

let imgOne = "./Imgs/Img1.png";
let imgTwo = "./Imgs/Img2.png";
let imgThree = "./Imgs/Img3.png";
let imgFour = "./Imgs/Img4.png";

let courses = [
  {
    img: imgOne,
    studTag: "+40 students",
    date: "1-28 July 2022",
    title: "product management basic - course",
    descp:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    oldPrice: "500",
    newPrice: "380",
  },
  {
    img: imgTwo,
    studTag: "+11 students",
    date: "1-28 July 2022",
    title: "BM Data Science Professional Certificate",
    descp:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    oldPrice: "500",
    newPrice: "678",
  },
  {
    img: imgThree,
    studTag: "+234 students",
    date: "1-28 July 2022",
    title: "The Science of Well-Being",
    descp:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    oldPrice: "500",
    newPrice: "123",
  },
  {
    img: imgFour,
    studTag: "+367 students",
    date: "1-28 July 2022",
    title: "Python for Everybody Specialization",
    descp:
      "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
    oldPrice: "500",
    newPrice: "567",
  },
];

// // 5 Steps used to create an element (a tag) from js
// // step 1: create the element
// let el = document.createElement("h1");
// // step 2: give the new element a class name
// el.classList.add("newTag");
// // step 3:  create the content you want to add to the html
// let elContent = "na so!!!";
// // step 4: add the content to the new tag
// el.innerHTML = elContent;
// // step 5: display the new element to the html
// wrapper.appendChild(el);

// FUNCTION TO CREATE A CARD

function createCard(course) {
  let newCard = document.createElement("div");

  newCard.classList.add("popularCourseCard");

  let newCardContent = `
   <img class="courseImg" src=${course.img} alt="banner" />

            <div class="studTag">
              <img src="" alt="" />
              <h6 class="courseStudTag"><span>
              <img src="./Imgs/Group 36639.png" alt="pictures">
              </span>${course.studTag}</h6>
            </div>

            <h5 class="courseDate">${course.date}</h5>
            <h1 class="courseTitle" >${course.title}</h1>
            <p class="courseDsc">${course.descp}</p>

            <div class="priceTag">
              <div class="prices">
                <h3 class="courseNp" >$${course.newPrice}</h3>
                <span class="courseOp">$${course.oldPrice}</span>
              </div>

              <button class="courseBtn">Enroll Now</button>
            </div>
            `;
  newCard.innerHTML = newCardContent;

  wrapper.appendChild(newCard);
}

courses.map(function (course) {
  return createCard(course);
});
//  bottom slider

const sliderWrapper = document.getElementById("sliderWrapper");

sliderWrapper.innerHTML = courses
  .map((course) => {
    return `
    
    <div class="swiper-slide">

      <div class="courseCard">

        <div class="left">

          <img src="${course.img}" alt="course image">

          <div class="priceTag">
            <h2>$ ${course.newPrice}</h2>
            <span>$ ${course.oldPrice}</span>
          </div>

        </div>

        <div class="right">

          <h5>${course.date}</h5>

          <h1>${course.title}</h1>

          <p>${course.descp}</p>

          <h6 class="courseStudTag"><span>
              <img src="./Imgs/Group 36639.png" alt="pictures">
              </span> ${course.studTag}</h6> 

        </div>

      </div>

    </div>
    
    `;
  })
  .join("");

// ///////////////////
// initialize swiper

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  speed: 800,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 1.5,
    },

    1024: {
      slidesPerView: 2,
    },
  },
});
