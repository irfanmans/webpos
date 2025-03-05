import IconBrand from "../ui/IconBrand";
import { CiSearch } from "react-icons/ci";
import Input from "../ui/Input";

interface SearchProps {
  query: string;
  setQuery: (value: string) => void;
}

export default function Search({ query, setQuery }: SearchProps) {
  function handleQuerySearch(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <>
      <div className="flex gap-3 items-center bg-slate-100 py-3 px-3 rounded-2xl w-full">
        <IconBrand icon={CiSearch} size={20} />
        <Input
          type="text"
          id="search"
          name="search"
          className="focus:outline-none font-poppins w-full bg-slate-100"
          placeholder="Search"
          value={query}
          onChange={handleQuerySearch}
        />
      </div>
    </>
  );
}
