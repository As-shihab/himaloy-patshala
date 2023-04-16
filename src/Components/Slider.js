import {motion} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Imges from './Imges'


function Slider(){
const [width, setWidth]=useState(0);
const carsouel =useRef();
useEffect(()=>{
setWidth(carsouel.current.scrollWidth - carsouel.current.offsetWidth);
},[]);
    return(

        <div className="Slider">
                <h2>About Teacher</h2>
         <motion.div ref={carsouel} className='carsouel' whileTap={{cursor:'grabbing'}}>
         <motion.div drag='x' dragConstraints={{right:0 , left:-width}} className='inner-carsouel'>
          {Imges.map(image=>{
            return(
                <motion.div className='items'>
              
              <div className='card'>
              <div>
                           <img src={image} />
                   </div>
              </div>
                  

                      <div className='card2'>
                       
                       <h2>Robiul Islam</h2>

                       <p>I'm owner of Himaloy Patshala. Bring the succes Nearby . Enroll Courses and Reach Your Envisioned Goal </p>

                       <button>
                        View More
                       </button>
                      </div>

                    </motion.div>
            )
          })}
         </motion.div>
         </motion.div>

        </div>
    )
}
export default Slider