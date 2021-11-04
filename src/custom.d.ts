export  type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number //TS除了可以写类型
  createdAt?: Date //问好表示createdAt可以不存在
}