import React from 'react'

import './direct.css'

import useWindowDimensions from '../../../hooks/screen'

export default function Direct() {


    const MessageList = [

        {
            id: 111,
            img: "https://images.unsplash.com/photo-1581355707867-e6bbfdceace3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            username: "Neetu",
            msg: "welcome bro...",
            msg_time: "2d",
            seen:"false"
        },
        {
            id: 221,
            img: "https://images.unsplash.com/photo-1578554247677-acef7cf6f54a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            username: "Meet",
            msg: "You sent a post",
            msg_time: "1h",
            seen:"true"
        },
        {
            id: 331,
            img: "https://images.unsplash.com/photo-1566986139502-445e8beb2a79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y3VsdHVyZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            username: "Umesh",
            msg: "Sent a post",
            msg_time: "15m",
            seen:"true"
        },
        {
            id: 441,
            img: "https://images.unsplash.com/photo-1596464417962-e5193ba49d5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2VyfGVufDB8MnwwfGJsYWNrX2FuZF93aGl0ZXw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            username: "GracySamirPatel",
            msg: "Seen 4h ago",
            msg_time: "",
            seen:"true"
        },
        {
            id: 551,
            img: "https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=499&q=80",
            username: "essu",
            msg: "You sent a message",
            msg_time: "1h",
            seen:"false"
        },
        {
            id: 661,
            img: "https://images.unsplash.com/photo-1616879672490-c6d3a23d91f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            username: "harpreet",
            msg: "Yo bro ...",
            msg_time: "2h",
            seen:"true"
        },
        {
            id: 771,
            img: "https://images.unsplash.com/photo-1581955957646-b5a446b6100a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            username: "manumeena",
            msg: "Sent a post",
            msg_time: "1w",
            seen:"true"
        },
    ]

    const UnseenID = [111, 331]
    
    const { height } = useWindowDimensions();

    const panelHeightCal = (height / 2) - 30;

    console.log(panelHeightCal)


    return (
        <>

        <div className="d-flex justify-content-center" style={{ minWidth:"400px" }} >

        <div className="card text-light" style={{ minWidth:"398px", backgroundColor:"#282B34", maxHeight: panelHeightCal  }} >
                
            <div className="card-header" >
                <span className="normalfont" >mohitxskull</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
            </div>
            
            <div className="card-body p-0 hide-scroll" style={{ overflowY:"auto" }} >
                
                <div className="d-flex flex-column gap-2 p-2 pt-3"  >

                    { MessageList.map( MSGL => (

                        <>
                        <div id={MSGL.id} className="p-1 shadow d-flex gap-2 justify-content-between" style={ (UnseenID.find( UNID => UNID === MSGL.id ) ? {backgroundColor:"#494A5C", cursor:"pointer" } : {backgroundColor:"#282B34", cursor:"pointer" }) } >
                            <div className="d-flex gap-2" >
                                <img className="message-user-img my-auto" src={MSGL.img} alt={MSGL.username} />
                                <div className="my-auto d-flex flex-column" >
                                    <span style={{ fontSize:"13px" }} className="fw-bold" >{MSGL.username}</span>
                                    <span style={{ fontSize:"12.5px" }} className={ (UnseenID.find( UNID => UNID === MSGL.id )) ? null : "text-muted" } >{MSGL.msg}</span>
                                </div>
                            </div>
                            <div className="my-auto me-3" >
                                <span style={{ fontSize:"13px" }} className={ (UnseenID.find( UNID => UNID === MSGL.id )) ? "fw-bold" : null } >{MSGL.msg_time}</span>
                            </div>
                        </div>
                        </>

                    ))}

                </div>

            </div>
        </div>

        </div>
            
        </>
    )
}
