import "./Header.scss"
import logo from '../../assets/logo/BrainFlix-logo.svg'
import searchIcon from '../../assets/icons/search.svg'
import avatarImage from '../../assets/images/Mohan-muruge.jpg'
import uploadIcon from '../../assets/icons/upload.svg'

function Header() {
  return (
    <header className="header">
      <div className="header__outer-container">
        <img
          className="header__logo-img"
          src={logo}
          alt="BrainFlix logo image"
        />
        <div className="header__inner-container">
          <div className="header__search-box">
            <img
              className="header__search-icon"
              src={searchIcon}
              alt="Search icon image for search box"
            />
            <p className="header__search-text">Search</p>
          </div>
          <img
            className="header__avatar-image"
            src={avatarImage}
            alt="Avatar Image of Mohan Muruge"
          />
          <button className="header__upload-button">
            <img 
              className="header__upload-icon" 
              src={uploadIcon}
              alt="Upload Icon"
            />
            <span className="header__upload-text">Upload</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header