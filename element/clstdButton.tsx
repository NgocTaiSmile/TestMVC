import { IconType } from "react-icons";
import React from "react";
import { useListCert } from "../MVCmodel";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  action: () => void
}

//can we create 2 interface and combine
const Button: React.FC<ButtonProps> = ({ 
  label, 
  disabled, 
  outline,
  small,
  icon: Icon,
  action
}) => {
  const data = useListCert().data
  return ( 
    <button
      onClick = {action}
      disabled={disabled}
      className={`relative w-20 rounded-lg
              disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80 transition
              ${outline ? 'bg-white border-black text-black' : 'bg-rose-500 border-rose-500 text-white'}
              ${small ? 'text-sm py-1 font-light border-[1px]' : 'text-md py-3 font-semibold border-2'}
              `}
    >
      {Icon && ( <Icon size={24} className="absolute left-4 top-3" />)}
      {label}
    </button>
   );
}
 
export default Button;