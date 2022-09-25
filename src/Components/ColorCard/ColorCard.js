import "./ColorCard.css";
import { SingleCard } from "../SingleCard/SingleCard";

export function ColorCard({
  cardList,
  colorPicker,
  deleteCardContainer,
  editCardContainer,
  /*   setColorNames, */
}) {
  return cardList.map((card) => {
    return (
      <SingleCard
        card={card}
        key={card.id}
        colorPicker={colorPicker}
        deleteCardContainer={deleteCardContainer}
        editCardContainer={editCardContainer}
        /* setColorNames={setColorNames} */
      />
    );
  });
}
