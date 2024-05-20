import React, { ChangeEvent } from "react";
import { useListCert } from "../MVCmodel";

interface InputProps {
  id: string
  label: string;
  type?: string;
  value:string;
  actChange: (e:ChangeEvent) => void;
  actTab?: () => void;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  value,
  actChange,
  actTab
}) => {

  return (
    <div className="w-full relative">
      <input
        id = {id}        
        placeholder="text"
        type={type}
        value = {value}
        onChange={(e) => actChange(e)}
        onBlur={actTab}
        className="w-full p-2 pb-0.5 pt-5 font-light bg-white border-2 rounded-2xl outline-none
                  transition disabled:opacity-70 disabled:cursor-not-allowed
                  peer"
      />
      
      <label className="absolute text-sm left-4 duration-150 top-4 z-10 origin-[0] transform -translate-y-3
                        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                        peer-focus:scale-75 peer-focus:-translate-y-4
                        pointer-events-none"
      >
        {label}
      </label>
    </div>
   );
}
 
export default Input;

