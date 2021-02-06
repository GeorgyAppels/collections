import CoinHeader from './CoinHeader';
import CoinBody from './CoinBody';
import CoinInputForm from './CoinInputForm';
import {useState} from 'react';

export default function CoinTable({headings, items}) {
    const [coins, updateCoins] = useState(items);
    const [filter, updateFilter] = useState({});
    const addCoin = coin => {
        let newCoin = coin;
        newCoin.id = coins.length + 1;
        updateCoins(prevCoins => ([...prevCoins, newCoin]));
    }
    const deleteCoin = coinID => {
        updateCoins(coins.filter((coin) => (coin.id !== coinID)));
    }
    const editCoin = coinID => {
        updateFilter({id: coinID});
    }
    return (
        <div>
            <CoinInputForm headings={headings} addCoin={addCoin.bind()}/>
            <table>
                <CoinHeader headings={headings}/>
                <CoinBody headings={headings} coins={coins} filter={filter}
                deleteCoin={deleteCoin.bind()} editCoin={editCoin.bind()}/>
            </table>
        </div>
    )
}

/*
CoinTable.defaultProps = {
    headings: heads
}

[
        {title: 'Страна', id: 'country', width: 50},
        {title: 'Период', id: 'period', width: 50 },
        {title: 'Валюта', id: 'currency', width: 50},
        {title: 'Номинал', id: 'value', width: 50},
        {title: 'Год', id: 'year', width: 50},
        {title: 'Лист в альбоме', id: 'listNumber', width: 50},
        {title: 'Дополнительно', id: 'additional', width: 50},
        {title: 'Цена, руб.', id: 'valueRUR', width: 50},
        {title: 'Источник', id: 'source', width: 50},
        {title: 'Действия', id: 'actions'}
     ]
*/