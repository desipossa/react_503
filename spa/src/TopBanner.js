import { useRef, useState } from 'react';

const TopBanner = () => {
    const [toggleClass, setToggleClass] = useState(false);
    const tg = useRef();
    const tClass = () => {
        tg.current.classList.toggle('on')
    }
    return (
        <div className='TopBanner'>
            <div className={'container ' + (toggleClass ? 'on' : '')}>
                <h2>Lorem ipsum dolor sit.</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae cumque laborum perspiciatis dolorem ipsa doloribus.</p>
                {console.log(toggleClass)}

            </div>
            <div ref={tg} className='tg'>2. Lorem ipsum dolor sit.</div>
            <i className='xi-bars' onClick={tClass}></i>
            <i className="xi-close" onClick={() => setToggleClass(!toggleClass)}></i>
        </div>

    )
}
export default TopBanner;