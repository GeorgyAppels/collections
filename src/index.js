import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CoinTable from './CoinTable';

function readJSON(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false);
    xmlHttp.send();
    try {
        return JSON.parse(xmlHttp.responseText);
    } catch(err) {
        console.log(`Возникла ошибка: ${err}`);
    }
}

const wutt = 'coins';
const itemFile = 'json/' + wutt + '/items.txt';
const headingsFile = 'json/' + wutt + '/headings.txt';
let items = readJSON(itemFile);
let headings = readJSON(headingsFile);

ReactDOM.render(
  <>
    <CoinTable headings={headings} items={items}/>
  </>,
  document.getElementById('root')
);
