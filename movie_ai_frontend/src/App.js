import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import Trending from './components/Trending';

// PUBLIC_INTERFACE
function App() {
  /** Main layout composing sidebar and content sections for Movie AI. */
  return (
    <div className="movieai-app">
      <div className="gradient-bg" aria-hidden="true" />
      <Sidebar />
      <main className="content" id="home">
        <Welcome />
        <Trending />
        <footer className="footer" role="contentinfo">
          <p>© {new Date().getFullYear()} Movie AI. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
