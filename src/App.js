import React, {useState} from "react";
import "./App.css";

// emotion components
import {Button, DangerButton, PrimaryButton} from "./Components/Button/Button";
// storybook
import {Header} from "./stories/Header";
import {Small} from "./stories/Button.stories";
import Sidebar from "./Components/Button/Sidebar/Sidebar";

const App = () => {
  const [hovered, setHovered] = useState(false); //check if mouse is hovering over button

  return (
    <div className="App">
      <Header />
      {/* Sidebar built with tailwind */}
      <Sidebar />
      <p>
        This is a dummy project created with create-react-app to implement
        Storybooks and Emotion.
      </p>
      <div style={sectionContainer}>
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
          <Small
            label="Primary is false"
            primary={false}
            onClick={() => alert("Primary has been set to false")}
          />
          <Small
            label="Primary"
            primary
            onClick={() => alert("Primary has been set to True")}
          />
        </div>
      </div>
    </div>
  );
};

const sectionContainer = {
  display: "flex",
  margin: 25,
  gridColumn: 1,
  marginLeft: 64,
  padding: 20,
};

export default App;
