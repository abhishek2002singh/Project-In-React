import React from 'react'
import TopNav from './TopNav'
import Featured from './Featured'
import Delivery from './Delivery'
import TopPicks from './TopPicks'
import Meal from './Meal'
import Categoties from './Categoties'
import NewsLetter from './NewsLetter'
import Footer from './Footer'


const Main = () => {
    return (
        <div>
            <TopNav />
            <Featured />
            <Delivery />
            <TopPicks />
            <Meal />
            <Categoties />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Main