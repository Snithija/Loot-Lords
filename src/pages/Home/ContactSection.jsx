import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import TextArea from '../../components/ui/TextArea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event?.target?.value
    }));
  };

  const handleSubmit = (event) => {
    event?.preventDefault();
    // Handle form submission here
    alert('Message sent! Thank you for your inquiry.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="w-full bg-background-dark">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-20">
          {/* Background Decorative Element */}
          <div className="flex justify-center mb-16 md:mb-20">
            <img 
              src="/images/img_keyboard_cyan_600_114x152.svg" 
              alt="Decorative keyboard"
              className="w-24 sm:w-32 md:w-[152px] h-auto opacity-30"
            />
          </div>

          {/* Main Content Row */}
          <div className="flex flex-col lg:flex-row items-start justify-end gap-8 lg:gap-16">
            {/* Left Content - Title and Illustration */}
            <div className="w-full lg:w-auto lg:flex-1">
              <div className="flex flex-col items-center lg:items-start w-full">
                {/* Section Title */}
                <h2 className="text-center lg:text-left mb-8 md:mb-12 w-full lg:w-[96%]">
                  <span 
                    className="block text-[32px] sm:text-[48px] md:text-[64px] font-bold leading-tight"
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: '700',
                      lineHeight: '80px',
                      color: '#eeeeee'
                    }}
                  >
                    Got a project in{' '}
                  </span>
                  <span 
                    className="text-[32px] sm:text-[48px] md:text-[64px] font-bold leading-tight"
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: '700',
                      lineHeight: '80px',
                      color: '#00adb5'
                    }}
                  >
                    mind?
                  </span>
                </h2>

                {/* Illustration Container */}
                <div className="flex flex-col lg:flex-row items-center justify-start w-full gap-6 lg:gap-8 -mt-2 lg:-mt-[10px] mr-0 lg:mr-6 ml-0 lg:ml-6">
                  <div className="flex flex-col items-start w-full lg:w-auto">
                    {/* Character Illustration */}
                    <img 
                      src="/images/img_vector_186_cyan_600.svg" 
                      alt="Character illustration"
                      className="w-32 sm:w-40 md:w-[182px] h-auto mt-8 lg:mt-[42px]"
                    />
                  </div>

                  {/* Character Stack */}
                  <div className="relative w-full max-w-xs lg:max-w-sm h-64 sm:h-80 md:h-[364px] self-center lg:self-auto">
                    {/* Character Shadow */}
                    <div 
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 md:w-[190px] h-6 rounded-full"
                      style={{ backgroundColor: '#0000007f', borderRadius: '94px' }}
                    ></div>
                    
                    {/* Main Character */}
                    <img 
                      src="/images/img_group_2369.svg" 
                      alt="Contact character"
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-48 sm:w-56 md:w-[252px] h-auto mb-4"
                    />
                    
                    {/* Additional Character Element */}
                    <img 
                      src="/images/img_group_2371.svg" 
                      alt="Character element"
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 md:w-[174px] h-auto ml-3"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="w-full lg:w-auto lg:flex-1">
              <div className="flex flex-col gap-4 items-end w-full ml-0 lg:ml-6">
                <form onSubmit={handleSubmit} className="w-full max-w-2xl">
                  <div className="flex flex-col gap-6 items-start w-full ml-0 lg:ml-6">
                    {/* Name and Email Row */}
                    <div className="flex flex-col lg:flex-row items-center justify-start w-full gap-4 lg:gap-6">
                      <div className="flex flex-col gap-2 items-start w-full">
                        <label 
                          htmlFor="name"
                          className="text-text-primary"
                          style={{
                            fontSize: '18px',
                            fontFamily: 'Poppins',
                            fontWeight: '700',
                            lineHeight: '27px',
                            color: '#eeeeee'
                          }}
                        >
                          Your name
                        </label>
                        <EditText
                          id="name"
                          name="name"
                          placeholder="Name"
                          value={formData?.name}
                          onChange={handleInputChange('name')}
                          className="w-full mr-0 lg:mr-6"
                          layout_width="full"
                          padding="medium"
                          margin="none"
                          position="static"
                          variant="default"
                          size="medium"
                          required
                        />
                      </div>

                      <div className="flex flex-col gap-2 items-start w-full">
                        <label 
                          htmlFor="email"
                          className="text-text-primary"
                          style={{
                            fontSize: '18px',
                            fontFamily: 'Poppins',
                            fontWeight: '700',
                            lineHeight: '27px',
                            color: '#eeeeee'
                          }}
                        >
                          Your email
                        </label>
                        <EditText
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email"
                          value={formData?.email}
                          onChange={handleInputChange('email')}
                          className="w-full"
                          layout_width="full"
                          padding="medium"
                          position="static"
                          variant="default"
                          size="medium"
                          required
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="flex flex-col gap-2 items-start w-full">
                      <label 
                        htmlFor="message"
                        className="text-text-primary"
                        style={{
                          fontSize: '18px',
                          fontFamily: 'Poppins',
                          fontWeight: '700',
                          lineHeight: '27px',
                          color: '#eeeeee'
                        }}
                      >
                        Your Message
                      </label>
                      <TextArea
                        id="message"
                        name="message"
                        placeholder="Message"
                        value={formData?.message}
                        onChange={handleInputChange('message')}
                        rows={6}
                        className="w-full"
                        layout_width="full"
                        padding="medium"
                        position="static"
                        variant="default"
                        size="medium"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                      <Button
                        type="submit"
                        text="Send Message"
                        className="flex items-center gap-2"
                        effect_box_shadow="none"
                        layout_align_self="start"
                        layout_width="auto"
                        padding="medium"
                        position="static"
                        layout_gap="small"
                        margin="none"
                        variant="primary"
                        size="medium"
                        onClick={handleSubmit}
                      >
                        <span>Send Message</span>
                        <img 
                          src="/images/img_send.svg" 
                          alt="Send"
                          className="w-6 h-6"
                        />
                      </Button>
                    </div>
                  </div>
                </form>

                {/* Decorative Element */}
                <img 
                  src="/images/img_mail_cyan_600_70x74.svg" 
                  alt="Mail decoration"
                  className="w-14 sm:w-16 md:w-[74px] h-auto mr-0 lg:mr-16 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;