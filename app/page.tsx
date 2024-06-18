import HomeBanner from "@/app/components/HomeBanner";
import Container from "./components/Container";
import ProductCard from "./components/product/ProductCard";
import { products } from "@/utils/products";
// import { useGetAllProductsQuery } from "@/features/products/productsApi";
import { Product } from "@/utils/types";
import ProductList from "./components/product/ProductList";

type ProductsProps = {
  productsData: Product[];
  error: Error | null;
  isLoading: boolean;
};

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <div className="bg-white">
        <Container>
          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2"> */}
            {<ProductList />}
            {/* {products.map((product: any) => {
              return <ProductCard key={product.id} data={product} />;
            })} */}
          {/* </div> */}
        </Container>
      </div>
    </div>
  );
}
