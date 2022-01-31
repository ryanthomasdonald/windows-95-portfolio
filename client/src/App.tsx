import React, { useState, useRef } from 'react';
import './App.css';
import MyStory from "./pages/MyStory";
import MyMusic from "./pages/MyMusic";
import MyTech from "./pages/MyTech";
import WebWork from "./pages/WebWork";
import LetsChat from "./pages/LetsChat";
import DosPlayer from "./common/pageComponents/DosPlayer";
import { Rnd } from "react-rnd";

function App(): JSX.Element {

  const [showStory, setShowStory] = useState<boolean>(false);
  const [showMusic, setShowMusic] = useState<boolean>(false);
  const [showTech, setShowTech] = useState<boolean>(false);
  const [showWeb, setShowWeb] = useState<boolean>(false);
  const [showChat, setShowChat] = useState<boolean>(false);

  const handleStoryDoubleClick = (e: Event | any) => {
    e.preventDefault()
    setShowStory(true)
  }

  const handleMusicDoubleClick = (e: Event | any) => {
    e.preventDefault()
    setShowMusic(true)
  }

  const handleTechDoubleClick = (e: Event | any) => {
    e.preventDefault()
    setShowTech(true)
  }

  const handleWebDoubleClick = (e: Event | any) => {
    e.preventDefault()
    setShowWeb(true)
  }

  const handleChatDoubleClick = (e: Event | any) => {
    e.preventDefault()
    setShowChat(true)
  }

  return (
    <>
    <div onDoubleClick={(e) => handleStoryDoubleClick(e)}>
      <img className="story-icon" src="img/desktop-icons/my-story-no-text.png" />
      <div className="story-icon-text">
        My Story
      </div>
    </div>
    <div onDoubleClick={(e) => handleMusicDoubleClick(e)}>
      <img className="music-icon" src="img/desktop-icons/my-music-no-text.png" />
      <div className="music-icon-text">
        My Music
      </div>
    </div>
    <div onDoubleClick={(e) => handleTechDoubleClick(e)}>
      <img className="tech-icon" src="img/desktop-icons/my-tech-no-text.png" />
      <div className="tech-icon-text">
        My Tech
      </div>
    </div>
    <div onDoubleClick={(e) => handleWebDoubleClick(e)}>
      <img className="web-icon" src="img/desktop-icons/web-work-no-text.png" />
      <div className="web-icon-text">
        Web Work
      </div>
    </div>
    <div onDoubleClick={(e) => handleChatDoubleClick(e)}>
      <img className="chat-icon" src="img/desktop-icons/lets-chat-no-text.png" />
      <div className="chat-icon-text">
        Let's Chat!
      </div>
    </div>

    {showStory === false
    ?
    <>
    </>
    :
    <>
      <MyStory />
    </>
    }

    {showMusic === false
    ?
    <>
    </>
    :
    <>
      <MyMusic />
    </>
    }

    {showTech === false
    ?
    <>
    </>
    :
    <>
      <MyTech />
    </>
    }

    {showWeb === false
    ?
    <>
    </>
    :
    <>
      <WebWork />
    </>
    }

    {showChat === false
    ?
    <>
    </>
    :
    <>
      <LetsChat />
    </>
    }

    {/* <Rnd
      default={{
        x: 300,
        y: 80,
        width: 968,
        height: 608,
      }}
      minWidth={"450px"}
      minHeight={"450px"}
      lockAspectRatio={true}
      // lockAspectRatioExtraHeight={10}
      dragHandleClassName={"draggable"}
      className={"window-bg"}
      cancel={"no-drag"}
      resizeGrid={[10,10]}
    >
      <div className="window-content">
        <div className="row title-bar-bg-blue gx-0">
          <div className="col-6">
            <img className="title-bar-left draggable" src="img/window-header-title-bar-left.png" />
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
        <div className="doom-window gx-0" style={{ width: "100%", height: "100%" }}>
          <DosPlayer bundleUrl="DOOM.jsdos" />
        </div>
      </div>
      
    </Rnd> */}
    </>
  );
}

export default App;
