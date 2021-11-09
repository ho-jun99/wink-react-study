import react from 'react';
import {Link} from 'react-router-dom'

const LinkStyle = {
  backgroundColor : "#DB202C",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    flexDirection : "column",
    color : "white",
  fontFamily: "Roboto Mono",
    fontStyle : "bold",
    width : "16.67vw",
    height : "9.15vh",
    textDecoration : "none",
}

const HeaderNum = {
    fontSize : "0.8rem",
}

const HeaderTitle = {
  fontSize: "1.3rem",
}

const Header = () => {
  return (
    <>
        <Link to="/intro" style={LinkStyle}><h style={HeaderNum}>I.</h><h style={HeaderTitle}>Intro</h></Link>
      <Link to="/story" style={LinkStyle} ><h style={HeaderNum}>II.</h><h style={HeaderTitle}>Story</h></Link>
        <Link to="/award" style={LinkStyle}><h style={HeaderNum}>III.</h><h style={HeaderTitle}>Award</h></Link>
        <Link to="/production" style={LinkStyle}><h style={HeaderNum}>IV.</h><h style={HeaderTitle}>Production</h></Link>
        <Link to="/interpret" style={LinkStyle}><h style={HeaderNum}>V.</h><h style={HeaderTitle}>Interpret</h></Link>
      <Link to="/credit" style={LinkStyle}><h style={HeaderNum}>VI.</h><h style={HeaderTitle}>Credit</h></Link>
      
    </>
  )
}

export default Header;