var mocChatData = [
  {
    id: new Date(),
    type: "CHAT",
    content: 'Ut pariaturquia voluptas sit asaerat voluptatem.',
    date: '4 April 2016, 5:32 PM',
    user: {
      name: 'Michelle Stewart',
      id: new Date(),
    },
  },
  {
    id: new Date(),
    type: "CHAT",
    content: 'Ut pariaturquia voluptas sit asaerat voluptatem.',
    date: '4 April 2016, 5:32 PM',
    user: {
      name: 'Michelle Stewart',
      id: new Date(),
    },
  },
  {
    id: new Date(),
    type: "CHAT",
    content: 'Ut pariaturquia voluptas sit asaerat voluptatem.',
    date: '4 April 2016, 5:32 PM',
    user: {
      name: 'Michelle Stewart',
      id: new Date(),
    },
  },
  {
    id: new Date(),
    type: "CHAT",
    content: 'Ut pariaturquia voluptas sit asaerat voluptatem.',
    date: '4 April 2016, 5:32 PM',
    user: {
      name: 'Michelle Stewart',
      id: new Date(),
    },
  },
  {
    id: new Date(),
    type: "CHAT",
    content: 'Ut pariaturquia voluptas sit asaerat voluptatem.',
    date: '4 April 2016, 5:32 PM',
    user: {
      name: 'Michelle Stewart',
      id: new Date(),
    },
  },
];

export const getChatData = () => dispatch => {
  setTimeout(() => {
    dispatch(
     {type: 'FETCH_CHAT_DATA_SUCCESS', payload: mocChatData},
    );
  }, 500)
};