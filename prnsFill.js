// user setup begins
const prnsClassName = "prnshere"; // where to target
const prnsFillWithHref = "https://pronouns.cc/@toranine09"; // link to fill with
const prnsFlavourText = ["pronoun list", "view my pronouns", "he/they/it"];
const prnsFallbackFlavourText = "he/they/it";
const prnsTextRandomType = "uniform"; // how random/type of randomness
const prnsFillIgnoreClass = "prnsfillignore"; // classname to skip
const prnsFillIgnoreID = "prnsfillignore"; // id to skip
// end of user setup

  /* TODO:
    - use apis for optional filler text
      https://docs.pronouns.cc/api/ (?) needs user id
      https://en.pronouns.page/api (?) cant fetch user data
      pronouny.xyz (?) cant find
  */

if (prnsTextRandomType == "uniform" || prnsTextRandomType == "trueRandom") {
  var prnsElements = document.getElementsByClassName(prnsClassName);
  if (prnsElements) {
    if (prnsTextRandomType == "uniform") {
      try {
        var randomText = prnsFlavourText[Math.floor(Math.random() * prnsFlavourText.length)];
      } catch (e) {
        randomText = prnsFallbackFlavourText;
        console.error("prnsFill random failed - " + e + " - set to fallback (" + prnsFallbackFlavourText + ")");
      }
    };
    for (var i = 0; i < prnsElements.length; i++) {
      if (!prnsElements[i].className.toString().match(prnsFillIgnoreClass) && !prnsElements[i].id.toString().match(prnsFillIgnoreID)) {
        if (prnsTextRandomType == "trueRandom") {
          try {
            var randomText = prnsFlavourText[Math.floor(Math.random() * prnsFlavourText.length)];
          } catch (e) {
            randomText = prnsFallbackFlavourText;
            console.error("prnsFill random failed - " + e + " - set to fallback (" + prnsFallbackFlavourText + ")");
          }
        };
        prnsElements[i].href = prnsFillWithHref;
        prnsElements[i].innerText = randomText;
        prnsElements[i].style.display = "inline";
      };
    };
  };
} else {
  console.error("prnsFill failed - invalid prnsTextRandomType, expected 'uniform' or 'trueRandom', got '"+ prnsTextRandomType + "'");
};
