import React from 'react'
import "./scrollup.css"

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup")
        if(this.scrollY >= 560) scrollUp.classList.add("showScroll");
        else scrollUp.classList.remove("showScroll");
    })
  return (
    <a href="/#" className="scrollup">
        <i className="uil uil-arrow-up scrollupIcon"></i>
    </a>
  )
}

export default ScrollUp