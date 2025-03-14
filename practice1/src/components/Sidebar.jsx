import React from 'react'

function Sidebar() {
    return (
        <div className='Sidebar'>
            <ul className='SidebarList'>
                {SidebarDate.map((value, key) => {
                    return {
                    < li key = { key } className = "row" >
                    <div id='icon'>{value.icon}</
                    <div id="icon"><{value.title}<
                    <li></li>
                   } 
                }}
            </ul>

        </div>
    )
}

export default Sidebar;
