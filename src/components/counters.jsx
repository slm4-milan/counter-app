import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props;
        console.log('Counters - Rendered')
        return (
            <div>
                <button onClick={onReset}
                        className="btn bg-primary btn-sm text-white">Reset
                </button>
                {counters
                    .map(counter =>
                        <Counter
                            key={counter.id}
                            onDelete={onDelete}
                            onIncrement={onIncrement}
                            counter={counter}
                            onDecrement={onDecrement}

                        />)}
            </div>
        );
    }
}


export default Counters;
