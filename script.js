let faqRow = document.querySelectorAll(".title");
let arrow = document.querySelectorAll(".arrow");

for (let i = 0; i < faqRow.length; i++) {
    faqRow[i].addEventListener("click", () => {
        console.log(faqRow[i]);
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