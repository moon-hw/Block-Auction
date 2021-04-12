const senderdata = [
  {
    num: 1,
    receiver: "당근당근",
    content: "당근당근의 마켓에 대해 문의드립니다",
    date: "2021-03-27",
    read: "O",
  },
  {
    num: 2,
    receiver: "효효",
    content: "효효님의 무야호에 대해 문의드립니다",
    date: "2021-03-27",
    read: "O",
  },
  {
    num: 3,
    receiver: "도도",
    content: "도도님의 제주살이에 대해 문의드립니다",
    date: "2021-03-27",
    read: "O",
  },
  {
    num: 4,
    receiver: "묘니",
    content: "문의드립니다",
    date: "2021-03-27",
    read: "X",
  },
  {
    num: 5,
    receiver: "장기우기",
    content: "장기우기님의 ootd에 대해 문의드립니다",
    date: "2021-03-27",
    read: "O",
  },
];

const getSenderInboxByNum = (num) => {
  const array = senderdata.filter((x) => x.num == num);
  if (array.length == 1) {
    return array[0];
  }
  return null;
};

export { senderdata, getSenderInboxByNum };
