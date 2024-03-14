import React, { useState } from "react";
import { TbShoppingCartCopy , TbArrowBigRightLine } from "react-icons/tb";
import { LuBadgeCheck, LuBadgeX } from "react-icons/lu";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { makePaymentRequest } from "@/utils/api";
// import { loadStripe } from "@stripe/stripe-js";

const ProductDetails = ({ product, products }) => {
    const [selectedSize, setSelectedSize] = useState();
    const [showError, setShowError] = useState(false);
    const dispatch = useDispatch();
    const p = product?.data?.[0]?.attributes;
    // const [loading, setLoading] = useState(false);

    const notify = () => {
        toast.success("Success. Check your cart!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    {/* const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    ); */}

    {/* const handlePayment = async () => {
        try {
            setLoading(true);
            const stripe = await stripePromise;
            const res = await makePaymentRequest("api/orders", {
                products: cartItems,
            });
            await stripe.redirectToCheckout({
                sessionId: res.stripeSession.id,
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }; */}

    return (
        <div className="w-full md:py-20">
            <ToastContainer />
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* left column start */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel images={p.image.data} />
                    </div>
                    {/* left column end */}

                    {/* right column start */}
                    <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            {p.name}
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            {p.subtitle}
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP : &#8377;{p.price}
                            </p>
                            {p.original_price && (
                                <>
                                    <p className="text-base  font-medium line-through">
                                        &#8377;{p.original_price}
                                    </p>
                                    <p className="ml-auto text-base font-medium text-green-500">
                                        {getDiscountedPricePercentage(
                                            p.original_price,
                                            p.price
                                        )}
                                        % off
                                    </p>
                                </>
                            )}
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-5">
                            {`(Also includes all applicable duties)`}
                        </div>

                        <div className="text-md font-medium text-black/[0.5] mb-20 flex items-center gap-2 ">
                        {p.available ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#12e633" fill="none">
                                            <path d="M14.2618 3.59937C13.1956 2.53312 12.6625 2 12 2C11.3375 2 10.8044 2.53312 9.73815 3.59937C9.09832 4.2392 8.46427 4.53626 7.55208 4.53626C6.7556 4.53626 5.62243 4.38178 5 5.00944C4.38249 5.63214 4.53628 6.76065 4.53628 7.55206C4.53628 8.46428 4.2392 9.09832 3.59935 9.73817C2.53312 10.8044 2.00001 11.3375 2 12C2.00002 12.6624 2.53314 13.1956 3.59938 14.2618C4.31616 14.9786 4.53628 15.4414 4.53628 16.4479C4.53628 17.2444 4.38181 18.3776 5.00949 19C5.63218 19.6175 6.76068 19.4637 7.55206 19.4637C8.52349 19.4637 8.99128 19.6537 9.68457 20.347C10.2749 20.9374 11.0663 22 12 22C12.9337 22 13.7251 20.9374 14.3154 20.347C15.0087 19.6537 15.4765 19.4637 16.4479 19.4637C17.2393 19.4637 18.3678 19.6175 18.9905 19M20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19M18.9905 19H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8 10.3077C8 10.3077 10.25 10 12 14C12 14 17.0588 4 22 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                            : 
                                        <LuBadgeX className='text-2xl text-red-700' />} Eligible for Instant Delivery
                        </div>

                        {/* PRODUCT SIZE RANGE START */}
                        <div className="mb-10">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Launcher
                                </div>
                                {/* <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div> */}
                            </div>
                            {/* HEADING END */}

                            {/* SIZE START */}
                            <div
                                id="sizesGrid"
                                className="grid grid-cols-3 gap-2"
                            >
                                {p.size.data.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`border rounded-md text-center py-3 font-medium ${
                                            item.enabled
                                                ? "hover:border-black cursor-pointer"
                                                : "cursor-not-allowed bg-black/[0.1] opacity-50"
                                        } ${
                                            selectedSize === item.size
                                                ? "border-black"
                                                : ""
                                        }`}
                                        onClick={() => {
                                            setSelectedSize(item.size);
                                            setShowError(false);
                                        }}
                                    >
                                        {item.size}
                                    </div>
                                ))}
                            </div>
                            {/* SIZE END */}

                            {/* SHOW ERROR START */}
                            {showError && (
                                <div className="text-red-600 mt-1">
                                    Launcher selection is required
                                </div>
                            )}
                            {/* SHOW ERROR END */}
                        </div>
                        {/* PRODUCT SIZE RANGE END */}

                        {/* ADD TO CART BUTTON START */}
                        <button
                            className="w-full py-4 rounded-lg bg-cusblue text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center justify-center gap-2"
                            // onClick={() => {
                            //     if (!selectedSize) {
                            //         setShowError(true);
                            //         document
                            //             .getElementById("sizesGrid")
                            //             .scrollIntoView({
                            //                 block: "center",
                            //                 behavior: "smooth",
                            //             });
                            //     } else {
                            //         dispatch(
                            //             addToCart({
                            //                 ...product?.data?.[0],
                            //                 selectedSize,
                            //                 oneQuantityPrice: p.price,
                            //             })
                            //         );
                            //         notify();
                            //     }
                            // }}
                        >
                            Buy Now
                            <TbArrowBigRightLine size={20} />
                        </button>
                        {/* ADD TO CART BUTTON END */}

                        {/* WHISHLIST BUTTON START */}
                        <button
                        className="w-full py-4 rounded-lg border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"
                        onClick={() => {
                            if (!selectedSize) {
                                setShowError(true);
                                document
                                    .getElementById("sizesGrid")
                                    .scrollIntoView({
                                        block: "center",
                                        behavior: "smooth",
                                    });
                            } else {
                                dispatch(
                                    addToCart({
                                        ...product?.data?.[0],
                                        selectedSize,
                                        oneQuantityPrice: p.price,
                                    })
                                );
                                notify();
                            }
                        }}
                        >
                            Add to Cart
                            <TbShoppingCartCopy size={20} />
                        </button>
                        {/* WHISHLIST BUTTON END */}

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                                <ReactMarkdown>{p.description}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                    {/* right column end */}
                </div>

                <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
                    <span className="font-extrabold">Note :-</span> <span className="font-bold">After Your Successfull Purchase Please Send Invoice. Then Product Will Delivird</span>
                    <div className="font-bold">This is our Email Id :- <span><a href="mailto:INFORM@CHEAPESTGAME.COM">{p.email}</a></span> </div>
                </div>

                <RelatedProducts products={products} />
            </Wrapper>
        </div>
    );
};

export default ProductDetails;

export async function getStaticPaths() {
    const products = await fetchDataFromApi("api/products?populate=*");
    const paths = products?.data?.map((p) => ({
        params: {
            slug: p.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const product = await fetchDataFromApi(
        `api/products?populate=*&filters[slug][$eq]=${slug}`
    );
    const products = await fetchDataFromApi(
        `api/products?populate=*&[filters][slug][$ne]=${slug}`
    );

    return {
        props: {
            product,
            products,
        },
    };
}
