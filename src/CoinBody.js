export default function CoinBody({coins, headings, filter, deleteCoin, editCoin}) {
    let filterKey = Object.keys(filter)[0];
    return (
        <tbody>   
            {coins.filter(coin => (coin.[filterKey] === filter.[filterKey])).map(coin => (
                <tr key={coin.id}>
                    {headings.map(heading => (
                        <td align="center" key={heading.id}>{coin.[heading.id]}</td>
                    ))}
                    <td align="center">
                        <b onClick={() => editCoin(coin.id)} align="center">✎</b>
                        <b onClick={() => deleteCoin(coin.id)} align="center">✘</b>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}

//filterKeys.map(filterKey => (coin.[filterKey] === filter.[filterKey]))
//coins.filter(coin => (coin.[filterKey] === filter.[filterKey]))