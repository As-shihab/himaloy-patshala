import { NavLink } from "react-router-dom"
function SignUp() {
    return (
        <>

            <div id="data_acount">

                <div id="container">

                    <div id="left">

                        <div id='logo_container'>
                            <h1>Welcom Back To HP</h1>
                            <span>Login and discover Himaloy patshala Course and much more
                            </span>

                            <NavLink className='button' to='/Account/LogIn'>
                                <button>LogIn</button>
                            </NavLink>
                        </div>
                    </div>
                    <div id="right">


                        <div>
                            <form className="form_data">
                                <h1>Creat Account</h1>

                                <div className="names"><input required type='text' placeholder="Type to First Name"></input><input required type='text' placeholder="Type to Last Name"></input></div>
                                <div>
                                    <input type='email' required placeholder="Type to Email"></input>

                                </div>
                                <div>
                                    <input type='password' required placeholder="Type to Password"></input>

                                </div>

                                <div>
                                    <input type='password' required placeholder="Re-Type Password"></input>

                                </div>


                                <div className="submit"><input  type='submit' value='Create Account'></input></div>

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
export default SignUp;