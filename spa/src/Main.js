const Main = () => {
    const DATA = [
        { id: 1, content: '우리나라 대한민국' },
        { id: 2, content: '오늘은 메로나 먹을 거임' },
        { id: 3, content: '내일은 자야징...' },
    ]
    return (
        <div className='Main'>
            {
                DATA.map(el => <li key={el.id}>{el.content}</li>)
            }
        </div>
    )
}
export default Main;