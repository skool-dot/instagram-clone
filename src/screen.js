import React, { useState } from 'react'

import Home from './components/home/home'
import SideNav from './components/sidenav/sidenav'
import Header from './components/header/header'

import useWindowDimensions from './hooks/screen'

import './screen.css'

export default function Screen() {

    const [sideNavState, setsideNavState] = useState(false)

    return (
        <>

        <Header sideNavState={sideNavState} setsideNavState={setsideNavState} />
        <SideNav sideNavState={sideNavState} setsideNavState={setsideNavState} />
        <Home/>
            
        </>
    )
}
