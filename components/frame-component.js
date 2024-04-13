import { useState } from "react";

const FrameComponent = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    qualification: "",
    organization: "",
    jobRole: "",
    income: "",
  });

  // Handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here (e.g., send data to server)
    console.log("Form submitted with data:", formData);
  };

  return (
    <form
      className="m-0 self-stretch flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]"
      onSubmit={handleSubmit} // Bind form submission to handleSubmit function
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-3.5 pb-2 box-border max-w-full">
        <h2 className="m-0 flex-1 relative text-13xl font-medium font-montserrat text-crimson-100 text-left inline-block max-w-full mq750:text-7xl mq450:text-lgi">
          Tell us more about yourself
        </h2>
      </div>

      {/* Qualification input field */}
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <label className="w-[271px] relative text-5xl font-montserrat text-black text-left flex items-center box-border pr-5 mq450:text-lgi" htmlFor="qualification">
          Highest qualification
        </label>
        <input
          id="qualification"
          name="qualification"
          type="text"
          className="self-stretch h-[74px] rounded-3xs bg-white box-border py-6 px-8 max-w-full border-[1px] border-solid border-crimson-100 text-xl font-light font-montserrat text-crimson-300 text-left"
          placeholder="Enter your highest qualification"
          value={formData.qualification}
          onChange={handleChange}
        />
      </div>

      {/* Organization input field */}
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <label className="w-[407px] relative text-5xl font-montserrat text-black text-left flex items-center max-w-full box-border pr-5 mq450:text-lgi" htmlFor="organization">
          Organization you are working at
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          className="self-stretch h-[74px] rounded-3xs bg-white box-border py-6 px-8 max-w-full border-[1px] border-solid border-crimson-100 text-xl font-light font-montserrat text-crimson-300 text-left"
          placeholder="Enter your organization name"
          value={formData.organization}
          onChange={handleChange}
        />
      </div>

      {/* Job role input field */}
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <label className="w-[267px] relative text-5xl font-montserrat text-black text-left flex items-center box-border pr-5 mq450:text-lgi" htmlFor="jobRole">
          You are working as a
        </label>
        <input
          id="jobRole"
          name="jobRole"
          type="text"
          className="self-stretch h-[74px] rounded-3xs bg-white box-border py-6 px-8 max-w-full border-[1px] border-solid border-crimson-100 text-xl font-light font-montserrat text-crimson-300 text-left"
          placeholder="Enter your job role"
          value={formData.jobRole}
          onChange={handleChange}
        />
      </div>

      {/* Income input field */}
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <label className="w-[296px] relative text-5xl font-montserrat text-black text-left flex items-center box-border pr-5 mq450:text-lgi" htmlFor="income">
          Monthly/Yearly income
        </label>
        <input
          id="income"
          name="income"
          type="number"
          className="self-stretch h-[74px] rounded-3xs bg-white box-border py-6 px-8 max-w-full border-[1px] border-solid border-crimson-100 text-xl font-light font-montserrat text-crimson-300 text-left"
          placeholder="Enter your income"
          value={formData.income}
          onChange={handleChange}
        />
      </div>

      {/* Next button */}
      <div className="self-stretch rounded-3xs bg-crimson-100 overflow-hidden flex flex-row items-start justify-center py-[16.5px] px-5 text-13xl text-white">
       <div className="relative inline-block min-w-[75px] mq750:text-7xl mq450:text-lgi">
          Next
       </div>
      </div>
    </form>
  );
};

export default FrameComponent;

