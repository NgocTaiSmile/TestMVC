import React from 'react';

import { IoMdClose } from "react-icons/io";

import Button from './clstdButton';

interface ModalProps {
  title?: string;
  body?: React.ReactElement;
  actionLabel: string;
}

const FormTemplate: React.FC<ModalProps> = ({ 
    title,
    body,
    actionLabel
  }) => {

  
    return(
        <>
      <div id ="bao ngoai" 
          className="fixed inset-0 z-50 justify-center items-center flex bg-neutral-800/70
                  overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
      >
        <div id ="bao trong" 
              className="relative w-full
                        md:w-4/6 lg:w-3/6 xl:w-2/5
                        my-6 mx-auto h-full lg:h-auto md:h-auto"
        >
          {/*content*/}
          <div id ='user form'
                className="translate duration-300 h-full"
          >
            <div className="relative flex flex-col translate
              w-full h-full lg:h-auto md:h-screen
              border-0 rounded-lg shadow-lg bg-white outline-none focus:outline-none
            ">
              
              {/*header*/}
              <div className="relative flex items-center p-2 rounded-t justify-center border-b-[1px]">
                <button className="absolute p-1 border-0 hover:opacity-70 transition left-9"
                >
                  <IoMdClose size={20} />
                </button>
                <div className="text-lg font-semibold">
                  {title}
                </div>
              </div>

              {/*body*/}
              <div className="relative p-3 flex-none">
                {body}
              </div>

              {/*Form Buttons*/}
              <div className="grow flex flex-col-reverse gap-2 p-1">
                <div className="flex flex-row-reverse items-center gap-4 w-full">
                  <Button 
                    label={actionLabel} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}


export default FormTemplate