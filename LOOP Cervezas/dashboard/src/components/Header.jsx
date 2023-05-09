import { Link } from 'react-router-dom'

const Header = () => {
	return (
	/* navbar navbar-expand  */
		<nav className="p-2 mb-4 shadow" style={{background:'black'}}>

			{/* <button id="sidebarToggleTop" className="btn btn-warning d-md-none rounded-circle mr-3">
				<i className="fa fa-bars"></i>
			</button> */}

			<ul className="d-flex mt-2 justify-content-around align-items-center flex-wrap" style={{listStyle:'none'}}>
				<Link to="/">
					<div>
						<img className="pt-2" width='100px' src="/images/loop.jpg" alt="LOOP"/>
						<span className='text-white ml-4'>| DASHBOARD</span>
					</div>
				</Link>

			<div className='d-flex align-items-center mt-3'>

			<li>
				<Link
					className="p-2 m-2 border rounded "
					style={{color:'white'}}
					to="/"
				>
					<i className="fas fa-fw fa-home mr-2"></i>
					<span>Inicio</span>
				</Link>
			</li>

			<li>
				<Link
					className="p-2 m-2 border rounded"
					style={{color:'white'}}
					to="/products"
				>
					<i className="fas fa-fw fa-box mr-2"></i>
					<span>Productos</span>
				</Link>
			</li>

			<li>
				<Link className="p-2 m-2 border rounded" style={{color:'white'}} to="/users">
					<i className="fas fa-fw fa-user mr-2"></i>
					<span>Usuarios</span>
				</Link>
			</li>
			</div>

		</ul>

		</nav>
	)
}

export default Header