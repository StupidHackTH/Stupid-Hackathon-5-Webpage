export default ({ title, current, max}) => {
    let flag = "bg-pink-600";
    if (current === max) {
        flag = "bg-green-300";
    }

    return (
        <>
            <div className="text-5xl bg-black text-white ml-2 mr-2 p-3 mb-5">
                <div className={`w-4 h-4 ${flag}`}></div>
                <div className="mt-3">{title}</div>
                <div className="text-right text-2xl">{current}/{max}</div>
            </div>
        </>
    );
}