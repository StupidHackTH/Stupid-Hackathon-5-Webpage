import { useState, useRef } from 'react'

const ToggleBlock = ({ title, content, flag }) => {
    const [toggled, setToggled] = useState(false)
    const contentContainer = useRef(null)

    const handleClick = (e) => setToggled(!toggled)

    return (
        <>
            <div className={`toggle ${toggled ? 'toggle--toggled' : ''}`}>
                <div
                    className="toggle__header  nes-pointer"
                    onClick={handleClick}
                    tabIndex="0"
                >
                    <div
                        className={`toggle__flag toggle__flag--${
                            flag || 'yellow'
                        }`}
                    ></div>
                    <div className="toggle__title">
                        <h2>{title}</h2>
                    </div>
                </div>
                <div
                    className="toggle__body"
                    style={{
                        height: toggled ? contentContainer.current?.clientHeight + 50 : '0'
                    }}
                >
                    <div ref={contentContainer} className="toggle__content">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToggleBlock
