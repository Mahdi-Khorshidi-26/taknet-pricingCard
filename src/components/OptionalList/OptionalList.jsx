import { IoMdCheckmark } from "react-icons/io";

/* eslint-disable react/prop-types */
export default function OptionsList({ rangeValue, options }) {
  return (
    <>
      {rangeValue >= 0 &&
        rangeValue <= 50 &&
        options.zeroToFifty.map((opt, index) => {
          return (
            <li
              className="capitalize text-slate-500 flex justify-center items-center gap-2 font-semibold"
              key={options.zeroToFifty[index]}
            >
              <IoMdCheckmark className="inline text-[#2cd2c1]" />
              <span>{opt}</span>
            </li>
          );
        })}

      {rangeValue >= 51 &&
        rangeValue <= 100 &&
        options.fiftyToHundreds.map((opt, index) => {
          return (
            <li
              className="capitalize text-slate-500 flex justify-center items-center gap-2 font-semibold"
              key={options.fiftyToHundreds[index]}
            >
              <IoMdCheckmark className="inline text-[#2cd2c1]" />
              <span>{opt}</span>
            </li>
          );
        })}
      {rangeValue >= 101 &&
        rangeValue <= 150 &&
        options.hundredsToHundredFifty.map((opt, index) => {
          return (
            <li
              className="capitalize text-slate-500 flex justify-center items-center gap-2 font-semibold"
              key={options.hundredsToHundredFifty[index]}
            >
              <IoMdCheckmark className="inline text-[#2cd2c1]" />
              <span>{opt}</span>
            </li>
          );
        })}
      {rangeValue >= 151 &&
        rangeValue <= 200 &&
        options.HundredFiftyToTwoHundreds.map((opt, index) => {
          return (
            <li
              className="capitalize text-slate-500 flex justify-center items-center gap-2 font-semibold"
              key={options.HundredFiftyToTwoHundreds[index]}
            >
              <IoMdCheckmark className="inline text-[#2cd2c1]" />
              <span>{opt}</span>
            </li>
          );
        })}
    </>
  );
}
