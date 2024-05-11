import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"
import './side-bar.css'

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm side-bar">
      <div className="p-6">
        <p className="text-white text-orbis text-xl ">ORBIS GEOSCRIPTING</p>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  )
}