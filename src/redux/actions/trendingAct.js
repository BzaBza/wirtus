var mocTrendingData = [
  {
    Campaing: 'Lorem ipsum dolor sit amet tetur ',
    Time: '6 days',
    Views: '358 000',
    Visitors: '58 200',
    CTR: '25%',
    CPC: '$3.02',
    CPV: '$2.51',
    CPM: '$28.35',
    Status: 'Active',
  },{
    Campaing: 'Sed do eiusmod tempor',
    Time: '7 hours',
    Views: '1 200',
    Visitors: '800',
    CTR: '10%',
    CPC: '$8.45',
    CPV: '$6.13',
    CPM: '$45.22',
    Status: 'Disable',
  },{
    Campaing: 'Consectetur adipisicing elit sed do ',
    Time: '3 days',
    Views: '69 000',
    Visitors: '7 300',
    CTR: '19%',
    CPC: '$6.22',
    CPV: '$3.90',
    CPM: '$37.80',
    Status: 'Active',
  }
];

export const getTrendingData = () => dispatch => {
  setTimeout(() => {
    dispatch(
     {type: 'FETCH_TRENDING_DATA_SUCCESS', payload: mocTrendingData}
    );
  }, 500)
};