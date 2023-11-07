const starEl = document.querySelectorAll(".fa-star")
const emojiEl = document.querySelectorAll(".far")
const colorAll = ['#ff7f7f', 'orange', 'lightblue', 'lightgreen', 'greenyellow'];
updateRating(0)
starEl.forEach((starEl, index)=>{
    starEl.addEventListener("click", ()=>{
        updateRating(index)
    })
})

function updateRating(index){
    starEl.forEach((starEl, idx)=>{
        if(idx < index + 1){
            starEl.classList.add("active");
        }else{
            starEl.classList.remove('active')
        }
    });

    emojiEl.forEach(emojiEl=>{
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color = colorAll[index]
    });
    
}



// Get references to the comment textarea and submit button
const commentTextarea = document.getElementById("comment");
const submitButton = document.getElementById("submit-button");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// Function to show the congratulatory pop-up and hide the main content
function showCongratulationPopup() {
    const popup = document.getElementById("congratulation-popup");
    popup.style.display = "block";

    // Hide the main content
    document.body.classList.add("main-content-hidden");
}

// Function to close the congratulatory pop-up and show the main content
function closePopup() {
    const popup = document.getElementById("congratulation-popup");
    popup.style.display = "none";

    // Show the main content
    document.body.classList.remove("main-content-hidden");
}

// Function to handle comment submission
function submitComment() {
    const commentText = commentTextarea.value;
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    // You can perform actions with the commentText, nameValue, and emailValue here, such as sending them to a server, storing them, etc.

    // Display congratulatory pop-up
    showCongratulationPopup();

    // Clear the rating stars
    updateRating(0);

    // Clear the textarea's value
    commentTextarea.value = "";

    // Clear the name and email input values
    nameInput.value = "";
    emailInput.value = "";
}

// Add an event listener to the submit button
submitButton.addEventListener("click", submitComment);
