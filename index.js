let submitBtn = document.getElementById("submit");
let email = document.getElementById("email-address");
let formCollector = document.getElementById("form");
let infoHeader = document.querySelector(".info-header");
let infoParagraph = document.querySelector(".info-paragraph")
let socialMediaIcons = document.querySelector(".social-media-icons");

function formCollectorSubmitted(event) {
    event.preventDefault();
    console.log("Heroo")    
    let ourFormData = new FormData(event.target);
    let emailAddress = ourFormData.get("email-address")
    infoHeader.classList.add("margin-bottom");
    infoHeader.innerHTML = `Our <span class="info-span">journey</span> to growth starts now!`;
    infoParagraph.textContent = `We look forward to reaching out to you as soon as possible. This is the first step towards making your goals come true!`;
    email.style.display = "none";
    submitBtn.style.display = "none";
    socialMediaIcons.style.display = "flex";
}

formCollector.addEventListener("submit", formCollectorSubmitted);