import React,{ useState } from 'react'

import PostModal from './postModal'

export default function Post(props) {
    
    const { PCollection } = props;

    const post_id = PCollection.id;

    const [LikeState, setLikeState] = useState(false)
    const [postModalState, setpostModalState] = useState(false)
    
    
    return (
        <>

            <PostModal PCollection={PCollection} post_id={post_id} postModalState={postModalState} setpostModalState={setpostModalState} />

            <div id={PCollection.id} className="col " >

            <div className="card border-0 text-light" style={{ backgroundColor: "transparent", maxWidth: "544px" }} >
                
                <img onClick={ () => setpostModalState(true) } style={{ maxHeight: "381px", cursor: "pointer" }} src={PCollection.link} className="card-img-top rounded-3" loading="lazy" alt={PCollection.username}/>

                <div className="card-body">

                    <div className="d-flex flex-row justify-content-between my-auto" >

                        <div className="d-flex gap-1 gap-lg-3" >
                            <div>
                                <img className="post-user-img" src={PCollection.link} alt={PCollection.username} />
                            </div>
                            <div className="my-auto" >
                                <span className="fw-bold username-txt" >{PCollection.username}</span>
                            </div>
                        </div>

                        <div className="d-flex flex-row gap-2 gap-lg-4 my-auto" >
                            <div className="d-flex flex-row gap-1 gap-lg-2" >
                                <div>
                                    { LikeState ? 
                                    
                                        <svg style={{ cursor:"pointer" }} onClick={ () => setLikeState(!LikeState) } xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>   

                                    :
                                    
                                        <svg style={{ cursor:"pointer" }} onClick={ () => setLikeState(!LikeState) } xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                                    
                                    }
                                </div>
                                <div className="my-auto" >
                                    <span className="fw-bold" >{PCollection.likes}</span>
                                </div>
                            </div>
                            <div className="d-flex flex-row gap-1 gap-lg-2" >
                                <div>
                                    <svg style={{ cursor:"pointer" }} onClick={ () => setpostModalState(true) } xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
                                </div>
                                <div className="my-auto" >
                                    <span className="fw-bold" >{PCollection.comment_no}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    
                
                </div>
            </div>

            </div>
            
        </>
    )
}
