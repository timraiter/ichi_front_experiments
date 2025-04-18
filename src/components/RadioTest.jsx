import React from 'react';
import { RadioOnIcon, RadioOffIcon } from './SVGIcons';
import styles from './RadioTest.module.css';

function RadioTest() {
  return (
    <div className={styles.container}>
      <h3>Radio Button Test</h3>
      <div className={styles.row}>
        <RadioOnIcon className={styles.radioOn} />
        <span>Radio On</span>
      </div>
      <div className={styles.row}>
        <RadioOffIcon className={styles.radioOff} />
        <span>Radio Off</span>
      </div>
    </div>
  );
}

export default RadioTest; 