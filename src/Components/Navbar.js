import React from 'react'

function Navbar() {
  return (
    <div className="shadow-sm mb-1 bg-body rounded">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Party</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/new">New</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/modify">Modify</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/delete">Delete</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/save">Save</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/exit">Exit</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar