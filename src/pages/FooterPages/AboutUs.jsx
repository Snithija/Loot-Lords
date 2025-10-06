import React from "react";
// import Footer from "../components/Footer";
import Footer from '../../components/common/Footer'
import Header from '../../components/common/Header'

const AboutUs = () => (
  <>
  <Header />
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-14 pb-32">
      <div className="w-full max-w-[1220px] px-7">
        <h2 className="font-plus font-bold text-[36px] leading-[45px] mb-10 text-black">About Us</h2>

        <div className="mb-8">
          <p className="font-plus text-xl leading-[36px] text-black">
            Everything we do is rooted in fashion. Style is more than just clothing—it’s a form of self-expression, a culture, and a way to shape identity. As fashion continues to evolve, it becomes a deeper part of our everyday lives, influencing confidence, creativity, and individuality. At ShopKing, we believe fashion has the power to inspire and transform.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="font-plus font-bold text-2xl leading-[30px] mb-2 text-black">
            Our Purpose
          </h4>
          <p className="font-plus text-xl leading-[36px] text-black">
            At StoreOne, fashion isn’t just about clothing—it’s a statement, a lifestyle, and a way to express who you are. We believe that style has the power to inspire confidence, ignite creativity, and bring people together. Our passion for fashion drives everything we do, from curating the latest trends to delivering an unforgettable shopping experience.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="font-plus font-bold text-2xl leading-[30px] mb-2 text-black">
            Our Vision
          </h4>
          <p className="font-plus text-xl leading-[36px] text-black">
            We envision a world where fashion is bold, inclusive, and limitless. A world where self-expression knows no boundaries and style empowers individuals to be their most authentic selves. At StoreOne, we celebrate diversity, innovation, and sustainability to shape the future of fashion.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="font-plus font-bold text-2xl leading-[30px] mb-2 text-black">
            Our Mission
          </h4>
          <p className="font-plus text-xl leading-[36px] text-black mb-2">
            We are here to redefine the fashion industry. Our mission is simple:
          </p>
          <ul className="list-disc pl-8 text-black text-xl leading-[36px] mb-2">
            <li>To provide premium, trendsetting fashion that inspires confidence.</li>
            <li>To make high-quality style accessible to everyone.</li>
            <li>To lead with sustainability and ethical practices.</li>
            <li>To create a shopping experience that is effortless, enjoyable, and empowering.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="font-plus font-bold text-2xl leading-[30px] mb-2 text-black">
            Why Shop With Us?
          </h4>
          <ul className="pl-2 text-black text-xl leading-[36px] mb-2">
            <li>✨ Trendsetters, Not Followers – We don’t just keep up with trends; we set them.</li>
            <li>🌍 Sustainability Matters – Fashion with a purpose, designed for the future.</li>
            <li>❤️ Inclusivity at Our Core – Style for every shape, size, and identity.</li>
            <li>🚀 Beyond Shopping – A community that celebrates individuality and creativity.</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default AboutUs;
