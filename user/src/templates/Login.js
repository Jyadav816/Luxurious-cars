import react from 'react'
import {Col, Row, Form, Input, Button,} from 'antd'
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux"
import { uLogin} from '../redux/apicalls/uAction'


function Login() {
    const dispatch = useDispatch()
    function onFinish(values) {
        dispatch(uLogin(values))
        console.log(values)
    
    }

    return (
        
        <div className="login">
            <Row gutter={16} justify="center">
                <Col lg={8}>
                <h1 className="lux">Luxurious Cars</h1>
                    <Form layout='vertical' className="log" onFinish={onFinish}>
                        <h1>Login</h1>
                        <hr />
                        <Form.Item name="username" label="Username" rules={[{required : true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="password" label="Password" rules={[{required : true}]}>
                            <Input/>
                        </Form.Item>

                        <button>Login</button>

                        <br></br>

                        <Link to='/signup'>Don't have an account Signup here</Link>

                    </Form>
                </Col>
            </Row>
        </div>
        
    )
}

export default Login