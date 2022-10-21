import { InputHTMLAttributes } from 'react';
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
  name: string;
  label?: string;
  disabled?: boolean;
  register: UseFormRegister<T>;
  errors?: FieldErrors<U>;
}

const Input = <T extends FieldValues, U extends FieldValues>({
  disabled = false,
  placeholder,
  errors,
  label,
  name,
  value,
  register,
  ...rest
}: Props<T, U>) => {
  return (
    <div className="flex flex-col">
      <label className="flex" htmlFor={name}>
        {label ?? ''}
      </label>
      <input
        className={`w-full p-2 mb-2 border focus:ring focus:ring-blue-500 focus:border-blue-500 rounded-lg ${
          errors && errors[name as keyof U]
            ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
            : ''
        }`}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        {...register(name as Path<T>)}
        {...rest}
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
