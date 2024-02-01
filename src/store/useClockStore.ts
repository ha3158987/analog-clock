import { create } from 'zustand';

interface UpdateCurrentTimeParams {
  hour: number;
  minute: number;
  second: number;
}

export interface UseClockStoreType {
  hour: number;
  minute: number;
  second: number;
  updateCurrentTime: (param: UpdateCurrentTimeParams) => void;
}

const useClockStore = create<UseClockStoreType>((set) => ({
  hour: 0,
  minute: 0,
  second: 0,
  updateCurrentTime: ({ hour, minute, second }: UpdateCurrentTimeParams) => set({ hour, minute, second }),
}));

export default useClockStore;
