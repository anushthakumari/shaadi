import { useState } from "react";

const FrameComponent12 = ({ community, communityPreference, value, onChange, name }) => {
  // The component now accepts `value`, `onChange`, and `name` props from the parent component

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-left text-5xl text-black font-montserrat">
      <div className="relative mq450:text-lgi">{community}</div>
      <input
        type="text"
        name={name}
        className="self-stretch h-[74px] rounded-3xs bg-white box-border flex flex-row items-start justify-start py-6 px-8 whitespace-nowrap max-w-full text-xl text-crimson-300 border-[1px] border-solid border-crimson-100"
        placeholder={communityPreference}
        value={value}
        onChange={onChange}
        // The input field uses the `value` and `onChange` props to control its state and handle input changes
      />
    </div>
  );
};

export default FrameComponent12;

