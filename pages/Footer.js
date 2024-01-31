import React from 'react'
import { Link } from 'react-router-dom'
import '../CSSFILE/Footer.css'
import Return from '../assets/return.png'
import Faebook from '../assets/mycollection/png/003-facebook.png'
import Twiter from '../assets/mycollection/png/004-twitter.png'
import Snapchat from '../assets/mycollection/png/001-snapchat.png'
import Instagram from '../assets/mycollection/png/002-instagram.png'
import Pay1 from '../assets/shipment/png/003-google-pay.png'
import Pay2 from '../assets/shipment/png/001-cash-on-delivery.png'
import Pay3 from '../assets/shipment/png/006-card.png'
import Pay4 from '../assets/shipment/png/004-online-payment.png'
import Pay5 from '../assets/shipment/png/002-credit-card.png'
import de1 from '../assets/shipment/png/1.png'
import de2 from '../assets/shipment/png/2.png'
import de3 from '../assets/shipment/png/3.png'
import de4 from '../assets/shipment/png/4.png'
export default function footer() {
    const toShow =()=>{
        console.log('logged')
        const a = document.querySelector(".footer")
        const b = document.querySelector(".expandmore")
        const c = document.querySelector(".expndless")
        a.style.display = "block"
        b.style.display ="none"
        c.style.display ="block"

    }
    const toHide = ()=>{
        const c = document.querySelector(".expandmore")
        const a = document.querySelector(".footer")
        const b = document.querySelector(".expndless")
        a.style.display = "none"
        b.style.display ="none"
        c.style.display ="block"
    }
    return (
        <>
            <div className="mobFooter">For known more about Oxygen<span onClick={toShow} class="expandmore material-symbols-outlined">expand_more</span>
                <span onClick={toHide} class=" expndless material-symbols-outlined">expand_less</span>
            </div>
            <div className="footer">
                <div className='list_items'>
                    <ul className="fristList">
                        <span className='spaned'>Need Help</span>
                        <li><Link>Contact Us</Link></li>
                        <li><Link>Track order</Link></li>
                        <li><Link>Return and Refund</Link></li>
                        <li><Link>FAQs</Link></li>
                        <li><Link>My Account</Link></li>
                    </ul>
                    <ul className="secondList">
                        <span className='spaned'>COMPANY</span>
                        <li><Link>About Us</Link></li>
                        <li><Link>Carrers</Link></li>
                        <li><Link>Community Initiative</Link></li>
                        <li><Link>Souled Store</Link></li>
                    </ul>
                    <ul className='Third_list'>
                        <span className='spaned'>More Info</span>
                        <li><Link>T&C</Link></li>
                        <li><Link>Privacy PoLicy</Link></li>
                        <li><Link>Sitemap</Link></li>
                    </ul>
                    <ul className="storenearme">
                        <span className='spaned'>Store Near me</span>
                        <li>Mumbai</li>
                        <li>Delhi</li>
                        <li>Patna</li>
                        <li>Munger</li>
                        <li>Chandigarh</li>
                        <li>Baudaun</li>
                    </ul>
                </div>
                <div className="extrafooter">
                    <ul>
                        <li><span>₹</span>Cash On Delivery</li>
                        <li><span><img src={Return} alt="logo" /></span>30 Days Easy Replacment</li>
                    </ul>
                    <div className="socialMedia">
                        <span className='Social_site'>Follow us on:</span>
                        <img className='socialLinks' src={Faebook} alt="" />
                        <img className='socialLinks' src={Twiter} alt="" />
                        <img className='socialLinks' src={Snapchat} alt="" />
                        <img className='socialLinks' src={Instagram} alt="" />
                    </div>
                </div>
                <div className='lin'></div>
                <div className="paymentBrands">
                    <div className='paymentOption'>
                        <p>100% secure payment with : </p>
                        <img className='socialLinks' src={Pay1} alt="" />
                        <img className='socialLinks' src={Pay2} alt="" />
                        <img className='socialLinks' src={Pay3} alt="" />
                        <img className='socialLinks' src={Pay4} alt="" />
                        <img className='socialLinks' src={Pay5} alt="" />
                    </div>
                    <div className="deliverypartenr">
                        <p>Shipping Partners:</p>
                        <img className='socialLinks' src={de1} alt="" />
                        <img className='socialLinks' src={de2} alt="" />
                        <img className='socialLinks' src={de3} alt="" />
                        <img className='socialLinks' src={de4} alt="" />
                    </div>
                </div>
                <div className='lin'></div>
                <div className="copywrite">
                    <p>&copy; The Oxygen Store 24-25 </p>
                </div>
            </div>
        </>
    )
}
