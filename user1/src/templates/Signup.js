import react from 'react'
import {Col, Row, Form, Input, Button,} from 'antd'
import {Link} from "react-router-dom"
import { useDispatch} from "react-redux"
import { userRegister} from '../redux/apicalls/uAction'


function Signup() {
    const dispatch = useDispatch()


    function onFinish(values) {
        dispatch(userRegister(values))
        console.log(values)
    
    }

    return (
        
        <div className="login">
            <Row gutter={16}>
                <Col lg={16}>
                    <h1 className="lux">Luxurious Cars</h1>
                </Col>
                <Col lg={8}>
                    <Form layout='vertical' className="log" onFinish={onFinish}>
                        <h1>Signup</h1>
                        <hr />
                        <Form.Item name="Please enter a username" label="Username" rules={[{required : true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="password" label="Password" rules={[{required : true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name="confirm password" label=" Confirm Password" rules={[{required : true}]}>
                            <Input/>
                        </Form.Item>

                        <button>Signup</button>
                        <br></br>

                        <Link to='/login'>Click here to Login</Link>

                    </Form>
                </Col>
            </Row>
        </div>
        
    )
}

export default Signup