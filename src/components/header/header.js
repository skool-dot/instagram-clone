import React from 'react'

import { gsap, Power4 } from 'gsap'

import './header.css'

import useWindowDimensions from '../../hooks/screen'

import insta from '../../assests/insta.png'

export default function Header(props) {

    const { setsideNavState, sideNavState } = props;

    const { width } = useWindowDimensions();

    if ( sideNavState ) {
        gsap.to(("#header-sidenav-btn"), {
            duration: 0.5,
            rotationY: 180,
            x: -60
        })
    } else if ( !sideNavState ) {
        gsap.to(("#header-sidenav-btn"), {
            duration: 0.5,
            rotationY: 0,
            x: 10
        })
    }

    return (
        <>

        <div className="header-top" style={{ position:"fixed", top:"0", width:"100%", zIndex:"90" }}  >

            <div className="d-flex flex-row justify-content-between" >

                <div className="my-auto p-3 ms-lg-3" >
                    <img className="headerTop-image" src={insta} alt="instagram-logo" />
                </div>

                <div className="my-auto me-4" >
                    <button onClick={ () => setsideNavState(!sideNavState) } id="header-sidenav-btn" className="sideNav-btn" >
                        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"/></svg>
                    </button>
                </div>
                
            </div>

        </div>

        </>
    )
}
