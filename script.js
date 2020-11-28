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

// index tab section logic
let tabNav = document.querySelectorAll(".tab-section-nav h5");
let tabcontent1 = document.querySelector("#tabcontent1");
let tabcontent2 = document.querySelector("#tabcontent2");
let tabcontent3 = document.querySelector("#tabcontent3");

function showTab(currentElement) {
    currentElement.classList.add("tab-active");
    let id = currentElement.id;

    for(let i = 0; i < tabNav.length; i++) {
        if(tabNav[i].id !== id && tabNav[i].classList.contains("tab-active")) {
            tabNav[i].classList.remove("tab-active");
        }
    }

    if(id === "tab1") {
        tabcontent1.style.display = "flex";
        tabcontent2.style.display = "none";
        tabcontent3.style.display = "none";
    } else if (id === "tab2") {
        tabcontent2.style.display = "flex";
        tabcontent1.style.display = "none";
        tabcontent3.style.display = "none";
    } else if (id === "tab3") {
        tabcontent3.style.display = "flex";
        tabcontent2.style.display = "none";
        tabcontent1.style.display = "none";
    }
}  