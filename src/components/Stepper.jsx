
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/stepper.css'
// eslint-disable-next-line no-unused-vars
import { faMapLocation, faMapPin, faMapSigns } from '@fortawesome/free-solid-svg-icons'
function Stepper() {
    return (
        <div>
            <div className="container ">

                <div className="step completed">
                    <div className="v-stepper">
                        <div className="circle"></div>
                        <div className="line"></div>
                    </div>

                    <div className="content">
                        <h1>PT. Rekabio</h1>
                        <h1>
                            <FontAwesomeIcon icon={faMapPin} className=' pr-2' />
                            Indonesia, South Tangerang City</h1>
                        <h1 className=' text-gray-500 italic'>Fullstack Developer</h1>
                        <h1 className=' text-gray-500 italic'>November 2023 - July 2024</h1>
                    </div>
                </div>


                <div className="step active">
                    <div className="v-stepper">
                        <div className="circle"></div>
                        <div className="line"></div>
                    </div>

                    <div className="content ">
                        <h1>Freelance</h1>
                        <h1 className=' text-gray-500 italic'>Front End Developer & UI/UX Design</h1>
                        <h1 className=' text-gray-500 italic'>2023</h1>
                    </div>
                </div>


                
            </div>

        </div>
    )
}

export default Stepper