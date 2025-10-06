import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import PhoneNumberInput from '../../components/ui/PhoneNumberInput';
import { toast } from 'react-toastify';
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const SignupPhone = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e?.target?.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, password } = formData;
    if (!name || !phone || !password) {
      toast.error("Fill all required fields");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    if (existingUsers.find(user => user.phone === phone)) {
      toast.error("Phone number already registered");
      return;
    }

    const newUser = { name, phone, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    localStorage.setItem("user", JSON.stringify(newUser));

    toast.success("Account created! You are now logged in.");
    navigate("/");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Helmet>
        <title>Sign Up with Phone | StoreOne - Create Your Account Today</title>
        <meta name="description" content="Join StoreOne e-commerce platform using your phone number. Quick and secure registration with social media options. Start shopping with your new account today." />
        <meta property="og:title" content="Sign Up with Phone | StoreOne - Create Your Account Today" />
        <meta property="og:description" content="Join StoreOne e-commerce platform using your phone number. Quick and secure registration with social media options. Start shopping with your new account today." />
      </Helmet>
      <main className="min-h-screen bg-background-white">
        <Header />
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-[20px] pt-[74px] px-4 sm:px-6 lg:px-[264px]">
          {/* Left Side - Image Slider */}
          <div className="w-full lg:w-[450px] relative">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[836px] rounded-2xl lg:rounded-[32px] overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(/images/img_shirt1.png.jpg)'}}>
                <div className="absolute inset-0 flex items-start justify-start p-6 sm:p-8 lg:p-[44px]">
                  <div className="mt-8 sm:mt-12 lg:mt-[30px] mb-auto">
                    <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold leading-tight lg:leading-[46px] text-text-white">StoreOne</h1>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 sm:bottom-6 lg:bottom-[22px] left-1/2 transform -translate-x-1/2">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-white rounded-full opacity-100"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Sign Up Form */}
          <div className="w-full lg:w-[430px] flex flex-col gap-8 sm:gap-10 lg:gap-[48px] py-6 lg:py-0">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight lg:leading-[41px] text-text-success">Sign Up</h2>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 lg:gap-[24px]">
              <div className="px-3 lg:px-[12px]">
                <div className="flex flex-col gap-2 lg:gap-[8px]">
                  <label className="text-base font-medium leading-[21px] text-text-primary"><span>Name </span><span className="text-[#c91433]">*</span></label>
                  <EditText placeholder="Enter your name" value={formData.name} onChange={handleInputChange('name')} required className="w-full h-12" layout_width="full" padding="medium" position="static" layout_gap="normal" variant="default" size="medium" />
                </div>
              </div>
              <div className="px-3 lg:px-[12px]">
                <div className="flex flex-col gap-2 lg:gap-[8px]">
                  <div className="flex justify-between items-center">
                    <label className="text-base font-medium leading-[21px] text-text-primary"><span>Phone </span><span className="text-[#ea4335]">*</span></label>
                    <Link to="/signup-email" className="text-base font-medium leading-[21px] text-text-success hover:underline">Use Email Instead</Link>
                  </div>
                  <PhoneNumberInput placeholder="123 456 7890" value={formData.phone} onChange={handleInputChange('phone')} defaultCountry="+61" required className="w-full" />
                </div>
              </div>
              <div className="px-3 lg:px-[12px]">
                <div className="flex flex-col gap-2 lg:gap-[8px]">
                  <label className="text-base font-medium leading-[21px] text-text-primary">Password</label>
                  <div className="relative">
                    <input type={showPassword ? "text" : "password"} placeholder="**********" value={formData.password} onChange={handleInputChange('password')} required className="w-full px-4 py-3 lg:px-[16px] lg:py-[16px] text-base font-bold leading-[21px] text-text-secondary bg-background-white border border-border-gray rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500" style={{ fontFamily: 'Plus Jakarta Sans' }} />
                    <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 lg:right-[16px] top-1/2 transform -translate-y-1/2 p-1" aria-label="Toggle password visibility">
                      {showPassword ? <EyeSlashIcon className="w-6 h-6" /> : <EyeIcon className="w-6 h-6" />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="px-2 lg:px-[10px] mt-4 lg:mt-[32px]">
                <Button type="submit" text="Sign Up" className="w-full py-3 lg:py-[12px]" layout_width="full" padding="medium" position="static" variant="primary" size="large" />
              </div>
            </form>
            <div className="flex flex-col items-center gap-6 lg:gap-[32px]">
              <p className="text-base font-semibold leading-[21px] text-text-light">Or continue with</p>
              <div className="flex gap-6 lg:gap-[112px]">
                <button type="button" className="w-16 h-16 lg:w-[64px] lg:h-[64px] hover:opacity-80 transition-opacity" aria-label="Sign up with Facebook">
                  <img src="/images/img_facebook.png.jpg" alt="Facebook" className="w-full h-full" />
                </button>
                <button type="button" className="w-16 h-16 lg:w-[64px] lg:h-[64px] hover:opacity-80 transition-opacity" aria-label="Sign up with Google">
                  <img src="/images/img_google.png.jpg" alt="Google" className="w-full h-full" />
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 lg:gap-[10px] px-8 sm:px-12 lg:px-[56px]">
              <span className="text-base font-semibold leading-[21px] text-text-light">Already have an account?</span>
              <Link to="/signin" className="text-base font-semibold leading-[21px] text-text-success hover:underline">Sign In</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignupPhone;
