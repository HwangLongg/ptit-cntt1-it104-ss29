import { useEffect } from "react";
import { getAllProduct } from "./api/productApi";
import { Product } from "./types/product";

function App() {
  useEffect(() => {
    async function fetchData() {
      const products: Product[] = await getAllProduct();
      console.log("Danh sách sản phẩm:", products);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch API Demo (TSX)</h1>
      <p>Mở console (F12) để xem danh sách sản phẩm</p>
    </div>
  );
}

export default App;
