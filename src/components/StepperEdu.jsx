
import '../css/stepper.css'
// eslint-disable-next-line no-unused-vars
import { faMapLocation, faMapPin, faMapSigns } from '@fortawesome/free-solid-svg-icons'
function StepperEdu() {
    return (
        <div>
            <div className="container ">

                <div className="step completed">
                    <div className="v-stepper">
                        <div className="circle"></div>
                        <div className="line"></div>
                    </div>

                    <div className="content">
                        <h1>Indonesia University of Education</h1>
                        <h1 className=' text-gray-500 italic'>Software Engineering</h1>
                        <h1 className=' text-gray-500 italic'>2023</h1>
                    </div>
                </div>


                <div className="step active">
                    <div className="v-stepper">
                        <div className="circle"></div>
                        <div className="line"></div>
                    </div>

                    <div className="content ">
                        <h1>SMA Pesantren Daarut Tauhiid</h1>
                        <h1 className=' text-gray-500 italic'>2019</h1>
                    </div>
                </div>


                
            </div>

        </div>
    )
}

export default StepperEdu