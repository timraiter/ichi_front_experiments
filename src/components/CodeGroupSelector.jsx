import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import StateList from './StateList';
import HoverPanel from './HoverPanel';
import styles from './CodeGroupSelector.module.css';

// Standard categories for the details panel
const STANDARD_DETAIL_CATEGORIES = [
  "Administrative", "Building", "Electrical", "Energy",
  "Existing Building", "Fire", "Historical Building", "Mechanical",
  "Plumbing", "Reference Standards", "Residential"
];

// Sample data structure
const CODE_GROUPS_DATA = [
  { id: 'alabama', name: 'Alabama', cities: ['Alabama Only', 'Birmingham', 'Montgomery', 'Mobile'], details: {} },
  { id: 'alaska', name: 'Alaska', cities: ['Alaska Only', 'Anchorage', 'Fairbanks', 'Juneau'], details: {} },
  { id: 'arizona', name: 'Arizona', cities: ['Arizona Only', 'Phoenix', 'Tucson', 'Mesa'], details: {} },
  { id: 'arkansas', name: 'Arkansas', cities: ['Arkansas Only', 'Little Rock', 'Fort Smith', 'Hot Springs'], details: {} },
  { id: 'california', name: 'California', cities: ['California Only', 'Menlo Park', 'Redwood', 'Mill Valley', 'Los Angeles', 'San Francisco'], details: {} },
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
  // More states would go here...
];

// Populate standardized details for each state
const populatedData = CODE_GROUPS_DATA.map(state => {
  const newDetails = {};
  STANDARD_DETAIL_CATEGORIES.forEach(category => {
    if (category === "Fire") {
      // Add comprehensive list of fire books for all states
      newDetails[category] = [
        "NFPA 1: Fire Code",
        "NFPA 13: Standard for Installation of Sprinkler Systems",
        "NFPA 25: Standard for Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems",
        "NFPA 70: National Electrical Code",
        "NFPA 72: National Fire Alarm and Signaling Code",
        "NFPA 80: Standard for Fire Doors and Other Opening Protectives",
        "NFPA 101: Life Safety Code",
        "NFPA 5000: Building Construction and Safety Code",
        "International Fire Code (IFC)",
        "Fire Protection Handbook",
        "Handbook of Fire Protection Engineering"
      ];
    } else {
      newDetails[category] = [`${state.name} ${category} Code Placeholder`];
    }
  });
  return { ...state, details: newDetails };
});

function CodeGroupSelector() {
  // State variables
  const [activeStateId, setActiveStateId] = useState('california');
  const [selectedCity, setSelectedCity] = useState('California Only');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedStateIds, setExpandedStateIds] = useState(new Set(['california']));
  const [hoverInfo, setHoverInfo] = useState(null);
  const [persistentPanelContent, setPersistentPanelContent] = useState({
    stateId: 'california',
    city: 'California Only'
  });

  // Toggle state expansion
  const handleStateClick = (stateId) => {
    setExpandedStateIds(prevExpanded => {
      const newExpanded = new Set(prevExpanded);
      if (newExpanded.has(stateId)) {
        newExpanded.delete(stateId);
      } else {
        newExpanded.add(stateId);
      }
      return newExpanded;
    });
  };

  // Handle city selection
  const handleCityClick = (stateId, city) => {
    setActiveStateId(stateId);
    setSelectedCity(city);
    setPersistentPanelContent({ stateId, city });
    
    // Collapse all states except the active one
    setExpandedStateIds(new Set([stateId]));
  };

  // Handle mouse over for details panel
  const handleMouseOver = (stateId, city = null) => {
    setHoverInfo({ stateId, city });
  };

  // Handle mouse out for details panel
  const handleMouseOut = () => {
    setHoverInfo(null);
  };

  // Handle request click
  const handleRequestClick = () => {
    alert("Handle 'Send us a request' action here (e.g., show a form, navigate).");
  };

  // Filter states based on search term
  const filteredStates = populatedData.filter(state => 
    state.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    state.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    state.cities.some(city => city.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className={styles.selectorWrapper}>
      <div className={styles.codeGroupSelector}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <StateList 
          filteredStates={filteredStates}
          searchTerm={searchTerm}
          expandedStateIds={expandedStateIds}
          activeStateId={activeStateId}
          selectedCity={selectedCity}
          handleStateClick={handleStateClick}
          handleCityClick={handleCityClick}
          handleRequestClick={handleRequestClick}
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
        />
      </div>
      <HoverPanel 
        hoverInfo={hoverInfo} 
        persistentContent={persistentPanelContent} 
        data={populatedData} 
        categories={STANDARD_DETAIL_CATEGORIES}
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      />
    </div>
  );
}

export default CodeGroupSelector; 