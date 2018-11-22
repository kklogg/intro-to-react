import React from 'react';

// DOM helper
const el = React.createElement;

const MyTitle = function (props) {
  return el(
    'div',
    null,
    el('h1', { style: { color: props.color } }, props.title),
  );
};

export default MyTitle;
