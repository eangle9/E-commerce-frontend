import HomeBanner from "@/app/components/HomeBanner";
import Container from "./components/Container";
import ProductCard from "./components/product/ProductCard";
import { products } from "@/utils/products";
// import { useGetAllProductsQuery } from "@/features/products/productsApi";
import { Product } from "@/utils/types";
import ProductList from "./components/product/ProductList";

// type ProductsProps = {
//   productsData: Product[];
//   error: Error | null;
//   isLoading: boolean;
// };

export default function Home() {
  return (
    <div>
      <Container>
        <HomeBanner />
        <div className="bg-white">{<ProductList />}</div>
      </Container>
    </div>
  );
}
