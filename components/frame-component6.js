import React from 'react';

const FrameComponent6 = ({
  enterYourEmail,
  enterYourEmail1,
  value,
  onChange,
  inputName,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
      <label className="w-[296px] relative text-5xl font-montserrat text-black text-left flex items-center box-border pr-5 mq450:text-lgi">
        {enterYourEmail}
      </label>
        {/* Input field */}
        <input
          type="text"
          name={inputName}
          value={value}
          onChange={onChange}
          placeholder={enterYourEmail1}
          className="self-stretch h-[74px] rounded-3xs bg-white box-border py-6 px-8 max-w-full border-[1px] border-solid border-crimson-100 text-xl font-light font-montserrat text-crimson-300 text-left"
        />
     
    </div>
  );
};

export default FrameComponent6;
