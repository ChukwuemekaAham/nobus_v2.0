import React from 'react';
import { useFormContext } from 'react-hook-form';

type FormInputProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  placeholder,
  type = 'text',
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className=''>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
        
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 
        focus:ring-indigo-500 sm:text-sm ${
          errors[name] && "border-red-500"
        }
        `}
        {...register(name)}
      />
      {errors[name] && (
        <span className='text-red-500 text-xs pt-1 block'>
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
};

export default FormInput;
