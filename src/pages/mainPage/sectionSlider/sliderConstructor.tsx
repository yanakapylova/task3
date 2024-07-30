import { Pet } from "./pets-list";
import { cards } from "./pets-list";

export function sliderConstructor(startSliderIndex: number, itemsInRow: number) {
  let currSliderIndex: number = startSliderIndex;
  let currSliderArrCONSTRUCTOR: Pet[] = [];

  for (let i = 0; i < itemsInRow; i++) {
    currSliderArrCONSTRUCTOR.push(cards[currSliderIndex]);
    currSliderIndex++;

    if (currSliderIndex == cards.length) {
      currSliderIndex = 0;
    }
  }

  return currSliderArrCONSTRUCTOR;
}
