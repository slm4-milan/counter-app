import React, {Component} from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('prevProps', prevProps)
        console.log('prevState', prevState)
        console.log('snapshot', snapshot)
        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call and get new data from the server
        }
    }

    componentWillUnmount() {
        console.log('Counter - Unmount')
    }

    render() {
        console.log('Counter - Rendered')

        return (

            <div className="row">
                <div className="col-2">
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}</span>
                </div>

                <div className="col-10">
                    <button onClick={() => this.props.onIncrement(this.props.counter)}
                            className="btn btn-sm btn-secondary">+
                    </button>
                    <button disabled={this.isDisabled()}
                            onClick={() => this.props.onDecrement(this.props.counter)}
                            className="btn btn-sm btn-secondary m-2">-
                    </button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)}
                            className="btn btn-sm bg-danger text-white">x
                    </button>
                </div>

            </div>);
    }

    getBadgeClasses() {
        let classes = 'badge m-2 bg-'
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    isDisabled() {
        const {value} = this.props.counter;
        return value <= 0;
    }
}

export default Counter;
