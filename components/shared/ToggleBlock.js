export default ({ title, content, flag }) => {
    return (
        <>
            <div className="toggle-block">
                <div className={`toggle-block--flag toggle-block--flag__${flag || "yellow"}`}></div>
                <div className="toggle-block--title"><h1>{title}</h1></div>
                <div className="toggle-block--content"><p>{content}</p></div>
            </div>
        </>
    );
};