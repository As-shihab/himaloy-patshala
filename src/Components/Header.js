import { NavLink  } from "react-router-dom";
import logo from './Img/logo.webp';
function Header(){
    return(
  
   <header>
    
    <div className="logo_cotainer">
      <img src={logo}/>
    </div>


<nav>

<NavLink className='nav-link' to='/'>
    home
</NavLink >

<NavLink className='nav-link' to='/Courses'>
    Course
</NavLink >
<NavLink className='nav-link' to='/Exam'>
    Exam
</NavLink >

<NavLink className='nav-link' to='/Exam'>
Book
</NavLink >

<NavLink className='nav-link' to='/Exam'>
    Student
</NavLink >

<NavLink className='nav-link' to='/Exam'>
  About
</NavLink >


</nav>

<div>
    <NavLink className='nav-link' to='/Account/Login'>Login</NavLink >
</div>

   </header>
   
 
    )
}
export default Header;