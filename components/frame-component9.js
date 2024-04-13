import React, { useState } from "react";
import Button from "./button";
import FrameComponent6 from "./frame-component6";

const FrameComponent9 = ({ onFormSubmit }) => {
  // Initialize state for form inputs
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    gender: "",
    profilePicture: null,
  });

  // Handle changes in the form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle profile picture upload
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      profilePicture: file,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the function passed as a prop to handle form submission
    onFormSubmit(formData);
  };

  return (
    <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full" onSubmit={handleSubmit}>
      {/* Profile picture and age selection */}
      <div className="self-stretch flex flex-row items-start justify-start gap-[36px] mq450:flex-wrap mq450:gap-[18px]">
        {/* Profile picture */}
        <div className="w-[120.5px] flex flex-col items-start justify-start py-0 pr-px pl-0 box-border gap-[32px] min-w-[120.5px] mq450:flex-1 mq450:pr-0 mq450:box-border">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="h-[120px] flex-1 relative mq450:flex-1">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white box-border w-full h-full border-[0px] border-solid border-crimson-100" />
              {formData.profilePicture ? (
                <img
                  src={URL.createObjectURL(formData.profilePicture)}
                  className="absolute top-[22px] left-[23px] w-[75px] h-[75px] object-cover z-[1]"
                  loading="lazy"
                  alt="Profile"
                />
              ) : (
                <img
                  className="absolute top-[22px] left-[23px] w-[75px] h-[75px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image@2x.png"
                />
              )}
            </div>
          </div>
          <div className="relative text-5xl font-montserrat text-black text-left inline-block min-w-[49px] mq450:text-lgi">
            Age
          </div>
        </div>
      
        <div className="flex-1 flex flex-col items-start justify-start pt-[17px] px-0 pb-0 box-border min-w-[201px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
            <div className="relative text-5xl font-montserrat text-black text-left mq450:text-lgi">
              Select your profile picture
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[70px] mq450:pl-5 mq450:pr-5 mq450:box-border">
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
                className="hidden"
                id="profilePictureInput"
              />
              <label htmlFor="profilePictureInput">
                <div className="self-stretch rounded-3xs bg-crimson-100 overflow-hidden flex flex-row items-start justify-center py-[16.5px] px-5 text-13xl text-white">
                  <div className="relative inline-block min-w-[75px] mq750:text-7xl mq450:text-lgi">
                    Upload
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Age input */}
      <div className="self-stretch h-[88px] flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border max-w-full">
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="Enter your age"
          className="h-[74px] flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start py-6 px-8 max-w-full text-xl text-crimson-300 border-[1px] border-solid border-crimson-100"
        />
      </div>

      {/* Height and gender input */}
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[32px] max-w-full mq750:gap-[16px]">
        <FrameComponent6
          enterYourEmail="Height"
          enterYourEmail1="Enter your height"
          propWidth="103px"
          inputType="text"
          name="height"
          value={formData.height}
          onChange={handleInputChange}
        />
        <FrameComponent6
          enterYourEmail="Your gender"
          enterYourEmail1="Enter your gender"
          propWidth="169px"
          inputType="text"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        />
      </div>

      {/* Next button */}
      <Button
        text="Next"
        type="submit"
        className="self-stretch rounded-3xs bg-crimson-100 overflow-hidden flex flex-row items-start justify-center py-[16.5px] px-5 text-13xl text-white"
      />
    </form>
  );
};

export default FrameComponent9;
