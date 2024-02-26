import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import './App.scss';
import styled from 'styled-components';

import styles from './App.module.scss';
console.log(styles);

const Logo = ({ href, logoSrc, className = '', altText }) => {
  return (
    <a href={href} target="_blank">
      <img src={logoSrc} className={`logo ${className}`} alt={altText} />
    </a>
  );
};

const StyledLogo = styled(function Logo({
  href,
  logoSrc,
  className = '',
  altText,
}) {
  return (
    <a href={href} target="_blank">
      <img src={logoSrc} className={`${className}`} alt={altText} />
    </a>
  );
})`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  background-color: antiquewhite;
  border: 2px solid papayawhip;
  border-radius: 12px;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    & {
      animation: logo-spin infinite 20s linear;
    }
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Logo
          href="https://vitejs.dev"
          logoSrc={viteLogo}
          altText="Vite logo"
        ></Logo>

        <Logo
          href="https://react.dev"
          logoSrc={reactLogo}
          altText="React logo"
          className="react"
        ></Logo>
      </div>

      <div>
        <StyledLogo
          href="https://vitejs.dev"
          logoSrc={viteLogo}
          altText="Vite logo"
        ></StyledLogo>

        <StyledLogo
          href="https://react.dev"
          logoSrc={reactLogo}
          altText="React logo"
          className="react"
        ></StyledLogo>
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
