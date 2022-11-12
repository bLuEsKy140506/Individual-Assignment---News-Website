/**
 * @jest-environment jsdom
 */

import { sort, search, newsList } from "./main.js";

/* ============== TESTS SCENARIOS ==============================*/
const cases = [
  ["shined", ["Marie Colvin shined a light on war-torn corners of the world"]], //single keyword at random place
  [
    "aspiring", //single keyword at random place, expected on more than one array items
    [
      "What books should an aspiring journalist read?",
      "What films should an aspiring journalist watch?",
    ],
  ],
  [
    "decoder", //single keyword at the very start, expected on more than one array items
    [
      "Decoder: Armenia in a bind as Ukraine war resets global order",
      "Decoder: Mining asteroids for minerals can help spare Earth",
    ],
  ],
  [
    "nightmare", //single keyword enclosed by apostrophe
    ["'Nightmare' TV show 'Euphoria — health threat or high art?"],
  ],
  [
    "aspiring journalist watch", // multiple keyword in ordered arrangement
    ["What films should an aspiring journalist watch?"],
  ],
];
//=================================================================*/

describe("Testing search function with multiple scenarios", () => {
  test.each(cases)(
    "inputted keyword generates the expected result(s)",
    (inputValue, result) => {
      document.body.innerHTML = `<div class="input-form"><input id="search-input" type="text" placeholder="Search for news"/></div>`;
      document.getElementById("search-input").value = inputValue;
      require("./main.js");
      expect(search()).toEqual(expect.arrayContaining(result));
    }
  );
});

test("Sort function testing ascending", () => {
  expect(sort("ascending")).toEqual([
    "'Nightmare' TV show 'Euphoria — health threat or high art?",
    "Buried underpants and tea bags help scientists evaluate soil",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Marie Colvin shined a light on war-torn corners of the world",
    "Media glare can enrich tennis pros yet imperil mental health",
    "What books should an aspiring journalist read?",
    "What films should an aspiring journalist watch?",
  ]);
});

test("Sort function testing descending", () => {
  expect(sort("descending")).toEqual([
    "What films should an aspiring journalist watch?",
    "What books should an aspiring journalist read?",
    "Media glare can enrich tennis pros yet imperil mental health",
    "Marie Colvin shined a light on war-torn corners of the world",
    "Decoder: Mining asteroids for minerals can help spare Earth",
    "Decoder: Armenia in a bind as Ukraine war resets global order",
    "Buried underpants and tea bags help scientists evaluate soil",
    "'Nightmare' TV show 'Euphoria — health threat or high art?",
  ]);
});

/* PRACTICE -----

// //Example testing for search function
// test("Search function testing", () => {
//   expect(search(newsList)).toBe("I am a cool web developer");
// });

CONCEPT copied from:


https://www.w3resource.com/jest/introduction.php
https://www.npmjs.com/package/jest-environment-jsdom
https://www.codingninjas.com/codestudio/library/jest-dom-manipulation?selectedGoal=3
https://jestjs.io/docs/expect#expectarraycontainingarray

*/
