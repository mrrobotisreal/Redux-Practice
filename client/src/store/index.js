import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true};

const counterReducer = (state = initialState, action) => {
  // if (action.type === 'increment') {
  //   return {
  //     counter: state.counter + 1,
  //     showCounter: state.showCounter,
  //   };
  // }
  // if (action.type === 'increase') {
  //   return {
  //     counter: state.counter + action.amount,
  //     showCounter: state.showCounter,
  //   }
  // }
  // if (action.type === 'decrement') {
  //   return {
  //     counter: state.counter - 1,
  //     showCounter: state.showCounter,
  //   };
  // }
  // if (action.type === 'toggle') {
  //   return {
  //     counter: state.counter,
  //     showCounter: action.toggle,
  //   }
  // }
  switch (action.type) {
    case 'increment':
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
      break;
    case 'increase':
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
      break;
    case 'decrement':
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
      break;
    case 'toggle':
      console.log('showCounter is: ', state.showCounter);
      return {
        counter: state.counter,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }

  // return state;
};

const store = createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log('latestState -> ', latestState);
};

store.subscribe(counterSubscriber);

export default store;