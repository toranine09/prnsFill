const prnsElementId = "prnshere";
const prnsLink = "https://pronouns.cc/@toranine09";
const prnsFlavourText = ["pronoun list", "view my pronouns"];
const fallbackprnsFlavourText = "he/they/it";
const textRandomType = "uniform";
  // VALID OPTIONS:
  // uniform = randomly selected on load but uniform across page
  // trueRandom = every instance is random

if (textRandomType == "uniform" || textRandomType == "trueRandom") {
  var prnsElements = document.getElementsByClassName(prnsElementId);
  if (prnsElements) {
    if (textRandomType == "uniform") {
      try {
        var randomText = prnsFlavourText[Math.floor(Math.random() * prnsFlavourText.length)];
      } catch (e) {
        randomText = fallbackprnsFlavourText;
        console.error("prnsFill random failed - " + e + " - set to fallback (" + fallbackprnsFlavourText + ")");
      }
    };
    for (var i = 0; i < prnsElements.length; i++) {
      if (textRandomType == "trueRandom") {
        try {
          var randomText = prnsFlavourText[Math.floor(Math.random() * prnsFlavourText.length)];
        } catch (e) {
          randomText = fallbackprnsFlavourText;
          console.error("prnsFill random failed - " + e + " - set to fallback (" + fallbackprnsFlavourText + ")");
        }
      };
      prnsElements[i].href = prnsLink;
      prnsElements[i].innerText = randomText;
      prnsElements[i].style.display = "inline";
    };
  };
} else {
  console.error("prnsFill failed - invalid textRandomType (" + textRandomType + ") expected \"uniform\" or \"trueRandom\"");
};
