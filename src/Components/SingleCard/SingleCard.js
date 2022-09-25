import { useEffect, useState } from "react";
import "./SingleCard.css";

export function SingleCard({
  card,
  colorPicker,
  deleteCardContainer,
  editCardContainer,
  /*   setColorNames, */
}) {
  const [newColorName, setNewColorName] = useState("#ffffff");
  //setNewColorName(setColorNames(card.colorCode.substring(1)))

  useEffect(() => {
    // fetch
    async function setColorNames(colorCode) {
      const response = await fetch(`https://www.thecolorapi.com/id?hex=${colorCode}`);
      const data = await response.json();
      console.log("daten", data);
      // console.log(data.name.value);
      // console.log(data.hex.value);
      // setfetchUrl(`https://www.thecolorapi.com/id?hex=${colorCode}`);
      const fetchColorName = data.name.value;
      setNewColorName(fetchColorName);
    }

    setColorNames(card.colorCode.substring(1));
  }, []);

  console.log("Function colorName", newColorName);
  console.log("colorCode", card.colorCode);

  return (
    <section
      className="colorCardContainer"
      style={{ backgroundColor: card.colorCode }}
      key={card.id}
    >
      <svg
        className="delete-icon"
        onClick={() => deleteCardContainer(card.id)}
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
      <p className="colorName">{newColorName}</p>
      {
        <input
          type="text"
          onChange={(event) => {
            colorPicker(card);
            console.log(`ich kopiere ${card.colorCode}`);
            editCardContainer(card.id, event.target.value);
          }}
          className="input__colorCode"
          value={card.colorCode}
        />
      }
      <artcile
        onClick={() => {
          colorPicker(card.colorCode);
        }}
        className={"copy__div"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={"copy__icon"}
          viewBox="0 0 512 512"
        >
          <path d="M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z" />
        </svg>
        <p className={"copy__text"}>Click here to copy the colorcode</p>
      </artcile>
    </section>
  );
}
