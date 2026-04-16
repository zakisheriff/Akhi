import './index.css'

function App() {
  return (
    <div className="redirect-card">
      <span className="subtext">The Atom Infrastructure</span>
      
      <div className="domain-info">
        <h1>Domain Moved</h1>
        <p>
          The service at <strong>akhi.theoneatom.com</strong> has been permanently moved to our new infrastructure <span className="highlight-domain">akhi.theatom.lk</span>.
        </p>
      </div>
      
      <a href="https://akhi.theatom.lk" className="redirect-btn">
        Enter akhi.theatom.lk
      </a>

      <div className="footer-note">
        You are being redirected to our improved platform
      </div>
    </div>
  )
}

export default App
