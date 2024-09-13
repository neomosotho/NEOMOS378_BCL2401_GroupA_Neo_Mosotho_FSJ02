export async function fetchProducts(productsPerPage, skip = 0) {
    try {
      const res = await fetch(`https://next-ecommerce-api.vercel.app/products?limit=${productsPerPage}&skip=${skip}`);
      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await res.json();
      return {
        products: data, // Ensure this is correct based on API structure
        total: data.total, // Ensure this is correct
      };
    } catch (error) {
      console.error('Error fetching products:', error);
      return { products: [], total: 0 };
    }
  } 
