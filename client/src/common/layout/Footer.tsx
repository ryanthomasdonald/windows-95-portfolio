import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

function Footer(): JSX.Element {
    return (
        <>
        {/* <div className="container-fluid gx-0"> */}
            <div className="row startBarBG gx-0">
                <div className="col-6">
                    <img className="startBarLeft" src="img/start-bar-full-left-side-test.png" />
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <img className="startBarRight" src="img/start-bar-full-right-side-test.png" />
                </div>
            </div>
        {/* </div> */}
        </>
    )
}

export default Footer;