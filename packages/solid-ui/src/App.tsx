import { Component, createSignal } from 'solid-js';

import {Counter} from './Counter'
import logo from './logo.svg';
import styles from './App.module.css';

const [name, setName] = createSignal('world');

const App: Component = () => {
  return (
    <div class={styles.App}>
      {/* <header class={styles.header}>
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
          Learn Solid1
        </a>
      </header> */}
      <div style="padding: 10px" onClick={() => setName('Rob')}>
        This is my counter
      </div>
      <Counter name={name()} />
    </div>
  )
};

export default App;
