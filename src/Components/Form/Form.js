import "./Form.css";
import { useState } from "react";

export function Form({ addCardContainer }) {
  const [colorPickerCode, setColorPickerCode] = useState("");

  function logFormData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    addCardContainer(data);
  }

  // function handleChange(event) {
  //   console.log(event.target.value);
  //   const colorCopy = event.target.value;
  //   setColorPickerCode(colorCopy);
  // }

  return (
    <form onSubmit={logFormData} className="formContainer">
      <label>Pick your color</label>
      <input
        className="form__colorPicker"
        type="color"
        name="colorCode"
        id="colorCode"
        value={colorPickerCode}
        onChange={(event) => {
          setColorPickerCode(event.target.value);
          console.log(colorPickerCode);
        }}
      />
      <input
        className="form__colorCode"
        type="text"
        name="colorName"
        id="colorName"
        value={colorPickerCode}
        onChange={(event) => setColorPickerCode(event.target.value)}
      />
      <button className="form__submit" type="submit">
        Add Color
      </button>
    </form>
  );
}
