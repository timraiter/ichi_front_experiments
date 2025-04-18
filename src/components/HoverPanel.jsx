import React, { useMemo } from 'react';
import styles from './HoverPanel.module.css';

function HoverPanel({
  hoverInfo,
  persistentContent,
  data,
  categories,
  handleMouseOver,
  handleMouseOut
}) {
  // Get details HTML based on state and city info
  const getDetailsContent = (stateId, city) => {
    const stateData = data.find(s => s.id === stateId);
    if (!stateData) {
      return <p className={styles.noDetails}>No details available.</p>;
    }

    const details = stateData.details;
    const stateOnlyCityName = `${stateData.name} Only`;
    const isSpecificCity = city && city !== stateOnlyCityName;

    // Empty array to collect detail sections
    const detailSections = [];

    // Add Municipal Codes section if a specific city is provided
    if (isSpecificCity) {
      detailSections.push(
        <div key="municipal-codes">
          <h4>Municipal Codes</h4>
          <p>{city}</p>
        </div>
      );
    }

    // Add standard detail categories
    categories.forEach(category => {
      if (details[category]) {
        detailSections.push(
          <div key={category}>
            <h4>{category}</h4>
            {Array.isArray(details[category]) ? (
              details[category].map((item, idx) => <p key={idx}>{item}</p>)
            ) : (
              <p>{details[category]}</p>
            )}
          </div>
        );
      }
    });

    // Handle case where details object exists but is empty or only had municipal codes
    if (detailSections.length === 0 || (isSpecificCity && detailSections.length === 1)) {
      if (!isSpecificCity) {
        return <p className={styles.noDetails}>No details available.</p>;
      } else if (detailSections.length === 1) {
        detailSections.push(
          <p key="no-specific-details" className={styles.noSpecificDetails}>
            No specific code details available for this category.
          </p>
        );
      }
    }

    return detailSections;
  };

  // Determine which content to show based on hover state
  const displayContent = useMemo(() => {
    // If mouse is over a state/city, show hover details
    if (hoverInfo) {
      return getDetailsContent(hoverInfo.stateId, hoverInfo.city);
    }
    // Otherwise, show the persistent content (currently selected item)
    return getDetailsContent(persistentContent.stateId, persistentContent.city);
  }, [hoverInfo, persistentContent, data]);

  return (
    <div 
      className={`${styles.hoverPanel} ${styles.visible}`}
      onMouseOver={() => handleMouseOver(persistentContent.stateId, persistentContent.city)}
      onMouseOut={handleMouseOut}
    >
      {displayContent}
    </div>
  );
}

export default HoverPanel; 