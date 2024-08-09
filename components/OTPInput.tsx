import React, { useRef, useState } from "react";

type InputProps = {
  length?: number;
  onComplete: (pin: string) => void;
};

const OTPInput = ({ length = 6, onComplete }: InputProps) => {
  const inputRef = useRef<HTMLInputElement[]>([]);
  const [OTP, setOTP] = useState<string[]>(Array(length).fill(""));

  const handleTextChange = (input: string, index: number) => {
    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);

    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }

    if (newPin.every((digit) => digit !== "")) {
      onComplete(newPin.join(""));
      console.log({ pin: newPin });
    }
  };

  return (
    <div className="grid grid-cols-6 gap-1 sm:gap-2">
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={OTP[index]}
          onChange={(e) => handleTextChange(e.target.value, index)}
          ref={(ref) => (inputRef.current[index] = ref as HTMLInputElement)}
          className={`text-lg px-3 py-2 mx-px sm:mx-2 rounded-md bg-gray-100 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
            index === length - 1 ? "mr-0" : "mr-2"
          }`}
        />
      ))}
    </div>
  );
};

export default OTPInput;
