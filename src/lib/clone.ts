function clone<T>(data: T):T {//传的参数是什么类型，我返回的就是什么类型
  return JSON.parse(JSON.stringify(data));
}

export default clone;