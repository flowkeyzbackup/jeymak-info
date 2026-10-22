import { PRODUCT_CATEGORIES } from "../../constants/categories";

type ProductFiltersProps = {
  category: string;
  onChange: (category: string) => void;
};

export default function ProductFilters({
  category,
  onChange,
}: ProductFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3 ">
      {PRODUCT_CATEGORIES.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`rounded-full cursor-pointer px-5 py-2 text-sm font-semibold transition-all duration-300 ${
            category === item
              ? "bg-green-700 text-white shadow-lg"
              : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}