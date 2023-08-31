import React from 'react';
import './scroll.css';

const Scroll = (props) => {
    return (
      <div style={{ overflowY: 'Scroll', border: 'none', height: '600px' }}>
          {props.children}
      </div>
    );
};

export default Scroll;
