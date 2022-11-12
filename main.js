//---To Note---
//1. All pre-built functions must return a new array
//2. You can make new functions as long as you want but do not change or update the pre-built ones
//3. You can udpdate the values inside the *newsList variable if you want but do not change the variable name
//4. Happy coding :)

//newsList is the variable that holds an array of strings
export var newsList = [
  "What films should an aspiring journalist watch?",
  "Buried underpants and tea bags help scientists evaluate soil",
  "Decoder: Mining asteroids for minerals can help spare Earth",
  "Media glare can enrich tennis pros yet imperil mental health",
  "'Nightmare' TV show 'Euphoria — health threat or high art?",
  "Decoder: Armenia in a bind as Ukraine war resets global order",
  "What books should an aspiring journalist read?",
  "Marie Colvin shined a light on war-torn corners of the world",
];

export function search() {
  //inputValue is the variable that contains the search string
  const inputValue = document.getElementById("search-input").value;

  //Write your code here for the search function
  let regexObj = new RegExp(inputValue, "i"); //I used regex so that we dynamically change the inputValue variable, i for ignoring cases

  /* //functioning but doesn't count the first word of the string array
    let filtered = newsList.filter(function (str) {
    //filter element(s) of the array that contains regexObj
    return regexObj.test(str); 
  */
  return filters(newsList, regexObj);
}

export function sort(type) {
  if (type === "ascending") {
    //Write your code here for sorting (ascending)
    return newsList.sort(); // sorted based of each respective string 1st character charcode
  } else if (type === "descending") {
    //Write your code here for sorting (descending)
    // if users click the reserve first, then sort ascending should be executed before it reverse.
    return newsList.sort().reverse();
  }
}

//*** ADDITIONAL FUNCTION */
function filters(arr, keyword) {
  // This function was purposely place outside the search function because there is/are no result when I input first word of the string array
  const filtered = arr.filter(function (str) {
    //filter element(s) of the array that contains regexObj
    return keyword.test(str);
  });

  return filtered;
}
//console.log(sort("ascending"));
// console.log(newsList.sort());
// console.log(newsList.reverse());

/*--- PRACTICE ---- 

CONCEPT copied from: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase
https://stackoverflow.com/questions/35235794/filter-strings-in-array-based-on-content-filter-search-value
https://www.studytonight.com/post/how-to-use-a-variable-in-regular-expression-pattern-in-javascript
*/
