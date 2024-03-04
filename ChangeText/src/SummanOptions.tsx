import { useRef } from "react";

const SummanOptions = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  const pRef = useRef<HTMLParagraphElement>(null);

  const handleButtonClick = () => {
    if (inputRef.current && inputRef2.current && pRef.current) {
      pRef.current.innerText = (
        Number(inputRef.current.value) + Number(inputRef2.current.value)
      ).toString();
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div className="input-container">
        <input type="number" ref={inputRef} />
        <input type="number" ref={inputRef2} />
      </div>

      <button onClick={handleButtonClick}>SUM</button>

      <p ref={pRef}></p>
    </div>
  );
};
  
  export default SummanOptions;
  
