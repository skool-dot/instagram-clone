import React, { useState, useEffect } from 'react'

import Modal from 'react-bootstrap/Modal'

export default function PostModal(props) {
    
    const { post_id, postModalState, setpostModalState, PCollection } = props;

    const [DescriptionBtn, setDescriptionBtn] = useState(false);
    const [CommentBtn, setCommentBtn] = useState(false);
    const [ViewAllComment, setViewAllComment] = useState([]);
    const [ViewMore, setViewMore] = useState('');
    const [CommentValue, setCommentValue] = useState('')

    const commentsCount = PCollection.comments.length;

    const descriptionShortner = () => {
        setDescriptionBtn(!DescriptionBtn);

        if (DescriptionBtn) {
            setViewMore(PCollection.description)
        } else if (!DescriptionBtn) {

            var maxlength = 90;

            var trimmedString = PCollection.description.substr(0, maxlength);

            trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));

            setViewMore(trimmedString + ' ....');

        }

    }

    const commentShortner = () => {
        setCommentBtn(!CommentBtn);

        if (CommentBtn) {
            setViewAllComment(PCollection.comments)
        } else if (!CommentBtn) {
            setViewAllComment(PCollection.comments.slice(0, 2))
        }
    }

    useEffect(() => {
        
        if (!CommentBtn) {
            descriptionShortner();
            commentShortner();
        }

    }, [])

    return (
        <>

            <Modal className="hide-scroll" id={post_id} size="lg"  centered show={postModalState} >

                <Modal.Body style={{ backgroundColor: "#282B34" }} className=" text-light" >

                    <div className="d-flex column flex-column flex-md-row" >
                        <div className="col-12 col-lg-7 my-auto" >
                            <img style={{ maxHeight: "auto", cursor: "pointer" }} onClick={ () => setpostModalState(false) } src={PCollection.link} className="card-img-top rounded-3" loading="lazy" alt={PCollection.username}/>
                        </div>

                        <div className="d-flex flex-column mx-0 mx-lg-3 mt-3 mt-lg-0 col-12 col-lg-5" >

                            <div className="d-flex justify-content-between gap-3" >

                                <div className="d-flex gap-3" >
                                <div>
                                    <img className="post-user-img" src={PCollection.link} alt={PCollection.username} />
                                </div>
                                <div className="my-auto" >
                                    <span className="fw-bold username-txt" >{PCollection.username}</span>
                                </div>
                                </div>

                                <div className="my-auto  me-2" >
                                    <button onClick={ () => setpostModalState(false) } style={{ backgroundColor: "transparent" }} className=" border-0 text-light fw-bold bebasfont fs-5" >X</button>
                                </div>

                            </div>
                            <hr className="me-2" />
                            <div style={{ maxHeight:"600px", overflow:"auto", width:"auto" }} className=" d-flex flex-column container" >
                                <div className="mb-2" >
                                    <span style={{ cursor: "pointer" }} onClick={ () => descriptionShortner() } className="text-muted fw-bold" >{ DescriptionBtn ? 'More' : 'Less' }</span>
                                </div>
                                <span className="normalfont pe-3 normal-txt" >{ViewMore}</span>
                            </div>
                            
                            <div className="my-auto d-flex flex-column gap-2 px-2 "  >

                                <div className="" >
                                    <span style={{ cursor: "pointer" }} onClick={ () => commentShortner() } className="text-muted fw-bold" >{ CommentBtn ? 'View All '+ commentsCount +' Comments' : 'Hide Comments' }</span>
                                </div>
                                <div style={{ maxHeight:"200px", overflow:"auto" }} className="d-flex flex-column gap-4 hide-scroll"  >
                                { ViewAllComment.map( PCC => (
                                    
                                        <div className="d-flex gap-2" >
                                        <img className="comment-user-img" src={"https://images.unsplash.com/photo-1616344787023-a1829b69beea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"} alt={PCollection.username} />
                                        <span className="normal-txt" ><span className="normalfont me-2" >{PCC.user}</span>{PCC.comment}</span>
                                            <div className="ms-auto d-flex flex-column gap-1" >
                                                <svg style={{ cursor:"pointer" }} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                                                <svg onClick={ () => setCommentValue(PCC.user + "  ") } style={{ cursor:"pointer" }} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>
                                            </div>
                                        </div>
                                    
                                    ) ) }
                                </div>

                            </div>

                            <hr className="mb-1 me-2 mt-auto" />
                            <div className="d-flex flex-row mt-1" >
                                <div className="my-auto" >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
                                </div>
                                <input value={CommentValue} onChange={ (e) => setCommentValue(e.target.value) } style={{ backgroundColor: "#282B34", outline: "none" }} className="w-100 border-0 text-light ms-1" placeholder="Add a comment"  />
                                <button style={{ backgroundColor: "#282B34" }} className="ms-auto me-2 border-0 text-light fw-bold" >Post</button>
                            </div>

                        </div>
                    </div>

                </Modal.Body>

            </Modal>
            
        </>
    )
}
