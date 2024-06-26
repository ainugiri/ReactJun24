import './ExpensesDate.css';
function ExpensesDate(props) {
    const month = props.date.toLocaleString('en-US', {month: 'short'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
    return (
        <div className='expense-Date'>
            <div className='expense-Date__month'>{month}</div>
            <div className='expense-Date__day'>{day}</div>
            <div className='expense-Date__year'>{year}</div>
        </div>
    );

}
export default  ExpensesDate;