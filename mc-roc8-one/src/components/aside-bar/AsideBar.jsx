import { useState } from "react";

const AsideBar = (props) => {
  const [key, setKey] = useState(1);
  const { setFilter, filter, initialState } = props;
  const { brand, size, category } = filter;
  console.log("setFilter", initialState);
  return (
    <aside key={key} className="col-start-1 col-end-3">
      <div className="mt-2 flex flex-col gap-2 w-4/5 mx-auto">
        <div className="flex justify-between">
          <h2 className="font-medium text-2xl">Filters</h2>
          <button
            className="px-8 py-1 bg-red-600"
            onClick={() => {
              setFilter({ ...initialState });
              setKey((prev) => prev + 1);
            }}
          >
            clear all
          </button>
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-xl">Sort by:</h3>
          <label
            htmlFor="HIGH"
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              id="HIGH"
              className="cursor-pointer"
              name="sort"
              onChange={() => {
                setFilter((prev) => ({ ...prev, sortBy: "high" }));
              }}
            />
            high to low
          </label>
          <label
            htmlFor="LOW"
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              id="LOW"
              className="cursor-pointer"
              name="sort"
              onChange={() => {
                setFilter((prev) => ({ ...prev, sortBy: "low" }));
              }}
            />
            low to high
          </label>
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-xl">Sizes:</h3>
          <label
            htmlFor="small"
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              id="small"
              className="cursor-pointer"
              onChange={(e) => {
                setFilter((prev) => {
                  console.log(e.target.checked);
                  return {
                    ...prev,
                    size: { ...size, s: e.target.checked },
                  };
                });
              }}
            />
            small
          </label>
          <label htmlFor="m" className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              id="m"
              className="cursor-pointer"
              onChange={(e) => {
                setFilter((prev) => ({
                  ...prev,
                  size: { ...size, m: e.target.checked },
                }));
              }}
            />
            medium
          </label>
          <label htmlFor="l" className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              id="l"
              className="cursor-pointer"
              onChange={(e) => {
                setFilter((prev) => ({
                  ...prev,
                  size: { ...size, l: e.target.checked },
                }));
              }}
            />
            large
          </label>
          <label
            htmlFor="xl"
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              id="xl"
              className="cursor-pointer"
              onChange={(e) => {
                setFilter((prev) => ({
                  ...prev,
                  size: { ...size, xl: e.target.checked },
                }));
              }}
            />
            extra large
          </label>
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-xl">Brand:</h3>
          <label
            htmlFor="nike"
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              id="nike"
              className="cursor-pointer"
              onChange={(e) => {
                setFilter((prev) => ({
                  ...prev,
                  brand: { ...brand, nike: e.target.checked },
                }));
              }}
            />
            Nike
          </label>
          <label
            htmlFor="puma"
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              id="puma"
              className="cursor-pointer"
              onChange={(e) => {
                setFilter((prev) => ({
                  ...prev,
                  brand: { ...brand, puma: e.target.checked },
                }));
              }}
            />
            Puma
          </label>
          <label
            htmlFor="hM"
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              id="hM"
              className="cursor-pointer"
              onChange={(e) => {
                setFilter((prev) => ({
                  ...prev,
                  brand: { ...brand, hAndM: e.target.checked },
                }));
              }}
            />
            H&M
          </label>
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-xl">Brand:</h3>
          <label
            htmlFor="men"
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              id="men"
              className="cursor-pointer"
              onChange={(e) => {
                setFilter((prev) => ({
                  ...prev,
                  category: { ...category, men: e.target.checked },
                }));
              }}
            />
            Men
          </label>
          <label
            htmlFor="women"
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              id="women"
              className="cursor-pointer"
              onChange={(e) => {
                setFilter((prev) => ({
                  ...prev,
                  category: { ...category, women: e.target.checked },
                }));
              }}
            />
            Women
          </label>
        </div>
      </div>
    </aside>
  );
};

export { AsideBar };
