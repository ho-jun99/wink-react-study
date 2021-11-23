import react,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'
import "../css/Intro.css"
import gif_gameIntro from "../Image/Intro/IntroGame.gif"
import gif_willDie from "../Image/Intro/WillDie.gif"
import squidMan from "../Image/Intro/SquidMan.png"
import pink_logo from "../Image/logoPink.png"
import Candidator from '../components/Candidator';

const textSizeBig = {
  fontSize : "2.3em",
  fontWeight : "bold",
  marginBottom : "5%"
}

const textSizeSmall = {
  fontSize: "1.5em",
  fontWeight: "bold",
  marginBottom: "1%"
}

const user = ["1번","2번","3번","4번","5번","6번","7번"]



const Intro = (props) => {
  const [sec,setSec] = useState(0)
  //생명주기
  useEffect(() => { // ComponentDidMount
    if(sec <= 455){
      const timer = setTimeout(() => {
        setSec(prev => prev + 1)
      }, 50)
      return () => { clearTimeout(timer) } //ComponentWillUnmount
    }
  }, [sec]) //componentDidUpdate

  return(
    <div className="Intro-flex-wrapper">
      <section className="Intro-section-1">
        <div className="section-wrapper">
          <img src={gif_gameIntro} width="55%" height="auto" />
          <div className="colum-flex-box">
            <div style={textSizeBig}>목숨을 걸고 임하는</div>
            <div style={textSizeSmall}>추억의 놀이</div>
          </div>
        </div>
      </section>

      <section className="Intro-section-1">
        <div className="section-wrapper">
          <div className="colum-flex-box">
            <div style={textSizeBig}>오직 한사람만 가리는 죽음의</div>
            <div style={textSizeSmall}>서바이벌</div>
          </div>
          <img src={gif_willDie} width="55%" height="auto"></img>
        </div>
        </section>

        <section className="Intro-section-1">
          <div className="section-wrapper">
            <img src={squidMan}></img>
            <div className="colum-flex-box">
              <img src={pink_logo}></img>
              <div style={textSizeSmall}>참가자 {sec}명</div>
              <div style={textSizeSmall}>총상금 {sec}억</div>
              <div style={textSizeBig}>게임에 참가 하시겠습니까?</div>
            {sec > 455 ? <button className="btn-join" disabled="true">신청마감</button> : <Link to={{
              pathname: '/Story',
              state : {
              }
            }}><button className="btn-join" >참가하기</button></Link>}
            </div>
          </div>
        </section>

        <section className="Intro-section-users">
          {user.map((item, index) => (
            (<Candidator user={item}></Candidator>)
          ))}
        </section>
    
      
    </div>
  )
}

export default Intro;