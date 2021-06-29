import { useState } from "react";

// TODO collapisble isn't very compaitble
export default ({ title, content, flag }) => {
    const [toggled, setToggled] = useState(false);

    const handleClick = (e) => setToggled(!toggled);

    return (
        <>
            <div className="toggle-block" data-toggled={toggled}>
                <div className="toggle-block__header  nes-pointer" onClick={handleClick} tabIndex="0">
                    <div className={`toggle-block__header--flag toggle-block--flag__${flag || "yellow"}`}></div>
                    <div className="toggle-block__header--title"><h2>{title}</h2></div>
                </div>
                <div className="toggle-block__body">
                    <div className="toggle-block__body--content">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </>
    );
};