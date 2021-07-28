import { TextComponent } from "@types";

const TextBox: TextComponent = ({ children, variant }) => {
    return (
        <>
            <div className={`text-box -${variant || "yellow"}`}>
                {children}
            </div>
        </>
    );
}

export default TextBox;