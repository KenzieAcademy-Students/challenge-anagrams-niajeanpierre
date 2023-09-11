// Your Code Here.
const dictionary = words;

function areAnagrams(word1, word2) {
  return (
    word1.toLowerCase().split("").sort().join("") ===
    word2.toLowerCase().split("").sort().join("")
  );
}

function findAnagrams(userWord, wordList) {
  return wordList.filter((word) => areAnagrams(userWord, word));
}

function displayResults(results, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  if (results.length === 0) {
    container.textContent = "No anagrams found for the given word.";
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

function findAnagramSets(wordList, setSize) {
  const anagramSets = {};
  
  // Group words by their sorted letter patterns
  for (const word of wordList) {
    const sortedWord = word.toLowerCase().split("").sort().join("");
    
    if (!anagramSets[sortedWord]) {
      anagramSets[sortedWord] = [word];
    } else {
      anagramSets[sortedWord].push(word);
    }
  }

  // Filter anagram sets with at least 'setSize' words
  return Object.values(anagramSets).filter(set => set.length >= setSize);
}

function displayAnagramSets(sets, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  if (sets.length === 0) {
    container.textContent = `No sets of ${setSize} or more anagrams found.`;
  } else {
    sets.forEach(set => {
      const ul = document.createElement("ul");
      set.forEach(word => {
        const li = document.createElement("li");
        li.textContent = word;
        ul.appendChild(li);
      });
      container.appendChild(ul);
    });
  }
}

// Find and display sets of 5 or more anagrams on page load
const setSize = 5; // Define the set size (5 or more)
const setsOfAnagrams = findAnagramSets(dictionary, setSize);
displayAnagramSets(setsOfAnagrams, "anagramSets");

document.getElementById("find").addEventListener("click", () => {
  const userWord = document.getElementById("inputText").value.trim();
  const anagramsList = findAnagrams(userWord, dictionary);

  displayResults(anagramsList, "results");
});

