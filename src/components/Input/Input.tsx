import { FormEvent, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

export interface Props<
  T extends FieldValues,
  U extends FieldValues = FieldValues
> extends InputHTMLAttributes<HTMLInputElement> {
  type?: HTMLInputTypeAttribute;
  name: string;
  label?: string;
  disabled?: boolean;
  register?: UseFormRegister<T>;
  errors?: FieldErrors<U>;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = <T extends FieldValues, U extends FieldValues>({
  type,
  disabled = false,
  placeholder,
  errors,
  label,
  name,
  value,
  register,
  onChange,
  className,
  ...rest
}: Props<T, U>) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          className="flex font-medium text-gray-900 dark:text-gray-300"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={
          className ||
          `block bg-gray-50 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mb-2 border dark:border-2 border-gray-300 text-gray-900 focus:ring focus:ring-blue-500 focus:border-blue-500 rounded-lg ${
            errors && errors[name as keyof U]
              ? 'border-red-500 dark:border-red-500 dark:border-2 focus:ring-red-500 focus:border-red-500'
              : ''
          }`
        }
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        {...(register ? register(name as Path<T>) : {})}
        {...rest}
        onChange={onChange}
      />
      {errors && errors[name as keyof U] && (
        <span className="mb-2 text-xs text-red-500">
          {errors[name as keyof U]?.message as string}
        </span>
      )}
    </div>
  );
};

export default Input;
