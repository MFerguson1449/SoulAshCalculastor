const calculatorButtons = document.querySelectorAll('.calculatorButton');
const currentiLevelButtons = document.querySelectorAll('.currentiLevelButton');
const desirediLevelButtons = document.querySelectorAll('.desirediLevelButton');

calculatorButtons.forEach((calculatorButton) => {
    calculatorButton.addEventListener('click', selectButton);
});

function selectButton(e) {
    clearButton(e);
    const selectedButton = e.target;
    selectedButton.classList.add('currentlySelectedButton');

    // !Add selection to variables to calculate cost
    if(e.target.classList.contains('currentiLevelButton')) {
     const currentiLevelSelection = e.target;
     console.log(currentiLevelSelection.dataset.sashCost);
    }
};

function clearButton(e) {
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

// !Soul Ash Calculation! //
const soulAshCosts = [1250, 2000, 3200, 5150];

// function calculateCost() {
//     const currentiLevelSelection; //TODO - Apply Soul Ash values to each button
//     const desirediLevelSelection; //TODO - Variable for each selected value (Check parent class?)
//     const soulAshCost = desirediLevelSelection - currentiLevelSelection;
//     return soulAshCost;
// }
