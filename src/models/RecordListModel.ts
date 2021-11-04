import {RecordItem} from '@/custom.d.ts';

const localStorageKeyName = 'recordList';
const recordListModel = {
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
  },//获取数据
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};

export default recordListModel;