import React from 'react';



class Fahrenheit extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
             fahrenheit: 32
        }

    }

    handleChange(event) {
        this.props.update({fahrenheit: event.target.fahrenheit });
     }

    render() {
        return ( 
        
        
        <div id="fah">
            <label>Fahrenheit:</label>
            <input type="text" value={this.props.fahrenheit} onChange={this.handleChange.bind(this)}></input>


        </div>



        );
    }




}

export default Fahrenheit;