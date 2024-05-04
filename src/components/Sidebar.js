import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router-dom"

export default function Sidebar({ links, close }) {
    const location = useLocation();

    function handleClick() {
        close(); // Close the sidebar when a link is clicked
    }

    return (
        <div className="sidebar">
            {links.map(link => (
                <Link to={link.path} className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"} key={link.name} onClick={handleClick}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </Link>
            ))}
        </div>
    );
}
