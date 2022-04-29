import React from 'react';

function Navigation(props) {
    return(<button>
  <span></span>
  <span></span>
  <span></span>
  <span></span>  <a href= {props.href} > {props.text} </a>
</button>);
}


export default Navigation;