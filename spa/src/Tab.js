import { useState } from "react";

const Tab = () => {

    const [num, setNum] = useState(0);
    const DATA = [
        { id: 1, content: '우리나라 대한민국' },
        { id: 2, content: '오늘은 메로나 먹을 거임' },
        { id: 3, content: '내일은 자야징...' },
    ];

    const TABMENU = [
        { id: 1, menu: 'news' },
        { id: 2, menu: 'notice' },
        { id: 3, menu: 'Q & A' },
    ]

    return (
        <>
            <ul className="tabMenu">
                {
                    TABMENU.map((el, idx) => <li key={el.id} onClick={() => setNum(idx)} className={num === idx ? 'on' : ''}>{el.menu}</li>)
                }
            </ul>
            <div className="tabContent">
                {DATA[num].content}
            </div>
        </>
    )
}

export default Tab; 