export const sortByPrice = (list, sortBy) => {
  if (sortBy === "high") {
    return list.sort((a, b) => b.price - a.price);
  } else if (sortBy === "low") {
    return list.sort((a, b) => a.price - b.price);
  } else {
    return list;
  }
};

export const filterByCategory = (list, category) => {
  const { men, women } = category;
  if (men && women) {
    return list;
  } else if (men) {
    return list.filter((product) => product.category === "men");
  } else if (women) {
    return list.filter((product) => product.category === "women");
  } else {
    return list;
  }
};

export const filterBySizes = (list, sizes) => {
  const { s, m, l, xl } = sizes;
  if (s && m && l && xl) {
    return list;
  } else if (s && m && l) {
    return list.filter((product) => product.size !== "xl");
  } else if (s && m && xl) {
    return list.filter((product) => product.size !== "l");
  } else if (s && xl && l) {
    return list.filter((product) => product.size !== "m");
  } else if (xl && m && l) {
    return list.filter((product) => product.size !== "s");
  } else if (xl && m) {
    return list.filter(
      (product) => product.size !== "s" && product.size !== "l"
    );
  } else if (xl && s) {
    return list.filter(
      (product) => product.size !== "m" && product.size !== "l"
    );
  } else if (xl && l) {
    return list.filter(
      (product) => product.size !== "s" && product.size !== "m"
    );
  } else if (l && m) {
    return list.filter(
      (product) => product.size !== "s" && product.size !== "xl"
    );
  } else if (l && s) {
    return list.filter(
      (product) => product.size !== "m" && product.size !== "xl"
    );
  } else if (l && xl) {
    return list.filter(
      (product) => product.size !== "m" && product.size !== "s"
    );
  } else if (s && m) {
    return list.filter(
      (product) => product.size !== "l" && product.size !== "xl"
    );
  } else if (s && l) {
    return list.filter(
      (product) => product.size !== "m" && product.size !== "xl"
    );
  } else if (s && xl) {
    return list.filter(
      (product) => product.size !== "m" && product.size !== "l"
    );
  } else if (m && xl) {
    return list.filter(
      (product) => product.size !== "s" && product.size !== "l"
    );
  } else if (s && m) {
    return list.filter(
      (product) => product.size !== "xl" && product.size !== "l"
    );
  } else if (m && l) {
    return list.filter(
      (product) => product.size !== "s" && product.size !== "xl"
    );
  } else if (m) {
    return list.filter((product) => product.size === "m");
  } else if (s) {
    return list.filter((product) => product.size === "s");
  } else if (l) {
    return list.filter((product) => product.size === "l");
  } else if (xl) {
    return list.filter((product) => product.size === "xl");
  } else {
    return list;
  }
};

export const filterByBrands = (list, brands) => {
  const { puma, nike, hAndM } = brands;
  if (puma && nike && hAndM) {
    return list;
  } else if (puma && nike) {
    return list.filter((product) => product.brand !== "H&M");
  } else if (puma && hAndM) {
    return list.filter((product) => product.brand !== "nike");
  } else if (nike && hAndM) {
    return list.filter((product) => product.brand !== "puma");
  } else if (nike) {
    return list.filter((product) => product.brand === "nike");
  } else if (puma) {
    return list.filter((product) => product.brand === "puma");
  } else if (hAndM) {
    return list.filter((product) => product.brand === "H&M");
  } else {
    return list;
  }
};
