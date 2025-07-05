/**Resume section tabs and tab content */
// const resumeTabs = document.querySelector(".resume-tabs");
// const resumePortfolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
// const resumeTabContents = document.querySelectorAll(".resume-tab-content");

// var resumeTabNav = function(resumeTabClick){
//     resumeTabContents.forEach((resumeTabContent) => {
//         resumeTabContent.style.display = "none";
//         resumeTabContent.classList.remove("active");
//     });

//     resumePortfolioTabBtns.forEach((resumePortfolioTabBtn) => {
//         resumePortfolioTabBtn.classList.remove("active");
//     });


//     resumeTabContents[resumeTabClick].style.display = "flex";
//     setTimeout(() => {
//         resumeTabContents[resumeTabClick].classList.add("active");
//     }, 100);

//     resumePortfolioTabBtns[resumeTabClick].classList.add("active");
// }   

// resumePortfolioTabBtns.forEach((resumePortfolioTabBtns, i) => {
//     resumePortfolioTabBtns.addEventListener("click", () => {
//         resumeTabNav(i);
//     });
// });


/**Services - Modal */

// const serviceCardWithModals = document.querySelectorAll(".services-container .card-with-modal");

// serviceCardWithModals.forEach((serviceCardWithModal) => {
//     const serviceCard = serviceCardWithModal.querySelector(".service-card");
//     const serviceBackdrop = serviceCardWithModal.querySelector(".service-modal-backdrop");
//     const serviceModal = serviceCardWithModal.querySelector(".service-modal");
//     const modalCloseBtn = serviceCardWithModal.querySelector(".modal-close-btn");

//     serviceCard.addEventListener("click", () => {
//         serviceBackdrop.style.display = "flex";

//         setTimeout(() => {
//             serviceBackdrop.classList.add("active");
//         }, 100);

//         setTimeout(() => {
//             serviceModal.classList.add("active");
//         }, 300);
                
//     });

//     modalCloseBtn.addEventListener("click", () => {


//         setTimeout(() => {
//             serviceBackdrop.style.display = "none";
//         }, 500);

        
//         setTimeout(() => {
//             serviceBackdrop.classList.remove("active");
//             serviceModal.classList.remove("active");
//         }, 100);
//     });

// });

