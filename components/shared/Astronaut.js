import { useState, useEffect, useRef } from 'react'

const Astronaut = (props) => {
    let astro = useRef(null)
    let [style, updateStyle] = useState({
        height: '50%',
        transform: 'unset'
    })

    useEffect(() => {
        const initY = 30

        console.log(astro)

        let doc = document.documentElement
        let vw = Math.max(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
        )
        let vh = Math.max(doc.clientHeight || 0, window.innerHeight || 0)

        const handleResize = () => {
            doc = document.documentElement
            vw = Math.max(
                document.documentElement.clientWidth || 0,
                window.innerWidth || 0
            )

            vh = Math.max(doc.clientHeight || 0, window.innerHeight || 0)
        }

        window.addEventListener('resize', handleResize, {
            passive: true
        })

        const handleScroll = ({ target }) => {
            // const x = window.scrollX + astro.getBoundingClientRect().left;
            const y = window.scrollY + astro.current.getBoundingClientRect().top

            // var y = (window.pageYOffset || target.scrollTop) - (doc.clientTop || 0);

            var aPosX, aScale, aRot
            // const dX = x - initX;
            const dY = y - initY

            // const aSpeedX = 1020;
            // aPosX = Math.abs((vw/ 2) - (((aSpeedX / 1000) * (0.75 * dX)) % vw));

            // scale
            aScale = ((vh - (initY + 0.15 * dY)) / (2 * vh)) * 100
            // rotation
            aRot = 90 - ((vh - (initY + 0.3 * dY)) / (2 * vh)) * 180

            if (aScale < 25) {
                aScale = 25
                aRot = 90 - ((vh - (initY + 2 * dY)) / 2 / vh) * 180
            }

            updateStyle({
                height: `${aScale}%`,
                transform: `rotate(${aRot}deg)`
            })
        }

        window.addEventListener('scroll', handleScroll, {
            passive: true
        })

        return () => {
            window.removeEventListener('scroll', handleScroll, {
                passive: true
            })
        }
    }, [])

    return (
        <>
            <img
                ref={astro}
                src="/astronaut.png"
                id="astro"
                alt="astronaut"
                style={style}
            />
        </>
    )
}

export default Astronaut
