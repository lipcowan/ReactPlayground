import React, {Component} from 'react';

class Roulette extends Component {
   static defaultProps = {
       bulletInChamber:8
   }

    state = {
        chamber: null,
        spinningTheChamber: false
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    handleTrigger = () => {
        this.setState({spinningTheChamber: true})
        
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)
            
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false
            })
        }, 2000)        
    }

    renderOutput() {
        const{chamber, spinningTheChamber} = this.state
        const{bulletInChamber} = this.props 

        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger! ...'
        } else if (chamber === bulletInChamber) {
            return 'BANG!!!'
        }
        else return "you're safe!"
        
    }

    render(){
        return (
            <div className='rouletteGun'>
                <p>{this.renderOutput()}</p>  
                <button onClick={this.handleTrigger}>Pull the trigger!</button>
            </div>
        )
    }

}


export default Roulette;