import React from `react`
import { SidebarDate } from "./SidebarDate"

function Sidebar(){
    return(
        <div className="Sidebar">
            <ul className="SidebarList">
                {SidebarDate.map((value, key) => {
                    return (
                        <li key={key} className="row">
                            <div id="title">{value.title}</div>
                            <div id="link">{value.link}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar

