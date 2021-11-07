import react, { useLayoutEffect, useEffect } from 'react'
import Default from '../components/Default'
import { useSelector, useDispatch} from 'react-redux'
import { requireCars} from '../redux/apicalls/carsApi'
import { Col, Row} from 'antd'
import Loader from '../components/Loader'
function Home() {
    const {cars} = useSelector(state=>state.carStore)
    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alretStore)


    useEffect(() => {
        dispatch(requireCars())
    }, [])
    
    return (
        <Default>
            {loading == true && (<Loader/>)}
            <Row gutter={10}>
                {cars.map(car=>{
                    return <Col lg={5} sm={24} xs={24}>
                        <div className="object bs1">
                            <img src={car.image} className="carpic"/>
                            <div className="content">
                                <div>
                                    <p>{car.carBrand}</p>
                                    <p>{car.carName}</p>
                                    <p>{car.pricePerDay}$ per day</p>
                                </div>
                                <div>
                                    <button className="btn">Reserve</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                })}
            </Row>
        </Default>
    )
}

export default Home