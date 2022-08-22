import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Software by Sajiv</title>
          <link rel="canonical" href="http://sajiv.dev" />
          <meta name="description" content="Explore the latest software and projects designed by Sajiv" />
        </Helmet>
        <img src={process.env.PUBLIC_URL + "/images/imposter.png"} className="App-imposter" alt="imposter-img" />
        {/*
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
         */}
      </header>
    </div>
  );
}

export default App;
