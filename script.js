 // Function to fetch and process a text file
async function processTextFile(url) {
  try {
    // Fetch the text file
    const response = await fetch(url);

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Get the text content from the response
    const text = await response.text();

    // Process the text content
    console.log('Text file content:');
    console.log(text);

    // Example processing: Count the number of words
    const words = text.split(/\s+/);
    const wordCount = words.length;
    console.log(`Number of words: ${wordCount}`);

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
    console.log(`Most frequent word: "${mostFrequentWord}" with ${maxFrequency} occurrences`);

  } catch (error) {
    console.error('Error processing text file:', error);
  }
}

// URL of the text file to process
// Replace 'your-username' and 'your-repo' with your actual GitHub username and repository name
const textFileUrl = 'https://your-username.github.io/your-repo/textfile.txt';

// Call the function to process the text file
processTextFile(textFileUrl);
