import './index.css'

function App() {
  return (
    <div className="redirect-container">
      <span className="subtext">Infrastructure Update</span>
      
      <h1 className="new-domain">akhi.theatom.lk</h1>
      
      <p className="description">
        We've moved to a new permanent home. <br />
        Please update your bookmarks to the new domain.
      </p>
      
      <a href="https://akhi.theatom.lk" className="redirect-btn">
        Visit New Site
      </a>

      <a href="https://akhi.theoneatom.com" className="footer-link">
        Legacy Domain: akhi.theoneatom.com
      </a>
    </div>
  )
}

export default App
