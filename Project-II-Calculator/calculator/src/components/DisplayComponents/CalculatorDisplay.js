import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component {
    constructor (props) {
        super(props)
        this.state={}
    }
    render () {
        const string = this.props.data.join('');
        return ( <div className="display">
                   <p>{string}</p>
                 </div>
        );
    }
}


export default CalculatorDisplay;