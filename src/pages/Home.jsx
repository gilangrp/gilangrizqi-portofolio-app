/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useRef, useEffect, useState } from 'react'
import '../css/home.css'
import '../css/navbar.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Accordion from '../components/Accordion'
import Gilang from '../assets/gilang-crop.jpg'
import Stepper from '../components/Stepper';''
import StepperEdu from '../components/StepperEdu';
// Assets
import CV from '../assets/CV_FRONTEND_ENGLISH_GILANG.pdf'
import Pizzeria1 from '../assets/pizzeria/1.jpg'
import Pizzeria2 from '../assets/pizzeria/2.jpg'
import Pizzeria3 from '../assets/pizzeria/3.png'
import Laundry1 from '../assets/laundry/laundry1.png'
import Laundry2 from '../assets/laundry/laundry2.png'
import { faThumbTack } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500, 
      easing: 'ease-in-out', // Jenis easing
      once: true, 
    });
    AOS.refresh();
  }, [10000]);

  const linkAboutRef = useRef(null)
  const linkPortfolioRef = useRef(null)
  const linkHomeRef = useRef(null)

  const gotoHome = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior:'smooth'
    })
  }

  const gotoAbout = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }

  const gotoPortfolio = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }

  const [active, setActive] = useState('FirstCard')
  
  return (
    
    <div className=' p-0 m-0 w-full overflow-hidden' style={{
      width: '100%', zIndex:'2', position:'relative'
    }}>
      

      {/* Navbar */}
      <div className='navcontainer mt-8 fixed flex justify-center items-center w-full'>
        <div className='navcenter bg-first'>
          <button onClick={() => gotoHome(linkHomeRef.current)}>Home</button>
          <button onClick={() => gotoAbout(linkAboutRef.current)}>About Me</button>
          <button onClick={() => gotoPortfolio(linkPortfolioRef.current)}>Services</button>
        </div>
      </div>
      {/* Navbar */}
     
      {/* Landing Page */}
      <div ref={linkHomeRef} className=' min-h-screen w-full flex justify-center items-center relative '>
        <div className=' text-center'>
          <h1 className='myName sm:text-[73px] md:text-[90px] lg:text-[120px]'>I'm Gilang Rizqi.</h1>
          <h1 className=' text-sm sm:text-xl md:text-2xl lg:text-3xl'>website developer as programmer front-end and back-end
            <br />also as UI/UX designer.
          </h1>
          <button className='ctaBtn bg-yellows p-3 text-lg rounded-xl px-6 mt-5'>I Want to Know</button>
        </div>

        <div className='w-full text-[16px] text-center flex justify-evenly items-center bg-yellows h-20 absolute  bottom-0
        sm:text-lg lg:text-2xl
        '>
          <h1>Front End Developer</h1>
          <h1>UI/UX Design</h1>
          <h1>Backend End Developer</h1>
        </div>
      </div>
      {/* Landing Page */}

      {/* About Me */}
      <div className=' min-h-screen mt-14 w-full flex justify-center
      sm:min-h-fit
      ' ref={linkAboutRef} 
      >
        <div className=' w-5/6 overflow-hidden' >
          <h1 className=' text-3xl text-center ' >Hi There !</h1>
          <div  className=' flex flex-col justify-around items-center mt-14
          sm:flex-row sm:mt-0
          ' >

            <div data-aos='fade-right'  className='banner-container w-[250px] relative md:w-[300px] lg:w-[350px]'>
              <img src={Gilang} className='w-full h-full z-[2] relative banner' />
              <div className='borders md:w-[280px] md:h-[300px] bottom-16 left-10'></div>
            </div>

            <div data-aos='fade-left' className='flex flex-col w-[260px] mt-10 pb-5 md:w-[300px] lg:w-[500px]'>
              <h1 className=' text-justify text-sm md:text-[17px] lg:text-[20px]'>Website programmer with expertise in various programming
                languages such as HTML, CSS, JavaScript, Golang, and PHP.
                I have experience in both front-end and back-end development
                using frameworks like ReactJS, NextJS, Node.js, Laravel. <br /><br />

                I am always enthusiastic about creating amazing user experiences with
                aesthetic designs and intuitive interactions. Being responsive and
                mobile-friendly is a priority in every project I handle.<br /><br />

                Thank you for the opportunity to share about myself as a website
                programmer. I am ready to deliver exciting and functional projects for you!
              </h1>
              <div className='flex w-full text-sm mt-5'>
                <a href={CV} download>
                  <button className='btnDownload bg-yellows px-3 py-2 rounded-2xl text-sm'>Download CV</button>
                </a>
                <div className=' flex relative left-7 gap-6 font-bold'>
                  <h1 className=' text-center'>3+ <br /> Years</h1>
                  <h1 className=' text-center'>5+ <br /> Client</h1>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      {/* About Me */}
      
      {/* Work history */}
      <div className='  flex justify-center items-center flex-col mt-14 pb-5'>
         <nav className=' btnDownload bg-white p-3 px-6 rounded-3xl mb-7' style={{

         }}>
           <button className=' mr-9' onClick={() => setActive('FirstCard')}>Education</button>
           <button onClick={() => setActive('SecondCard')}>Work</button>
         </nav>
    
         {active === 'FirstCard' && <StepperEdu/> }
         {active === 'SecondCard' && <Stepper/> }
      </div>
      {/* Work history */}

      {/* Services */}
      <div className='  h-full flex flex-col items-center justify-center w-full mt-6' >
        <h1 className=' text-3xl relative' ref={linkPortfolioRef}>Will Service You</h1>
        <div data-aos="fade-in-up" className=' pt-10  flex justify-center items-center w-5/6 overflow-hidden pb-16 mt-5' >
          <Accordion />
        </div>
      </div>
      {/* Services */}

      {/* Portfolio */}
      <div className='flex flex-col items-center justify-center'
      
      >
        <h1 className=' text-3xl mt-5'>Portofolio</h1>

        <div data-aos="slide-left" className='portfolio-content mt-10 pt-14 flex-col max-h-[450px] py-6 px-10 flex bg-second 
         sm:w-[600px] sm:max-h-[550px] lg:w-[800px] lg:max-h-[450px] lg:flex-row
        '>
          <div className='portfolio-text'>
            <FontAwesomeIcon icon={faThumbTack} className='text-[20px] lg:text-[25px]' />
            <h1 className=' text-xl sm:text-4xl lg:text-3xl'>Mamma Pizzeria</h1>
            <h1 className=' text-md sm:text-lg lg:text-xl'>Front-End Developer | 2022</h1> <br />
            <div className=' text-[16px] sm:text-[20px] lg:text-[22px]'>
            <h1>Design UI/UX website.</h1>
            <h1>Protoyping and wireframing website.</h1>
            <h1>Slicing UI design to framework ReactJS.</h1>
            </div>
          </div>
          <div className='portfolio-image mt-7 relative left-10 overflow-hidden lg:w-[400px] '>
            <img src={Pizzeria3} className=' relative left-10'   />
            <img src={Pizzeria2} className=' relative bottom-20 left-4 sm:bottom-44 lg:bottom-28' />
            <img src={Pizzeria1} className=' relative bottom-32 sm:bottom-80 lg:bottom-52' />
          </div>
        </div>

        <div data-aos="slide-right" className='portfolio-content mt-10 pt-14 flex-col max-h-[450px] py-6 px-10 flex bg-second 
         sm:w-[600px] sm:max-h-[550px] lg:w-[800px] lg:max-h-[400px] lg:flex-row
        '>
          <div className='portfolio-text'>
            <FontAwesomeIcon icon={faThumbTack} className=' text-[20px] lg:text-[25px]' />
            <h1 className=' text-xl sm:text-4xl lg:text-3xl'>Foodie Mart</h1>
            <h1 className=' text-md sm:text-lg lg:text-xl'>Fullstack Developer | 2022</h1> <br />
            <div className=' text-[16px] sm:text-[20px] lg:text-[22px]'>
            <h1>Slicing UI to HTML pages.</h1>
            <h1>Develop backend with PHP language.</h1>
            <h1>Access and connect to database.</h1>
            </div>
          </div>
          <div className='portfolio-image mt-7 relative left-10 overflow-hidden lg:w-[400px] '>
            <img src={Laundry1} className=' relative left-10'   />
            <img src={Laundry2} className=' relative bottom-20 left-4 sm:bottom-44 lg:bottom-28' />
            
          </div>
        </div>        
      </div>
      {/* Portfolio */}

      {/* Footer */}
      <div className=' h-32 flex-col bg-second flex justify-center items-center mt-24 
      sm:text-3xl
      '>
      <div>

      </div>
        <h1>gilangrpratama@gmail.com</h1>
      </div>
      {/* Footer */}


    </div>

  )
}

export default Home