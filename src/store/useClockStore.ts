import { create } from 'zustand';

export interface UseClockStoreType {
  hour: number;
  minute: number;
  second: number;
  updateTimer: () => NodeJS.Timeout;
}

const useClockStore = create<UseClockStoreType>((set) => ({
  hour: 0,
  minute: 0,
  second: 0,
  updateTimer: () => setInterval(() => {
    const now = new Date();
    set({
      hour: now.getHours(),
      minute: now.getMinutes(),
      second: now.getSeconds(),
    });
  }, 1000)
}));


export default useClockStore;
