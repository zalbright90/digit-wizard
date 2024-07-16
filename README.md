# Digit Wizard

Welcome to Digit Wizard, a magical calculator project designed to make arithmetic operations fun and intuitive. This project is built with HTML, CSS, and JavaScript, and it supports both mouse clicks and keyboard inputs, including the numpad for seamless user experience.

## Features

* Basic arithmetic operations: addition, subtraction, multiplication, and division.
* Support for decimal points and percentages.
* Ability to toggle the sign of numbers.
* Handling division by zero gracefully with a whimsical message.
* Backspace functionality to correct mistakes.
* Responsive display with overflow handling for long numbers.
* Keyboard support, including the numpad.

### Usage

To use the Digit Wizard, simply click the buttons on the interface or use your keyboard. The calculator supports the following keyboard shortcuts:
* Numbers (0-9): *Enter digits.*
* Operators (+, -, *, /): *Perform arithmetic operations.*
* Decimal point (.): *Enter decimal numbers.*
* Enter: *Calculate the result.*
* Backspace: *Delete the last digit.*
* Clear (C): *Reset the calculator.*
* Percent (%): *Calculate the percentage.*

## Development Journey

### Complications and Solutions

#### Keyboard Support and Numpad Integration

One of the significant challenges faced during the development was ensuring that the keyboard support, especially the numpad keys, worked seamlessly. Initially, the calculator didn't respond correctly to numpad inputs. The key mapping had to be handled precisely to capture numpad key codes and map them to the appropriate functions.

To debug this issue, DOM breakpoints and console.log statements were extensively used. Here’s how these tools helped:

* **DOM Breakpoints:** By setting breakpoints in the DOM, we were able to pause the execution and inspect the state of the calculator at various stages. This helped identify where the logic was failing.

* **Console.log:** Logging key presses and mapped values provided real-time feedback on what the code was processing. This was crucial in understanding why certain keys were not triggering the expected behavior.

#### Display Handling for Long Numbers

Another challenge was managing the display for long numbers. The calculator needed to handle overflow and ensure that the numbers were presented in a readable format. This was resolved by using exponential notation for extremely long numbers, keeping the display user-friendly.

### Key Learnings

* **Debugging with DOM Breakpoints:** Setting breakpoints in the DOM helps in understanding the flow and catching errors in real-time.
* **Effective Logging:** Using console.log strategically can provide insights into the behavior of the code, especially for capturing user inputs and their corresponding actions.
* **User Experience:** Ensuring that the calculator responds intuitively to both mouse clicks and keyboard inputs enhances the user experience significantly.
* **Calculator Logic:** Gained a deeper understanding of the logic behind calculators, including handling various edge cases and ensuring accurate calculations.

### How to Run the Project

You can run the project by clicking the link provided: [Portal to Sourcerer's Calculator](zalbright90.github.io/digit-wizard/) or by visiting the link in the About section of the digit-wizard repository.

### Future Enhancements
**Advanced Operations:** Implementing more advanced mathematical functions.
**Themes:** Adding multiple themes to enhance the visual appeal.
**Memory Functions:** Including memory storage capabilities for calculations.

### Acknowledgments
***Special thanks to The Odin Project for the Foundations course they provide, and Harvard CS50x course in making the Digit Wizard project a success. Both of your courses so far have been invaluable in refining the user experience and functionality, as well as the knowledge I've gained in programming thus far.***

*Special shoutout to my high school computer science teacher Mr. Schafer from 2005 to 07. I had a great time, and should've jumped into development then, but it's never too late'*
