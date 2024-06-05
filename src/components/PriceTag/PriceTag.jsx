/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
export default function PriceTag({ rangeValue, handleOffPrice, toggleValue }) {
  const prices = useSelector((state) => state.priceCard.prices);
  return (
    <>
      {rangeValue >= 0 && rangeValue <= 50
        ? toggleValue
          ? `$${handleOffPrice(prices[0])}.00`
          : `$${prices[0]}.00`
        : ""}
      {rangeValue >= 51 && rangeValue <= 100
        ? toggleValue
          ? `$${handleOffPrice(prices[1])}.00`
          : `$${prices[1]}.00`
        : ""}
      {rangeValue >= 101 && rangeValue <= 150
        ? toggleValue
          ? `$${handleOffPrice(prices[2])}.00`
          : `$${prices[2]}.00`
        : ""}
      {rangeValue >= 151 && rangeValue <= 200
        ? toggleValue
          ? `$${handleOffPrice(prices[3])}.00`
          : `$${prices[3]}.00`
        : ""}
    </>
  );
}
