import react from 'react'

function Default(props) {
    return (
        <div>
            <div className="header bs1">
                <div className="d-flex justify-content-between">

                    <h1>Luxurious Cars</h1>

                    <button>user</button>

                </div>
            </div>
            <div className="content">
                {props.children}

            </div>
        </div>
    )
}

export default Default