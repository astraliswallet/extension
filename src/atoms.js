import { atom } from "jotai";
import { atomWithStorage } from 'jotai/utils';
import { testnetURL } from "./constants";

export const walletCreatedAtom = atomWithStorage(false);
export const walletAtom = atomWithStorage('wallet', 'jasnsnc');
export const topupBalanceAtom = atomWithStorage('topupBalance', null);
export const privateKeyAtom  = atomWithStorage('privateKey', null);
export const networkRPCAtom = atomWithStorage(testnetURL, null);