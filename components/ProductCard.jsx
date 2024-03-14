import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import ReactImageMagnify from "react-image-magnify";
// import "sheryjs/src/Shery.css";
// import "sheryjs/src/Shery.js";
// import Shery , { imageMasker } from "sheryjs";

const ProductCard = ({ data: { attributes: p, id } }) => {

    // Shery.imageMasker(".mask-target" /* Element to target.*/, {
    //     //Parameters are optional.
    //     mouseFollower: true,
    //     text: "Shery",
    //     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    //     duration: 1,
    //   });

    return (
        <div className="try">
        <Link
            href={`/product/${p.slug}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <Image
                width={500}
                height={500}
                src={p.thumbnail.data.attributes.url}
                alt={p.name}
                className="rounded-xl mask-target"
                // onMouseEnter={imageMasker}
            />
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">{p.name}</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        &#8377;{p.price}
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
            </div>
        </Link>
        </div>
    );
};

export default ProductCard;
