(function ($) {

  "use strict";

  // init jarallax parallax
  var initJarallax = function () {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }


  window.addEventListener("load", (event) => {

    // preloader
    $(".preloader").addClass("loaded");

    //isotope
    $('.isotope-container').isotope({
      // options
      itemSelector: '.item',
      layoutMode: 'masonry'
    });

    // Initialize Isotope
    var $container = $('.isotope-container').isotope({
      // options
      itemSelector: '.item',
      layoutMode: 'masonry'
    });

    // nav-bg after scroll
    var initScrollNav = function () {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
          $('.navbar').removeClass("bg-opacity-50");
        } else {
          $('.navbar').addClass("bg-opacity-50");
        }
      });
    }

    // init Chocolat light box
    var initChocolat = function () {
      Chocolat(document.querySelectorAll('.image-link'), {
        imageSize: 'contain',
        loop: true,
      })
    }

    //search pop
    var searchPopup = function () {
      // open search box
      $('#header-nav').on('click', '.search-button', function (e) {
        $('.search-popup').toggleClass('is-visible');
      });

      $('#header-nav').on('click', '.btn-close-search', function (e) {
        $('.search-popup').toggleClass('is-visible');
      });

      $(".search-popup-trigger").on("click", function (b) {
        b.preventDefault();
        $(".search-popup").addClass("is-visible"),
          setTimeout(function () {
            $(".search-popup").find("#search-popup").focus()
          }, 350)
      }),
        $(".search-popup").on("click", function (b) {
          ($(b.target).is(".search-popup-close") || $(b.target).is(".search-popup-close svg") || $(b.target).is(".search-popup-close path") || $(b.target).is(".search-popup")) && (b.preventDefault(),
            $(this).removeClass("is-visible"))
        }),
        $(document).keyup(function (b) {
          "27" === b.which && $(".search-popup").removeClass("is-visible")
        })
    }


    $(document).ready(function () {

      initJarallax();
      initScrollNav();
      searchPopup();
      initChocolat();

      AOS.init({
        duration: 2000,
        once: true,
      })


      var swiper = new Swiper(".offer-swiper", {
        spaceBetween: 40,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".main-slider-button-next",
          prevEl: ".main-slider-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }
      });

      // testimonial Slider
      var swiper = new Swiper(".testimonial-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      //active button
      $('.filter-button').click(function () {
        $('.filter-button').removeClass('active');
        $(this).addClass('active');
      });


      // Filter items on button click
      $('.filter-button').click(function () {
        var filterValue = $(this).attr('data-filter');
        if (filterValue === '*') {
          // Show all items
          $container.isotope({ filter: '*' });
        } else {
          // Show filtered items
          $container.isotope({ filter: filterValue });
        }
      });

    });

  });

})(jQuery);


// document.addEventListener("DOMContentLoaded", function () {
//   const portfolioContainer = document.getElementById("portfolio-container");
//   const filterButtons = document.querySelectorAll(".filter-button");

//   // Fetch JSON data
//   fetch("json/projects.json")
//       .then(response => response.json())
//       .then(data => {
//           let projects = data.data;
//           displayProjects(projects);

//           // Filter functionality
//           filterButtons.forEach(button => {
//               button.addEventListener("click", () => {
//                   const filter = button.getAttribute("data-filter");

//                   document.querySelector(".filter-button.active").classList.remove("active");
//                   button.classList.add("active");

//                   if (filter === "all") {
//                       displayProjects(projects);
//                   } else {
//                       const filteredProjects = projects.filter(project => project.category === filter);
//                       displayProjects(filteredProjects);
//                   }
//               });
//           });
//       });

//   function displayProjects(projects) {
//       portfolioContainer.innerHTML = ""; 
//       projects.forEach(project => {
//           const projectHTML = `
//               <div class="item col-md-4 p-3" data-category="${project.category}">
//                   <div class="project-content position-relative bg-black">
//                       <img class="project-img img-fluid" src="${project.image}" alt="${project.name}">
//                       <div class="project-description p-5 position-absolute bottom-0 start-0">
//                           <h4 class="text-white">${project.name}</h4>
//                           <a href="${project.demo_url}" class="text-white text-decoration-underline" target="_blank">Learn More</a>
//                       </div>
//                   </div>
//               </div>
//           `;
//           portfolioContainer.innerHTML += projectHTML;
//       });
//   }
// });



