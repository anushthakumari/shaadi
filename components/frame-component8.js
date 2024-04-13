import { useState } from "react";
import FrameComponent6 from "./frame-component6";
import Button from "./button";

const FrameComponent8 = () => {
  // Initialize state to manage form data
  const [formData, setFormData] = useState({
    city: "",
    religion: "",
    subCommunity: "",
    motherTongue: "",
  });

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (add your logic here)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log("Form submitted:", formData);
  };

  return (
    <form
      className="m-0 self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]"
      onSubmit={handleSubmit} // Attach the handleSubmit function to form submit event
    >
      {/* Input for city */}
      <FrameComponent6
        enterYourEmail="City you live in"
        enterYourEmail1="Enter your city name"
        propWidth="192px"
        value={formData.city}
        onChange={handleChange}
        inputName="city"
      />

      {/* Input for religion */}
      <FrameComponent6
        enterYourEmail="Religion"
        enterYourEmail1="Enter your religion"
        propWidth="119px"
        value={formData.religion}
        onChange={handleChange}
        inputName="religion"
      />

      {/* Input for sub-community */}
      <FrameComponent6
        enterYourEmail="Your sub-community"
        enterYourEmail1="Enter your sub-community"
        propWidth="276px"
        value={formData.subCommunity}
        onChange={handleChange}
        inputName="subCommunity"
      />

      {/* Input for mother tongue */}
      <FrameComponent6
        enterYourEmail="Mother tongue"
        enterYourEmail1="Enter your mother tongue"
        propWidth="202px"
        value={formData.motherTongue}
        onChange={handleChange}
        inputName="motherTongue"
      />

      {/* Next button */}
      <div className="self-stretch rounded-3xs bg-crimson-100 overflow-hidden flex flex-row items-start justify-center py-[16.5px] px-5 text-13xl text-white">
        <div className="relative inline-block min-w-[75px] mq750:text-7xl mq450:text-lgi">
          Next
        </div>
      </div>
    </form>
  );
};

export default FrameComponent8;

