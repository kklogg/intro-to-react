import React from 'react';
import { render } from 'react-dom';

import MyTitle from './MyTitle';

// DOM helper
const el = React.createElement;

const MyFirstComponent = function () {
  return el(
    'div',
    null,
    el(MyTitle, { color: 'rebeccapurple', title: 'House of Cards' }),
    el(MyTitle, { color: 'peru', title: 'Orange is the New Black' }),
    el(MyTitle, { color: 'burlywood', title: 'Stranger Things' }),
  );
};

render(React.createElement(MyFirstComponent), document.getElementById('app'));
