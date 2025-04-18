import React, { useState, useEffect } from 'react';
import styles from './StateItem.module.css';
import { ChevronIcon, RadioOnIcon, RadioOffIcon } from './SVGIcons';

function StateItem({
  state,
  isActive,
  isExpanded,
  selectedCity,
  handleStateClick,
  handleCityClick,
  handleRequestClick,
  handleMouseOver,
  handleMouseOut
}) {
  // Track if this is a newly activated state for animation
  const [isNewlyActive, setIsNewlyActive] = useState(false);
  
  // When isActive changes to true, trigger the animation
  useEffect(() => {
    if (isActive) {
      setIsNewlyActive(true);
      const timer = setTimeout(() => setIsNewlyActive(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  // CSS classes for styling
  const stateItemClass = `${styles.stateItem} ${isActive ? styles.activeSelection : ''} ${isExpanded ? styles.expanded : ''}`;
  
  // Check if this state has cities
  const hasCities = state.cities.length > 0;
  
  return (
    <div className={stateItemClass}>
      {/* State Header */}
      <div 
        className={styles.stateHeader}
        onClick={() => handleStateClick(state.id)}
        onMouseOver={() => handleMouseOver(state.id)}
        onMouseOut={handleMouseOut}
      >
        <ChevronIcon className={styles.chevron} />
        <span className={styles.stateName}>{state.name}</span>
        {isActive && (
          <span className={`${styles.activeBadge} ${isNewlyActive ? styles.animateBadge : ''}`}>
            Active
          </span>
        )}
      </div>

      {/* City List - only shown if expanded */}
      {isExpanded && (
        <>
          {!hasCities ? (
            // Special case: State with no cities (e.g., DC)
            <div className={styles.notListedContainer}>
              <span className={styles.notListedText}>State not listed?</span>
              <span className={styles.requestLink} onClick={handleRequestClick}>
                Send us a request
              </span>
            </div>
          ) : (
            // Standard case: State with cities
            <div className={styles.cityList}>
              {state.cities.map(city => {
                const isCitySelected = isActive && selectedCity === city;
                const isStateCode = city === `${state.name} Only`;
                
                return (
                  <div 
                    key={city}
                    className={`${styles.cityRow} ${isCitySelected ? styles.selected : ''}`}
                    onClick={() => handleCityClick(state.id, city)}
                    onMouseOver={() => handleMouseOver(state.id, city)}
                    onMouseOut={handleMouseOut}
                  >
                    {isCitySelected ? (
                      <RadioOnIcon className={`${styles.radio} ${styles.radioOn}`} />
                    ) : (
                      <RadioOffIcon className={`${styles.radio} ${styles.radioOff}`} />
                    )}
                    <span className={styles.cityName}>
                      {city}
                      {!isStateCode && <span className={styles.plusState}>+ State</span>}
                    </span>
                  </div>
                );
              })}

              {/* "Not listed" section */}
              <div className={styles.notListedContainer}>
                <span className={styles.notListedText}>
                  {state.cities.includes(`${state.name} Only`) ? "City not listed?" : "State not listed?"}
                </span>
                <span className={styles.requestLink} onClick={handleRequestClick}>
                  Send us a request
                </span>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default StateItem; 