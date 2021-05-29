/*
actionの例
action = {
  type: "CREATE_EVENT",
  title: "講義開催のお知らせ",
  body: "明日の講義はおやすみです"
}
*/

/* 
stateがない場合
before
state = [];

after
state = [{id:1, title: "講義開催のお知らせ", body: "明日の講義はおやすみです"}]
*/

/*
stateがある場合
before
state = [
  { id: 1, title: 'タイトル1' body: "ボディ1"}
  { id: 2, title: 'タイトル2' body: "ボディ2"}
  { id: 3, title: 'タイトル3' body: "ボディ3"}
];

after
state = [
  { id: 1, title: 'タイトル1' body: "ボディ1"}
  { id: 2, title: 'タイトル2' body: "ボディ2"}
  { id: 3, title: 'タイトル3' body: "ボディ3"}
  {id:1, title: "講義開催のお知らせ", body: "明日の講義はおやすみです"}
];
*/

const events = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body };
      const length = state.length;
      /*
      let id;
      if (length === 0) {
        id = 1;
      } else {
        id = state[length - 1].id + 1;
      }
      */
      //  上のコードをリファクタリング
      const id = length === 0 ? 1 : state[length - 1].id + 1;

      // id: idはidが同じなのでショーハンドで記述ができる
      return [...state, { id, ...event }];
    case 'DELETE_EVENT':
      return state.filter((event) => event.id !== action.id);
    case 'DELETE_ALL_EVENTS':
      return [];

    default:
      return state;
  }
};

export default events;
