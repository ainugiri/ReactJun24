import React from 'react';

class ClassComp1 extends React.Component {  
    constructor(props){
        super(props);
        console.log("Constructor Called");
        this.state = {
            count: 0
        }
    }

    incCount = () => {this.setState({count: this.state.count + 1})}


    render() {
        return (
            <>
                <h5>Hi {this.props.user}</h5>;
                <button type="button" onClick={this.incCount}>Click</button>
                <label>{this.state.count}</label>
            </>
        );
    }

    componentDidMount(){
        console.log("Component Mounted");
    }
}
export default ClassComp1;



// LifeCycle of Components
// Phases :
// 1. Mounting      - keeping all element in the DOM
//                     methods : constructor , render, componentDidMount
// 2. Updating
// 3. Unmounting


// Component
// 1. Functional Component         // Stateless component
        // No State
// 2. Class Component              // Stateful component
        // 2. State 

// Props
// is used to pass data from parent to child component -> Functional & class
