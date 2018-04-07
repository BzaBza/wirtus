var mocChatData = [
  {
    interlocutor: 'Michelle Stewart',
    interlocutorMessages: [
      {
        message: 'Ut pariaturquia voluptas sit asaerat voluptatem.',
        date: '4 April 2016, 5:32 PM'
      },
      {
        message: 'Ut pariaturquia voluptas sit asaerat voluptatem.',
        date: '4 April 2016, 5:40 PM'
      },
      {
        message: 'Ut pariaturquia voluptas sit asaerat voluptatem.',
        date: '4 April 2016, 5:50 PM'
      }
    ],
    userMessages: [
      {
        message: 'Ut pariaturquia voluptas sit asaerat voluptatem.',
        date: '4 April 2016, 5:41 PM'
      }
    ],
  },
  {
    interlocutor: 'Michelle Stewart',
    interlocutorMessages: [
      {
        message: 'Ut pariaturquia voluptas sit asaerat voluptatem.',
        date: '4 April 2013, 22:32 PM'
      },
      {
        message: 'Ut pariaturquia voluptas sit asaerat voluptatem.',
        date: '4 April 2016, 5:40 PM'
      },
      {
        message: 'Ut pariaturquia voluptas sit asaerat voluptatem.',
        date: '4 April 2016, 5:50 PM'
      }
    ],
    userMessages: [
      {
        message: 'Ut pariaturquia voluptas sit asaerat voluptatem.',
        date: '4 April 2016, 5:41 PM'
      }
    ],
  },
  {
    interlocutor: 'Michelle Stewart',
    interlocutorMessages: [
      {
        message: 'Ut pariaturquia voluptas sit asaerat voluptatem.',
        date: '4 April 2011, 2:32 PM'
      },
      {
        message: 'Ut pariaturquia voluptas sit asaerat voluptatem.',
        date: '4 April 2016, 5:40 PM'
      },
      {
        message: 'Ut pariaturquia voluptas sit asaerat voluptatem.',
        date: '4 April 2016, 5:50 PM'
      }
    ],
    userMessages: [
      {
        message: 'Ut pariaturquia voluptas sit asaerat voluptatem.',
        date: '4 April 2016, 5:41 PM'
      }
    ],

  }
];

export const getChatData = () => dispatch => {
  setTimeout(() => {
    dispatch(
     {type: 'FETCH_CHAT_DATA_SUCCESS', payload: mocChatData},
    );
  }, 500)
};