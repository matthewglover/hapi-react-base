import React from 'react';
import styles from './app.css';
import catInHats from '../resources/cats_in_hats.jpg';

const App = () =>
  (<div className={styles.root}>
    <h1>Hello World!</h1>
    <img src={catInHats} alt="cats in hats" className={styles.cats} />
  </div>);

export default App;
