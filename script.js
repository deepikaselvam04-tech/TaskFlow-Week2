const newTaskButton = document.querySelector(".primary-btn");

newTaskButton.addEventListener("click", function () {
    alert("New Task feature is ready!");
});

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {
    card.addEventListener("click", function () {
        card.classList.toggle("selected");
    });
});
