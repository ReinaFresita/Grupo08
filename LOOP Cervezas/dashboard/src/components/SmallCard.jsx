const SmallCard = ({title, value, color, icon}) => {
    return (
        <div className="col-md-4 mb-4">
            <div className={`card border-${color} shadow h-100 `}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        {/* <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>{title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
                        </div> */}
                        <div className="col-auto">
                            <i className={`fas fa-${icon} fa-2x text-gray-400`}></i>
                        </div>

                        <div className="col d-flex justify-content-around align-items-center w-100">
                            <div className={` font-weight-bold text-${color} text-uppercase`}>{title}</div>
                            <div className="h3 mb-0 font-weight-bold text-gray-800">
                                {value}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallCard