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

export const getFileType = (filename) => {
    let fileLen = filename.length;
    let lastDot = filename.lastIndexOf('.');
    let fileType = filename.substring(lastDot, fileLen).toLowerCase();

    if(fileType === '.png' || fileType === '.jpg' || fileType === '.jpeg') return "photo";

    return "else";

}

const { persistAtom } = recoilPersist({
    key: 'recoil-persist',
    storage: localStorage,
});

export const id_token = atom({
    key: 'id_token',
    default: '',
    effects_UNSTABLE: [persistAtom]
})

export const access_token = atom({
    key: 'access_token',
    default: '',
    effects_UNSTABLE: [persistAtom]
})

export const user_id = atom({
    key: 'user_id',
    default: '',
    effects_UNSTABLE: [persistAtom]
})