const popupBtn = document.querySelector(".popup-btn");
const  popup = document.querySelector(".popup")

const removeBtn = document.getElementById("remove-btn")


popupBtn.addEventListener('click', function(e){
    // popup.style.display = 'block'
    e.stopPropagation();
    popup.classList.toggle("hidden");
});

removeBtn.addEventListener("click", function(e){
    // popup.style.display = 'none'
    e.stopPropagation();
    popup.classList.add("hidden");
})

// by clicking on anywhere else 
window.addEventListener("click", function(e){
    if (!popup.classList.contains('hidden') &&
        !popup.contains(e.target) &&
        !popupBtn.contains(e.target)) {
        popup.classList.add('hidden');
    }
})



