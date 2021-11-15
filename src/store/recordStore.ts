import recordListModel from '@/models/RecordListModel';

export default {
  //record store
  recordList: recordListModel.fetch(),
  createRecord: (record:RecordItem) => {
    recordListModel.create(record);
  }
}