import './index.css'

function App() {
  return (
    <div className="redirect-card">
      <span className="subtext">System Notification</span>
      
      <div className="domain-info">
        <h1>Domain Moved</h1>
        <p>
          The service at <strong>akhi.theoneatom.com</strong> has been permanently moved to our new infrastructure.
        </p>
      </div>
      
      <a href="https://akhi.theatom.lk" className="redirect-btn">
        Enter akhi.theatom.lk
      </a>

      <div className="footer-note">
        Redirecting you to the Atom ecosystem
      </div>
    </div>
  )
}

export default App
