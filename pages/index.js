import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import Script from 'next/script'




export default function Home() {

  useEffect(() => {
    const searchInput = document.querySelector("#search-input");

    searchInput.addEventListener("keydown", function(event) {
        if(event.code === "Enter") {
            search();
        }
    });
    
    function search() {
        const input = searchInput.value;
    
        window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C5CHFA_enNZ948NZ948&oq=" + input + "&aqs=chrome.0.69i59l2j46i175i199i433j46i199i291i433j46j0i433j0j69i60.875j0j9&sourceid=chrome&ie=UTF-8"
    }
  }, [])
  
  return (
   <>
   <Head>
   
   <link rel="icon" href="favicon.png" />
   </Head>
    <header>
        <nav className="navbar">
            <ul>
                <li>
                    <a className="link" href="">Gmail</a>
                </li>
                <li>
                    <a className="link" href="">Images</a>
                </li>
                <li>
                    <div className="circle-shadow">
                        <a className="menu-icon" href=""><img src="appsbar.png" alt="" width="21px" className='margin-appsbar'/></a>
                    </div>
                </li>
                <li>
                    <div className="circle-shadow">
                        <a className="user-icon" href=""><span>S</span></a>
                    </div>
                </li>
            </ul>
        </nav>
    </header>

    
    <section className="content-section">
        <div className="content-wrapper">
            <img className="logo-img" src="logo.jpg" alt="Google Logo Image" />
            <div className="search-bar">
                <i className="fas fa-search" />
                <input id="search-input" className="search-input" type="text" />
                
                <img src="mic.png" alt="" width="30px" className='margin-right'/>
            </div>
            <div className="search-btns">
                <button className="google-search-btn">Google Search</button>
                <button className="lucky-search-btn">{`I'm Feeling Lucky`}</button>
            </div>
            <div className="language">
                <p>Google Offered in: <a href="">हिन्दी</a>  <a href="">বাংলা</a>  <a href="">తెలుగు</a>  <a href="">मराठी</a>  <a href="">தமிழ்</a>  <a href="">ગુજરાતી</a>  <a href="">ಕನ್ನಡ</a>  <a href="">മലയാളം</a>  <a href="">ਪੰਜਾਬੀ</a></p>
            </div>
        </div>
    </section>


    <footer>
        <div className="footer-content upper-footer">
            <p>India</p>
        </div>
        <div className="footer-content lower-footer">
            <ul className="lower-left-footer">
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Advertising</a>
                </li>
                <li>
                    <a href="">Business</a>
                </li>
                <li>
                    <a href="">How Search Works</a>
                </li>
            </ul>
            <ul className="lower-right-footer">
                <li>
                    <a href="">Privacy</a>
                </li>
                <li>
                    <a href="">Terms</a>
                </li>
                <li>
                    <a href="">Settings</a>
                </li>
            </ul>
        </div>
    </footer>
    <Script src="https://kit.fontawesome.com/b0f29e9bfe.js" crossorigin="anonymous" />
   </>
  )
}
