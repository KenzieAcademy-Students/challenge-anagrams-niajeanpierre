// Your Code Here.
const dictionary = words;
console.log(dictionary); // Check to see if all words are showing up from the word array in the word.js file.

function areAnagrams(word1, word2) {
  return (
    word1.toLowerCase().split("").sort().join("") ===
    word2.toLowerCase().split("").sort().join("")
  );
}

function findAnagrams(userWord, wordList) {
  return wordList.filter((word) => areAnagrams(userWord, word));
}

function displayResults(results) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (results.length === 0) {
    resultsDiv.textContent = "No anagrams found for the given word.";
  } else {
    const ul = document.createElement("ul");
    results.forEach((anagram) => {
      const li = document.createElement("li");
      li.textContent = anagram;
      ul.appendChild(li);
    });
    resultsDiv.appendChild(ul);
  }
}

function findAndDisplayAnagrams() {
  const userWord = document.getElementById("inputText").value.trim();
  const anagramsList = findAnagrams(userWord, dictionary);

  displayResults(anagramsList);
}

document.getElementById("find").addEventListener("click", () => {
  findAndDisplayAnagrams();
});
