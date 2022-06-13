import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { counterActions } from '../store/counter';

const Button = styled.button`
  border-radius: 12px;
  transition: .2s;
  padding: 2%;
  margin-top: '4%';
  &:hover {
    transform: scale(1.25);
    border: 2px ridge red;
    box-shadow: 4px 4px 7px red, 0 0 1em white, 0 0 0.2em white;
    color: red;
  }
`;

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h1 style={{color: 'red', borderBottom: '4px ridge red', borderRadius: '12px'}}>Redux Counter</h1>
      <div style={{textAlign: 'center'}}>
        {show && <h3>{counter}</h3>}
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '6%'}}>
        <Button style={{marginLeft: '6%', marginRight: '2%'}}
          onClick={incrementHandler}
        >
          Increment
        </Button>
        <Button style={{marginLeft: '6%', marginRight: '2%'}}
          onClick={increaseHandler}
        >
          Increase By 5
        </Button>
        <Button style={{marginLeft: '6%', marginRight: '2%'}}
          onClick={decrementHandler}
        >
          Decrement
        </Button>
      </div>
      <Button style={{borderRadius: '12px'}} onClick={toggleCounterHandler}>Toggle Counter</Button>
    </main>
  );
};

export default Counter;