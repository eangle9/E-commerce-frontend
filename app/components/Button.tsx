"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  custom?: string;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  outline,
  small,
  custom,
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        border-slate-700
        rounded
        hover:opacity-80
        transition
        w-full
        flex
        items-center
        justify-center
        gap-2
        ${outline ? "bg-white text-slate-700" : "bg-slate-700 text-white"}
        ${
          small
            ? "text-sm py-1 px-2 font-light border"
            : "text-base py-3 px-4 font-semibold border-2"
        }
        ${custom ? custom : ""}
        `}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
