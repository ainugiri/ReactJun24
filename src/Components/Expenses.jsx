import './Expenses.css';
import Card from './Card';  
import ExpensesDate from './ExpensesDate';
export default function Expenses(props) {
    
    return (
        <Card className='expenses'>     
            <ExpensesDate date={props.date} />
            <h2>{props.title}</h2>   
            <h6>{props.amount}</h6>
            <img src={props.imgurl} alt='Insurance' />
        </Card>
    );
}
