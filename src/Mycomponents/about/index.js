import './about.css';
import React, { useState, useEffect } from 'react';
export const About = () => {
    const mystyle = {
        
    }

    const [MyStyles, darkstyles] = useState({
        backgroundColor: 'white',
        color: "black",
    });

    const [BtnText, SetBtnTxt] = useState("Enable Dark mode")


    const toggleStyle = () => {

        if (MyStyles.color === "black") {

            darkstyles({
                backgroundColor: 'black',
                color: "white",

            })
            SetBtnTxt("Enable light mode")

        }
        else {
            darkstyles(
                {
                    backgroundColor: 'white',
                    color: "black",
                }

            )
            SetBtnTxt("Enable Dark mode")




        }


    }
    // const styles = {
    //     container: {
    //         backgroundColor: 'black',
    //         color: "white",
    //         padding: '10px',
    //         borderRadius: '5px',
    //     },
    //     heading: {
    //         fontSize: '24px'
    //     },
    //     button: {
    //         backgroundColor: "red",
    //         color: "white"
    //     }

    // const [netValue1, updatedValue1] = useState(0)
    // const [netValue, updatedValue] = useState(0)


    // useEffect(() => {
    //     console.log("i am the use Effect")
    // },[netValue1]);

    // const funnc = () => {

    //     updatedValue(netValue + 1)



    // }

    // const funnc1 = () => {

    //     updatedValue1(netValue1 + 1)

    // }




    return (
        <div className=" main container my-5" style={MyStyles} >
            {/* <h1>{netValue}</h1>
            <button className='button' onClick={funnc} >Click Me</button>
            <h1>{netValue1}</h1>
            <button className='button' onClick={funnc1} >Click Me</button> */}
            <h1 className="text-center my-5" style={MyStyles}>About Us</h1>
            <div className="accordion" id="accordionExample" style={MyStyles}>
                <div className="accordion-item" style={MyStyles}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={MyStyles} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={MyStyles}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={MyStyles} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={MyStyles}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={MyStyles} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-2">
                <button type="button" onClick={toggleStyle} className="btn btn-primary">{BtnText}</button>

            </div>

        </div>
    )
}
