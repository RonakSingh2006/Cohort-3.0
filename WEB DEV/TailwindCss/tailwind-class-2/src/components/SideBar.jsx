function SideBar({children}){
  return <div className="flex">
    <div className="dark:bg-gray-900 bg-slate-300 h-screen w-0 sm:w-80 duration-500 ease-in-out delay-75">SideBar</div>
    <div className="dark:bg-gray-600 bg-slate-50 h-screen w-full">{children}</div>
  </div>
}

export default SideBar;