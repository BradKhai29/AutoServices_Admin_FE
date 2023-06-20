let orderSidebar = document.getElementById("order-sidebar");
let orderSidebarBtn = document.getElementById("order-sidebar-btn");
let header = document.getElementById("content");
let hideOrderElement = document.querySelector("#hideOrder");

orderSidebarBtn.addEventListener("click", DisplayOrder);

function DisplayOrder() {
    orderSidebar.style.display = "block";
    hideOrderElement.style.display = "block";
}

function HideOrder() {
    orderSidebar.style.display = "none";
    hideOrderElement.style.display = "none";
}

hideOrderElement.addEventListener("click", HideOrder);