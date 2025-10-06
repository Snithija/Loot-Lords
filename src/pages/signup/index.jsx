import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import Button from "../../components/ui/Button";
import EditText from "../../components/ui/EditText";
import { toast } from "react-toastify";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const SignupEmail = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e?.target?.value
    }));
  };

  const togglePasswordVisibility = (e) => {
    e?.preventDefault();
    setShowPassword((s) => !s);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    const { name, email, password } = formData;
    if (!name || !email || !password) {
      toast.error("Fill all fields");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    if (existingUsers.some((u) => u.email === email)) {
      toast.error("Email already registered");
      return;
    }

    const newUser = { name, email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    localStorage.setItem("user", JSON.stringify(newUser));
    
    toast.success("Account created!");
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>Sign Up with Email | StoreOne - Create Your Account Today</title>
        <meta
          name="description"
          content="Join StoreOne with email registration. Create your account using email address and start shopping on our e-commerce platform. Quick and secure sign-up process."
        />
        <meta
          property="og:title"
          content="Sign Up with Email | StoreOne - Create Your Account Today"
        />
        <meta
          property="og:description"
          content="Join StoreOne with email registration. Create your account using email address and start shopping on our e-commerce platform. Quick and secure sign-up process."
        />
      </Helmet>

      <main className="min-h-screen bg-background-white">
        <Header />

        <div className="w-full max-w-[910px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-18">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-5 items-center lg:items-start">
            {/* Left */}
            <div className="w-full lg:w-[450px] relative">
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[800px] rounded-lg overflow-hidden">
                <img
                  src="/images/img_shirt1.png.jpg"
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

            {/* Right – Form */}
            <section className="w-full lg:w-[430px] bg-white border border-border-secondary rounded-[32px] p-6 sm:p-8 lg:p-12">
              <div className="w-full max-w-md lg:max-w-lg">
                <div className="text-center mb-6 lg:mb-12">
                  <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold leading-lg text-text-success">
                    Sign Up
                  </h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                  {/* Name */}
                  <div className="px-3">
                    <label className="block text-base font-medium leading-sm text-text-primary mb-4">
                      <span>Name </span>
                      <span className="text-[#c91433]">*</span>
                    </label>
                    <EditText
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange("name")}
                      required
                      className="w-full h-12"
                      layout_width="w-full"
                      padding="p-4"
                      position="relative"
                      layout_gap="gap-0"
                      variant="default"
                      size="medium"
                    />
                  </div>

                  {/* Email */}
                  <div className="px-3">
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-base font-semibold leading-sm text-text-primary">
                        <span>Email </span>
                        <span className="text-[#ea4335]">*</span>
                      </label>
                      <Link
                        to="/signup-phone"
                        className="text-base font-medium leading-sm text-text-success hover:underline"
                      >
                        Use Phone Instead
                      </Link>
                    </div>
                    <EditText
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange("email")}
                      required
                      className="w-full h-12"
                      border_border="1px solid #b4b4b4"
                      layout_width="w-full"
                      padding="p-4"
                      position="relative"
                      layout_gap="gap-0"
                      variant="default"
                      size="medium"
                    />
                  </div>

                  {/* Password */}
                  <div className="px-3">
                    <label className="block text-base font-medium leading-sm text-text-primary mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <EditText
                        type={showPassword ? "text" : "password"}
                        placeholder="**********"
                        value={formData.password}
                        onChange={handleInputChange("password")}
                        required
                        className="w-full h-12 pr-12 "
                        border_border="1px solid #b4b4b4"
                        text_color="text-text-secondary"
                        text_font_weight="font-bold"
                        layout_width="w-full"
                        padding="p-4"
                        position="relative"
                        layout_gap="gap-0"
                        variant="default"
                        size="medium"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded transition-colors"
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
                  <div className="px-2 mt-8">
                    <Button
                      type="submit"
                      text="Sign Up"
                      className="w-full py-3"
                      text_font_size="text-lg"
                      text_font_weight="font-semibold"
                      text_line_height="leading-base"
                      layout_width="w-full"
                      padding="p-4"
                      position="relative"
                      variant="primary"
                      size="medium"
                    />
                  </div>
                </form>

                {/* Socials */}
                <div className="mt-8 lg:mt-12">
                  <p className="text-center text-base font-semibold leading-sm text-text-light mb-8">
                    Or continue with
                  </p>
                  <div className="flex justify-center gap-8 lg:gap-12 mb-8">
                    <button className="hover:scale-105 transition-transform">
                      <img
                        src="/images/img_facebook.png.jpg"
                        alt="Continue with Facebook"
                        className="w-16 h-16"
                      />
                    </button>
                    <button className="hover:scale-105 transition-transform">
                      <img
                        src="/images/img_google.png.jpg"
                        alt="Continue with Google"
                        className="w-16 h-16"
                      />
                    </button>
                  </div>
                </div>

                <div className="text-center px-14">
                  <p className="text-base font-semibold leading-sm text-text-light">
                    <span>Already have an account? </span>
                    <Link
                      to="/signin"
                      className="text-text-success hover:underline"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignupEmail;
