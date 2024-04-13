import { useState } from "react";

const FrameComponent10 = () => {
  // Initialize state for form inputs
  const [formData, setFormData] = useState({
    motherDetails: "",
    fatherDetails: "",
    noOfSisters: "",
    noOfBrothers: "",
  });

  // Handle changes in the form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-5xl text-black font-montserrat mq750:gap-[16px]">
      {/* Mother's details input */}
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="w-[211px] relative flex items-center box-border pr-5 mq450:text-lgi">
          Mother’s details
        </div>
        <input
          type="text"
          name="motherDetails"
          value={formData.motherDetails}
          onChange={handleInputChange}
          placeholder="Enter your mother’s details"
          className="self-stretch h-[74px] rounded-3xs bg-white box-border flex flex-row items-start justify-start py-6 px-8 max-w-full text-xl text-crimson-300 border-[1px] border-solid border-crimson-100"
        />
      </div>

      {/* Father's details input */}
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="w-[202px] relative flex items-center box-border pr-5 mq450:text-lgi">
          Father’s details
        </div>
        <input
          type="text"
          name="fatherDetails"
          value={formData.fatherDetails}
          onChange={handleInputChange}
          placeholder="Enter your father’s details"
          className="self-stretch h-[74px] rounded-3xs bg-white box-border flex flex-row items-start justify-start py-6 px-8 max-w-full text-xl text-crimson-300 border-[1px] border-solid border-crimson-100"
        />
      </div>

      {/* Number of sisters input */}
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="w-[166px] relative flex items-center box-border pr-5 mq450:text-lgi">
          No of sisters
        </div>
        <input
          type="number"
          name="noOfSisters"
          value={formData.noOfSisters}
          onChange={handleInputChange}
          placeholder="How many sisters you have"
          className="self-stretch h-[74px] rounded-3xs bg-white box-border flex flex-row items-start justify-start py-6 px-8 max-w-full text-xl text-crimson-300 border-[1px] border-solid border-crimson-100"
        />
      </div>

      {/* Number of brothers input */}
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="w-[193px] relative flex items-center box-border pr-5 mq450:text-lgi">
          No of brothers
        </div>
        <input
          type="number"
          name="noOfBrothers"
          value={formData.noOfBrothers}
          onChange={handleInputChange}
          placeholder="How many brothers you have"
          className="self-stretch h-[74px] rounded-3xs bg-white box-border flex flex-row items-start justify-start py-6 px-8 max-w-full text-xl text-crimson-300 border-[1px] border-solid border-crimson-100"
        />
      </div>

      {/* Next button */}
      <div className="self-stretch rounded-3xs bg-crimson-100 overflow-hidden flex flex-row items-start justify-center py-[16.5px] px-5 text-13xl text-white">
        <div className="relative inline-block min-w-[75px] mq750:text-7xl mq450:text-lgi">
          Next
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;

