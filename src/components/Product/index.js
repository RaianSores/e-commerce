
export default function Product({ name, price }) {
  return (
    <div>
      <p>{name}</p>
      <span>{price.formatted_with_symbol}</span>
    </div>
  );
}
