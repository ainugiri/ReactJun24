import './Expenses.css';
import Card from './Card';  
import ExpensesDate from './ExpensesDate';
export default function Expenses(props) {
    
    return (
        <Card className='expenses'>   
            <ExpensesDate date={props.date} />
            <h2>{props.title}</h2> 
            <h3 className='amount'>{props.amount}</h3>  
            <button className='btnYellow'>Track Package</button>
            <button className='btnGray'>View or Edit Order</button>
        </Card>
    );
}
