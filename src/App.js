import React, {useState} from "react";
import "./App.css";

// emotion components
import {Button, DangerButton, PrimaryButton} from "./Components/Button/Button";
// storybook
import {Header} from "./stories/Header";
import {Small} from "./stories/Button.stories";

const App = () => {
  const [hovered, setHovered] = useState(false); //check if mouse is hovering over button

  return (
    <div className="App">
      <Header />
      <p>
        This is a dummy project created with create-react-app to implement
        Storybooks and Emotion.
      </p>
      <div style={{display: "flex", margin: 25, gridColumn: 1}}>
        {/* contain emotion */}
        <div style={{backgroundColor: "lightpink", width: "50%", padding: 15}}>
          <h3>Emotion Components</h3>
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
        {/* storybook components */}
        <div style={{backgroundColor: "gainsboro", width: "50%", padding: 15}}>
          <h3>Storybook component</h3>
          <Small
            onClick={() => alert("This component is built using storybook")}
            label="Secondary"
            backgroundColor="yellow"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
