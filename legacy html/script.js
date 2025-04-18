// Standard categories for the details panel
const STANDARD_DETAIL_CATEGORIES = [
    "Administrative", "Building", "Electrical", "Energy",
    "Existing Building", "Fire", "Historical Building", "Mechanical",
    "Plumbing", "Reference Standards", "Residential"
];

// --- Sample Data Structure (Standardized Details) ---
let CODE_GROUPS_DATA = [
     // Original Data (examples)
    { id: 'alabama', name: 'Alabama', cities: ['Alabama Only', 'Birmingham', 'Montgomery', 'Mobile'], details: {} },
    { id: 'alaska', name: 'Alaska', cities: ['Alaska Only', 'Anchorage', 'Fairbanks', 'Juneau'], details: {} },
    { id: 'arizona', name: 'Arizona', cities: ['Arizona Only', 'Phoenix', 'Tucson', 'Mesa'], details: {} },
    { id: 'arkansas', name: 'Arkansas', cities: ['Arkansas Only', 'Little Rock', 'Fort Smith', 'Hot Springs'], details: {} },
    { id: 'california', name: 'California', cities: ['California Only', 'Menlo Park', 'Redwood', 'Mill Valley', 'Los Angeles', 'San Francisco'], details: {} }, // Keep structure, will be populated
    { id: 'colorado', name: 'Colorado', cities: ['Colorado Only', 'Denver', 'Colorado Springs', 'Aurora'], details: {} },
    { id: 'connecticut', name: 'Connecticut', cities: ['Connecticut Only', 'Bridgeport', 'New Haven', 'Hartford'], details: {} },
    { id: 'delaware', name: 'Delaware', cities: ['Delaware Only', 'Wilmington', 'Dover'], details: {} },
    { id: 'district_of_columbia', name: 'District of Columbia', cities: [], details: {} },
    { id: 'florida', name: 'Florida', cities: ['Florida Only', 'Miami', 'Orlando', 'Tampa'], details: {} },
    { id: 'georgia', name: 'Georgia', cities: ['Georgia Only', 'Atlanta', 'Augusta', 'Savannah'], details: {} },
    { id: 'hawaii', name: 'Hawaii', cities: ['Hawaii Only', 'Honolulu', 'Hilo'], details: {} },
    { id: 'idaho', name: 'Idaho', cities: ['Idaho Only', 'Boise', 'Idaho Falls'], details: {} },
    { id: 'illinois', name: 'Illinois', cities: ['Illinois Only', 'Chicago', 'Springfield'], details: {} },
    { id: 'indiana', name: 'Indiana', cities: ['Indiana Only', 'Indianapolis', 'Fort Wayne'], details: {} },
    { id: 'iowa', name: 'Iowa', cities: ['Iowa Only', 'Des Moines', 'Cedar Rapids'], details: {} },
    { id: 'kansas', name: 'Kansas', cities: ['Kansas Only', 'Wichita', 'Kansas City'], details: {} },
    { id: 'kentucky', name: 'Kentucky', cities: ['Kentucky Only', 'Louisville', 'Lexington'], details: {} },
    { id: 'louisiana', name: 'Louisiana', cities: ['Louisiana Only', 'New Orleans', 'Baton Rouge'], details: {} },
    { id: 'maine', name: 'Maine', cities: ['Maine Only', 'Portland', 'Augusta'], details: {} },
    { id: 'maryland', name: 'Maryland', cities: ['Maryland Only', 'Baltimore', 'Annapolis'], details: {} },
    { id: 'massachusetts', name: 'Massachusetts', cities: ['Massachusetts Only', 'Boston', 'Worcester'], details: {} },
    { id: 'michigan', name: 'Michigan', cities: ['Michigan Only', 'Detroit', 'Grand Rapids'], details: {} },
    { id: 'minnesota', name: 'Minnesota', cities: ['Minnesota Only', 'Minneapolis', 'Saint Paul'], details: {} },
    { id: 'mississippi', name: 'Mississippi', cities: ['Mississippi Only', 'Jackson', 'Gulfport'], details: {} },
    { id: 'missouri', name: 'Missouri', cities: ['Missouri Only', 'Kansas City', 'Saint Louis'], details: {} },
    { id: 'montana', name: 'Montana', cities: ['Montana Only', 'Billings', 'Helena'], details: {} },
    { id: 'nebraska', name: 'Nebraska', cities: ['Nebraska Only', 'Omaha', 'Lincoln'], details: {} },
    { id: 'nevada', name: 'Nevada', cities: ['Nevada Only', 'Las Vegas', 'Reno'], details: {} },
    { id: 'new_hampshire', name: 'New Hampshire', cities: ['New Hampshire Only', 'Manchester', 'Concord'], details: {} },
    { id: 'new_jersey', name: 'New Jersey', cities: ['New Jersey Only', 'Newark', 'Jersey City'], details: {} },
    { id: 'new_mexico', name: 'New Mexico', cities: ['New Mexico Only', 'Albuquerque', 'Santa Fe'], details: {} },
    { id: 'new_york', name: 'New York', cities: ['New York Only', 'New York City', 'Buffalo', 'Albany'], details: {} },
    { id: 'north_carolina', name: 'North Carolina', cities: ['North Carolina Only', 'Charlotte', 'Raleigh'], details: {} },
    { id: 'north_dakota', name: 'North Dakota', cities: ['North Dakota Only', 'Fargo', 'Bismarck'], details: {} },
    { id: 'ohio', name: 'Ohio', cities: ['Ohio Only', 'Columbus', 'Cleveland'], details: {} },
    { id: 'oklahoma', name: 'Oklahoma', cities: ['Oklahoma Only', 'Oklahoma City', 'Tulsa'], details: {} },
    { id: 'oregon', name: 'Oregon', cities: ['Oregon Only', 'Portland', 'Salem'], details: {} },
    { id: 'pennsylvania', name: 'Pennsylvania', cities: ['Pennsylvania Only', 'Philadelphia', 'Pittsburgh'], details: {} },
    { id: 'rhode_island', name: 'Rhode Island', cities: ['Rhode Island Only', 'Providence', 'Warwick'], details: {} },
    { id: 'south_carolina', name: 'South Carolina', cities: ['South Carolina Only', 'Columbia', 'Charleston'], details: {} },
    { id: 'south_dakota', name: 'South Dakota', cities: ['South Dakota Only', 'Sioux Falls', 'Pierre'], details: {} },
    { id: 'tennessee', name: 'Tennessee', cities: ['Tennessee Only', 'Nashville', 'Memphis'], details: {} },
    { id: 'texas', name: 'Texas', cities: ['Texas Only', 'Houston', 'Dallas', 'Austin'], details: {} },
    { id: 'utah', name: 'Utah', cities: ['Utah Only', 'Salt Lake City', 'Provo'], details: {} },
    { id: 'vermont', name: 'Vermont', cities: ['Vermont Only', 'Burlington', 'Montpelier'], details: {} },
    { id: 'virginia', name: 'Virginia', cities: ['Virginia Only', 'Virginia Beach', 'Richmond'], details: {} },
    { id: 'washington', name: 'Washington', cities: ['Washington Only', 'Seattle', 'Olympia'], details: {} },
    { id: 'west_virginia', name: 'West Virginia', cities: ['West Virginia Only', 'Charleston', 'Huntington'], details: {} },
    { id: 'wisconsin', name: 'Wisconsin', cities: ['Wisconsin Only', 'Milwaukee', 'Madison'], details: {} },
    { id: 'wyoming', name: 'Wyoming', cities: ['Wyoming Only', 'Cheyenne', 'Casper'], details: {} },
];

