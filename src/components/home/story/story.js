import React, { useState } from 'react'

import { gsap, Circ } from 'gsap'

import StoryModal from './storyModal'

import './story.css'

export default function Story(props) {

    const {storyCollection} = props;

    const [Noti, setNoti] = useState(true)
    const [directNoti, setdirectNoti] = useState(true)
    const [StoryModalState, setStoryModalState] = useState(0)

    

    const refreshBtn = () => {

        gsap.to(("#refreshBtn"), {
            duration: 1,
            transformOrigin: "center",
            rotation: 360,
            repeat: -1,
            ease: Circ
        })

    }


    return (
        <>

        <StoryModal storyCollection={storyCollection} setStoryModalState={setStoryModalState} StoryModalState={StoryModalState} />

        <div className="flex-grow-1" >

            <div className="home-story rounded-1" >

                <div style={{ backgroundColor: "#282B34" }} className="story-header d-flex flex-row justify-content-between py-1 px-3" >

                    <div className="my-auto d-flex flex-row gap-4" >
                        
                        <div>
                            { Noti ?
                                <> 
                                <svg style={{ cursor:"pointer" }} onClick={ () => setNoti(!Noti) } xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ce1212"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"/></svg>
                                <span style={{ color: "white", backgroundColor: "black" }} className="badge ms-1 " >9</span>
                                </>
                            : null }
                        </div>
                        <div>
                            { directNoti ? 
                            
                                <svg style={{ cursor:"pointer" }} onClick={ () => setdirectNoti(false) } xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="#ce1212" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M128.00146,24.00781A104.01819,104.01819,0,0,0,36.814,178.03906l-8.55468,29.90625a15.995,15.995,0,0,0,19.78125,19.78125l29.91406-8.53125a104.00785,104.00785,0,1,0,50.04687-195.1875ZM80.00049,140a12,12,0,1,1,12-12A12,12,0,0,1,80.00049,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,128.00049,140Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,176.00049,140Z"></path></svg>
                            
                            : null }
                        </div>

                    </div>
                    <div className="my-auto" >
                        <button style={{ padding: "1px" }} onClick={ () => refreshBtn() } className="sideNav-btn" >
                            <svg id="refreshBtn" xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 24 24" width="25px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
                        </button>
                    </div>

                </div>
                
                <div className="story-body d-flex flex-row gap-3 p-4" >

                    { storyCollection.map( (SCollection) => (

                        <div id={SCollection.id} className="story-image-body" >
                            
                            <img onClick={ () => setStoryModalState(SCollection.id) } style={{ cursor: "pointer" }} src={SCollection.story_link} loading="lazy" alt={SCollection.username}></img>
                            <div className="story-image-body-username" >
                                <span className=" text-light username-txt fw-bold" >{SCollection.username}</span>
                            </div>
                        </div>

                    ) ) }

                </div>


            </div>

        <hr className="bg-light" />

        </div>

        </>
    )
}
