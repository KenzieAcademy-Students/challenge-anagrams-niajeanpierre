// Your Code Here.
const dictionary = words;

function areAnagrams(word1, word2) {
  return (
    word1.toLowerCase().split("").sort().join("") ===
    word2.toLowerCase().split("").sort().join("")
  );
}

function findTwoWordAnagrams(userInput, wordList) {
  const userWords = userInput.toLowerCase().split(" ").filter(word => word.trim() !== "");
  const twoWordAnagrams = [];

  if (userWords.length < 2) {
    return twoWordAnagrams; // Not enough words for two-word anagrams
  }

  for (let i = 0; i < userWords.length; i++) {
    for (let j = i + 1; j < userWords.length; j++) {
      const word1 = userWords[i];
      const word2 = userWords[j];
      if (wordList.includes(word1) && wordList.includes(word2) && areAnagrams(word1, word2)) {
        twoWordAnagrams.push(`${word1} + ${word2}`);
      }
    }
  }

  return twoWordAnagrams;
}

function generateMultiWordAnagrams(userInput, wordList) {
  const userWords = userInput.toLowerCase().split(" ").filter(word => word.trim() !== "");
  const multiWordAnagrams = [];

  // Recursive function to generate multi-word anagrams
  function findAnagrams(currentAnagram, remainingWords) {
    if (remainingWords.length === 0) {
      const anagram = currentAnagram.join(" + ");
      if (wordList.includes(anagram.replace(/ /g, ""))) {
        multiWordAnagrams.push(anagram);
      }
      return;
    }

    for (let i = 0; i < remainingWords.length; i++) {
      const word = remainingWords[i];
      const newAnagram = currentAnagram.concat(word);
      const newRemainingWords = remainingWords.slice(0, i).concat(remainingWords.slice(i + 1));
      findAnagrams(newAnagram, newRemainingWords);
    }
  }

  findAnagrams([], userWords);

  return multiWordAnagrams;;
}

function displayResults(results, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  if (results.length === 0) {
    container.textContent = "No anagrams found for the given input.";
  } else {
    const ul = document.createElement("ul");
    results.forEach((anagram) => {
      const li = document.createElement("li");
      li.textContent = anagram;
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }
}

document.getElementById("findTwoWordAnagrams").addEventListener("click", () => {
  const userInput = document.getElementById("inputTextTwoWord").value.trim();
  const twoWordAnagrams = findTwoWordAnagrams(userInput, dictionary);

  displayResults(twoWordAnagrams, "twoWordAnagramsResults");
});

document.getElementById("findMultiWordAnagrams").addEventListener("click", () => {
  const userInput = document.getElementById("inputTextMultiWord").value.trim();
  const multiWordAnagrams = generateMultiWordAnagrams(userInput, dictionary);

  displayResults(multiWordAnagrams, "multiWordAnagramsResults");
});
