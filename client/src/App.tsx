import React from 'react';
import { useAppSelector, useAppDispatch } from './app/hooks'
import { selectShowStory, selectShowMusic, selectShowTech, selectShowWeb, selectShowChat, selectShowVerse, selectShowKart, selectShowBirDB, selectShowWB, selectShowBJ95, selectShowLarry, selectShowDoom, selectShowDoomReadme } from './features/window/windowSlice';
import { updateShowStory, updateShowMusic, updateShowTech, updateShowWeb, updateShowChat } from './features/window/windowSlice';
import './App.css';
import MyStory from "./pages/MyStory";
import MyMusic from "./pages/MyMusic";
import MyTech from "./pages/MyTech";
import WebWork from "./pages/WebWork";
import LetsChat from "./pages/LetsChat";
import IntroVerse from "./pages/IntroVerse";
import MarioKartChart from "./pages/MarioKartChart";
import BirDB from "./pages/BirDB";
import Whereback from "./pages/Whereback";
import BJ95 from "./pages/BJ95";
import Larry from "./pages/Larry";
import Doom from "./pages/Doom";
import DoomReadme from "./pages/DoomReadme";

function App(): JSX.Element {

  const dispatch = useAppDispatch();
  const showStory = useAppSelector(selectShowStory);
  const showMusic = useAppSelector(selectShowMusic);
  const showTech = useAppSelector(selectShowTech);
  const showWeb = useAppSelector(selectShowWeb);
  const showChat = useAppSelector(selectShowChat);
  const showVerse = useAppSelector(selectShowVerse);
  const showKart = useAppSelector(selectShowKart);
  const showBirDB = useAppSelector(selectShowBirDB);
  const showWB = useAppSelector(selectShowWB);
  const showBJ95 = useAppSelector(selectShowBJ95);
  const showLarry = useAppSelector(selectShowLarry);
  const showDoom = useAppSelector(selectShowDoom);
  const showDoomReadme = useAppSelector(selectShowDoomReadme);

  const handleStoryDoubleClick = (e: Event | any) => {
    e.preventDefault();
    dispatch(updateShowStory(true));
  }

  const handleMusicDoubleClick = (e: Event | any) => {
    e.preventDefault()
    dispatch(updateShowMusic(true));
  }

  const handleTechDoubleClick = (e: Event | any) => {
    e.preventDefault()
    dispatch(updateShowTech(true));
  }

  const handleWebDoubleClick = (e: Event | any) => {
    e.preventDefault()
    dispatch(updateShowWeb(true));
  }

  const handleChatDoubleClick = (e: Event | any) => {
    e.preventDefault()
    dispatch(updateShowChat(true));
  }

  return (
    <>
    <div onDoubleClick={(e) => handleStoryDoubleClick(e)}>
      <img className="story-icon" src="img/desktop-icons/my-story-no-text.png" />
      <div className="story-icon-text no-text-select">
        My Story
      </div>
    </div>
    <div onDoubleClick={(e) => handleMusicDoubleClick(e)}>
      <img className="music-icon" src="img/desktop-icons/my-music-no-text.png" />
      <div className="music-icon-text no-text-select">
        My Music
      </div>
    </div>
    <div onDoubleClick={(e) => handleTechDoubleClick(e)}>
      <img className="tech-icon" src="img/desktop-icons/my-tech-no-text.png" />
      <div className="tech-icon-text no-text-select">
        My Tech
      </div>
    </div>
    <div onDoubleClick={(e) => handleWebDoubleClick(e)}>
      <img className="web-icon" src="img/desktop-icons/web-work-no-text.png" />
      <div className="web-icon-text no-text-select">
        Web Work
      </div>
    </div>
    <div onDoubleClick={(e) => handleChatDoubleClick(e)}>
      <img className="chat-icon" src="img/desktop-icons/lets-chat-no-text.png" />
      <div className="chat-icon-text no-text-select">
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

    {showVerse === false
    ?
    <>
    </>
    :
    <>
      <IntroVerse />
    </>
    }

    {showKart === false
    ?
    <>
    </>
    :
    <>
      <MarioKartChart />
    </>
    }

    {showBirDB === false
    ?
    <>
    </>
    :
    <>
      <BirDB />
    </>
    }

    {showWB === false
    ?
    <>
    </>
    :
    <>
      <Whereback />
    </>
    }

    {showBJ95 === false
    ?
    <>
    </>
    :
    <>
      <BJ95 />
    </>
    }

    {showLarry === false
    ?
    <>
    </>
    :
    <>
      <Larry />
    </>
    }

    {showDoom === false
    ?
    <>
    </>
    :
    <>
      <Doom />
    </>
    }

    {showDoomReadme === false
    ?
    <>
    </>
    :
    <>
      <DoomReadme />
    </>
    }

    </>
  );
}

export default App;
