type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}
type RecordItem = {
  tags: Tag[]
  notes: string
  type: string
  amount: number //TS除了可以写类型
  createdAt?: string //问好表示createdAt可以不存在
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated'//联合类型
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  save: () => void
}
type Tag = {
  id: string
  name: string
}

// interface Window {
//   store: {
//     tagList: Tag[];
//     findTag: (id: string) => Tag | undefined;
//     createTag: (name: string) => void;
//     removeTag: (id: string) => boolean;
//     updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
//     recordList: RecordItem[];
//     createRecord: (record: RecordItem) => void;
//   };
// }
