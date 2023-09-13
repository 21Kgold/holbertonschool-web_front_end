function createElement(data) {
    const p = document.createElement("p");
    p.innerHTML = data;
    document.body.appendChild(p);
}

function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
  
    xhr.open("GET", url, true);

    // Event handler
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const pageId = Object.keys(response.query.pages)[0];
        const article = response.query.pages[pageId].extract;
  
        callback(article);
      }
    };
  
    xhr.send();
  }

  queryWikipedia(createElement);