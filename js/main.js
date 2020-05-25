'use strict';

// Random letter
const randomLetterResult = document.querySelector('.random__letter--result');
const randomLetterBtn = document.querySelector('.random__letter--btn');

const getRandomLetter = () => {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let letter = letters[Math.floor(Math.random() * letters.length)];
  randomLetterResult.innerHTML = letter.toUpperCase();
}
randomLetterBtn.addEventListener('click', getRandomLetter);

// Random number
const randomNumberResult = document.querySelector('.random__number--result');
const randomNumberBtn = document.querySelector('.random__number--btn');

const getRandomNumber = () => {
  const input = document.getElementById('number');
  const inputValue = input.value;
  let randomNumber = Math.ceil(Math.random() * inputValue);
  randomNumberResult.innerHTML = randomNumber;
}
randomNumberBtn.addEventListener('click', getRandomNumber);

// Close sections
const sectionLetters = document.querySelector('.random__letter');
const closeSectionLetter = () => { sectionLetters.classList.toggle('hideSection'); }
document.querySelector('.random__letter--close').addEventListener('click', closeSectionLetter);

const sectionNumbers = document.querySelector('.random__number');
const closeSectionNumber = () => { sectionNumbers.classList.toggle('hideSection'); }
document.querySelector('.random__number--close').addEventListener('click', closeSectionNumber);