import './Nav.css'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { IoDocumentTextOutline, IoSettingsOutline, IoPowerOutline, IoCartOutline, IoHomeOutline, IoClose, IoMenu } from "react-icons/io5"

function Nav({ handleLogout }) {
    const [sidebar, setSidebar] = useState(false) //no showing por defecto
    const navigate = useNavigate()

    const handleShowSidebar = () => setSidebar(!sidebar) 

    return (
        <>
            <div className='Navbar'>
                <Link to='#' className='Navbar__icon'>
                    <IoMenu onClick={handleShowSidebar} />
                </Link>
            </div>

            <nav className={sidebar ? 'Navmenu active' : 'Navmenu'}>
                <ul className='Navmenu__items' onClick={handleShowSidebar}>
                    <li className='Navmenu__items-toggle'>
                        <Link to='#' className='Navbar__icon'>
                            <IoClose onClick={handleShowSidebar} />
                        </Link>
                    </li>
                    {/* {NavSidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path} >
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                            Tal cual el video
                    })} */}

                    <li className='Navmenu__items-li' onClick={() => navigate("/")}>
                        <IoHomeOutline className='Navmenu__items-li-icon'/>
                        <span className='Navmenu__items-li-text'>Home</span>
                    </li>
                    <li className='Navmenu__items-li' onClick={() => navigate("/suppliers")}>
                        <IoCartOutline className='Navmenu__items-li-icon'/>
                        <span className='Navmenu__items-li-text'>Suppliers</span>
                    </li>

                    <li className='Navmenu__items-li' onClick={() => navigate("/orders")}>
                        <IoDocumentTextOutline className='Navmenu__items-li-icon'/>
                        <span className='Navmenu__items-li-text'>Orders</span>
                    </li>

                    <li className='Navmenu__items-li' onClick={() => navigate("/settings")}>
                        <IoSettingsOutline className='Navmenu__items-li-icon'/>
                        <span className='Navmenu__items-li-text'>Settings</span>
                    </li>

                    <li className='Navmenu__items-li' onClick={handleLogout}>
                        <IoPowerOutline className='Navmenu__items-li-icon'/>
                        <span className='Navmenu__items-li-text'>Logout</span>
                    </li>
                </ul>
            </nav >
        </>
    )
}
export default Nav