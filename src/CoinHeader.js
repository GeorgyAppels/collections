export default function CoinHeader({headings}) {
    return (
        <thead>
            <tr>
                {headings.map((item, index) => <th key={index}>{item.title}</th>)}
            </tr>
        </thead>
    )
}