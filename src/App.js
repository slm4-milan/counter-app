import './App.css';
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import React, {Component} from "react";

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    }

    constructor() {
        super();
        console.log('App - Constructor') //
    }

    componentDidMount() {
        console.log('App - Mounted')
    }

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters})
    }
    handleIncrement = counter => {
        const counters = [...this.state.counters]; // kloniranje counter objekta iz state-a
        const index = counters.indexOf(counter) // index counter objekta u counters nizu
        counters[index] = {...counter}; // kloniranje counter objekta koji je prosledjen
        counters[index].value++; // dodavanje vrednosti u kloniran counter objekat
        this.setState({counters}) // setovanje statea nakon dodavanja vrednosti
        console.log(counters[index]);
    }

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters})
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c
        })
        this.setState({counters})
    }

    render() {
        console.log('App - Rendered')
        return (
            <React.Fragment>
                <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        onDecrement={this.handleDecrement}
                    />
                </main>
            </React.Fragment>

        );
    }
}

export default App;
