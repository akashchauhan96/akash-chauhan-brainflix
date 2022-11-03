import "./Header.scss"
import logo from '../../assets/logo/BrainFlix-logo.svg'
import searchIcon from '../../assets/icons/search.svg'
import avatarImage from '../../assets/images/Mohan-muruge.jpg'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div>
        <img
          className="header__logo-img"
          src={logo}
          alt="BrainFlix logo image"
        />
        </div>
        <div className="search-box">
          <img
            className="search-box__icon"
            src={searchIcon}
            alt="Search icon image for search box"
          />
          <p className="searh-box__placeholder-text">Search</p>
        </div>
      </div>
      <img
        className="header__avatar-image"
        src={avatarImage}
        alt="Avatar Image of Mohan Muruge"
      />
    </header>
  )
}

export default Header