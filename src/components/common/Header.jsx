import react from 'react';
import {Link} from 'react-router-dom'

const LinkStyle = {
  border : "2px black solid",
  margin : "10px",
  padding : "1px",
  backgroundColor : "grey"
}

const Header = () => {
  return (
    <>
      <Link to="/intro" style={LinkStyle}>Intro</Link>
      <Link to="/story" style={LinkStyle} >Story</Link>
      <Link to="/interpret" style={LinkStyle}>Interpret</Link>
      <Link to="/production" style={LinkStyle}>Production</Link>
      <Link to="/credit" style={LinkStyle}>Credit</Link>
      
    </>
  )
}

export default Header;