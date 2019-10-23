import React from 'react';



class Celsius extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            celsius: 0
        }

    }

    handleChange(event) {
        this.props.update({celsius: event.target.celsius });
     }

    render() {
        return ( 
        
        
        <div id="cels">
            <label>Celsius:</label>
            <input type="text" value={this.props.celsius} onChange={this.handleChange.bind(this)}></input>


        </div>



        );
    }




}

export default Celsius;