import React, { useState } from "react";
import "./App.css";
import FontList from "./components/list";
import FontSelector from "./components/selector";

function App() {
  const [elementToShow, setElement] = useState("list");

  const changeFontPicker = (e) => {
    setElement(e.target.value);
  };

  return (
    <div className="App">
      <div className="radio-container">
        <div>
          List
          <input
            type="radio"
            id="list"
            name="myRadio"
            value="list"
            checked={elementToShow === "list"}
            onChange={changeFontPicker}
          />
        </div>
        <div>
          Selector
          <input
            type="radio"
            id="selector"
            name="myRadio"
            value="selector"
            checked={elementToShow === "selector"}
            onChange={changeFontPicker}
          />
        </div>
      </div>
      {elementToShow === "list" ? (
        <FontList
          selectedFont={(font) => console.log(font)}
          apiKey={process.env.REACT_APP_GOOGLE_FONTS_KEY}
        />
      ) : (
        <FontSelector
          className="font-selector"
          defaultFont="Random Font"
          selectedFont={(font) => console.log(font)}
          apiKey={process.env.REACT_APP_GOOGLE_FONTS_KEY}
        />
      )}
    </div>
  );
}

export default App;
