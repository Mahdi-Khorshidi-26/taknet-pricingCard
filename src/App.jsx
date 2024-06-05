/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { priceActions } from "./store";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import OptionsList from "./components/OptionalList/OptionalList";
import PriceTag from "./components/PriceTag/PriceTag";
import Button from "./components/Button/Button";
export default function App() {
  const dispatch = useDispatch();
  const rangeValue = useSelector((state) => state.priceCard.slider);
  const toggleValue = useSelector((state) => state.priceCard.durationToggle);
  const options = useSelector((state) => state.priceCard.options);
  const offPrice = useSelector((state) => state.priceCard.offPrice);
  function handleChangeOfSlider(e) {
    dispatch(priceActions.changeSlider(e.target.value));
  }
  function handleOffPrice(amount) {
    dispatch(priceActions.offPrice(amount));
    return Math.abs(offPrice);
  }
  return (
    <div className="h-[100vh] bg-slate-100 flex justify-center items-start">
      <div className="flex flex-col gap-y-8 w-auto h-[500px] bg-slate-50 rounded-lg shadow-2xl shadow-black p-5 divide-y-2 mt-10">
        <div className="flex flex-col gap-y-8 justify-center items-center">
          <div className="text-center pb-2 text-slate-500 text-2xl">
            {rangeValue}k PAGEVIEWS
          </div>
          <input
            type="range"
            className="w-full accent-[#2cd2c1] cursor-pointer"
            min={0}
            max={200}
            value={rangeValue}
            onChange={(e) => handleChangeOfSlider(e)}
          />
          <div className="text-2xl flex justify-center items-center font-sans gap-1">
            <span className="text-4xl font-bold">
              <PriceTag
                rangeValue={rangeValue}
                handleOffPrice={handleOffPrice}
                toggleValue={toggleValue}
              />
            </span>
            <span className="text-slate-500 text-md capitalize">
              /{toggleValue ? "yearly" : "monthly"}
            </span>
          </div>
          <div className="flex text-xs justify-evenly items-center gap-3">
            <span className="text-sm capitalize font-semibold">
              monthly billing
            </span>
            <div>
              <ToggleButton />
            </div>
            <span className="text-sm capitalize font-semibold">
              yearly Billing{" "}
              <span className="rounded-full bg-red-300 px-2 py-1 text-red-950">
                -25%
              </span>
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-full flex-col gap-y-5">
          <ul className="flex justify-center items-center gap-1 flex-col">
            <OptionsList rangeValue={rangeValue} options={options} />
          </ul>
          <Button />
        </div>
      </div>
    </div>
  );
}
