import React from 'react';
import App from './App';
import Fahrenheit from './Fahrenheit';
import Celsius from './Celsius';



class Calc extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
             temperature: 0,
             scale: 'celsius'
        }

        this.updateCelsius = this.updateCelsius.bind(this);
        this.updateFahrenheit = this.updateFahrenheit.bind(this);
        this.temperatureInCelsius = this.temperatureInCelsius.bind(this);
        this.temperatureInFahrenheit = this.temperatureInFahrenheit.bind(this);

    }

    temperatureInCelsius(){

        if(this.state.scale === 'celsius')
            return
        return 
    }

    temperatureInFahrenheit(){
        if(this.state.scale === 'fahrenheit')
            return
        return    
    }

    updateCelsius(){}

    updateFahrenheit(){}


    render() {
        return (  

        
        <div id="master">

            <header id="topo">
                < App />
            </header >
    
            <section id="calc">

                <div id="cels">
                    < Celsius />
                </div>

                <div id="fah">
                    < Fahrenheit />
                </div>
            </section>

        </div>  
        );
    }




}

export default Calc;