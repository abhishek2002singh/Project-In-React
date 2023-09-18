
// const heading=document.createElement("h1");
// heading.innerHTML="hii everyone" ;
// const head=document.getElementById("head");
// head.appendChild(heading);




//same things make in react

// const heading=React.createElement("h1"
// ,{},"hii everyone"
// );
// //   const p=document.getElementById("head")
// const hd=ReactDOM.createRoot(document.getElementById("head"))
// hd.render(heading);



// create this in react

{/* <div class="parent">
    <div class="child">
        <h1></h1>
    </div>
</div> */}

// const heading=React.createElement(
//     "div",
//     {class:"parent"},
//     React.createElement(
//         "div",
//         {class:"child"},
//         React.createElement("h1",{},"hii everyone lalu")
        
//     )
// );
// const hd=ReactDOM.createRoot(document.getElementById("head"))
// hd.render(heading);




// question---create this sibling

// {/* <div class="parent">
//     <div class="child">
//         <h1></h1>
 //           <h2></h2>
//     </div>
// </div> */}


const heading=React.createElement(
    "div",
    {class:"parent"},
    React.createElement(
        "div",
        {class:"child"},
       [ React.createElement("h1",{},"hii everyone lalu"),
       React.createElement("h2",{},"hii everyone lalu")
    ]
        
    )
);
const hd=ReactDOM.createRoot(document.getElementById("head"))
hd.render(heading);
