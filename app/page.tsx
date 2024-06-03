import HomeBanner from "@/app/components/HomeBanner";
import Container from "./components/Container";
import ProductCard from "./components/product/ProductCard";
import { products } from "@/utils/products";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <div className="bg-white">
        <Container>
          {/* <div className="grid grid-cols-6 gap-5"> */}
            {/* <div className="h-10 bg-red-300"></div> */}
            {/* <div className="col-start-2 col-end-7 "> */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
                {products.map((product:any) => {
                  return <ProductCard key={product.id} data={product} />
                })}
                {/* <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard /> */}
              </div>
            {/* </div> */}
          {/* </div> */}
        </Container>
      </div>
    </div>
  );
}
