import React from "react";
import { Rnd } from "react-rnd";
import { useAppDispatch } from '../app/hooks';
import { updateShowVerse } from '../features/window/windowSlice';

function IntroVerse(): JSX.Element {

    const dispatch = useAppDispatch()

    const handleCloseVerse = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowVerse(false))
    }

    return(
        <Rnd
        default={{
            x: 300,
            y: 80,
            width: 450,
            height: 505,
        }}
        minWidth={"450px"}
        minHeight={"505px"}
        lockAspectRatio={false}
        dragHandleClassName={"draggable"}
        className={"window-bg"}
        cancel={"no-drag"}
        resizeGrid={[10,10]}
        >
        <div className="window-content">
            <div className="row title-bar-bg-blue gx-0">
            <div className="col-11 draggable">
                <img className="title-bar-left" src="img/web-work-title-bar-left.png" />
            </div>
            <div className="col-1 d-flex justify-content-end">
                <img className="title-bar-right" src="img/window-header-title-bar-right.png" useMap="#closeVerse" />
                <map name="closeVerse">
                    <area onClick={(e) => handleCloseVerse(e)} shape="rect" coords="68,2,100,32" href="#" />
                </map>
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
            </p>
            </div>
        </div>
        </Rnd>
    );
};

export default IntroVerse;