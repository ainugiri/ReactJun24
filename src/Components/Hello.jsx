// Component
// Functional Component
// Class Component
function Hello(props){

    // return <h2>Hello, Giri!</h2>;
    
    return (
        <div>
            <p>Hello, {props.name} !</p>
        </div>
    );
}

export default Hello;