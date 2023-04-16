import { NavLink } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer";
import Home_img from './Img/Home.jpg';
import Slider from "./Slider";
function Home() {

    return (


        <div>
            <Header />
            <section id="home">
                <div id="home-img">
                    <img src={Home_img} alt=''></img>
                </div>
                <div id="home_content">
<div id="left"><h1 className="text">Welcome To <div className="flex"><span>Himaloy</span> <span> Pathshala</span></div></h1>
<br/>

<div id="qoute">
    <span>
        bring the world clsure togather
    </span>
</div>
<div id="started">
    <NavLink>
        <button>Contact</button>
    
    </NavLink>
    <NavLink to='/Account/LogIn'>
    <button> Get Started</button>
    </NavLink>
</div>

</div>




                    <div id="right">left</div>
                </div>


            </section>


      {/* slider */}


          <Slider/>
{/* slider */}



            {/* footer */}

           <Footer/>

        </div>

    )
} export default Home;