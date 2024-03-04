import { useState } from "react";


const ColorBox = () => {
  const [color, setColor] = useState("");
  const [buttonColor, setButtonColor] = useState("");

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  const handleButtonClick = () => {
    setButtonColor(color);
    console.log(buttonColor);
  };

  return (
    <>
      <div className="color-box" >
        <input
          type="text"
          value={color}
          onChange={handleColorChange}
          placeholder="Enter a color"
        />
      </div>
      <button onClick={handleButtonClick} style={{background: buttonColor}}>Change Color</button>
    </>
  );
};




export default ColorBox;