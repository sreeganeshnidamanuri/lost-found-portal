import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-content">

          <div className="footer-section">
            <h3>LostFound</h3>
            <p className="footer-description">
              Helping people reconnect with their lost belongings quickly and securely.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/lost">Lost Items</a></li>
              <li><a href="/found">Found Items</a></li>
              <li><a href="/report/lost">Report Lost</a></li>
              <li><a href="/report/found">Report Found</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="/notifications">Notifications</a></li>
              <li><a href="/my/claims">My Claims</a></li>
              <li><a href="/profile">Profile</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <div className="footer-info">
              <div className="footer-info-item">
                <strong>Email:</strong> support@lostfound.com
              </div>
              <div className="footer-info-item">
                <strong>Phone:</strong> +91 9876543210
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            {new Date().getFullYear()} LostFound. All Rights Reserved.
          </div>

          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>

          <div className="footer-bottom-right">
            <a href="#top" className="back-to-top">
              ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}