import { AsideBar, Card, Header } from "components";
import { productList } from "data/products";
import { useState } from "react";
import {
  filterByBrands,
  filterByCategory,
  filterBySizes,
  sortByPrice,
} from "utility/filter-functions";

function App() {
  const initialState = {
    sortBy: "",
    brand: {
      puma: "",
      nike: "",
      hAndM: "",
    },
    category: {
      men: "",
      women: "",
    },
    size: {
      s: "",
      m: "",
      l: "",
      xl: "",
    },
  };
  const [filter, setFilter] = useState(initialState);
  console.log(filter);
  const sortedList = sortByPrice(productList, filter.sortBy);
  const filteredBySizes = filterBySizes(sortedList, filter.size);
  const filteredByBrands = filterByBrands(filteredBySizes, filter.brand);
  const filteredByCategory = filterByCategory(
    filteredByBrands,
    filter.category
  );

  return (
    <div>
      <Header />
      <div className="grid grid-cols-8">
        <AsideBar
          filter={filter}
          setFilter={setFilter}
          initialState={initialState}
        />
        <main className="col-start-3 col-end-9 p-4 flex flex-wrap gap-4">
          {filteredByCategory.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
