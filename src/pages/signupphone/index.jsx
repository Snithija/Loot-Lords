import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// import Header from '../../components/common/Header';
import Header from '../../components/common/Header'
import Button from '../../components/ui/Button';
// import EditText from '../../components/ui/EditText';
import EditText from '../../components/ui/EditText';
import PhoneNumberInput from '../../components/ui/PhoneNumberInput';

const SignupPhone = () => {
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
    e?.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-[20px] pt-[74px] px-4 sm:px-6 lg:px-[264px]">
          
          {/* Left Side - Image Slider */}
          <div className="w-full lg:w-[450px] relative">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[836px] rounded-2xl lg:rounded-[32px] overflow-hidden">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/img_0x0.png)' }}
              >
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-start justify-start p-6 sm:p-8 lg:p-[44px]">
                  <div className="mt-8 sm:mt-12 lg:mt-[30px] mb-auto">
                    <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold leading-tight lg:leading-[46px] text-text-white">
                      StoreOne
                    </h1>
                  </div>
                </div>
              </div>
              
              {/* Pager Indicator */}
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
            
            {/* Form Header */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight lg:leading-[41px] text-text-success">
                Sign Up
              </h2>
            </div>

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 lg:gap-[24px]">
              
              {/* Name Field */}
              <div className="px-3 lg:px-[12px]">
                <div className="flex flex-col gap-2 lg:gap-[8px]">
                  <label className="text-base font-medium leading-[21px] text-text-primary">
                    <span>Name </span>
                    <span className="text-[#c91433]">*</span>
                  </label>
                  <EditText
                    placeholder="Enter your name"
                    value={formData?.name}
                    onChange={handleInputChange('name')}
                    required
                    className="w-full h-12"
                    layout_width="full"
                    padding="medium"
                    position="static"
                    layout_gap="normal"
                    variant="default"
                    size="medium"
                    onFocus={() => {}}
                    onBlur={() => {}}
                    label="Name"
                    error=""
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="px-3 lg:px-[12px]">
                <div className="flex flex-col gap-2 lg:gap-[8px]">
                  <div className="flex justify-between items-center">
                    <label className="text-base font-medium leading-[21px] text-text-primary">
                      <span>Phone </span>
                      <span className="text-[#ea4335]">*</span>
                    </label>
                    <Link 
                      to="/signup-email" 
                      className="text-base font-medium leading-[21px] text-text-success hover:underline"
                      href="/signup-email"
                      variant="text"
                      size="medium"
                      onClick={() => {}}
                    >
                      Use Email Instead
                    </Link>
                  </div>
                  <PhoneNumberInput
                    placeholder="123 456 7890"
                    value={formData?.phone}
                    onChange={handleInputChange('phone')}
                    defaultCountry="+61"
                    required
                    className="w-full"
                    layout_width="full"
                    padding="medium"
                    position="static"
                    variant="default"
                    size="medium"
                    onFocus={() => {}}
                    onBlur={() => {}}
                    label="Phone"
                    error=""
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="px-3 lg:px-[12px]">
                <div className="flex flex-col gap-2 lg:gap-[8px]">
                  <label className="text-base font-medium leading-[21px] text-text-primary">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="**********"
                      value={formData?.password}
                      onChange={handleInputChange('password')}
                      required
                      className="w-full px-4 py-3 lg:px-[16px] lg:py-[16px] text-base font-bold leading-[21px] text-text-secondary bg-background-white border border-border-gray rounded-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      style={{ fontFamily: 'Plus Jakarta Sans' }}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 lg:right-[16px] top-1/2 transform -translate-y-1/2 p-1"
                    >
                      <img 
                        src="/images/icons8-eye-50.png" 
                        alt={showPassword ? "Hide password" : "Show password"}
                        className="w-6 h-6"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sign Up Button */}
              <div className="px-2 lg:px-[10px] mt-4 lg:mt-[32px]">
                <Button
                  type="submit"
                  text="Sign Up"
                  className="w-full py-3 lg:py-[12px]"
                  layout_width="full"
                  padding="medium"
                  position="static"
                  variant="primary"
                  size="large"
                  onClick={() => {}}
                />
              </div>
            </form>

            {/* Social Login Section */}
            <div className="flex flex-col items-center gap-6 lg:gap-[32px]">
              <p className="text-base font-semibold leading-[21px] text-text-light">
                Or continue with
              </p>
              
              <div className="flex gap-6 lg:gap-[112px]">
                <button 
                  type="button"
                  className="w-16 h-16 lg:w-[64px] lg:h-[64px] hover:opacity-80 transition-opacity"
                  aria-label="Sign up with Facebook"
                >
                  <img 
                    src="/images/img_facebook_icon.svg" 
                    alt="Facebook" 
                    className="w-full h-full"
                  />
                </button>
                <button 
                  type="button"
                  className="w-16 h-16 lg:w-[64px] lg:h-[64px] hover:opacity-80 transition-opacity"
                  aria-label="Sign up with Google"
                >
                  <img 
                    src="/images/icons8-google-32.png" 
                    alt="Google" 
                    className="w-full h-full"
                  />
                </button>
              </div>
            </div>

            {/* Sign In Link */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 lg:gap-[10px] px-8 sm:px-12 lg:px-[56px]">
              <span className="text-base font-semibold leading-[21px] text-text-light">
                Already have an account
              </span>
              <Link 
                to="/signin" 
                className="text-base font-semibold leading-[21px] text-text-success hover:underline"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignupPhone;