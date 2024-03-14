import Wrapper from '@/components/Wrapper'
import React from 'react'

const contact = () => {
  return (
    
    <div className='w-full md:py-20'>
        <Wrapper>
            <div class="formcarry-container flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                <div className='flex-[1] py-3'>
                    {/* <div className="text-[34px] font-semibold mb-2 leading-tight"> */}
                        <form action="https://formcarry.com/s/ENChs4WEAGt" method="POST" enctype="multipart/form-data">

                            <div class="formcarry-block">
                                <label for="fc-generated-1-name">Full Name</label>
                                <input type="text" name="name" id="fc-generated-1-name" placeholder="Your first and last name" />
                            </div>

                            <div class="formcarry-block">
                                <label for="fc-generated-1-email">Your Email Address</label>
                                <input type="email" name="email" id="fc-generated-1-email" placeholder="john@doe.com" />
                            </div>

                            <div class="formcarry-block">
                                <label for="fc-generated-1-message">Your message</label>
                                <textarea name="message" name="message" id="fc-generated-1-message" placeholder="Enter your message..."></textarea>
                            </div>

                            <div class="formcarry-block">
                                <button type="submit">Contact Us</button>
                            </div>
                        </form>
                    {/* </div> */}
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default contact