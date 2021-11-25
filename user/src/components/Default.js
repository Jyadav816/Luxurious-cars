import react from 'react'
import { Menu, Dropdown, Button, Space, Row, Col } from 'antd';


function Default(props) {
    function onClick() {
        localStorage.removeItem('user')
        window.location.href = '/login'
    }

    function h() {
        window.location.href = '/'
    }
    const u = JSON.parse(localStorage.getItem('user'))
    const menu = (
        <Menu>
            <Menu.Item onClick={h}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Home
            </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Booking
            </a>
            </Menu.Item>
            <Menu.Item onClick={onClick}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    Signout
            </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <div>
            <div className="header bs1">
                <Row gutter={16} justify='center'>
                    <Col lg={20} sm={24} xs={24}>
                        <div className="d-flex justify-content-between">

                            <h1>Luxurious Cars</h1>

                            <Dropdown overlay={menu} placement="bottomCenter">
                                <Button>{u.username}</Button>
                            </Dropdown>

                        </div>
                    </Col>
                </Row>
            </div>
            <div className="content">
                {props.children}

            </div>
        </div>
    )
}

export default Default