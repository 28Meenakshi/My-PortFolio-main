import { Code } from "../icons/Icon";

export default function Header() {
    return (
        <div id="logo" className="flex items-center gap-x-2 px-2">
        <img src={"https://res.cloudinary.com/dgxft3g6v/image/upload/v1737194277/profile_rm9dso.webp"} alt="" className="w-8 h-8 md:w-12 md:h-12 rounded-2xl" />
        <h1 className="text-xl md:text-2xl whitespace-nowrap font-bold bg-gradient-to-tr to-indigo-700 tracking-wide">
          Meenakshi K
        </h1>
        <Code />
      </div>
    )
};
