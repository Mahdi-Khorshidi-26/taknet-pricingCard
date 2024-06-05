import { useDispatch } from "react-redux";
import { priceActions } from "../../store/index";
export default function ToggleButton() {
  const dispatch = useDispatch();
  function handleChangeToggler() {
    dispatch(priceActions.changeDurationToggle());
  }
  return (
    <label
      htmlFor="AcceptConditions"
      className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-[#2cd2c1]"
    >
      <input
        type="checkbox"
        id="AcceptConditions"
        className="peer sr-only"
        onClick={handleChangeToggler}
      />
      <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
    </label>
  );
}
