import { useState, MouseEvent } from 'react';

import '@components/tooltip/tooltip.style.scss';

const Tooltip = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
        setTooltipPosition({ x: e.clientX - 300, y: e.clientY - 200 });
    }

    const exposeTooltip = () => {
        setIsVisible(true)
    }

    const hideTooltip = () => {
        setIsVisible(false)
    }

    return (
        <div className='tooltip-container'
            onMouseMove={handleMouseMove}
            onMouseEnter={exposeTooltip}
            onMouseLeave={hideTooltip}
        >
            {isVisible &&
                <div className='tooltip' style={{ top: tooltipPosition.y, left: tooltipPosition.x }} >{'Tooltip'}</div>
            }

        </div>
    )
}

export default Tooltip;