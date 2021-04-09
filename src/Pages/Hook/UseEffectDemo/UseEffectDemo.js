import React, { useEffect, useState } from 'react'

export default function UseEffectDemo(props) {

    const [number, setNumber] = useState(1);

    //Hook thay thế cho lifecycleComponentDidMount
    useEffect(() => { //tự động kích hoạt và chạy lần đầu tiên
        //callapi
        //sử carousel thư viện khác ...
        console.log('componentDidMount')
        return () => {
            //hàm này sẽ thực thi trước khi component mất khỏi giao diện
            console.log('componentWillUnmount')
        }
    }, []);

    useEffect(() => {
        console.log('Thay thế 2 lifecycle componentDidMount và componentDidUpdate')
        //hạn chế setState
    })
    useEffect(() => {
        console.log('ComponentDidUpdate bởi 1 state nào đó')
        //hạn chế setState
    }, [number])
    return (
        <div>
            useEffect
            <h1>{number}</h1>
            <button className="btn btn-success" onClick={() => {
                setNumber(number + 1)
            }}>+</button>
        </div>
    )
}
