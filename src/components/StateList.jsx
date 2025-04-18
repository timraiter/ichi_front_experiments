import React from 'react';
import styles from './StateList.module.css';
import StateItem from './StateItem';

function StateList({
  filteredStates,
  searchTerm,
  expandedStateIds,
  activeStateId,
  selectedCity,
  handleStateClick,
  handleCityClick,
  handleRequestClick,
  handleMouseOver,
  handleMouseOut
}) {
  return (
    <div className={styles.listContainer}>
      {filteredStates.length === 0 && searchTerm ? (
        <p className={styles.noResults}>No states or cities found.</p>
      ) : (
        filteredStates.map(state => (
          <StateItem
            key={state.id}
            state={state}
            isActive={state.id === activeStateId}
            isExpanded={searchTerm ? true : expandedStateIds.has(state.id)}
            selectedCity={selectedCity}
            handleStateClick={handleStateClick}
            handleCityClick={handleCityClick}
            handleRequestClick={handleRequestClick}
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
          />
        ))
      )}
    </div>
  );
}

export default StateList; 