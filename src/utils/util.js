import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export const textLengthOverCut = ({ ...props }) => {
    let { txt, len, lastTxt } = props;
    if (len === null) {
        // 기본값
        len = 20;
    }
    if (lastTxt === '' || lastTxt === null) {
        // 기본값
        lastTxt = '...';
    }
    if (txt.length > len) {
        txt = txt.substr(0, len) + lastTxt;
    }
    return txt;
};

const { persistAtom } = recoilPersist({
    key: 'recoil-persist',
    storage: localStorage,
});

export const access_token = atom({
    key: 'access_token',
    default: '',
    effects_UNSTABLE: [persistAtom]
})