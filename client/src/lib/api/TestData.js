const inboxdata = [
    {
      "num": 1,
      "sender": "혜니",
      "content": "블록옵션님의 그림에 대해 문의드립니다",
      "date": "2021-03-27",
      "read": "O"
    },
    {
        "num": 2,
        "sender": "효효",
        "content": "블록옵션님의 버즈에 대해 문의드립니다",
        "date": "2021-03-27",
        "read": "O"
    },
    {
        "num": 3,
        "sender": "도도",
        "content": "블록옵션님의 그램에 대해 문의드립니다",
        "date": "2021-03-27",
        "read": "O"
    },
    {
        "num": 4,
        "sender": "묘니",
        "content": "문의드립니다",
        "date": "2021-03-27",
        "read": "X"
    },
    {
        "num": 5,
        "sender": "장기우기",
        "content": "블록옥션님의 ootd에 대해 문의드립니다",
        "date": "2021-03-27",
        "read": "O"
    },
  ];
  
  const getInboxByNum = num => {
    const array = inboxdata.filter(x => x.num === num);
    if (array.length === 1) {
      return array[0];
    }
    return null;
  }
  
  export {
    inboxdata,
    getInboxByNum
  };