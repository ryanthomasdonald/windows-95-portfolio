import React from "react";
import { Rnd } from "react-rnd";
import { useAppDispatch } from '../app/hooks';
import { updateShowWeb, updateShowVerse, updateShowKart, updateShowBirDB, updateShowWB, updateShowBJ95, updateShowLarry, updateShowDoom, updateShowDoomReadme } from '../features/window/windowSlice';

function WebWork(): JSX.Element {

    const dispatch = useAppDispatch()

    const handleCloseWeb = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowWeb(false))
    }

    const handleVerseDoubleClick = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowVerse(true))
    }

    const handleKartDoubleClick = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowKart(true))
    }

    const handleBirDBDoubleClick = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowBirDB(true))
    }

    const handleWBDoubleClick = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowWB(true))
    }

    const handleBJ95DoubleClick = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowBJ95(true))
    }

    const handleLarryDoubleClick = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowLarry(true))
    }

    const handleDoomDoubleClick = (e: Event | any) => {
        e.preventDefault()
        dispatch(updateShowDoom(true))
        dispatch(updateShowDoomReadme(true))
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
                <img className="title-bar-right" src="img/window-header-title-bar-right.png" useMap="#closeWeb" />
                <map name="closeWeb">
                    <area onClick={(e) => handleCloseWeb(e)} shape="rect" coords="68,2,100,32" href="#" />
                </map>
            </div>
            </div>
            <div className="row menu-bar-bg-gray gx-0">
            <div className="col-6 menu-bar-bg-gray">
                <img className="menu-bar-left" src="img/window-header-menu-bar-left.png" />
            </div>
            </div>
            <div className="window-body-border">
                <div className="row gx-0">
                    <div className="col web-work-icon-top" onDoubleClick={(e) => handleVerseDoubleClick(e)}>
                        <img src="../img/desktop-icons/folder.png" width="64px" />
                        <div className="web-work-iv-folder-text no-text-select">
                            introVERSE
                        </div>
                    </div>
                    <div className="col web-work-icon-top" onDoubleClick={(e) => handleKartDoubleClick(e)}>
                        <img src="../img/desktop-icons/folder.png" width="64px" />
                        <div className="web-work-mkc-folder-text no-text-select">
                            Mario Kart<br />
                            Chart
                        </div>
                    </div>
                    <div className="col web-work-icon-top" onDoubleClick={(e) => handleBirDBDoubleClick(e)}>
                        <img src="../img/desktop-icons/folder.png" width="64px" />
                        <div className="web-work-birdb-folder-text no-text-select">
                            birDB
                        </div>
                    </div>
                </div>
                <div className="row gx-0">
                    <div className="col web-work-icon" onDoubleClick={(e) => handleWBDoubleClick(e)}>
                        <img src="../img/desktop-icons/folder.png" width="64px" />
                        <div className="web-work-wm-folder-text no-text-select">
                            Whereback<br />
                            Machine
                        </div>
                    </div>
                    <div className="col web-work-icon" onDoubleClick={(e) => handleBJ95DoubleClick(e)}>
                        <img src="../img/desktop-icons/folder.png" width="64px" />
                        <div className="web-work-bj95-folder-text no-text-select">
                            blackjack95
                        </div>
                    </div>
                    <div className="col web-work-icon" onDoubleClick={(e) => handleLarryDoubleClick(e)}>
                        <img src="../img/desktop-icons/folder.png" width="64px" />
                        <div className="web-work-lq-folder-text no-text-select">
                            LarryQuest
                        </div>
                    </div>
                </div>
                <div className="row gx-0">
                    <div className="col web-work-icon" onDoubleClick={(e) => handleDoomDoubleClick(e)}>
                        <img src="../img/doom-icon.png" width="64px" />
                        <div className="web-work-doom-exe-text no-text-select">
                            DOOM.exe
                        </div>
                    </div>
                    <div className="col web-work-icon">
                        
                    </div>
                    <div className="col web-work-icon">
                        
                    </div>
                </div>
            </div>
        </div>
        </Rnd>
    );
};

export default WebWork;