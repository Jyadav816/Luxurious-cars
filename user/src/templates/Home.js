import react, { useLayoutEffect, useEffect, useState } from 'react'
import Default from '../components/Default'
import { useSelector, useDispatch} from 'react-redux'
import { requireCars} from '../redux/apicalls/carsApi'
import { Link} from 'react-router-dom'
import { Col, Row} from 'antd'
import Loader from '../components/Loader'
function Home() {
    const {cars} = useSelector(state=>state.carStore)
    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alretStore)
    const [searchKey, setSearchKey] = useState("")

    useEffect(() => {
        dispatch(requireCars())
    }, [])

    function inputHandler(value) {
        setSearchKey(value)
        console.log(searchKey)
    }
    
    return (
        <Default>
            {loading == true && (<Loader/>)}
            <input value={searchKey} onChange={(event)=> inputHandler(event.target.value)} type="text"/>
            <Row gutter={10}>
                {cars.filter(obj=>obj.carName.toLowerCase().includes(searchKey.toLowerCase())).map(car=>{
                    return <Col lg={10} sm={24} xs={24}>
                        <div className="object bs1">
                            <img src={car.image} className="carpic"/>
                            <div className="content">
                                <div>
                                    <p>{car.carName}</p>
                                    <p>{car.carBrand}</p>
                                    <p>{car.pricePerDay}$ per day</p>
                                </div>
                                <div>
                                    <button className="btn"><Link to={`/booking/${car._id}`}>Reserve</Link></button>
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