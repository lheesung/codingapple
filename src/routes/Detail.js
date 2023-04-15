import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";

export default function Detail(props) {
    useEffect(() => {
        console.log("useEffect~")
    })
    let { id } = useParams();
    // console.log(id);
    let serched = props.shoes.find(x => x.id === id);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{serched.title}</h4>
                    <p>{serched.content}</p>
                    <p>{serched.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}