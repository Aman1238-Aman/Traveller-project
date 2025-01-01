const form = document.getElementById('travel-form');
const suggestionsSection = document.getElementById('suggestions');
const itineraryDiv = document.getElementById('itinerary');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get user inputs
  const destination = document.getElementById('destination').value;
  const budget = document.getElementById('budget').value;
  const preferences = document.getElementById('preferences').value;

  // Generate suggestions based on inputs
  const suggestions = generateSuggestions(destination, budget, preferences);

  // Display suggestions
  displaySuggestions(suggestions);
});

function generateSuggestions(destination, budget, preferences) {
  const activities = {
    adventure: ['Hiking', 'Skydiving', 'Rock Climbing'],
    relaxation: ['Spa Retreat', 'Beach Day', 'Resort Stay'],
    culture: ['Museum Tour', 'Local Cuisine', 'Historical Sites'],
    nature: ['National Park', 'Waterfall Trek', 'Camping'],
  };

  return {
    destination,
    budget,
    activities: activities[preferences],
  };
}

function displaySuggestions({ destination, budget, activities }) {
  itineraryDiv.innerHTML = `
    <p><strong>Destination:</strong> ${destination}</p>
    <p><strong>Budget:</strong> $${budget}</p>
    <p><strong>Suggested Activities:</strong></p>
    <ul>
      ${activities.map(activity => `<li>${activity}</li>`).join('')}
    </ul>
  `;

  document.getElementById('planner-form').classList.add('hidden');
  suggestionsSection.classList.remove('hidden');
}

function resetPlanner() {
  document.getElementById('planner-form').classList.remove('hidden');
  suggestionsSection.classList.add('hidden');
  form.reset();
}
