import { List } from "./list";
import { NewButton } from "./new-button";

export const Sidebar = () => {
  return (
    <div className="fixed z-[1] top-0 left-0 w-[60px] h-full bg-blue-950 text-white">
      <div className="flex flex-col space-y-3 p-3">
        <List />
        <NewButton />
      </div>
    </div>
  );
};
