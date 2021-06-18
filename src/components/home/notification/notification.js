import React from 'react'


import useWindowDimensions from '../../../hooks/screen'

export default function Direct() {

    const NotificationList = [

        {
            id: 1,
            username: "",
            notification: "",
            notification_time: "",
            img: ""
        },
    ]
    
    const { height } = useWindowDimensions();

    const panelHeightCal = (height / 2) - 77;

    console.log(panelHeightCal)

    return (
        <>

        <div className="d-flex justify-content-center mt-3" style={{ minWidth:"400px" }} >

        <div className="card text-light" style={{ minWidth:"398px", backgroundColor:"#282B34", minHeight: panelHeightCal  }} >
                
            <div className="card-header">
                <span className="normalfont" >Notification</span>
            </div>
            
            <div className="card-body p-0">
                
                <div className="d-flex flex-column gap-2 p-2" >

                    <div style={{ border:"2px solid white" }} >
                        <button>List</button>
                    </div>
                    <div>
                        <button>List</button>
                    </div>

                </div>

            </div>
        </div>

        </div>
                    
        </>
    )
}
