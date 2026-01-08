import {useEffect,useState} from "react";
import "./ScrollToTop.css";

export default function ScrollToTop(){
  const[show,setShow]=useState(false);

  useEffect(()=>{
    const container=document.querySelector(".app-scroll");

    if(!container) return;

    const handleScroll=()=>{
      setShow(container.scrollTop>300);
    };

    // 🔥 bind after mount
    container.addEventListener("scroll",handleScroll);

    // 🔥 initial check
    handleScroll();

    return()=>{
      container.removeEventListener("scroll",handleScroll);
    };
  },[]);

  const scrollUp=()=>{
    const container=document.querySelector(".app-scroll");
    if(container){
      container.scrollTo({top:0,behavior:"smooth"});
    }
  };

  if(!show) return null;

  return(
    <button className="scroll-top-btn" onClick={scrollUp}>
      ↑
    </button>
  );
}
