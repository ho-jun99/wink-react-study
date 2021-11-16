import react from 'react';
import "../css/Intro.css"
import gif_gameIntro from "../Image/Intro/IntroGame.gif"
import gif_willDie from "../Image/Intro/WillDie.gif"
import squidMan from "../Image/Intro/SquidMan.png"
import pink_logo from "../Image/logoPink.png"

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

const Intro = (props) => {
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
              <div style={textSizeSmall}>참가자 456명</div>
              <div style={textSizeSmall}>총상금 456억</div>
              <div style={textSizeBig}>게임에 참가 하시겠습니까?</div>
              <button className="btn-join">참가하기</button>
            </div>
          </div>
        </section>
    
      
    </div>
  )
}

export default Intro;