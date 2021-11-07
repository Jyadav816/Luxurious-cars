import react from 'react'
import { Menu, Dropdown, Button, Space } from 'antd';


function Default(props) {
    function onClick() {
        localStorage.removeItem('user')
        window.location.href='/login'
    }
    const u = JSON.parse(localStorage.getItem('user'))
    const menu = (
        <Menu>
            <Menu.Item>
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
                <div className="d-flex justify-content-between">

                    <h1>Luxurious Cars</h1>

                    <Dropdown overlay={menu} placement="bottomCenter">
                        <Button>{u.username}</Button>
                    </Dropdown>

                </div>
            </div>
            <div className="content">
                {props.children}

            </div>
        </div>
    )
}

export default Default