import { useState } from "react";


const ColorBox = () => {
  const [color, setColor] = useState("");
  const [buttonColor, setButtonColor] = useState("");

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const hexColor= event.target.value;
    // hexcolor code to for example #000000
    if(/^#[0-9A-Fa-f]{0,6}$/i.test(hexColor)){
        setColor(hexColor);
    }
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
          value={color.slice(1)}    //remove the # symbol
          onChange={handleColorChange}
          placeholder="skriva hexadecimala värden börja med #"
        />
      </div>
      <button onClick={handleButtonClick} style={{background: buttonColor}}>Change Color</button>
    </>
  );
};




export default ColorBox;