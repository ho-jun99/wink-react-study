import react,{useState,useEffect} from 'react';
import { useLocation } from "react-router-dom";


const Stroy = (props) => {

  const { pathname } = useLocation();

  useEffect(() => { // Intro -> Story 페이지 이동시 화면 맨 위로
    window.scrollTo(0, 0);
  }, [pathname]);


  return(
    <>
      <div>스토리 페이지입니다.</div>
      
    </>
  )
}

export default Stroy;