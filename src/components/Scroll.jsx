import React, {useState} from 'react';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Scroll = () => {
    const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <FontAwesomeIcon icon={faArrowAltCircleUp} className="scrollTop cursor-pointer hover:animate-bounce mt-4 " onClick={scrollTop} style={{height: 40, display: showScroll ? 'inline' : 'none'}} />
  )
}

export default Scroll;