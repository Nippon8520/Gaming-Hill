// import Banner from "@/components/Banner";
import BigBanner from "@/components/BigBanner";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import HeroBanner from "@/components/HeroBanner";
import Littlebanner from "@/components/Littlebanner";
import NewsLetter from "@/components/NewsLetter";
import ProductCard from "@/components/ProductCard";
import TextBanner from "@/components/TextBanner";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
export default function Home({ products }) {
    return (
        <main>
            <HeroBanner />
            <Feature />
            <section id="product1" class="section-p1">
                <h2>Feature Products</h2>
                <p>Summer Collection New Morden Design</p>
                {/* <ProductSection/> */}
            </section>
            <Wrapper>
                {/* heading and paragaph start */}
                {/* <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Cushioning for Your Miles
                    </div>
                    <div className="text-md md:text-xl">
                        A lightweight Nike ZoomX midsole is combined with
                        increased stack heights to help provide cushioning
                        during extended stretches of running.
                    </div>
                </div> */}
                {/* heading and paragaph end */}

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                    {/* <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
                </div>
                {/* products grid end */}
            </Wrapper>
            <Littlebanner/>
            <section id="product1" class="section-p1">
                <h2>New Arrival Products</h2>
                <p>Summer Collection New Morden Design</p>
                {/* <ProductSection/> */}
            </section>
            <Wrapper>
                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                    {/* <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
                </div>
                {/* products grid end */}
            </Wrapper>
            <BigBanner/>
            <TextBanner/>
            <NewsLetter/>
        </main>
    );
}

export async function getStaticProps() {
    const products = await fetchDataFromApi("api/products?populate=*");

    return {
        props: { products },
    };
}
