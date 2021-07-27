import { useState, useRef, FormEvent } from 'react'
import { ToggleComponent } from 'src/@types'

const ToggleBlock: ToggleComponent = ({ title, content, flag }) => {
    const [toggled, setToggled] = useState(false)
    const contentContainer = useRef<never | HTMLDivElement>(null)

    const handleClick = (e: FormEvent<HTMLElement>) => setToggled(!toggled)

    return (
        <>
            <div className={`toggle ${toggled ? 'toggle--toggled' : ''}`}>
                <div
                    className="toggle__header  nes-pointer"
                    onClick={handleClick}
                    tabIndex={0}
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
                    style={contentContainer.current ? {
                        height: toggled ? contentContainer.current?.clientHeight + 50 : '0'
                    } : {}}
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