// document.addEventListener("DOMContentLoaded", function () {
//   fetch("json/projects.json")
//       .then(response => response.json())
//       .then(data => {
//           const portfolioContainer = document.getElementById("portfolio-container");

//           data.data.forEach(project => {
//               const projectItem = document.createElement("div");
//               projectItem.classList.add("item", "col-md-4", "p-3", project.category);

//               projectItem.innerHTML = `
//                   <div class="project-content position-relative overflow-hidden">
//                       <img class="project-img img-fluid w-100 rounded" 
//                            src="${project.image}" 
//                            alt="${project.name}" 
//                            style="width: 100%; height: 250px; object-fit: cover;">
                      
//                       <div class="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
//                           <h4 class="text-white fw-bold mb-3">${project.name}</h4>
//                           <div class="d-flex justify-content-center gap-3">
//                               <a href="${project.demo_url}" class="btn btn-dark btn-sm px-4 py-2 me-2" target="_blank">Demo</a>
//                               <a href="${project.source_code}" class="btn btn-outline-light btn-sm px-4 py-2" target="_blank">Code</a>
//                           </div>
//                       </div>
//                   </div>
//               `;

//               portfolioContainer.appendChild(projectItem);
//           });
//       })
//       .catch(error => console.error("Error loading projects:", error));
// });


document.addEventListener("DOMContentLoaded", function () {
  fetch("json/services.json")
      .then(response => response.json())
      .then(data => {
          const swiperWrapper = document.querySelector(".swiper-wrapper");
          swiperWrapper.innerHTML = ""; 

          const iconMap = {
              "Android App Development": "smartphone",
              "Robust API Development": "code",
              "Backend Development": "server",
              "Firebase Integration": "firebase",
              "Responsive UI Design": "ui",
              "Full Stack Development": "web"
          };

          data.data.forEach(service => {
              const serviceItem = document.createElement("div");
              serviceItem.classList.add("swiper-slide", "text-center");

              const iconId = iconMap[service.name] || "settings";

              serviceItem.innerHTML = `
                  <a href="https://www.linkedin.com/in/amr-elnemr-094b8a30a/" target="_blank">
                      <div class="offer-item border mb-4 p-5">
                          <div class="product-item position-relative">
                              <svg class="offer-svg" width="80" height="120">
                                  <use xlink:href="#${iconId}"></use>
                              </svg>
                          </div>
                          <h4 class="mt-4">${service.name}</h4>
                          <p>${service.description}</p>
                      </div>
                  </a>
              `;

              swiperWrapper.appendChild(serviceItem);
          });
      })
      .catch(error => console.error("Error loading services:", error));
});


document.addEventListener("DOMContentLoaded", function () {
  fetch("json/projects.json")
      .then(response => response.json())
      .then(data => {
          const portfolioContainer = document.getElementById("portfolio-container");

          data.data.forEach(project => {
              const projectItem = document.createElement("div");
              projectItem.classList.add("item", "col-md-4", "p-3", project.category);

              projectItem.innerHTML = `
                  <div class="project-content position-relative overflow-hidden">
                      <img class="project-img img-fluid w-100 rounded" 
                           src="${project.image}" 
                           alt="${project.name}" 
                           style="width: 100%; height: 250px; object-fit: cover;">
                      
                      <div class="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center">
                          <h4 class="text-white fw-bold mb-3">${project.name}</h4>
                          <div class="d-flex justify-content-center gap-3">
                              <a href="${project.demo_url}" class="btn btn-dark btn-sm px-4 py-2 me-2" target="_blank">Demo</a>
                              <a href="${project.source_code}" class="btn btn-outline-light btn-sm px-4 py-2" target="_blank">Code</a>
                          </div>
                      </div>
                  </div>
              `;

              portfolioContainer.appendChild(projectItem);
          });

          // Initialize Isotope after content is loaded
          var iso = new Isotope('#portfolio-container', {
              itemSelector: '.item',
              layoutMode: 'fitRows'
          });

          // Filter functionality
          document.querySelectorAll(".filter-button").forEach(button => {
              button.addEventListener("click", function () {
                  document.querySelector(".filter-button.active").classList.remove("active");
                  this.classList.add("active");
                  let filterValue = this.getAttribute("data-filter");
                  iso.arrange({ filter: filterValue });
              });
          });
      })
      .catch(error => console.error("Error loading projects:", error));
});
