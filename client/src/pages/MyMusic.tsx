import React from "react";
import { Rnd } from "react-rnd";

function MyMusic(): JSX.Element {

    return(
        <Rnd
        default={{
            x: 900,
            y: 250,
            width: 500,
            height: 470,
        }}
        minWidth={"500px"}
        minHeight={"470px"}
        lockAspectRatio={false}
        dragHandleClassName={"draggable"}
        className={"window-bg"}
        cancel={"no-drag"}
        resizeGrid={[10,10]}
        >
        <div className="window-content">
            <div className="row draggable title-bar-bg-blue gx-0">
            <div className="col-6">
                <img className="title-bar-left" src="img/my-music-title-bar-left.png" />
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
                    No webpage about music is complete without a diatribe outlining the pros and 
                    cons of streaming services, but as a humble bassist, I'll spare you that soapbox for now.
                    <br />
                    <br />
                    Regardless, click the link below!
                    <br />
                    <br />
                    <div className="row gx-0">
                        <div className="col d-flex justify-content-center">
                            <a href="https://open.spotify.com/artist/4wzILxEdnni4pGRUyJIVAp?si=5aGMnCRYSQucJCb_GDLYrA&dl_branch=1" target="blank"><img src="img/spotify-logo.png" alt="Spotify"
                        width="150"
                        height="auto" />
                        </a>
                        </div>
                    </div>
                </p>
            </div>
        </div>
        </Rnd>
    );
};

export default MyMusic;