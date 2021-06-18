import React, { useState } from 'react'
import { gsap, Power4 } from 'gsap'

import useWindowDimensions from '../../hooks/screen'

import './sidenav.css'

export default function SideNav(props) {

    const { setsideNavState, sideNavState } = props;
    
    const [Noti, setNoti] = useState(false)

    if ( sideNavState ) {
        gsap.to((".sideNav"), {
            duration: 0.5,
            width: "auto",
            ease: Power4
        })
    } else if ( !sideNavState ) {
        gsap.to((".sideNav"), {
            duration: 0.5,
            width: 0,
            ease: Power4
        })
    }

    return (
        <>

            <div className="sideNav hide-scroll"  >
                <div className="d-flex flex-column justify-content-between" >

                    <div className="d-flex flex-column gap-5" >

                        <img src={"https://media.istockphoto.com/vectors/skull-with-rose-tattoo-vector-id1167414595?k=6&m=1167414595&s=612x612&w=0&h=nyOsq6A4C18t26IGG_R2udHJwZeM_-N7mSTTHZphW1M="}  className="mx-2 sidenav-image" alt="profile-img"/>
                    </div>


                    

                    <div className="d-flex flex-column gap-2 gap-lg-4 mt-3 mt-lg-5 pt-1" >

                        <button className="sideNav-btn" >
                            <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"/></svg>
                            
                        </button>
                        <button className="sideNav-btn" >
                            <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                            
                        </button>
                        <button className="sideNav-btn" >
                            { Noti ? 
                                <svg onClick={ () => setNoti(!Noti) } xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"/></svg>
                            : 
                                <svg onClick={ () => setNoti(!Noti) } xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
                            }
                        </button>
                        <button className="sideNav-btn" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#fff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128.00146,24.00781A104.01819,104.01819,0,0,0,36.814,178.03906l-8.55468,29.90625a15.995,15.995,0,0,0,19.78125,19.78125l29.91406-8.53125a104.00785,104.00785,0,1,0,50.04687-195.1875ZM80.00049,140a12,12,0,1,1,12-12A12,12,0,0,1,80.00049,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,128.00049,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,176.00049,140Z"></path></svg>
                            
                        </button>
                        <button className="sideNav-btn" >
                            <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 10v8l7-4zm12-4h-7.58l3.29-3.29L16 2l-4 4h-.03l-4-4-.69.71L10.56 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H3V8h18v12z"/></svg>
                            
                        </button>
                        <button className="sideNav-btn" >
                            <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
                            
                        </button>
                        <hr className="my-3 bg-light"  />
                        <button className="sideNav-btn" >
                            <svg  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/></g></svg>
                            
                        </button>

                    </div>

                </div>
            </div>

        </>
    )
}
