import React from 'react'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
		<div className="container-fluid">
			<a className="navbar-brand active" href="#">Keeb Hoard</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link active" href="#">Log In</a>
					</li>
					<li className="nav-item">
						<a className="nav-link active" href="#">Register</a>
					</li>
					<li className="nav-item">
						<a className="nav-link active" href="#">Keyboards</a>
					</li>
					<li className="nav-item">
						<a className="nav-link active" href="#"></a>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Components
						</a>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</li>
					<li className="nav-item">
						<a className="nav-link active" href="#">Log Out</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
  );
}

export default Header;