// Populate standardized details for each state
CODE_GROUPS_DATA = CODE_GROUPS_DATA.map(state => {
    const newDetails = {};
    STANDARD_DETAIL_CATEGORIES.forEach(category => {
        // Create placeholder text like "California Building Code Placeholder"
        newDetails[category] = [`${state.name} ${category} Code Placeholder`];
    });
    // Special handling for California Fire codes? Or keep it simple?
    // Keeping it simple for now to match the request for standardization.
    // if (state.id === 'california') { /* Add specific multi-line fire codes if needed */ }

    return { ...state, details: newDetails };
});

// --- State Variables ---
// ID of the state that has the current *selection*
let activeStateId = 'california';
// Name of the city currently selected within the activeStateId
let selectedCity = 'California Only';
// Search term entered by the user
let searchTerm = '';
// Set to keep track of which states are currently expanded (multiple can be open)
let expandedStateIds = new Set(['california']); // Start with California expanded
let hoverTimeout = null; // Timeout ID for hiding hover panel
let persistentPanelContent = ''; // Store HTML for the selected item

// --- DOM References ---
const searchInput = document.getElementById('search-input');
const listContainer = document.getElementById('list-container');
const hoverPanel = document.getElementById('hover-panel'); // Ref for hover panel
const wrapper = document.querySelector('.selector-wrapper'); // Ref for wrapper


