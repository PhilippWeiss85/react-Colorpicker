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
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="delete-icon"
        onClick={() => deleteCardContainer(card.id)}
      >
        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
      </svg> */}
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
    </section>
  );
}
