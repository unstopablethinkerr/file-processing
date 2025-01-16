// Function to fetch and process a text file
async function processTextFile(url) {
  try {
    console.log('Fetching text file from:', url);

    // Fetch the text file
    const response = await fetch(url);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Get the text content from the response
    const text = await response.text();
    console.log('Text file content:', text);

    // Display the text content on the HTML page
    document.getElementById('content').innerText = text;

    // Example processing: Count the number of words
    const words = text.split(/\s+/);
    const wordCount = words.length;
    document.getElementById('word-count').innerText = `Number of words: ${wordCount}`;

    // Example processing: Find the most frequent word
    const wordFrequency = words.reduce((freq, word) => {
      word = word.toLowerCase(); // Convert to lowercase for case-insensitive comparison
      freq[word] = (freq[word] || 0) + 1;
      return freq;
    }, {});

    let mostFrequentWord = '';
    let maxFrequency = 0;
    for (const word in wordFrequency) {
      if (wordFrequency[word] > maxFrequency) {
        mostFrequentWord = word;
        maxFrequency = wordFrequency[word];
      }
    }
    document.getElementById('most-frequent-word').innerText = `Most frequent word: "${mostFrequentWord}" with ${maxFrequency} occurrences`;

  } catch (error) {
    console.error('Error processing text file:', error);
    document.getElementById('content').innerText = 'Error loading text file.';
  }
}

// URL of the text file to process
// Replace 'your-username' and 'your-repo' with your actual GitHub username and repository name
const textFileUrl = 'https://your-username.github.io/your-repo/textfile.txt';

// Call the function to process the text file
processTextFile(textFileUrl);
