import { useParams } from "react-router-dom"
import styled from "styled-components";

let YellowBtn = styled.button`
    background: yellow;
    color: black;
    padding: 10px;
`

let Box = styled.div`
    background-color: #e1e1e1;
    padding: 20px;
`
/*
styled-components 왜 씀?
1. Js 파일로 스타일 관리 ㄱㄴ
2. 하나의 파일에 종속되기 때문에 다른 파일에 관여 X
3. 페이지 로딩시간 단축
   ㄴ <style></style> 태그를 넣어줘서 css 불러올 필요가 없음.
*/

export default function Detail(props) {
    let {id} = useParams();
    // console.log(id);
    let serched = props.shoes.find(function(x){
        return x.id == id
      });
    return (
        <div className="container">
            <Box>
                <YellowBtn></YellowBtn>
            </Box>
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