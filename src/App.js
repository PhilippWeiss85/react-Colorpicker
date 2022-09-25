import "./App.css";
import { ColorCard } from "./Components/ColorCard/ColorCard";
import { Form } from "./Components/Form/Form";
import { useState } from "react";
import { useEffect } from "react";

const cardArray = [
  {
    id: "#" + Math.random().toString(8),
    colorCode: "#ffffff",
    colorName: "White",
  },
  {
    id: "#" + Math.random().toString(8),
    colorCode: "#000000",
    colorName: "Black",
  },
  {
    id: "#" + Math.random().toString(8),
    colorCode: "#ff0000",
    colorName: "Red",
  },
  {
    id: "#" + Math.random().toString(8),
    colorCode: "#0000ff",
    colorName: "Blue",
  },
];

function App() {
  const [cardList, setCardList] = useState(() => {
    return JSON.parse(localStorage.getItem("cards")) ?? cardArray;
  });

  // localStorage
  useEffect(() => {
    console.log("This is the localStorage setItem useEffect");
    localStorage.setItem("cards", JSON.stringify(cardList));
  }, [cardList]);

  /*   async function setColorNames(colorCode) {
    const response = await fetch(`https://www.thecolorapi.com/id?hex=${colorCode}`);
    const data = await response.json();
    console.log("daten", data);
    // console.log(data.name.value);
    // console.log(data.hex.value);
    // setfetchUrl(`https://www.thecolorapi.com/id?hex=${colorCode}`);
    const fetchColorName = data.name.value;
    return fetchColorName;
    setNewColorName(fetchColorName);
  } */

  /* useEffect(() => {
    console.log("This is the fetchUrl useEffect");
    setColorNames();
  }, [fetchUrl]); */

  // functions below
  const colorPicker = (cardcolor) => {
    window.alert(`Your copied ${cardcolor}`);
    return navigator.clipboard.writeText(cardcolor.colorName);
  };

  function addCardContainer(formInput) {
    const newCardList = [
      ...cardList,
      {
        id: "#" + Math.random().toString(8),
        colorCode: formInput.colorCode,
        colorName: formInput.colorName,
      },
    ];
    setCardList(newCardList);
  }

  function deleteCardContainer(cardId) {
    const newCardListAfterDelete = cardList.filter((card) => cardId !== card.id);
    setCardList(newCardListAfterDelete);
  }

  function editCardContainer(cardId, inputValue) {
    const newColorContainer = cardList.map((card) =>
      cardId === card.id ? { ...card, colorCode: inputValue } : card
    );
    setCardList(newColorContainer);
  }

  // return below
  return (
    <div className="mainContent">
      <header>
        <h1>Colorpicker</h1>
        <Form addCardContainer={addCardContainer} />
      </header>
      <main>
        <ColorCard
          key={cardList.id}
          cardList={cardList}
          colorPicker={colorPicker}
          deleteCardContainer={deleteCardContainer}
          editCardContainer={editCardContainer}
          /* setColorNames={setColorNames} */
        />
      </main>
    </div>
  );
}

export default App;
