import Expenses from './Components/Expenses';

const orderedItems = [  
  {title: 'Car Insurance', date: new Date('2021-07-01'), amount: '10023', imgurl: 'https://fastly.picsum.photos/id/70/200/300.jpg?hmac=8-6v4fVxk6exesGT53s01yaJuediQIreacSHqZY3mV4https://fastly.picsum.photos/id/70/200/300.jpg?hmac=8-6v4fVxk6exesGT53s01yaJuediQIreacSHqZY3mV4'},
  {title: 'House Insurance', date: new Date('2021-07-01'), amount: '20320', imgurl: 'https://www.thesun.co.uk/wp-content/uploads/2020/06/NINTCHDBPICT000590073579.jpg'},
  {title: 'Health Insurance', date: new Date('2021-07-01'), amount: '31200', imgurl: 'https://www.thesun.co.uk/wp-content/uploads/2020/06/NINTCHDBPICT000590073579.jpg'},
  {title: 'Life Insurance', date: new Date('2021-07-01'), amount: '42200', imgurl: 'https://www.thesun.co.uk/wp-content/uploads/2020/06/NINTCHDBPICT000590073579.jpg'},
];


function App() {
  return (
    <div>
      {orderedItems.map((item) => (
        <Expenses title={item.title} date={item.date} amount={item.amount} imgurl={item.imgurl} />
      ))}
    </div>
  );
}
export default App;