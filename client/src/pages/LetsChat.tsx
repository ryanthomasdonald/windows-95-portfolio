import React, { MouseEvent } from "react";
import { Rnd } from "react-rnd";

function LetsChat(): JSX.Element {

    // const ShowResumeLetters = () => {
    //     const handle
    // }

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
                <img className="title-bar-left" src="img/lets-chat-title-bar-left.png" />
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
                I'm really excited to begin this new chapter in my life and if I've learned ANYTHING from my years 
                as a professional musician, it's that having a healthy network is a must when searching for 
                new opportunities.
                <br />
                <br />
                Connect with me via the links below!
                <br />
                <div className="row gx-0">
                    <div className="col-6 d-flex justify-content-end px-3 py-4">
                        <a href="https://github.com/ryanthomasdonald" id="chat-icon" target="_blank"><img src="img/github-logo.png" alt="GitHub" width="130px" /></a>
                    </div>
                    <div className="col-6 px-3 py-4">
                        <a href="https://www.linkedin.com/in/ryan-donald-96351221a/" id="chat-icon" target="_blank"><img src="img/li-logo.png" alt="LinkedIn" width="130px" /></a>
                    </div>
                </div>
                <div className="row gx-0">
                    <div className="col-6 d-flex justify-content-end px-3">
                        <a href="mailto:ryanthomasdonald@gmail.com" id="chat-icon" target="_blank"><img src="img/gmail-logo.png" alt="Gmail" width="130px" /></a>
                    </div>
                    <div className="col-6 px-4">
                        <a href="files/ryan-donald-resume-2021.pdf" id="chat-icon" target="_blank"><img width="104px" src="img/resume.png" alt="resume" /></a>
                    </div>
                </div>
                
                
                
                
            </p>
            </div>
        </div>
        </Rnd>
    );
};

export default LetsChat;