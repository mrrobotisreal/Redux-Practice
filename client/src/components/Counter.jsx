import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 12px;
  transition: .2s;
  padding: 2%;
  &:hover {
    transform: scale(1.25);
    border: 2px ridge red;
    box-shadow: 4px 4px 7px red, 0 0 1em white, 0 0 0.2em white;
    color: red;
  }
`;

const Counter = () => {
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h1 style={{color: 'red', borderBottom: '4px ridge red', borderRadius: '12px'}}>Redux Counter</h1>
      <div style={{textAlign: 'center'}}>
        <h3>{counter}</h3>
      </div>
      <Button style={{borderRadius: '12px'}} onClick={toggleCounterHandler}>Toggle Counter</Button>
    </main>
  );
};

export default Counter;