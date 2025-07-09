/**Resume section tabs and tab content */
const resumeTabs = document.querySelector(".resume-tabs");
const resumePortfolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll(".resume-tab-content");

var resumeTabNav = function(resumeTabClick){
    resumeTabContents.forEach((resumeTabContent) => {
        resumeTabContent.style.display = "none";
        resumeTabContent.classList.remove("active");
    });

    resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) => {
        resumePortfolioTabBtn.classList.remove("active");
    });


    resumeTabContents[resumeTabClick].style.display = "flex";
    setTimeout(() => {
        resumeTabContents[resumeTabClick].classList.add("active");
    }, 100);

    resumePortfolioTabBtns[resumeTabClick].classList.add("active");
}   

resumePortfolioTabBtns.forEach((resumePortfolioTabBtns, i) => {
    resumePortfolioTabBtns.addEventListener("click", () => {
        resumeTabNav(i);
    });
});


/**Services - Modal */

const serviceCardWithModals = document.querySelectorAll(".services-container .card-with-modal");

serviceCardWithModals.forEach((serviceCardWithModal) => {
    const serviceCard = serviceCardWithModal.querySelector(".service-card");
    const serviceBackdrop = serviceCardWithModal.querySelector(".service-modal-backdrop");
    const serviceModal = serviceCardWithModal.querySelector(".service-modal");
    const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");

    serviceCard.addEventListener("click", () => {
        serviceBackdrop.style.display = "flex";

        setTimeout(() => {
            serviceBackdrop.classList.add("active");
        }, 100);

        setTimeout(() => {
            serviceModal.classList.add("active");
        }, 300);
                
    });

    modalCloseBtn.addEventListener("click", () => {


        setTimeout(() => {
            serviceBackdrop.style.display = "none";
        }, 500);

        
        setTimeout(() => {
            serviceBackdrop.classList.remove("active");
            serviceModal.classList.remove("active");
        }, 100);
    });

});

/**Portfolio */
document.addEventListener("DOMContentLoaded", () => {
    const portfolioTabs = document.querySelector(".portfolio-tabs");
    const portfolioTabBtns = portfolioTabs.querySelectorAll(".tab-btn");
    const cardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

    portfolioTabBtns.forEach((tabBtn) => {
        tabBtn.addEventListener("click", () => {
            const filter = tabBtn.getAttribute("data-filter");

            cardsWithModals.forEach((cardWithModal) => {
                if(filter === "all" || cardWithModal.classList.contains(filter)){                 
                    cardWithModal.classList.remove("hidden");

                    setTimeout(() => {
                        cardWithModal.style.opacity = "1";
                        cardWithModal.style.transition = ".5s ease";
                    }, 1);

                }
                else{
                    cardWithModal.classList.add("hidden");

                    setTimeout(() => {
                        cardWithModal.style.opacity = "0";
                        cardWithModal.style.transition = ".5s ease";
                    }, 1);
                }
            });
            //Active tab
                portfolioTabBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
                tabBtn.classList.add("active");
        });
    });
});

/**Porfolio Modal */
const portfolioCardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

portfolioCardsWithModals.forEach((portfolioCardWithModal) => {
    const portfolioCard = portfolioCardWithModal.querySelector(".portfolio-card");
    const portfolioBackdrop = portfolioCardWithModal.querySelector(".portfolio-modal-backdrop");
    const portfolioModal = portfolioCardWithModal.querySelector(".portfolio-modal");
    const modalCloseBtn = portfolioCardWithModal.querySelector(".modal-close-btn");

    portfolioCard.addEventListener("click", () => {
        portfolioBackdrop.style.display = "flex";


        setTimeout(() => {
            portfolioBackdrop.classList.add("active");
        }, 300);

        setTimeout(() => {
            portfolioModal.classList.add("active");
        }, 300);
    });
    
    modalCloseBtn.addEventListener("click", () => {
        setTimeout(() => {
            portfolioBackdrop.style.display = "none";
        }, 500);
        
        setTimeout(() => {
            portfolioBackdrop.classList.remove("active");
            portfolioModal.classList.remove("active");
        }, 100);
    });
});


/**Contact Form - Send / Receive Emails */
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "6U9Ot29iNS11wPKcK",
    });
})();

lvContactForm = document.getElementById("lv-contact-form");
lvContactFormAlert = document.querySelector(".contact-form-alert");

lvContactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm('service_7i9d6e5', 'template_8ga5ttg', '#lv-contact-form')
        .then(() => {
            // console.log('SUCCESS!');
            lvContactFormAlert.innerHTML = "<span>Your message sent successfully! </span><i class='ri-checkbox-circle-fill'></i>";
            lvContactForm.reset();

            setTimeout(() => {
                lvContactFormAlert.innerHTML= "";
            }, 5000);


        }, (error) => {
            // console.log('FAILED...', error);
            lvContactFormAlert.innerHTML = "<span>Something went wrong! Message not sent. </span><i class='ri-error-warning-fill'></i>";
            lvContactFormAlert.title = error;

            setTimeout(() => {
                lvContactFormAlert.innerHTML= "";
            }, 5000);
        });
});

