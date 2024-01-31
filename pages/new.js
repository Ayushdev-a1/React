import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../CSSFILE/Navbar.css'
import logo from '../assets/logo122.png'


export default function Navbar() {
    
    const [Hamshow, setHamshow] = useState(false);
    return (
        <>
            <div className="navbar">
                <nav>
                    <div className="mview">
                        <div className="hamburger">
                            <Link><span className="material-symbols-outlined" onClick={() => setHamshow(!Hamshow)}>menu</span></Link>
                        </div>
                        <div className="mobile">
                            <span className="material-symbols-outlined">shopping_bag</span>
                            <span className="material-symbols-outlined">favorite</span>
                        </div>
                    </div>
                    {/* hambureger menu */}
                    <div className={Hamshow ? "hammenu-mobile" : "hammenu"}>
                        <div className="first">
                            <div className="hamburger"><Link><span className="material-symbols-outlined" onClick={() => setHamshow(!Hamshow)}>menu</span></Link></div>
                            <div className='flogo'><img src={logo} alt="logo" /></div>
                            <div className="log"><Link className='otherLink' to="/authlog"><span className="material-symbols-outlined">contacts_product</span><p className={Hamshow ? "hammenu" : "hammenu-mobile"}>Login</p></Link></div>



                        </div>
                        <div className="container my-2 self" >
                            <div className="collections">
                                <div className="dropdown">
                                    <Link className="btn dropdown-toggle fw-bold fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        TOPWEAR
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/">Hoodies and Sweatshirts</Link></li>
                                        <li><Link className="dropdown-item" to="/">Oversized T-shirts New</Link></li>
                                        <li><Link className="dropdown-item" to="/">All T-Shirts</Link></li>
                                        <li><Link className="dropdown-item" to="/">Polos</Link></li>
                                        <li><Link className="dropdown-item" to="/">Oversized Full Sleeve</Link></li>
                                        <li><Link className="dropdown-item" to="/">Jackets</Link></li>
                                        <li><Link className="dropdown-item" to="/">className=ic Fit T-shirts</Link></li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <Link className="btn dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        BOTTOMWEAR
                                    </Link>
                                    <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item fw-bold" to="/">All Cargos</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Joggers</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Pants</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Jeans</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Shorts</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Innerwear at ₹199</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Pajamas</Link></li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <Link className="btn dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        SHOP BY THEME
                                    </Link>
                                    <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item fw-bold" to="/">Marvel</Link></li>
                                    <li><Link className="dropdown-item fw-bold" to="/">Disney</Link></li>
                                    <li><Link className="dropdown-item fw-bold" to="/">Archies</Link></li>
                                    <li><Link className="dropdown-item fw-bold" to="/">Bollywood</Link></li>
                                     <li><Link className="dropdown-item fw-bold" to="/">Hollywood</Link></li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <Link className="btn dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        UNISEX
                                    </Link>
                                    <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item fw-bold" to="/">All Unisex</Link></li>
                                    <li><Link className="dropdown-item fw-bold" to="/">Hoodies & Sweatshirts</Link></li>
                                    <li><Link className="dropdown-item fw-bold" to="/">Jackets</Link></li>
                                    <li><Link className="dropdown-item fw-bold" to="/">Sweaters</Link></li>
                                   <li><Link className="dropdown-item fw-bold" to="/">Shackets</Link></li>
                                    <li><Link className="dropdown-item fw-bold" to="/">T-Shirts</Link></li>
                                    <li><Link className="dropdown-item fw-bold" to="/">Shirts</Link></li>
                                     <li><Link className="dropdown-item fw-bold" to="/">Windcheaters</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="third my-2">
                            <ul>
                                <li><Link className='text-danger fw-semibold'>Get extra discount on membership</Link></li>
                                <li><Link className="fw-semibold">Contact us</Link></li>
                                <li><Link className="fw-semibold">FAQs</Link></li>
                                <li><Link className="fw-semibold">Community Initiative</Link></li>
                            </ul>
                            <hr />
                            <div className="dropdown">
                                <Link className="btn dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    MORE
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">Carrers</Link></li>
                                    <li><Link className="dropdown-item" to="/">About Us</Link></li>
                                    <li><Link className="dropdown-item" to="/">T&C</Link></li>
                                    <li><Link className="dropdown-item" to="/">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    {/* website menu */}
                    <div className='logo'><img src={logo} alt="logo" /></div>
                    <ul className='one'>
                        <div className="lii">
                            <span className="line"></span>
                            <li><NavLink to="/women">Women</NavLink></li>
                            <span className="line"></span>
                            <li><NavLink to="/men">Men</NavLink></li>
                            <span className="line"></span>
                            <li><NavLink to="/kids">Kids</NavLink></li>
                            <span className="line"></span>
                        </div>
                        <div className="order">
                            <li><NavLink className='otherLink' to="/track_order"><span className="material-symbols-outlined">pin_drop</span>Track order</NavLink></li>
                            <li><NavLink className='otherLink' to=""><span className="material-symbols-outlined">call</span>Contact-us</NavLink></li>
                            <li><NavLink className='otherLink' to="/authlog"><span className="material-symbols-outlined">contacts_product</span>Login</NavLink></li>
                            <li><NavLink className='otherLink' to='My_cart'><span class="material-symbols-outlined">shopping_bag</span></NavLink></li>
                        </div>
                    </ul>
                    <ul className="sec">
                        <div className="liise">
                            <div className="dropdown">
                                <Link className="btn dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    TOPWEAR
                                </Link>

                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item fw-bold" to="/">Hoodies and Sweatshirts</Link></li>
                                    <li><Link className="dropdown-item fw-bold" to="/">Oversized T-shirts New</Link></li>
                                    <li><Link className="dropdown-item fw-bold" to="/">All T-Shirts</Link></li>
                                    <li><Link className="dropdown-item fw-bold" to="/">Polos</Link></li>
                                    <li><Link className="dropdown-item fw-bold" to="/">Oversized Full Sleeve</Link></li>
                                    <li><Link className="dropdown-item fw-bold" to="/">Jackets</Link></li>
                                    <li><Link className="dropdown-item fw-bold" to="/">Fit T-shirts</Link></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <Link className="btn dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    BOTTOMWEAR
                                </Link>

                                <ul className="dropdown-menu">
                                <li><Link className="dropdown-item fw-bold" to="/">All Cargos</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Joggers</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Pants</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Jeans</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Shorts</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Innerwear at ₹199</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Pajamas</Link></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <Link className="btn dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    UNISEX
                                </Link>

                                <ul className="dropdown-menu">
                                <li><Link className="dropdown-item fw-bold" to="/">All Unisex</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Hoodies & Sweatshirts</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Jackets</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Sweaters</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Shackets</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">T-Shirts</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Shirts</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Windcheaters</Link></li>

                                </ul>
                            </div>
                            <div className="dropdown">
                                <Link className="btn dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    SNEAKERS
                                </Link>

                                <ul className="dropdown-menu">
                                <li><Link className="dropdown-item fw-bold" to="/">Shoes</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Pet Merch New</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Backpacks</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Perfumes</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Caps</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Umbrellas</Link></li>

                                </ul>
                            </div>
                            <div className="dropdown">
                                <Link className="btn dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    SHOPS BY THEAM
                                </Link>

                                <ul className="dropdown-menu">
                                <li><Link className="dropdown-item fw-bold" to="/">Marvel</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Disney</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Archies</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Bollywood</Link></li>
                                <li><Link className="dropdown-item fw-bold" to="/">Hollywood</Link></li>

                                </ul>
                            </div>
                        </div>
                    </ul>
                </nav>
            </div>
        </>
    )
}
