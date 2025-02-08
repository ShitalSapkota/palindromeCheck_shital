import { useRef, useState } from "react";
import './PalindromeCheck.css'

const PalindromeCheck: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const textInputRef = useRef<HTMLInputElement>(null);

  const checkPalindromeHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      alert("Enter a valid text");
      return;
    } else {
        const normalText = enteredText.toLowerCase().replace(/[^a-z0-9]/g, "");
        let rev = normalText.split("").reverse().join("");
        if (rev === normalText) {
            setInputValue(`${enteredText}, is a palindrome!`);
      } else {
            setInputValue(`${enteredText}, is not a palindrome!`);
      }
    }

    if (textInputRef.current) {
      textInputRef.current.value = "";
    }
  };

  return (
      <div className="container">
        <h1>PalindromeCheck App</h1>
        <div className="header">
          <form onSubmit={checkPalindromeHandler}>
            <label htmlFor="palindrome-check">Enter a word / sentence</label>
            <input type="text" ref={textInputRef} required/>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="result">{inputValue}</div>
      </div>
  );
};

export default PalindromeCheck;
