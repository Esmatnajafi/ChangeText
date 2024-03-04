import { useState } from "react";


const ListSection = () => {
  const [inputText, setInputText] = useState("");
  const [listItems, setListItems] = useState<string[]>([]);

  const handleAddItem = () => {
    if (inputText.trim() !== "") {
      setListItems([...listItems, inputText]);
      setInputText("");
    }
  }
    return (
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };




export default ListSection;