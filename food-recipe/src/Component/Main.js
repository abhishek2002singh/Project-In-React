import React from 'react'
import TopNav from './TopNav'
import Featured from './Featured'
import Delivery from './Delivery'
import TopPicks from './TopPicks'


const Main = () => {
    return (
        <div>
            <TopNav />
            <Featured />
            <Delivery />
            <TopPicks />
        </div>
    )
}

export default Main