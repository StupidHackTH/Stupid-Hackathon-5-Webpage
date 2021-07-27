import { TextComponent } from "src/@types";

const TextBox: TextComponent = ({ children, variant }) => {
    return (
        <>
            <div className={`text-box text-box--${variant || "yellow"}`}>
                {children}
            </div>
        </>
    );
}

export default TextBox;