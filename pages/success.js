import React from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Success = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                    <div className="text-2xl font-bold">
                        Thanks for shopping with us!
                    </div>
                    <div className="text-lg font-bold mt-2">
                        Your order has been placed successfully.
                    </div>
                    <div className="text-base mt-5">
                        For any product related query, drop an email to
                    </div>
                    <div className="underline">contact@gaminghill.com</div>

                    <Link href="/" className="font-bold mt-5">
                        Continue Shopping
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Success;

// import React, { useEffect , useState } from 'react'
// import Wrapper from '@/components/Wrapper';
// import Link from 'next/link';
// import Confetti from 'react-confetti'

// export default () => {
    
//     const [windowSize, setWindowSize] = useState({width: undefined , height : undefined});

//     function handleWindowSize() {
//         setWindowSize({
//             width:  window.innerWidth, 
//             height : window.innerHeight
//         });
//     }

//     useEffect(()=>{
//         window.onresize = () => handleWindowSize();
//     })

//   return (
//       <div className="min-h-[650px] flex items-center">
//             <Confetti width={windowSize.width} height={windowSize.height}/>
//              <Wrapper>
//                  <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
//                      <div className="text-2xl font-bold">
//                          Thanks for shopping with us!
//                      </div>
//                      <div className="text-lg font-bold mt-2">
//                          Your order has been placed successfully.
//                      </div>
//                      <div className="text-base mt-5">
//                          For any product related query, drop an email to
//                      </div>
//                      <div className="underline">shoeshopcontact@shop.com</div>

//                      <Link href="/" className="font-bold mt-5">
//                          Continue Shopping
//                      </Link>
//                  </div>
//              </Wrapper>
//          </div>
//   )
// }