import React from "react";
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'

const FAQ = () => (
  <>
    <Header />
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-14 pb-32">
      <div className="w-full max-w-[1220px] px-7">
        <h2 className="font-plus font-bold text-[36px] leading-[45px] mb-10 text-black">FAQ</h2>

        {/* 1. Check Order Status */}
        <div className="mb-8">
          <h4 className="font-plus font-bold text-2xl leading-[30px] mb-2 text-black">
            How do I check my order status?
          </h4>
          <p className="font-plus text-xl leading-[36px] text-black">
            To check the status of your order, including processing and shipping updates, log in to your StoreOne account or enter your order number, email address, and billing zip code on our Order Status page. Once your order has shipped, you will receive an email with a tracking number for all shipping and delivery updates.
          </p>
        </div>

        {/* 2. Change or Cancel Order */}
        <div className="mb-8">
          <h4 className="font-plus font-bold text-2xl leading-[30px] mb-2 text-black">
            Can I change or cancel my order once it has been placed?
          </h4>
          <p className="font-plus text-xl leading-[36px] text-black">
            Unfortunately, once an order has been placed, it is immediately sent for processing and cannot be modified or canceled. If you wish to return your order, you can do so once you receive it to obtain a refund. Visit our <a href="#" className="text-green-700 underline">Returns & Exchanges</a> page for more details.
          </p>
        </div>

        {/* 3. 30-Day Test Run */}
        <div className="mb-8">
          <h4 className="font-plus font-bold text-2xl leading-[30px] mb-2 text-black">
            What is the 30-Day Test Run?
          </h4>
          <p className="font-plus text-xl leading-[36px] text-black">
            Try our running shoes for 30 days, and if they don’t work for you, return them hassle-free. To initiate your return and for step-by-step guidance, visit our <a href="#" className="text-green-700 underline">Returns & Exchanges</a> page.
          </p>
        </div>

        {/* 4. Coupon Code Not Working */}
        <div className="mb-8">
          <h4 className="font-plus font-bold text-2xl leading-[30px] mb-2 text-black">
            Why is my coupon code not working?
          </h4>
          <p className="font-plus text-xl leading-[36px] text-black mb-2">
            Our offer codes may exclude certain products, including but not limited to:
          </p>
          <ul className="list-disc pl-8 text-black text-xl leading-[36px] mb-2">
            <li>New product releases</li>
            <li>Select classic styles</li>
            <li>Select teamsport styles</li>
            <li>Clearance items</li>
            <li>Licensed and replica jerseys</li>
          </ul>
          <p className="font-plus text-xl leading-[36px] text-black">
            Additionally, offers cannot be combined with other promotions, applied to past purchases, redeemed for cash, used to buy gift cards, or used as payment on an account. For further details, please refer to our <a href="#" className="text-green-700 underline">Terms and Conditions</a> page.
          </p>
        </div>

        {/* 5. Return or Exchange Item */}
        <div className="mb-8">
          <h4 className="font-plus font-bold text-2xl leading-[30px] mb-2 text-black">
            How do I return or exchange an item?
          </h4>
          <p className="font-plus text-xl leading-[36px] text-black">
            We offer free online returns for StoreOne orders within 45 days of purchase. Items must be in their original, unused condition to qualify for a full refund.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default FAQ;
