import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import Button from "../../components/ui/Button";
import EditText from "../../components/ui/EditText";
import { registerUser } from "../../services/auth";
import { toast } from "react-toastify";

const SignupEmail = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e?.target?.value,
    }));
  };

  const togglePasswordVisibility = (e) => {
    e?.preventDefault(); // prevent form submit if this is inside form
    setShowPassword((s) => !s);
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    try {
      const { name, email, password } = formData;
      if (!name || !email || !password) {
        toast.error("Fill all fields");
        return;
      }
      const { token, user } = await registerUser({ name, email, password });
      localStorage.setItem("token", token);
      toast.success("Account created!");
      navigate("/");
    } catch (err) {
      toast.error(err?.message || "Sign up failed");
    }
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

        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-100px)]">
          {/* Left */}
          <section
            className="w-full lg:w-1/2 relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/img_.png')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[300px] lg:minh-[600px] p-6 lg:p-8">
              <div className="flex justify-center lg:justify-start mt-8 lg:mt-16">
                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold leading-xl text-text-white">
                  StoreOne
                </h2>
              </div>
              <div className="flex justify-center items-center gap-xs mb-8 lg:mb-16">
                <div className="w-5 h-[10px] bg-background-gray rounded-xs"></div>
                <div className="w-[10px] h-[10px] bg-background-lightGray rounded-xs"></div>
                <div className="w-[10px] h-[10px] bg-background-lightGray rounded-xs"></div>
                <div className="w-[10px] h-[10px] bg-background-lightGray rounded-xs"></div>
              </div>
            </div>
          </section>

          {/* Right – Form */}
          <section className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-md lg:max-w-lg">
              <div className="text-center mb-6 lg:mb-12">
                <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold leading-lg text-text-success">
                  Sign Up
                </h1>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                {/* Name */}
                <div className="px-3">
                  <label className="block text-base font-medium leading-sm text-text-primary mb-2">
                    <span>Name </span>
                    <span className="text-[#c91433]">*</span>
                  </label>
                  <EditText
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    required
                    className="w-full"
                    layout_width="w-full"
                    padding="p-3"
                    position="relative"
                    layout_gap="gap-0"
                    variant="default"
                    size="medium"
                  />
                </div>

                {/* Email */}
                <div className="px-3">
                  <div className="flex justify-between items-center mb-2">
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
                    className="w-full"
                    border_border="1px solid #b4b4b4"
                    layout_width="w-full"
                    padding="p-3"
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
                      className="w-full pr-12"
                      border_border="1px solid #b4b4b4"
                      text_color="text-text-secondary"
                      text_font_weight="font-bold"
                      layout_width="w-full"
                      padding="p-3"
                      position="relative"
                      layout_gap="gap-0"
                      variant="default"
                      size="medium"
                    />
                    {/* IMPORTANT: this must NOT be submit */}
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      <img
                        src="/images/img_eye_icon.svg"
                        alt={showPassword ? "Hide password" : "Show password"}
                        className="w-6 h-6"
                      />
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
                    padding="p-3"
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
                      src="/images/img_frame_26086793.png"
                      alt="Continue with Facebook"
                      className="w-16 h-16"
                    />
                  </button>
                  <button className="hover:scale-105 transition-transform">
                    <img
                      src="/images/img_frame_26086794.png"
                      alt="Continue with Google"
                      className="w-16 h-16"
                    />
                  </button>
                </div>
              </div>

              <div className="text-center px-14">
                <p className="text-base font-semibold leading-sm text-text-light">
                  <span>Already have an account </span>
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
      </main>
    </>
  );
};

export default SignupEmail;
