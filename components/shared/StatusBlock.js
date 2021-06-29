export default ({ title, current, max, desc }) => {
    let flag = "status-block--flag__active";
    if (current >= max) {
        flag = "status-block--flag__full";
    }

    return (
        <>
            <div className="status-block">
                <div className={`status-block--flag ${flag}`}></div>
                <div className="status-block--title"><h2>{title}</h2></div>
                <div className="status-block--description"><p>{desc}</p></div>
                <div className="status-block--status">{current}/{max}</div>
            </div>
        </>
    );
}