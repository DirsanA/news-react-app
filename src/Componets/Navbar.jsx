function Navbar({ setCategory }) {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-danger ">
        <div className="container-fluid">
          <a className="navbar-brand text-white " href="#">
            <span className="badge bg-light p-2 text-dark">NewsMag</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <div
                className="nav-link active text-white"
                onClick={() => setCategory("technology")}
              >
                Technology
              </div>
              <div
                className="nav-link active text-white"
                onClick={() => setCategory("business")}
              >
                Bussiness
              </div>
              <div
                className="nav-link active text-white"
                onClick={() => setCategory("health")}
              >
                Health
              </div>
              <div
                className="nav-link active text-white"
                onClick={() => setCategory("sports")}
              >
                Sports
              </div>
              <div
                className="nav-link active text-white"
                onClick={() => setCategory("entertainment")}
              >
                Enterteiment
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
