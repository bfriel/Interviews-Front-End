module.exports = {
  capitalize(word) {
    let start = 0;
    while (word[start] === " ") {
      start += 1;
    }
    return word[start].toUpperCase() + word.slice(1 + start);
  },

  formatUsername(fName, lName) {
    let firstName = fName[0].toUpperCase() + fName.slice(1);
    let lastName = lName[0].toUpperCase() + ".";
    return firstName + " " + lastName;
  },

  shortenDescription(description, cutoff) {
    if (description.length >= cutoff) {
      if (description[cutoff] === " ") {
        return description.slice(0, cutoff - 1) + "...";
      } else {
        while (description[cutoff] !== " ") {
          cutoff --;
          if (cutoff === 0) { return; }
        }
        return description.slice(0, cutoff) + "...";
      }
    }
    return description;
  }
};
