import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import GetUserId from './containers/GetUserId'

$(function() {
  ReactDOM.render(
    <GetUserId />,
    document.getElementById('app')
  );
});
