import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import Button from "../../components/ui/Button";
import { loginUser } from "../../services/auth";
import { toast } from "react-toastify";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"; // password visibility icons

const SignIn = () => {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState("email"); // default to email so it works out of the box
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+61");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (loginMethod === "phone") {
        toast.info("Phone login coming soon. Switch to Email.");
        return;
      }
      if (!email || !password) {
        toast.error("Enter email and password");
        return;
      }
      const { token } = await loginUser({ email, password });
      localStorage.setItem("token", token);
      toast.success("Logged in!");
      navigate("/");
    } catch (err) {
      toast.error(err?.message || "Login failed");
    }
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault(); // don't submit form
    setShowPassword((s) => !s);
  };

  const toggleLoginMethod = (e) => {
    e.preventDefault(); // don't submit form
    setLoginMethod((m) => (m === "phone" ? "email" : "phone"));
  };

  const handlePhoneChange = (e) => setPhoneNumber(e?.target?.value);
  const handleEmailChange = (e) => setEmail(e?.target?.value);
  const handlePasswordChange = (e) => setPassword(e?.target?.value);

  return (
    <>
      <Helmet>
        <title>Sign In to Your Account | StoreOne E-commerce Platform</title>
        <meta
          name="description"
          content="Sign in to your StoreOne account with phone number or email. Access your shopping cart, order history, and personalized recommendations. Secure login with social media options."
        />
        <meta
          property="og:title"
          content="Sign In to Your Account | StoreOne E-commerce Platform"
        />
        <meta
          property="og:description"
          content="Sign in to your StoreOne account with phone number or email. Access your shopping cart, order history, and personalized recommendations. Secure login with social media options."
        />
      </Helmet>

      <main className="w-full min-h-screen bg-background-main">
        <Header />

        <section className="w-full">
          <div className="w-full max-w-[910px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-18">
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 items-center lg:items-start">
              {/* Left Side - Image Slider */}
              <div className="w-full lg:w-[450px] relative">
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[836px] rounded-lg overflow-hidden">
                  <img
                    src="/images/img_shirt.png.jpg"
                    alt="StoreOne promotional banner"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="absolute top-8 sm:top-12 lg:top-[74px] left-6 sm:left-8 lg:left-[26px]">
                    <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold lg:leading-[46px] text-white font-['Plus_Jakarta_Sans']">
                      StoreOne
                    </h1>
                  </div>
                </div>
                <div className="flex justify-center mt-4 lg:mt-6 space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full opacity-100"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
                </div>
              </div>

              {/* Right Side - Sign In Form */}
              <div className="w-full lg:w-[430px] bg-white border border-border-secondary rounded-[32px] p-6 sm:p-8 lg:p-12">
                <div className="flex flex-col gap-8 lg:gap-16">
                  <div className="text-center lg:mx-24">
                    <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold lg:leading-[41px] text-primary-text font-['Plus_Jakarta_Sans'] mb-4">
                      Sign In
                    </h2>
                    <p className="text-base font-medium leading-[21px] text-text-primary font-['Plus_Jakarta_Sans']">
                      Sign in to continue to shopping
                    </p>
                  </div>

                  {/* Put inputs inside a form so Enter works and submit is handled */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Conditionally Render Email or Phone Input */}
                    {loginMethod === "phone" ? (
                      // PHONE INPUT
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center px-3">
                          <div className="flex items-center">
                            <span className="text-base font-medium leading-[21px] text-text-primary font-['Plus_Jakarta_Sans']">
                              Phone
                            </span>
                            <span className="text-base font-medium leading-[20px] text-[#ea4335] ml-1">
                              *
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={toggleLoginMethod}
                            className="text-base font-medium leading-[21px] text-primary-text font-['Plus_Jakarta_Sans'] hover:underline"
                          >
                            Use Email Instead
                          </button>
                        </div>
                        <div className="px-3">
                          <div className="flex items-center border border-border-primary rounded-sm bg-input-background px-4">
                            <div className="flex items-center gap-1.5 pr-4 border-r border-gray-300">
                              <img
                                src="/images/img_au_1.svg"
                                alt="Australia flag"
                                className="w-6 h-[18px]"
                              />
                              <span className="text-base font-medium leading-[21px] text-text-primary font-['Plus_Jakarta_Sans']">
                                {countryCode}
                              </span>
                              <img
                                src="/images/img_arrow_down.svg"
                                alt="Dropdown arrow"
                                className="w-4 h-4"
                              />
                            </div>
                            <input
                              type="tel"
                              placeholder="123 456 7890"
                              value={phoneNumber}
                              onChange={handlePhoneChange}
                              className="flex-1 bg-transparent border-0 outline-none px-3 py-4 text-base font-medium leading-[21px] text-text-light placeholder-text-light font-['Plus_Jakarta_Sans']"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      // EMAIL INPUT
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center px-3">
                          <div className="flex items-center">
                            <span className="text-base font-medium leading-[21px] text-text-primary font-['Plus_Jakarta_Sans']">
                              Email
                            </span>
                            <span className="text-base font-medium leading-[20px] text-[#ea4335] ml-1">
                              *
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={toggleLoginMethod}
                            className="text-base font-medium leading-[21px] text-primary-text font-['Plus_Jakarta_Sans'] hover:underline"
                          >
                            Use Phone Instead
                          </button>
                        </div>
                        <div className="px-3">
                          <input
                            type="email"
                            placeholder="example@email.com"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full border border-border-primary rounded-sm bg-input-background px-4 py-4 text-base font-medium leading-[21px] text-text-light placeholder-text-light font-['Plus_Jakarta_Sans'] outline-none focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                      </div>
                    )}

                   {/* Password Input */}
                    <div className="flex flex-col gap-2 px-3">
                      <label className="text-base font-medium leading-[21px] text-text-primary font-['Plus_Jakarta_Sans']">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="*"
                          value={password}
                          onChange={handlePasswordChange}
                          className="w-full border border-border-primary rounded-sm bg-input-background px-4 py-4 pr-12 text-base font-bold leading-[21px] text-text-muted placeholder-text-muted font-['Plus_Jakarta_Sans'] outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                          {showPassword ? (
                            <EyeSlashIcon className="w-6 h-6" />
                          ) : (
                            <EyeIcon className="w-6 h-6" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="px-2.5">
                      <Button
                        type="submit"
                        text="Sign In"
                        text_font_size="20px"
                        text_font_weight="600"
                        text_line_height="26px"
                        text_color="#ffffff"
                        fill_background_color="#5da96a"
                        border_border_radius="24px"
                        padding="12px 34px"
                        layout_width="100%"
                        className="w-full"
                        position="relative"
                        variant="primary"
                        size="large"
                      />
                    </div>
                  </form>

                  {/* Socials */}
                  <div className="text-center">
                    <p className="text-base font-semibold leading-[21px] text-text-placeholder font-['Plus_Jakarta_Sans'] mb-6">
                      Or continue with
                    </p>
                    <div className="flex justify-center gap-12">
                      <button className="w-16 h-16 rounded-full overflow-hidden hover:opacity-80 transition-opacity">
                        <img
                          src="/images/img_facebook.png.jpg"
                          alt="Continue with Facebook"
                          className="w-full h-full object-cover"
                        />
                      </button>
                      <button className="w-16 h-16 rounded-full overflow-hidden hover:opacity-80 transition-opacity">
                        <img
                          src="/images/img_google.png.jpg"
                          alt="Continue with Google"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="text-center px-14">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
                      <span className="text-base font-semibold leading-[21px] text-text-placeholder font-['Plus_Jakarta_Sans']">
                        Do not have an account?
                      </span>
                      <Link
                        to="/signup-email"
                        className="text-base font-semibold leading-[21px] text-primary-text font-['Plus_Jakarta_Sans'] hover:underline"
                      >
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignIn;