// --- SVG Icons --- (Basic representations)
const svgChevron = `<svg class="chevron icon-chevron" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.29289 18.7071C8.90237 19.0976 8.90237 19.7308 9.29289 20.1213C9.68342 20.5118 10.3166 20.5118 10.7071 20.1213L16.7071 14.1213C17.0976 13.7308 17.0976 13.0976 16.7071 12.7071L10.7071 6.70711C10.3166 6.31658 9.68342 6.31658 9.29289 6.70711C8.90237 7.09763 8.90237 7.7308 9.29289 8.12132L14.1716 13.4142L9.29289 18.7071Z" fill="#9A9A9E"/></svg>`;
const svgRadioOn = `<svg class="radio icon-radio-on" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7Z" fill="#0A7AFF"/></svg>`; // Blue fill
const svgRadioOff = `<svg class="radio icon-radio-off" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#8A8A8E"/></svg>`;


// --- Functions ---

/**
 * Generates the HTML string for the details of a given state and optionally a city.
 * @param {string} stateId - The ID of the state.
 * @param {string} [city] - Optional: The specific city selected/hovered.
 * @returns {string} - The HTML string for the details panel, or an empty string if no details.
 */
function getDetailsHtml(stateId, city) { // Added city parameter
    const stateData = CODE_GROUPS_DATA.find(s => s.id === stateId);
    const details = stateData ? stateData.details : null;
    let detailsHtml = '';

    if (!details) {
        return '<p style="padding: 10px; color: #8A8A8E;">No details available.</p>';
    }

    const stateOnlyCityName = `${stateData.name} Only`;
    const isSpecificCity = city && city !== stateOnlyCityName;

    // Add Municipal Codes section if a specific city is provided
    if (isSpecificCity) {
        detailsHtml += `<h4>Municipal Codes</h4>`;
        detailsHtml += `<p>${city}</p>`;
    }

    // Add standard detail categories
    STANDARD_DETAIL_CATEGORIES.forEach(category => {
        if (details[category]) { // Check if category exists in details
            detailsHtml += `<h4>${category}</h4>`;
            if (Array.isArray(details[category])) {
                details[category].forEach(item => {
                    detailsHtml += `<p>${item}</p>`;
                });
            } else {
                detailsHtml += `<p>${details[category]}</p>`;
            }
        }
    });

    // Handle case where details object exists but is empty or only had municipal codes
    if (detailsHtml === '' || (isSpecificCity && detailsHtml === `<h4>Municipal Codes</h4><p>${city}</p>`)) {
         // If only Municipal Codes were added, or nothing was added, show default message
         if (!isSpecificCity) { // If it wasn't a specific city, show the general no details message
             detailsHtml = '<p style="padding: 10px; color: #8A8A8E;">No details available.</p>';
         } else if (detailsHtml.includes('Municipal Codes')) {
             // Keep the Municipal Codes part, but add a note if *other* details are missing
             detailsHtml += '<p style="color: #8A8A8E; margin-top: 10px;">No specific code details available for this category.</p>';
         }
    }

    return detailsHtml;
}

/**
 * Shows the hover details panel with content for the specified state/city.
 * This now TEMPORARILY overrides the persistent content.
 * @param {string} stateId - The ID of the state being hovered.
 * @param {string} [city] - Optional: The name of the city being hovered.
 */
function showHoverDetails(stateId, city) {
    clearTimeout(hoverTimeout); // Cancel any pending hide timer
    hoverTimeout = null;

    // Generate temporary HTML for the hovered item, passing the city
    let hoverContent = getDetailsHtml(stateId, city);

    // Removed the logic to manually prepend city info - now handled by getDetailsHtml

    hoverPanel.innerHTML = hoverContent; // Display temporary hover content

    // Ensure panel is visible if it wasn't (might happen on first hover)
    if (!hoverPanel.classList.contains('visible')) {
        hoverPanel.classList.add('visible');
    }
}

/**
 * Hides the TEMPORARY hover details, restoring the persistent content after a delay.
 * @param {boolean} immediate - Optional: If true, hide immediately.
 */
function hideHoverDetails(immediate = false) {
    clearTimeout(hoverTimeout); // Clear existing timer
    if (immediate) {
        hoverPanel.innerHTML = persistentPanelContent; // Restore immediately
    } else {
        // Set a timer to hide the panel after a short delay (e.g., 200ms)
        // This allows moving the mouse onto the panel itself
        hoverTimeout = setTimeout(() => {
            if (hoverTimeout !== null) { // Check if it wasn't cancelled
                hoverPanel.innerHTML = persistentPanelContent; // Restore persistent content
                hoverTimeout = null;
            }
        }, 200);
    }
}

