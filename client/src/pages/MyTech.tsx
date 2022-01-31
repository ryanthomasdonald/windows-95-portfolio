import React from "react";
import { Rnd } from "react-rnd";

function MyTech(): JSX.Element {

    return(
        <Rnd
        default={{
            x: 290,
            y: 180,
            width: 780,
            height: 662,
        }}
        minWidth={"780px"}
        minHeight={"662px"}
        lockAspectRatio={false}
        dragHandleClassName={"draggable"}
        className={"window-bg"}
        cancel={"no-drag"}
        resizeGrid={[10,10]}
        >
        <div className="window-content">
            <div className="row draggable title-bar-bg-blue gx-0">
            <div className="col-6">
                <img className="title-bar-left" src="img/my-tech-title-bar-left.png" />
            </div>
            <div className="col-6 d-flex justify-content-end">
                <img className="title-bar-right" src="img/window-header-title-bar-right.png" />
            </div>
            </div>
            <div className="row menu-bar-bg-gray gx-0">
            <div className="col-6 menu-bar-bg-gray">
                <img className="menu-bar-left" src="img/window-header-menu-bar-left.png" />
            </div>
            </div>
            <div className="window-body-border">
                <p className="p-without-img-above">
                    Below, you'll find a list of the technologies/applications with which I have 
                    experience. A good number are from the bootcamp that I recently attended with others 
                    coming from years of bouncing between various creative fields.
                    <br />
                    <div className="row gx-0">
                        <div className="col d-flex justify-content-center">
                            <img className="tech-header" src="img/web-dev.png" />
                        </div>
                    </div>
                    <br />
                    HTML, CSS, Type/JavaScript, Node.js, Bootstrap, Python, Express, React, Redux, Chart.js, Sequelize,
                    PostgresSQL, Git, VSCode, Passport, JSON Web Tokens
                    <br />
                    <div className="row gx-0">
                        <div className="col d-flex justify-content-center">
                            <img className="tech-header" src="img/content-creation.png" />
                        </div>
                    </div>
                    <br />
                    Avid Pro Tools, Adobe Photoshop, Adobe Premiere, HandBrake (converts legacy video 
                    codecs for use in modern NLE environments)
                    <br />
                    <div className="row gx-0">
                        <div className="col d-flex justify-content-center">
                            <img className="tech-header" src="img/misc.png" />
                        </div>
                    </div>
                    <br />
                    Microsoft Word, Microsoft Excel, Blender, PrusaSlicer
                </p>
            </div>
        </div>
        </Rnd>
    );
};

export default MyTech;