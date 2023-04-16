import { NavLink } from 'react-router-dom';
import Footer_logo from './Img/logo.webp'
function Footer(){
    return(
        <>
        
      <div className='Footer'>

      <div id="Logo_footer">

        <img src={Footer_logo} alt=''/>
      </div>
      <div id="data">
        <h2>Help</h2>
        <nav>
            <NavLink className='Footer_link'>About Us</NavLink>
            <NavLink className='Footer_link'>Branch List</NavLink>
            <NavLink className='Footer_link'>Privacy Polic</NavLink>
            <NavLink className='Footer_link'>Term & Condition</NavLink>

        </nav>
      </div>
      <div id='data'>
      <h2>Explore</h2>

        <nav>
            <NavLink className='Footer_link'>Program</NavLink>
            <NavLink className='Footer_link'>Book</NavLink>
            <NavLink className='Footer_link'>Free Pdf</NavLink>
            <NavLink className='Footer_link'>Developer</NavLink>

        </nav>
      </div>
      <div id="data">

      <h2>Get In Touch</h2>
       <div>
        Address:Himaloy Pathshala Lalbagh, Rangpur And <br/> Jalesharitola, Bogura.
       </div>

       <div>
        HelpLine:01722339704
       </div>


       <div>
        Email:robiulislamhimalay27@gmail.com
       </div>
      </div>

   
      </div>
      <div id='Copywrite'>

<span>Copywrite c Himaloy Pathshala. All rights reserved 2023</span>

      </div>
        
        </>
    )
}
export default Footer;