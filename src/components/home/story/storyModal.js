import React from 'react'

import Modal from 'react-bootstrap/Modal'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function StoryModal(props) {
    
    const { StoryModalState, setStoryModalState, storyCollection, userID } = props;

    var search;

    const StoryDataCollect = () => {
        
        search = storyCollection.find( SC => SC.id === StoryModalState );
    }

    if(StoryModalState === 0) {

        return null;
    } else {

        StoryDataCollect();
        setTimeout( () => setStoryModalState(0) ,5100)
        

        return (
            <>
                
            <Modal centered show={true}  >
    
                <Modal.Body style={{ background:"#282B34", color:"white", }} >
                    
                <div style={{ position:"relative" }} >
                    <div className="d-flex justify-content-between gap-3" >
        
                        <div className="d-flex gap-3" >
                        <div>
                            <img className="post-user-img" src={search.link} alt={search.username} />
                        </div>
                        <div className="my-auto" >
                            <span className="fw-bold username-txt" >{search.username}</span>
                        </div>
                        </div>

                        <div className="my-auto  me-2" >
                            <button onClick={ () => setStoryModalState(0) } style={{ backgroundColor: "transparent" }} className=" border-0 text-light fw-bold bebasfont fs-5" >X</button>
                        </div>

                    </div>
                    
                    <ProgressBar
                        style={{ height:"1px" }} 
                        className="my-2 mt-3 bg-light sec-fill" />

                    <div syle={{ position:"absolute" }} className="mx-auto" >
                        <img className="story-image-main" src={search.story_link} />
                    </div>
                </div>
    
                </Modal.Body>
    
            </Modal>
    
            </>
        )
    }
    
}
