import { useRef } from "react";


const ChangeText = () => {
    //input section
  const inputRef = useRef<HTMLInputElement>(null);
  
  const pRef = useRef<HTMLParagraphElement>(null);

  const handleButtonClick = () => {
    if (inputRef.current && pRef.current) {
      pRef.current.innerText = inputRef.current.value;
      inputRef.current.value = "";
      inputRef.current.focus();      
    }
  };

  return (
    <div>
      <div className="input-container">
        <input type="text" ref={inputRef} />
      </div>

      <button onClick={handleButtonClick}>Copy me</button>

      <p ref={pRef}></p>
    </div>
  );
};

export default ChangeText;
