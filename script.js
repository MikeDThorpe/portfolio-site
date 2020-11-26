let faqRow = document.querySelectorAll(".title");
let arrow = document.querySelectorAll(".arrow");

for (let i = 0; i < faqRow.length; i++) {
    faqRow[i].addEventListener("click", () => {
        let focusFaq = faqRow[i];
       focusFaq .classList.toggle("active");
       arrow[i].classList.toggle("arrow-active");

    //    open FAQ answer when title container is clicked
       let answer = focusFaq.nextElementSibling;
        console.log(answer);
        if(answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    })
}
function openNav() {
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".mobile-nav-bg").style.display = "block"; 
    }) 
}
function closeNav() {
    document.querySelector(".mobile-nav-bg").style.display = "none"; 
}