function searchDestinations() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const recommendations = {
        beach: ["beach", "sea", "sun"],
        temple: ["temple", "culture", "spiritual"],
        country: ["country","nepal", "australia", "france", "italy"]
    };

    let matchedDestination = null;
    let suggestions = [];

    for (let category in recommendations) {
        recommendations[category].forEach(keyword => {
            if (searchQuery.includes(keyword)) {
                matchedDestination = category;
                suggestions.push(category); // Adding category to suggestions
            }
        });
    }

    // Clear previous suggestions
    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = '';

    if (matchedDestination) {
        alert(`Found matching recommendations for ${matchedDestination} destinations! please scroll down`);
        
        // Show relevant content dynamically
        document.getElementById(`${matchedDestination}-recommendation`).style.display = 'block';
        
        // Display suggestions below the search bar
        suggestions.forEach(suggestion => {
            const suggestionElement = document.createElement('div');
            suggestionElement.textContent = `Suggested: ${suggestion}`;
            suggestionsContainer.appendChild(suggestionElement);
        });

    } else {
        alert("No matching destinations found.");
    }
}



//////model code
// Function to open the modal
function bookNow() {
    document.getElementById('bookingModal').style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById('bookingModal').style.display = "none";
}

// Close modal if the user clicks outside of the modal content
window.onclick = function(event) {
    if (event.target == document.getElementById('bookingModal')) {
        closeModal();
    }
}

