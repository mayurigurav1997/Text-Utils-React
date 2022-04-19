import React,{ useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color:'white',
        backgroundColor:'black',
        border:'1px solid white'
    });

    const [btntext, setBtnText] = useState("Enable the Light Mode");
    const toggleStyle = () => {
        if(myStyle.color === 'white'){
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode");
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                border:'1px solid white'
            })
            setBtnText("Enable Light Mode");
        }
    }
    return (
        <div className="container" my-1 style={myStyle}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
                 
                <div className="card">
                    <div className="card-header" style={myStyle} id="headingOne">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Collapsible Group Item #1
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body" style={myStyle}>
                            Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
                        </div>
                    </div>
                </div>
                 
                <div className="card">
                    <div className="card-header" style={myStyle} id="headingTwo">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Collapsible Group Item #2
                            </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body" style={myStyle}>
                            Some placeholder content for the second accordion panel. This panel is hidden by default.
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    <button onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
                </div>
            </div>
            
        </div>
    )
}
