// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <ul className="list-container">
      <li className="list-item">
        <Link to="/" className="link-item">
          Home
        </Link>
      </li>
      <li className="list-item">
        <Link to="/about" className="link-item">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
