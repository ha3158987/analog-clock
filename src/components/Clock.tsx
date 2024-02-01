import { useEffect } from 'react'
import '@styles/components/_clock.scss'
import useClockStore from '@store/useClockStore';

const Clock = () => {
    const { hour, minute, second, updateCurrentTime } = useClockStore();

    const getCurrentTimer = () =>
        setInterval(() => {
            const now = new Date();
            updateCurrentTime({
                hour: now.getHours(),
                minute: now.getMinutes(),
                second: now.getSeconds()
            })
        }, 1000);

    useEffect(() => {
        const timerId = getCurrentTimer();
        return () => clearInterval(timerId);
    }, [])

    return (
        <div className='clock-wrapper'>
            <div>{hour}</div>
            <div>{minute}</div>
            <div>{second}</div>
        </div>
    )
}

export default Clock;