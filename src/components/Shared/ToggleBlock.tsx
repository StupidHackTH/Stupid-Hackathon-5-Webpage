import { useState, useRef, FormEvent } from 'react'
import { ToggleComponent } from '@types'

const ToggleBlock: ToggleComponent = ({ title, content, flag }) => {
    const [toggled, setToggled] = useState(false)
    const contentContainer = useRef<never | HTMLDivElement>(null)

    const handleClick = (e: FormEvent<HTMLElement>) => setToggled(!toggled)

    return (
        <>
            <div className={`toggle-block ${toggled ? '-toggled' : ''}`}>
                <div
                    className="toggle-header  nes-pointer"
                    onClick={handleClick}
                    tabIndex={0}
                >
                    <div
                        className={`flag -${
                            flag || 'yellow'
                        }`}
                    ></div>
                    <div className="title">
                        <h3>{title}</h3>
                    </div>
                </div>
                <div
                    className="toggle-body"
                    style={contentContainer.current ? {
                        height: toggled ? contentContainer.current?.clientHeight + 50 : '0'
                    } : {}}
                >
                    <div ref={contentContainer} className="content">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToggleBlock
