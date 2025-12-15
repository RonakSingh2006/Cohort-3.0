"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick : ()=>void;
}

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={onClick}
      style={{paddingTop : "2px" ,paddingBottom :"2px" , paddingLeft : "10px" , paddingRight : "10px" , maxWidth : "50%" }}
    >
      {children}
    </button>
  );
};
