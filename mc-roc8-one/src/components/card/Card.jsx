const Card = (props) => {
  const { product } = props;
  const { name, brand, size, price, category } = product;
  return (
    <section className="w-40 h-fit flex flex-col items-center border-2 rounded border-slate-300">
      <h3 className="font-medium text-xl">{name}</h3>
      <p>{brand}</p>
      <p>{category}</p>
      <p>{size}</p>
      <p>{price}</p>
    </section>
  );
};

export { Card };
