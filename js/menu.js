let orderSidebar = document.getElementById("order-sidebar");
let orderSidebarBtn = document.getElementById("order-sidebar-btn");
let hideOrderElement = document.querySelector("#hideOrder");

// Hide & Display order sidebar section
function DisplayOrder() {
    orderSidebar.style.display = "block";
    hideOrderElement.style.display = "block";
}

function HideOrder() {
    orderSidebar.style.display = "none";
    hideOrderElement.style.display = "none";
}

orderSidebarBtn.addEventListener("click", DisplayOrder);
hideOrderElement.addEventListener("click", HideOrder);

// Add to Cart section
// item-name
// item-price
// item-action
// item-minus
// item-quantity
// item-plus
// #order-total
