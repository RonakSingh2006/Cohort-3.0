import { ReactNode } from "react";

export default function AuthLayout({children} : {children : ReactNode}){{
  return <div>
    <div className="text-4xl font-extrabold text-center h-12">Authentication</div>
    {children}
  </div>
}}