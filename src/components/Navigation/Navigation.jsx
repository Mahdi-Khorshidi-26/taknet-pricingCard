import { MdOutlinePriceChange } from "react-icons/md";
export default function NavigationMenu() {
  return (
    <div className="flex justify-center items-center p-4 px-9 bg-orange-100 text-5xl shadow-2xl">
      <div className="flex items-center justify-center gap-2 text-orange-700">
        <MdOutlinePriceChange className="text-6xl" />
        <div>BUYFUN</div>
      </div>
    </div>
  );
}
