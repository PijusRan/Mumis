//React imports
import { Link } from "react-router-dom";
import {transition_right} from "../../transition.js";
//Assets
import chatIcon from "../../img/ChatBox.svg";
import taskIcon from "../../img/TaskBox.svg";
//Components
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
//CSS
import "./Layout.css"

function Layout(){
    return(
        <>
            <Header/>
            <Footer/>

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