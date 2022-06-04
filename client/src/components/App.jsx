import { useState } from 'react';

import Counter from './Counter.jsx';

const App = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20%'}}>
      <Counter />
    </div>
  );
};

export default App;