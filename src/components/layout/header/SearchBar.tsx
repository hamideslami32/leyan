import SearchIcon from "@/assets/icons/search.svg";
import Button from "@/components/shared/ui/button/Button";

const SearchBar = () => {
  return (
    <div className="flex items-center pr-4 h-12 w-[600px] text-sm bg-gray-200 placeholder:text-gray-600 rounded-md">
      <Button variant="icon">
        <SearchIcon className="text-gray-400" />
      </Button>
      <input
        className="w-full h-full mr-2 px-1 bg-transparent"
        placeholder="جستجو در محصولات"
      />
    </div>
  );
};

export default SearchBar;
