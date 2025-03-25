async function searchImages() {
    const query = document.getElementById("searchQuery").value;
    if (!query) {
        alert("Please enter a search query!");
        return;
    }

    const apiKey = "AniMouCHfpKJdXXoo3KQCLYYxgCP4ZshSz-A4k5n4hI"; // Unsplash API key डालें
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = "";

        data.results.forEach(photo => {
            const imgElement = document.createElement("img");
            imgElement.src = photo.urls.small;
            resultsDiv.appendChild(imgElement);
        });

    } catch (error) {
        console.error("Error fetching images:", error);
    }
}
