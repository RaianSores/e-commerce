export const loadProducts = async () => {
  const productResponse = fetch("https://fakestoreapi.com/products");

  const [products] = await Promise.all([productResponse]);

  const productsJson = await products.json();

  const allProducts = productsJson.map((product, index) => {
      return { ...product }
  });

  return allProducts;
};