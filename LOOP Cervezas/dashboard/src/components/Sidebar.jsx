import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <ul className="navbar-nav sidebar sidebar-dark accordion" style={{background:'black'}} id="accordionSidebar">
			<Link
				className="d-flex align-items-center justify-content-center"
				to="/"
			>
				<div className="p-4 m-auto">
					<img className="w-75" src="/images/loop.jpg" alt="LOOP"/>
				</div>
			</Link>

			<hr className="sidebar-divider my-0"/>

			<li className="nav-item active">
				<Link
					className="nav-link"
					to="/"
				>
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard</span>
				</Link>
			</li>

			<hr className="sidebar-divider"/>

			<div className="sidebar-heading">Actions</div>

			<li className="nav-item">
				<Link
					className="nav-link collapsed"
					to="/products"
				>
					<i className="fas fa-fw fa-box"></i>
					<span>Productos</span>
				</Link>
			</li>

			{/* <li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tag"></i>
					<span>Charts</span></a>
			</li> */}

			<li className="nav-item">
				<Link className="nav-link" to="/users">
					<i className="fas fa-fw fa-user"></i>
					<span>Usuarios</span>
				</Link>
			</li>

			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
  )
}

export default Sidebar