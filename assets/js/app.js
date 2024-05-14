function groupAnagrams() {
    const input = document.getElementById("input").value.trim();
    const strings = input.split(",").map(str => str.trim());
  
    const groupedAnagrams = groupStrings(strings);
  
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<strong>Grouped Anagrams:</strong><br>" + JSON.stringify(groupedAnagrams);
  }
  
  function groupStrings(strings) {
    const map = new Map();
  
    for (const str of strings) {
      const sortedStr = str.split("").sort().join("");
      if (!map.has(sortedStr)) {
        map.set(sortedStr, [str]);
      } else {
        map.get(sortedStr).push(str);
      }
    }
  
    return Array.from(map.values());
  }
  