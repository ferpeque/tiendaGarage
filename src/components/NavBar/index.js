import './style.css';

export const NavBar = () => {
return (
<nav className="navbar navbar-expand-lg navbar-light container ">
  <div className="container-fluid">
    <img src="/images/logo1.svg" className="logo" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse barra" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >Carrito</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}