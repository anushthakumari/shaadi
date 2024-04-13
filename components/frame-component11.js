import { useState } from "react";
import FrameComponent12 from "./frame-component12";

const FrameComponent11 = () => {
  // Initialize state to manage form data
  const [formData, setFormData] = useState({
    ageRange: "",
    heightRange: "",
    religionPreference: "",
    community: "",
    communityPreference: "",
    motherTongue: "",
    partnerMotherTongue: "",
  });

  // Function to handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (you can add your form submission logic here)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, e.g., API call
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-left text-13xl text-crimson-100 font-montserrat mq750:gap-[20px]">
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
        <div className="relative font-medium mq750:text-7xl mq450:text-lgi">
          There you go
        </div>
      </div>

      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-[21px] box-border max-w-full">
        <form
          className="m-0 flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full"
          onSubmit={handleSubmit} // Attach the handleSubmit function to form submission
        >
          {/* Age range input */}
          <div className="self-stretch flex flex-row items-start justify-start gap-[18px] mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[146px]">
              <label className="w-[147px] relative text-5xl font-montserrat text-black text-left flex items-center mq450:text-lgi">
                Age range
              </label>
              <input
                type="text"
                name="ageRange"
                className="self-stretch h-[74px] rounded-3xs bg-white box-border flex flex-row items-start justify-start py-6 px-8 whitespace-nowrap border-[1px] border-solid border-crimson-100"
                placeholder="Enter age range"
                value={formData.ageRange}
                onChange={handleChange}
              />
              {/* Religion preference input */}
              <label className="relative text-5xl font-montserrat text-black text-left inline-block min-w-[99px] mq450:text-lgi">
                Religion
              </label>
            </div>

            {/* Height range input */}
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <label className="w-[191px] relative text-5xl font-montserrat text-black text-left flex items-center mq450:text-lgi">
                Height range
              </label>
              <input
                type="text"
                name="heightRange"
                className="self-stretch h-[74px] rounded-3xs bg-white box-border flex flex-row items-start justify-start py-6 px-8 whitespace-nowrap border-[1px] border-solid border-crimson-100"
                placeholder="Enter height range"
                value={formData.heightRange}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Religion preference input */}
          <div className="self-stretch h-[88px] flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border max-w-full">
            <input
              type="text"
              name="religionPreference"
              className="h-[74px] flex-1 rounded-3xs bg-white box-border flex flex-row items-start justify-start py-6 px-8 whitespace-nowrap max-w-full border-[1px] border-solid border-crimson-100"
              placeholder="Religion preference"
              value={formData.religionPreference}
              onChange={handleChange}
            />
          </div>

          {/* Community and mother tongue inputs */}
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[32px] max-w-full mq750:gap-[16px]">
            <FrameComponent12
              community="Community"
              communityPreference="Community preference"
              value={formData.community}
              onChange={(e) => handleChange(e)}
              name="community"
            />
            <FrameComponent12
              community="Mother tongue"
              communityPreference="Partner’s mother tongue"
              value={formData.motherTongue}
              onChange={(e) => handleChange(e)}
              name="motherTongue"
            />
          </div>

          {/* Save & Next button */}
          <button
            type="submit" // Set button type to submit
            className="self-stretch rounded-3xs bg-crimson-100 overflow-hidden flex flex-row items-start justify-center py-[16.5px] px-5 whitespace-nowrap"
          >
            <div className="relative text-13xl font-montserrat text-white text-left">{`Save & Next`}</div>
          </button>
        </form>
      </div>

      <div className="relative text-5xl text-black mq450:text-lgi">
        Setting these preferences for your partner
      </div>
    </div>
  );
};

export default FrameComponent11;
