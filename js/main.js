'use strict';

const getRandomLetter = () => {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let randomLetter = letters[Math.ceil(Math.random() * letters.length)];
}