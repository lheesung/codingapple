import { Table } from "react-bootstrap";

const Cart = () => {
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>아스날 우승</td>
                        <td>1</td>
                        <td>바모스!!!</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;

// Redux가 뭐임? -> 얘는 props 안쓰고 state 공유할 수 있게 해줌.