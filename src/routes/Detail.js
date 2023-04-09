import { useParams } from "react-router-dom"
import styled from "styled-components";

let YellowBtn = styled.button`
    background: ${props => props.bg};
    color: black;
    padding: 10px;
`
/*
styled-components 왜 씀?
1. Js 파일로 스타일 관리 ㄱㄴ
2. 하나의 파일에 종속되기 때문에 다른 파일에 관여 X
3. 페이지 로딩시간 단축
   ㄴ <style></style> 태그를 넣어줘서 css 불러올 필요가 없음.
*/

/*
component 의 Lifecycle
1. Mounting
 ㄴ 1. constructor(): 컴포넌트가 생성될 때 호출됨. 초기 상태 설정 및 메서드 바인딩.
 ㄴ 2. getDerivedStateFromProps(): 컴포넌트가 생성되거나 업데이트 될 때 호출됨. 또한 props로부터 상태를 동기화함.
 ㄴ 3. render(): 컴포넌트 내의 UI 를 랜더링.
 ㄴ 4. componentDidMount(): 컴포넌트가 마운트 된 이후 호출됨. 외부 라이브러리와 상요작용하거나, 네트워크로 요청을 보냄.

2. Updating
 ㄴ 1. getDerivedStateFromProps(): 컴포넌트가 생성되거나 업데이트될 때 호출됨. props로부터 상태를 동기화함.
 ㄴ 2. shouldComponentUpdate(): 컴포넌트가 업데이트 될 때 호출됨.
 ㄴ 3. render(): 컴포넌트의 UI를 렌더링함.
 ㄴ 4. getSnapshotBeforeUpdate(): 컴포넌트가 업데이트 되기 전에 호출됨. DOM 상태를 저장하거나 스크롤 위치를 저장하는 작업을 함.
 ㄴ 5. componentDidUpdate(): 컴포넌트가 업데이트 된 후 호출됨. 이전 props 혹은 state 에 접근 가능.

3. Unmounting
 ㄴ 1. componentWillUnmount(): 컴포넌트가 DOM 에서 제거되기 전 호출됨. 타이머 혹은 이벤트 리스너를 제거하거나 메모리 누수를 방지하는 등의 작업을 수행함.
*/



export default function Detail(props) {
    let { id } = useParams();
    // console.log(id);
    let serched = props.shoes.find(function (x) {
        return x.id == id
    });
    return (
        <div className="container">     
            <YellowBtn bg={"blue"}></YellowBtn>
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