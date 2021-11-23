import react,{useState,useEffect} from 'react'
import user from "../Image/user.png"


const Candidator = (props) => {
  const [num,setNum] = useState(props.user)

  const myStyle = {
    fontSize : "3em",
    color : "white",
    textAlign  : "center"
  }

  const myUser = {
    width : "10vw",
    height : "auto"
  }

  const myWrapper = {
    margin : "5%",
    display : "flex",
    flexDirection: "column",
  }


  return(
    <div style={myWrapper}>
      <img src={user} style={myUser}></img>
      <div style={myStyle}>{num}</div>
    </div>
  )

}



export default Candidator