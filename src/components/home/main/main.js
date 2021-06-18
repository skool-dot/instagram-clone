import React, { useState, useEffect } from 'react'

import Post from './post'

import './main.css'

export default function Main(props) {

    const {postCollection} = props;


    return (
        <>
        
        <div className="flex-grow-1" >

            <div style={{ backgroundColor: "transparent", overflow: "hidden" }} className="main-body p-1 p-lg-3" >

            <div class="row row-cols-1 row-cols-sm-2 g-4">

                { postCollection.map( (PCollection) => (
                    
                    <Post id={PCollection.id} PCollection={PCollection} />

                ) ) }

            </div>

            </div>

        </div>

        </>
    )
}
