import React from 'react';
import { connect } from 'react-redux';
import { addCount, minusCount } from '../redux/index';

const Counter = ({count, addCount, minusCount}) => {

    return(
        <>
        <div className="counter">
            <h2>Counter</h2>
            <p>카운터 : {count}</p> 
            <button onClick={()=> addCount()}>+</button>
            <button onClick={()=> minusCount()}>-</button>
        </div>
        </>
    )
}
 

const mapStateToProps = ({counts}) => ({ count : counts.count });
const mapDispatchToProps = ({addCount, minusCount});


export default connect(mapStateToProps, mapDispatchToProps)(Counter);