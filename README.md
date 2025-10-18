#  Project : Calculator JavaScript

##  About the Project

**Objective** : Build a responsive calculator using React that handles chained operations, decimals, and edge cases like multiple operators or invalid input. The app follows FreeCodeCamp’s front-end certification requirements.

##  User Stories

- User Story #1: My calculator should contain a clickable element containing an `=` (equal sign) with a corresponding `id="equals"`.
- User Story #2: My calculator should contain 10 clickable elements containing one number each from 0–9, with the following corresponding IDs: `id="zero"`, `id="one"`, `id="two"`, `id="three"`, `id="four"`, `id="five"`, `id="six"`, `id="seven"`, `id="eight"`, and `id="nine"`.
- User Story #3: My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: `id="add"`, `id="subtract"`, `id="multiply"`, `id="divide"`.
- User Story #4: My calculator should contain a clickable element containing a `.` (decimal point) symbol with a corresponding `id="decimal"`.
- User Story #5: My calculator should contain a clickable element with an `id="clear"`.
- User Story #6: My calculator should contain an element to display values with a corresponding `id="display"`.
- User Story #7: At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; `0` should be shown in the element with the `id="display"`.
- User Story #8: As I input numbers, I should be able to see my input in the element with the `id="display"`.
- User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit `=`, the correct result should be shown in the element with the `id="display"`.
- User Story #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
- User Story #11: When the decimal element is clicked, a `.` should append to the currently displayed value; two `.` in one number should not be accepted.
- User Story #12: I should be able to perform any operation (`+`, `-`, `*`, `/`) on numbers containing decimal points.
- User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative `-` sign).  
  _Example: `5 + * 7 =` → result should be `35` (i.e. `5 * 7`)  
  `5 * - 5 =` → result should be `-25` (i.e. `5 * (-5)`).
- User Story #14: Pressing an operator immediately following `=` should start a new calculation that operates on the result of the previous evaluation.
- User Story #15: My calculator should have several decimal places of precision when it comes to rounding (e.g. `2 / 7` should give reasonable precision to at least 4 decimal places).

## Langages and Technologies
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=flat)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=flat)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=flat)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=flat)

##  Installation

```bash
git clone https://github.com/m-amroune/calculator-javascript.git
cd calculator-javascript
npm install
npm run dev

