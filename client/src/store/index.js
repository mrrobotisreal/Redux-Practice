import { createStore } from 'redux';

const counterReducer = (state = {counter: 0}, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
    }
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log('latestState -> ', latestState);
};

store.subscribe(counterSubscriber);

export default store;