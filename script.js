const itemChoiceGroup = document.querySelector('.itemChoiceGroup');
const choiceButton = document.querySelector('.choiceButton');

choiceButton.addEventListener('click', buttonSelect);

function buttonSelect() {
    choiceButton.style.border = '2px solid $accentBlue',
    choiceButton.style.color = '$dkRed';
};