/**Header on Scroll */
window.addEventListener("scroll", () => {
    const lvHeader = document.querySelector(".lv-header");
    lvHeader.classList.toggle("shrink", window.scrollY > 0);
});

/**Navigation Menu */
window.addEventListener("scroll", () => {
   const navMenuSections = document.querySelectorAll(".nav-menu-section");
   const scrollY = window.pageYOffset;

   navMenuSections.forEach((navMenuSection) => {
    let sectionHeight = navMenuSection.offsetHeight;
    let sectionTop = navMenuSection.offsetTop - 50;
    let id = navMenuSection.getAttribute("id");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.add("current");
    }
    else{
        document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.remove("current");
    }


   });
});

/**Navigation Menu - On Page Load */
window.addEventListener("DOMContentLoaded", () => {
    const bottomNav = document.querySelector(".bottom-nav");

    bottomNav.classList.toggle("active", window.scrollY < 10);
});

/**Show / Hide Navigation */
const bottomNav = document.querySelector(".bottom-nav");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");
var navTimeout;

window.addEventListener("scroll", () => {
    bottomNav.classList.add("active");
    menuShowBtn.classList.remove("active");

     if(window.scrollY < 10){
        menuHideBtn.classList.remove("active");
        function scrollStopped(){
            bottomNav.classList.add("active");
        }

        clearTimeout(navTimeout);
        navTimeout = setTimeout(scrollStopped, 2000);
    }

    if(window.scrollY > 10){
        menuHideBtn.classList.add("active");

        function scrollStopped(){
            bottomNav.classList.remove("active");
            menuShowBtn.classList.add("active");
        }

        clearTimeout(navTimeout);
        navTimeout = setTimeout(scrollStopped, 2000);
    }

});

/**Hide Navigation */
menuHideBtn.addEventListener("click", () => {
    bottomNav.classList.toggle("active");
    menuHideBtn.classList.toggle("active");
    menuShowBtn.classList.toggle("active");
});

menuShowBtn.addEventListener("click", () => {
    bottomNav.classList.toggle("active");
    menuHideBtn.classList.add("active");
    menuShowBtn.classList.toggle("active");
});


/**Scroll bar Indicator to top */
window.addEventListener("scroll", () => {
   const toTopBtn = document.querySelector(".to-top-btn");
   
   toTopBtn.classList.toggle("active", window.scrollY > 0);

   const scrollIndicator = document.querySelector(".scroll-indicator-bar");

   const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
   const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

   const scrollValue = (pageScroll / height) * 100;

   scrollIndicator.style.height = scrollValue + "%";
});

/**Cursor */
const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");
const cursorCircle = document.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e) => {
   let x = e.clientX;
   let y = e.clientY;
   
   cursorDot.style.top = y + "px";
   cursorDot.style.left = x + "px";
   cursorCircle.style.top = y + "px";
   cursorCircle.style.left = x + "px";
   
});

/**Cursor Hover Effect */
const cursorHoverLinks = document.querySelectorAll("body a, .theme-btn, .lv-main-btn, .portfolio-card, .service-card, .contact-social-links li, .contact-form, .submit-btn, .menu-show-btn, .menu-hide-btn");

cursorHoverLinks.forEach((cursorHoverLink) => {
   cursorHoverLink.addEventListener("mouseover", () => {
       cursorDot.classList.add("large");
        cursorCircle.style.display = ("none");
   });
});

cursorHoverLinks.forEach((cursorHoverLink) => {
   cursorHoverLink.addEventListener("mouseout", () => {
       cursorDot.classList.remove("large");
        cursorCircle.style.display = ("block");
   });
});

/**Theme Dark/Light Change */
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
   themeBtn.classList.toggle("active-sun-icon"); 
   document.body.classList.toggle("light-theme");

   //Save
   const getCurrentIcon = () => themeBtn.classList.contains("active-sun-icon") ? "sun" : "moon";
   const getCurrentTheme = () => document.body.classList.contains("light-theme") ? "light" : "dark";

   localStorage.setItem("lv-saved-icon", getCurrentIcon());
   localStorage.setItem("lv-saved-theme", getCurrentTheme());
});


const savedIcon = localStorage.getItem("lv-saved-icon");
const savedTheme = localStorage.getItem("lv-saved-theme");

document.addEventListener("DOMContentLoaded", () => {
   themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("active-sun-icon");
   document.body.classList[savedTheme === "light" ? "add" : "remove"]("light-theme"); 
});