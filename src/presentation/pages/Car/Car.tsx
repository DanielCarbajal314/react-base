import React from 'react';
import styles from './Car.module.css';

const Car: React.FC = () => (
  <div className={styles.Car} data-testid="Car">
    Car Component
  </div>
);

export default Car;
