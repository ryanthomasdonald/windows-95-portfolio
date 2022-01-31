import React from "react";
import { Rnd } from "react-rnd";

function WebWork(): JSX.Element {

    return(
        <Rnd
        default={{
            x: 300,
            y: 80,
            width: 920,
            height: 710,
        }}
        minWidth={"450px"}
        minHeight={"450px"}
        lockAspectRatio={false}
        dragHandleClassName={"draggable"}
        className={"window-bg"}
        cancel={"no-drag"}
        resizeGrid={[10,10]}
        >
        <div className="window-content">
            <div className="row draggable title-bar-bg-blue gx-0">
            <div className="col-6">
                <img className="title-bar-left" src="img/web-work-title-bar-left.png" />
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
            <div className="row d-flex justify-content-center gx-0">
                <img className="window-img" src="img/howdy.png" />
            </div>
            
            <p>
                Thanks for taking a moment out of your busy day to travel back in time with me! I made this browser-within-a-browser
                as a fun challenge during my coding bootcamp's prerequisite work, but then ended up liking it so much that I
                decided to morph it into my portfolio. I figured that there was no better way to
                show how much I've learned in just a few short months than by simply sharing my starting point, so 
                here we are!
                <br />
                <br />
                You'll find the serious (read: SERIOUS) work from the bootcamp that I'm most proud of under the 
                "Web Work" heading and various contact links (as well as my resume) under "Let's Chat!". All of 
                the initial styling on this site was painstakingly made from scratch by a VERY green version of yours truly using only HTML, CSS, 
                and a healthy dose of Photoshop. (Also, see if you can find the hidden "buttons"!)
                <br />
                <br />
                Again, thanks for stopping by and hopefully our paths will cross somewhere on down the dusty trail.
                Because after all, the wild blue yonder won't ride off into itself, pardner...
            </p>
            </div>
        </div>
        </Rnd>
    );
};

export default WebWork;