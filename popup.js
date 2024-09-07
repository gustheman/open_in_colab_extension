chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentUrl = tabs[0].url;
  
    // Check if the URL ends with .ipynb
    if (currentUrl.endsWith('.ipynb')) {
      // Extract the part of the URL after the GitHub domain
      const urlParts = currentUrl.split('/');
      const notebookPath = urlParts.slice(3).join('/'); // Assuming GitHub structure
  
      // Construct the Colab URL
      const colabUrl = `https://colab.research.google.com/github/` + notebookPath;
  
      // Open the Colab URL in a new tab
      chrome.tabs.create({ url: colabUrl });
    } else {
      alert('This page does not appear to be a Jupyter Notebook.');
    }
  });

//   https://colab.research.google.com/github/datacommonsorg/llm-tools/blob/main/notebooks/data_gemma_rag.ipynb
//   https://colab.sandbox.google.com/github/datacommonsorg/llm-tools/blob/main/notebooks/data_gemma_rag.ipynb
                                      github/datacommonsorg/llm-tools/blob/main/notebooks/data_gemma_rag.ipynb