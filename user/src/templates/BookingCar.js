import react, { useLayoutEffect, useEffect, useState } from 'react'
import Default from '../components/Default'
import { useSelector, useDispatch } from 'react-redux'
import { requireCars } from '../redux/apicalls/carsApi'
import { Col, Row, Divider, Button } from 'antd'
import { DatePicker } from 'antd'
import moment from 'moment'
import { bookCar } from '../redux/apicalls/bookAction'
import StripeCheckout from 'react-stripe-checkout'
const { RangePicker } = DatePicker


function BookingCar({ match }) {
    const { cars } = useSelector(state => state.carStore)
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.alretStore)
    const [car, setcar] = useState({});
    const [from, setfrom] = useState();
    const [searchKey, setSearchKey] = useState("")
    const [to, setto] = useState();
    const [priceperday, setpriceperday] = useState(0);
    const [totalAmount, settotalamount] = useState(0)


    useEffect(() => {
        if (cars.length == 0) {
            dispatch(requireCars())
        }
        if (cars.length > 0) {
            setcar(cars.find(o => o._id == match.params.carid))
        }
    }, [cars])

    useEffect(() => {
        settotalamount((priceperday * car.pricePerDay))


    }, [priceperday])


    function reserveTime(values) {
        setfrom(moment(values[0]).format('MMM DD yyyy'))
        setto(moment(values[1]).format('MMM DD yyyy'))
        setpriceperday(values[1].diff(values[0], 'days'))
    }

    function onToken(token) {
        const reqObj = {
            token,
            user: JSON.parse(localStorage.getItem('user'))._id,
            car: car._id,
            priceperday,
            totalAmount,
            reserveSlot: {
                from,
                to,
            },

        };
        dispatch(bookCar(reqObj))
    }


    return (
        <Default>
            <Row justify='center' className='d-flex align-items-center'>
                <Col lg={10} sm={24} xs={24}>
                    <img src={car.image} height='400px' />
                </Col>

                <Col lg={10} sm={24} xs={24}>
                    <Divider type='horizontal' dashed>Car Info</Divider>
                    <div>
                        <p>{car.carName}</p>
                        <p>{car.carBrand}</p>
                        <p>{car.pricePerDay}$ per day</p>
                    </div>
                    <Divider type='horizontal' dashed>Reserve Slot</Divider>
                    <RangePicker format="MMM DD yyyy" onChange={reserveTime}></RangePicker>

                    <div>
                        <p> Days : <b>{priceperday}</b> </p>
                        <p>Price per day : <b>{car.pricePerDay}</b></p>
                        <h3>Total Amount : {totalAmount}</h3>
                        <StripeCheckout token={onToken} amount={totalAmount * 100} currency='usd' stripeKey="pk_test_51JyfM7Fu8hGj4820a2kro5GMcN3NigvLkt0Eagwuqo9MOVEjUOyTvjuWQeviUXWSIwnR2sQKFc2ryBcryxhTD7QH00bzwdsJiG">
                            <button>Book Car</button>
                        </StripeCheckout>
                    </div>
                </Col>
            </Row>
        </Default>
    )
}

export default BookingCar