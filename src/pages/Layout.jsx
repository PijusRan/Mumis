import { Link } from "react-router-dom";
import "../css/Layout.css"
import {transition_right} from "../transition";

import chatIcon from "../img/chatIcon.png";
import taskIcon from "../img/to-do-list.png"

function Layout(){
    return(
        <>
            <div className="AppList">
                <Link to="/chat" className="linkToApp">
                    <img src={chatIcon} className="AppImage" alt="Chat"/>
                </Link>
                
                <Link to="/tasks" className="linkToApp">
                    <img src={taskIcon} className="AppImage" alt="Tasks"/>
                </Link>
            </div>
        </>
    )
}

export default transition_right(Layout);