/**
 * Handles clicking on a state header. Toggles the expansion state
 * for that state without affecting the active selection.
 * @param {string} stateId - The ID of the state header that was clicked.
 */
function handleStateClick(stateId) {
    // Toggle the expansion state for the clicked state ID
    if (expandedStateIds.has(stateId)) {
        expandedStateIds.delete(stateId);
    } else {
        expandedStateIds.add(stateId);
    }
    // Re-render the list to show the updated expansion state
    renderList();
}

/**
 * Handles clicking on a city row (radio button).
 * Sets the clicked city/state as the active selection.
 * Updates the persistent right panel content.
 * @param {string} stateId - The ID of the parent state.
 * @param {string} city - The name of the city that was clicked.
 */
function handleCityClick(stateId, city) {
    // Update the selection state variables
    activeStateId = stateId;
    selectedCity = city;

    // Get details HTML, passing the selected city
    let newPanelHtml = getDetailsHtml(stateId, city);

    // Removed the logic to manually prepend city info - now handled by getDetailsHtml

    // Update the persistent content and the panel's current display
    persistentPanelContent = newPanelHtml;
    hoverPanel.innerHTML = persistentPanelContent;

    // Ensure panel is visible
    if (!hoverPanel.classList.contains('visible')) {
        hoverPanel.classList.add('visible');
    }

    // Re-render the list to reflect the new active selection
    renderList();
}

/**
 * Placeholder function for the "Send us a request" link.
 */
function handleRequestClick() {
    alert("Handle 'Send us a request' action here (e.g., show a form, navigate).");
}

/**
 * Renders the entire list of states based on current state variables
 * (searchTerm, activeStateId, selectedCity, expandedStateIds).
 */
