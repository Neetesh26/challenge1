import React, { useState, useMemo, useCallback } from "react";
import { products } from "../data";
import Products from "../components/Products";

const ProductPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = useCallback((e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  }, []);

  const toggleSubcategory = useCallback((e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  }, []);

  const filterProduct = useMemo(() => {
    let updatedProducts = [...products];

    if (category.length > 0) {
      updatedProducts = updatedProducts.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      updatedProducts = updatedProducts.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    if (sortType === "under-1500") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "above-1500") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    return updatedProducts;
  }, [category, subCategory, sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-10 pt-10 border-t">

      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl font-semibold cursor-pointer"
        >
          FILTERS
        </p>

        <div className={`border p-4 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 font-medium">CATEGORIES</p>
          {["Mens", "Womens", "Kids"].map((cat) => (
            <label key={cat} className="flex gap-2 text-sm">
              <input type="checkbox" value={cat} onChange={toggleCategory} />
              {cat}
            </label>
          ))}
        </div>

        <div className={`border p-4 mt-5 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 font-medium">TYPE</p>
          {["Zudio", "Zara", "Louis Vuitton"].map((sub) => (
            <label key={sub} className="flex gap-2 text-sm">
              <input type="checkbox" value={sub} onChange={toggleSubcategory} />
              {sub}
            </label>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-end mb-4">
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border px-2 py-1 text-sm"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="under-1500">Sort by: Low to High</option>
            <option value="above-1500">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProduct.map((item,i) => (
            <Products key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
