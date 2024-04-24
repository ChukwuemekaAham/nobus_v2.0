import React from "react";
import { twMerge } from "tailwind-merge";
import Spinner from "./Spinner";

type LoadingButtonProps = {
  loading: boolean;
  btnColor?: string;
  textColor?: string;
  disabled?: boolean;
  children: React.ReactNode;
};

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  textColor = "text-white",
  btnColor = "bg-blue-600",
  children,
  loading = false,
  disabled
}) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={twMerge(
        `w-full inline-flex justify-center tracking-wide leading-relax rounded-full border border-transparent py-2 px-4 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`,
        `${btnColor} ${loading && "bg-[#ccc]"}`
      )}
    >
      {loading ? (
        <div className="flex items-center gap-3">
          <Spinner />
          <span className="text-slate-500 inline-block">Loading...</span>
        </div>
      ) : (
        <span className={`${textColor}`}>{children}</span>
      )}
    </button>
  );
};
