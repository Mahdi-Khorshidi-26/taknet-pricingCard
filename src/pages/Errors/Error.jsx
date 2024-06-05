import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="capitalize text-6xl text-center m-3  transition-all hover:text-red-950 duration-150 cursor-pointer ">
          something went wrong try again later
        </h1>
        <Link
          className="px-3 py-5 shadow-lg shadow-zinc-800 cursor-pointer transform hover:translate-y-[-3px] transition-all duration-150 active:translate-y-0 active:shadow-2xl font-serif rounded-md"
          to={"/"}
        >
          HOME
        </Link>
      </div>
    </>
  );
}
