import { useState } from "react"

const HeartCount = () => {
    const [num, setNum] = useState(0)
    return (
        <>
            <i className="xi-heart" onClick={() => setNum(num + 1)}></i> {num}
        </>
    )
}

export default HeartCount;