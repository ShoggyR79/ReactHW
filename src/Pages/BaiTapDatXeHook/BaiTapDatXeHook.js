import React, { useState } from 'react'

export default function BaiTapDatXeHook(props) {


    const [src, setSrc] = useState("./img/car/products/red-car.jpg")

    return (
        <div className="container">
            <h1 className="display-4">Bài tập chọn xe</h1>
            <img src=".\black-car.jpg"/>
            <div className="row">
                <div className="col-6">
                    <img src={src} className="w-100" />

                </div>
                <div className="col-6">
                    <button className="btn" style={{
                        backgroundColor: 'red',
                        cursor: 'pointer'
                    }} onClick={() => {
                        setSrc("./img/car/products/red-car.jpg")
                    }

                    }>Red Color</button>

                    <button className="btn ml-3" style={{
                        backgroundColor: 'silver',
                        cursor: 'pointer'
                    }} onClick={() => {
                        setSrc("./img/car/products/silver-car.jpg")
                    }

                    }>Silver Color</button>

                    <button className="btn ml-3" style={{
                        backgroundColor: 'black',
                        cursor: 'pointer',
                        color: 'silver'
                    }} onClick={() => {
                        setSrc("./img/car/products/black-car.jpg")

                    }
                    }>Black Color</button>

                    <button className="btn ml-3" style={{
                        backgroundColor: 'lightgray',
                        cursor: 'pointer',
                    }} onClick={() => {
                        setSrc("./img/car/products/steel-car.jpg")

                    }
                    }>Steel Color</button>

                </div>

            </div>
        </div >
    )
}
