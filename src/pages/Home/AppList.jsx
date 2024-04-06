import chatIcon from "../../img/ChatBox.svg";
import taskIcon from "../../img/TaskBox.svg";
import { Link } from "react-router-dom";


export default function AppList() {
    return (
        <div className="AppList">
            <Link to="/chat" className="link">
                <img src={chatIcon} className="AppImage" alt="Chat" />
            </Link>

            <Link to="/tasks" className="link">
                <img src={taskIcon} className="AppImage" alt="Tasks" />
            </Link>
        </div>
    );
}
