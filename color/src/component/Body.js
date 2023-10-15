import { useState } from 'react'

const Body = () => {
    const [color, setcolor] = useState("white")

    return (

        <div className=" w-screen h-screen" style={{ backgroundColor: color }}>

            <div className="flex justify-center ">
                <button className="m-10 pt-2 pb-2 pl-4 pr-4 rounded-lg bg-red-700 text-white"
                    onClick={() => {
                        setcolor("red")
                    }}
                >
                    red
                </button>
                <button className="m-10 pt-2 pb-2 pl-4 pr-4 rounded-lg bg-black text-white"
                    onClick={() => {
                        setcolor("black")
                    }}>black</button>
                <button className="m-10 pt-2 pb-2 pl-4 pr-4 rounded-lg bg-yellow-300 text-white"
                    onClick={() => {
                        setcolor("yellow")
                    }}>yellow</button>
                <button className="m-10 pt-2 pb-2 pl-4 pr-4 rounded-lg bg-green-500 text-white"
                    onClick={() => {
                        setcolor("green")
                    }}>green</button>
                <button className="m-10 pt-2 pb-2 pl-4 pr-4 rounded-lg bg-gray-400 text-white"
                    onClick={() => {
                        setcolor("gray")
                    }}>gray</button>
            </div>
        </div>
    )
}

export default Body

