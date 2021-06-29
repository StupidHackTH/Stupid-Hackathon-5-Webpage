const TextBox = ({ children, variant }) => {
    return (
        <>
            <div className={`text-box text-box--${variant || "yellow"}`}>
                {children}
            </div>
        </>
    );
}

export default TextBox;