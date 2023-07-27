# Kenzie Academy Challenge: Anagrams 

Follow the instructions provided on `kenzie.instructure` for this challenge. The `script.js` file is a placeholder. Feel free to rename it or add additional files to the project.

*However, leave `words.js` unmodified.*

Customize this README.md however you want to turn it into documentation for your project (including deleting these opening paragraphs). The only required sections are the **Project Plan** and **Reflection** below. Be sure to use proper Markdown syntax in this file (here's a [cheatsheet PDF](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)).

## Project Plan

_(This program will allow the user to find some anagrams of a given word.)_

_(There is a dictionary of words, represented as an array, available in words.js.)_

_(First create an text input field and a button in the HTML file.)_

_(Compare the user's input to the words in the array in the words.js file. Create a function to access the content typed into the text field when the button is clicked. Display these words on the page in a list and ensure that only most current results should be displayed.)_ 

_(When the button in the HTML file is clicked it should fire off the function to find all the dictionary words from the array in the words.js file. Place any matching anagrams inside a data structure.)_

_(Find a way to clear the element that contains the anagrams every time the button is pressed.)_

_(Style your page using the CSS file.)_



## Reflection

What different approaches or techniques did you consider when planning your implementation? What were the advantages and disadvantages of those alternatives?

_(I considered the technique of writing a function that simply checked two given strings 'a' and 'b' to see if they are anagrams and return True/False. Both strings would be compared using the length of both strings to see if they were the same. However the disadvantages were that the user input would only be check against one word instead of a series of words from the word array that contained all letters of the user's input. Also another disadvantage is the words would only be compared by length and not the actual letters that make up the word.)_