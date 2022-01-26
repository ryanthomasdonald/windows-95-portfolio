import React from 'react';
import './App.css';
import DosPlayer from "./common/pageComponents/DosPlayer"
import { Rnd } from "react-rnd"

function App(): JSX.Element {
  return (
    <Rnd
      default={{
        x: 350,
        y: 125,
        width: 960,
        height: 600,
      }}
      disableDragging={true}
      lockAspectRatio={true}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <DosPlayer bundleUrl="DOOM.jsdos" />
      </div>
    </Rnd>
  );
}

export default App;