function renderList() {
    listContainer.innerHTML = ''; // Clear previous list

    const lowerSearchTerm = searchTerm.toLowerCase();

    const filteredStates = CODE_GROUPS_DATA.filter(state =>
        state.name.toLowerCase().includes(lowerSearchTerm) ||
        state.id.toLowerCase().includes(lowerSearchTerm) ||
        // Also check if any city name includes the search term
        state.cities.some(city => city.toLowerCase().includes(lowerSearchTerm))
    );

    if (filteredStates.length === 0 && searchTerm) {
        listContainer.innerHTML = '<p style="color: #8A8A8E; padding: 15px;">No states or cities found.</p>';
         hideHoverDetails(true); // Hide panel if search yields nothing
        return;
    }

    filteredStates.forEach(state => {
        // Determine if the current state *contains* the active selection
        const hasActiveSelection = state.id === activeStateId;
        // Determine if the current state should be expanded:
        // - If searching, expand all results.
        // - If not searching, use the manually expanded set.
        const isManuallyExpanded = expandedStateIds.has(state.id);
        const isExpanded = searchTerm ? true : isManuallyExpanded;

        // Create state item container
        const stateItemDiv = document.createElement('div');
        stateItemDiv.className = 'state-item';
        // Add 'active-selection' class only if this state holds the active city
        if (hasActiveSelection) {
            stateItemDiv.classList.add('active-selection');
        }
        // Add 'expanded' class if this state is in the expanded set
        if (isExpanded) {
            stateItemDiv.classList.add('expanded');
        }

        // Create state header
        const stateHeaderDiv = document.createElement('div');
        stateHeaderDiv.className = 'state-header';
        stateHeaderDiv.innerHTML = `
            ${svgChevron}
            <span class="state-name">${state.name}</span>
            ${hasActiveSelection ? '<span class="active-badge">Active</span>' : ''}
        `;
        // Click handler now only toggles expansion
        stateHeaderDiv.onclick = () => handleStateClick(state.id);
         // --- Add Hover Listeners for State ---
        stateHeaderDiv.onmouseover = () => showHoverDetails(state.id);
        stateHeaderDiv.onmouseout = () => hideHoverDetails();
        stateItemDiv.appendChild(stateHeaderDiv);


        // Create city list (only if expanded)
        if (isExpanded) {
            // --- Special Case: State with NO cities (e.g., D.C.) ---
            if (state.cities.length === 0) {
                const noCitiesDiv = document.createElement('div');
                noCitiesDiv.className = 'not-listed-container';
                // Add some padding to align roughly with where cities would start
                noCitiesDiv.style.paddingLeft = '15px';
                noCitiesDiv.style.paddingRight = '15px';
                noCitiesDiv.style.paddingTop = '10px';
                noCitiesDiv.style.paddingBottom = '10px';
                noCitiesDiv.style.borderTop = '1px solid #48484A'; // Separator

                noCitiesDiv.innerHTML = `
                    <span class="not-listed-text">State not listed?</span>
                    <span class="request-link">Send us a request</span>
                `;
                noCitiesDiv.querySelector('.request-link').onclick = handleRequestClick;
                stateItemDiv.appendChild(noCitiesDiv);
            } else {
                // --- Standard Case: State with cities --- 
                const cityListDiv = document.createElement('div');
                cityListDiv.className = 'city-list';

                // Determine if this state has a "[State Name] Only" option
                const hasStateOnlyOption = state.cities.includes(`${state.name} Only`);
                const citiesToShow = state.cities; // Use all cities by default

                // Determine cities to show based on search term, but only if state name itself doesn't match fully
                // (Avoid filtering cities if the user searched for the state name directly)
                let filteredCities = citiesToShow;
                if (searchTerm && !state.name.toLowerCase().includes(lowerSearchTerm)) {
                    filteredCities = citiesToShow.filter(city => city.toLowerCase().includes(lowerSearchTerm));
                }

                 // Only render cities if there are any (after potential search filtering)
                if (filteredCities.length > 0) {
                     filteredCities.forEach(city => {
                        const isCitySelected = hasActiveSelection && selectedCity === city;
                        const cityRowDiv = document.createElement('div');
                        cityRowDiv.className = 'city-row';
                        if (isCitySelected) {
                            cityRowDiv.classList.add('selected');
                        }

                        // Check if the current item is the "[State] Only" code
                        const stateOnlyCityName = `${state.name} Only`;
                        const isStateCode = city === stateOnlyCityName;

                        // Only append '+ State' if it's a city, not the state code
                        cityRowDiv.innerHTML = `
                            ${isCitySelected ? svgRadioOn : svgRadioOff}
                            <span class="city-name">
                                ${city}
                                ${!isStateCode ? '<span style="color: #8A8A8E; font-weight: normal;">+ State</span>' : ''}
                            </span>
                        `;
                        cityRowDiv.onclick = () => handleCityClick(state.id, city);
                         // --- Add Hover Listeners for City ---
                        cityRowDiv.onmouseover = () => showHoverDetails(state.id, city); // Pass city name
                        cityRowDiv.onmouseout = () => hideHoverDetails();
                        cityListDiv.appendChild(cityRowDiv);
                    });

                    // Create and add the "Not listed" section AFTER the city loop (or if loop didn't run)
                    const notListedDiv = document.createElement('div');
                    notListedDiv.className = 'not-listed-container';
                    // Adjust padding if no cities were rendered above it
                    if (filteredCities.length === 0) {
                        notListedDiv.style.paddingTop = '10px';
                    }

                    // Determine the correct text based on whether it's a multi-city state
                    const notListedText = hasStateOnlyOption ? "City not listed?" : "State not listed?";

                    notListedDiv.innerHTML = `
                         <span class="not-listed-text">${notListedText} </span>
                         <span class="request-link">Send us a request</span>
                      `;
                    notListedDiv.querySelector('.request-link').onclick = handleRequestClick;
                    cityListDiv.appendChild(notListedDiv);
                 }


                stateItemDiv.appendChild(cityListDiv);
            }
        }

        listContainer.appendChild(stateItemDiv);
    });
}

// --- Event Listeners ---
searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value; // Store original case for potential future use, filter uses lowercase
    renderList();
});

// Add listeners to the hover panel itself to keep the persistent content visible
// or cancel the hide timer if the mouse enters the panel during hover.
hoverPanel.onmouseover = () => {
    clearTimeout(hoverTimeout); // Cancel hide timer if mouse enters panel
    hoverTimeout = null;
};
hoverPanel.onmouseout = () => {
    // When leaving the panel itself, restore the persistent content
    // after the standard delay (acts like leaving a list item)
    hideHoverDetails(); // Start hide timer if mouse leaves panel
};


// --- Initial Render ---
renderList();

// --- Initial Panel Setup ---
// Get initial content based on default selection, passing the city
persistentPanelContent = getDetailsHtml(activeStateId, selectedCity); // Pass initial city

// Removed the logic to manually prepend city info - now handled by getDetailsHtml

// Set the initial content and make the panel visible
hoverPanel.innerHTML = persistentPanelContent;
hoverPanel.classList.add('visible'); 