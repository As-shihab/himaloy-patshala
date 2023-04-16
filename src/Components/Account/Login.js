import { NavLink } from "react-router-dom"



function Login(){
    return(
        <>
        
        <div id="data_acount">

<div id="container">

<div id="left">

<div id='logo_container'>
    <h1>Welcom Back To HP</h1>
<span>Sign Up and discover a great amount
    of new oppotunities
</span>

<NavLink className='button' to='/Account/SignUp'>
    <button>SignUp</button>
</NavLink>
</div>
</div>
<div id="right">
 

<div>
  <form className="form_data">


  <h1 id='login'>Login</h1>


<div>
    <i className="fa fa-user">

    </i>
    <input type='email' placeholder="Type to Email"></input>

</div>
<div>
<i className="fa fa-lock">

</i>
    <input type='password' placeholder="Type to Password"></input>

</div>

<div>
<input className="submit" type='submit' value="LogIn"></input>
</div>




  </form>

</div>
</div>
</div>
<div id="corner">

</div>

        </div>
        
        
        </>
    )
}
export default Login;