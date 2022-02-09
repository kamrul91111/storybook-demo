import React, {useState} from "react";
import "./App.css";
import {Button, DangerButton, PrimaryButton} from "./Button/Button";

const App = () => {
  const [hovered, setHovered] = useState(false); //check if mouse is hovering over button

  return (
    <div className="App">
      <h1>Emotion/Storybooks Project</h1>
      <p>
        This is a dummy project created with create-react-app to implement
        Storybooks and Emotion.
      </p>
      <div>
        {/* contain emotion */}
        <div>
          <Button onClick={() => alert("henlo fren")}>Disa Button</Button>
          <PrimaryButton>Primary Button</PrimaryButton>
          {/* when mouse hovers, set hovered to true, else false */}
          <DangerButton
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            hovered={hovered}
          >
            Danger Button
          </DangerButton>
        </div>
      </div>
    </div>
  );
};

export default App;
