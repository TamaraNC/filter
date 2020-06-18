const filterBtn = document.querySelectorAll(".filter-btn");
const storeItems = document.querySelectorAll(".store-item")
const searchBar = document.querySelector(".form-control")

filterBtn.forEach(button => {
    button.addEventListener("click", function(e) {
        //Prevent the default link jump to the top of the page
        e.preventDefault();
        const filter = e.target.dataset.filter;
        if (filter === "all") {
            storeItems.forEach(item => {
                item.style.display = "block";
            })
        } else if (filter === "cakes") {
            storeItems.forEach(item => {
                if (item.classList.contains("cakes")) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            })
        } else if (filter === "cupcakes") {
            storeItems.forEach(item => {
                if (item.classList.contains("cupcakes")) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            })
        } else if (filter === "sweets") {
            storeItems.forEach(item => {
                if (item.classList.contains("sweets")) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            })
        } else if (filter === "doughnuts") {
            storeItems.forEach(item => {
                if (item.classList.contains("doughnuts")) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            })
        }
       
    })
})

searchBar.addEventListener("input", function() {
    storeItems.forEach(item => {
        if (item.textContent.includes(searchBar.value)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
})