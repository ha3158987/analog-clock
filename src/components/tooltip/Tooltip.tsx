import '@components/tooltip/tooltip.style.scss';
import useClockStore from '@/store/useClockStore';
import useTooltip from '@/hooks/useTooltip';


const Tooltip = ({ show }: { show: boolean }) => {

  const { hour, minute, second } = useClockStore();
  const { tooltipPosition } = useTooltip();

  return (
    <>
      {show && (
        <div id={'tooltip'} style={{ ...tooltipPosition }}>{`${hour}시 ${minute}분 ${second}초`}</div>
      )}
    </>
  )
}

export default Tooltip;