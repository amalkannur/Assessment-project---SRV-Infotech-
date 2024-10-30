import React from 'react'
import "./Custom.scss"
import PermContract from "../assets/perm_contact_calendar.png"
import Gavel from "../assets/gavel.png"
import TravelExplore from "../assets/travel_explore.png"
import Contract from "../assets/contract.png"
import CanvasImg3 from "../assets/toddyShop_img3.jpg"
import CanvasImg4 from "../assets/ToddyShopImg4.jpg"
import CanvasImg5 from "../assets/toddyshopimg5.jpg"
import PinarayiImg from "../assets/pinarayi.png" 
import Mbrajesh from "../assets/mbrajesh..png"
import Person3 from "../assets/person-3.png" 
import Person4 from "../assets/person-4.jpeg"
 


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function Home() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Adjust time between slides in milliseconds
        arrows: false,
    };


    const images = [
        "https://s3-alpha-sig.figma.com/img/a4a4/a747/fe7945ec240b2cf2c58f2e0389ca1378?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FuwNG5pRYLZ~BVkw8P-DoLJzsjXa87VlgUcNgvyQ747i4qOkBJR7FZ81-VWQ5~msMHmCY7twr5jPcl9wEThtEZoySg40He18GbRwPASX0xROLlQ1CUxhji1nX-wlwatpqqe5bVU3rDWRxojPj0qrDNBCcGjx~v56UZyYkOdW6zaJOh1TNpYH~CJH1z6X0ZrZjn3MPXwGJgVRWauqDf5ckuxTeIYSOGb44IHK-D9VOnwUYsSNDWaM20d-Hxz8oejV6VuCUAi11fspUCnGsgZk1JR7i9fqz2m4oLHTJrzJ50LNV9sB3qiqspN44WMD4i0u9pbpwIg-NXRw0990mG3ZNg__",
        CanvasImg3 ,  
        CanvasImg4 , 
        CanvasImg5 ,
    ];


  return (
    <div className='Home'>
        <div className="row"> 
            <div className="col-md-3 fadeInLoad2 "> 
                <h5 className='home-welcome-text'> Welcome to </h5>
                <h5> Kerala Toddy Industry Development Board </h5>
                <h1> Promote and develop 
                the toddy industry </h1>
                <p>  To ensure the protection of employment and welfare of the people engaged in the employment in this sector. </p>
                <button>  Learn More about Us </button>
                <div className=' update-sctn'> 
                   <p> Latest  <span className='color-5'> Updates</span> </p>
                   <p> View All - </p>
                </div>
                 <div className="updates-collctn"> 
                 <div className="updates"> 
                        <p className='updt-date'> 06 Jul 2024 <span> New</span> </p>
                        <p className='updt-txt'>  <b>DATE EXTENDED </b>Clarification on Legal Framework for Value-Added Toddy Products </p>
                    </div>
                    <div className="updates"> 
                        <p className='updt-date'> 04 Jul 2024 <span> New</span> </p>
                        <p className='updt-txt'>  <b>Inviting Quotation  </b> Quality Control Procedures for Toddy Production </p>
                    </div>
                    <div className="updates"> 
                        <p className='updt-date'> 30 June 2024  </p>
                        <p className='updt-txt'>  Special Order: Festival Season Toddy Sale Restrictions </p>
                    </div>
                    <div className="updates"> 
                        <p className='updt-date'> 20 June 2024  </p>
                        <p className='updt-txt'>  Updated Regulations for Coconut Tree Tapping in Tourist Zonered Accountants </p>
                    </div>
                    <div className="updates"> 
                        <p className='updt-date'> 15 June 2024  </p>
                        <p className='updt-txt'>  <b>DATE EXTENDED </b>Excise Department Circular on Toddy Distribution Limits </p>
                    </div>
                 </div>
            </div>

            <div className="col-md-9 "> 
                <div className="home_green-boxBg fadeInLoadRight"> 
                    <div className="menuframes row me-3" > 
                        <div className="menu-items col-lg-3 col-6"> 
                            <div className="menu-icon"> 
                                <img src={PermContract} alt="" />
                            </div>
                            <p> Customer <br></br> Zone  </p>
                        </div>

                        <div className="menu-items col-lg-3 col-6"> 
                            <div className="menu-icon"> 
                                <img src={Gavel} alt="" />
                            </div>
                            <p> Tenders </p>
                        </div>

                        <div className="menu-items col-lg-3 col-6"> 
                            <div className="menu-icon"> 
                                <img src={TravelExplore} alt="" />
                            </div>
                            <p> Toddy Shop   Locator </p>
                        </div>

                        <div className="menu-items col-lg-3 col-6"> 
                            <div className="menu-icon"> 
                                <img src={Contract} alt="" />
                            </div>
                            <p> Price List </p>
                        </div>
                    </div>

                    <div className="swiper-div"> 
                    <div style={{ width: "100%;" }}>
                        <Slider {...settings}>
                            {images.map((src, index) => (
                                <div  key={index}>
                                    <img src={src} alt={`Slide ${index + 1}`} className='swippingImgs' style={{ width: "100%",  height: "426px" , borderRadius : "6px" }} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    </div>
                </div>

                <div className='ps-4 pt-md-0 pt-4'> 
                <h1 > Top Officials </h1>

                <div className="row canvasImgPersons"> 
                 
                    <div className="col-md-3 col-6 fadeInLoadRight">
                       <div className="card1"> 
                       <img className='w-100' src={PinarayiImg} alt="" />
                        <h5 className='mt-3'>  Shri. Pinarayi Vijayan </h5>
                        <p> Hon. Chief Minister of Kerala </p>
                       </div>
                    </div>
                   
                    <div className="col-md-3 col-6 fadeInLoadRight">
                       <div className="card1"> 
                       <img className='w-100' src={Mbrajesh} alt="" />
                        <h5 className='mt-3'>  Shri. M. B. Rajesh </h5>
                        <p> Hon. Minister For Excise</p>
                       </div>
                    </div>

                    <div className="col-md-3 col-6 fadeInLoadRight">
                       <div className="card1"> 
                       <img className='w-100' src={Person3} alt="" />
                        <h5 className='mt-3'>  Dr. A. Jayathilak I.A.S </h5>
                        <p> Additional Chief Secretary, Taxes </p>
                       </div>
                    </div>

                    <div className="col-md-3 col-6 fadeInLoadRight text-center">
                       <div className="card1"> 
                       <img className='w-100' src={Person4} alt="" />
                        <h5 className='mt-3'>  U.P. Joseph </h5>
                        <p> Chairman, Kerala Toddy Industry Development Board </p>
                       </div>
                    </div>
                </div>
                </div>
            </div>

          
        </div>



        
    </div>
  )
}

export default Home