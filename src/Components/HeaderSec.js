import React from 'react'

function HeaderSec() {
  return (
    <div>
      <section>
          <div id="div1">
              <img src="img/logo.png" />
          </div>
          <ul>
              <li>
                <a href="#home"><b>HOME</b></a>
              </li>
              <li>
                <a href="#about"><b>ABOUT US</b></a>
              </li>
              <li>
                <a href="#menu"><b>MENU</b></a>
              </li>
              <li>
                <a href="gallery"><b>GALLERY</b></a>
              </li>
              <li>
                <a href="#contact"><b>CONTACT US</b></a>
              </li>
          </ul>
          <div id="outer">
            <div id="inner">
              <img src="img/01.jpg" className="abc" />
              <img src="img/02.jpg" className="abc" />
              <img src="img/03.jpg" className="abc" />
              <img src="img/04.jpg" className="abc" />
              <img src="img/05.jpg" className="abc" />
            </div>
          </div>
      </section>
    </div>
  )
}

export default HeaderSec