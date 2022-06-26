import type { Component } from 'solid-js';
import { NavLink } from 'solid-app-router';

import logo from '../assets/images/logo.svg';
import styles from '../assets/styles/home.module.css';

const Home: Component = () => (
  <div class={styles.App}>
    <header class={styles.header}>
      <img src={logo} class={styles.logo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        class={styles.link}
        href="https://github.com/solidjs/solid"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Solid
      </a>
    </header>
  </div>
);

export default Home;
