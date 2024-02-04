import { useState, MouseEvent, useEffect } from "react";

const useTooltip = () => {
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
        setTooltipPosition({ top: e.clientY, left: e.clientX });
    }

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            setTooltipPosition({ top: e.clientY - 25, left: e.clientX + 10 });
        })
    }, [])

    return {
        tooltipPosition,
        setTooltipPosition,
        handleMouseMove,
    }
}

export default useTooltip;