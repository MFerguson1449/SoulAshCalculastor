const calculatorButtons = document.querySelectorAll('.calculatorButton');
const currentiLevelButtons = document.querySelectorAll('.currentiLevelButton');
const desirediLevelButtons = document.querySelectorAll('.desirediLevelButton');
const soulAshNeeded = document.querySelector('.soulAshNeeded');

let currentiLevelCost = 0;
let desirediLevelCost = 0;

calculatorButtons.forEach((calculatorButton) => {
    calculatorButton.addEventListener('click', selectButton); // Listen for clicks on buttons
});

function selectButton(e) {
    clearButtons(e); // Reset other buttons
    const selectedButton = e.target;
    selectedButton.classList.add('currentlySelectedButton');  // Add selected class to element
    calculateCost(e.target);
};

function clearButtons(e) {
    if(e.target.classList.contains('currentiLevelButton')) {
        currentiLevelButtons.forEach((currentiLevelButton) => {
            currentiLevelButton.classList.remove('currentlySelectedButton')
        });
    } else {
        desirediLevelButtons.forEach((desirediLevelButton) => {
            desirediLevelButton.classList.remove('currentlySelectedButton')
        });
    };
};

function calculateCost(selectedButton) {
    if (selectedButton.classList.contains('currentiLevelButton')) {
        currentiLevelCost = selectedButton.dataset.soulashcost;
    } else {
        desirediLevelCost = selectedButton.dataset.soulashcost;
    }

    const soulAshCost = desirediLevelCost - currentiLevelCost;
    if(soulAshCost > 0) {
        soulAshNeeded.textContent = soulAshCost;
    }

    // TODO Change Soul Ash Cost element withotu removing CSS

    console.log(`Current = ${currentiLevelCost} - Desired = ${desirediLevelCost}`);
    console.log(soulAshCost);
}
