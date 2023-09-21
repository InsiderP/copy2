import React from 'react'

function Form() {
  return (
    <div className="p-3 ms-5 me-5">

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
<form className='ms-5 me-5 mt-2'>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Name</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Adress</label>
</div>

<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Pin code</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">State</label>
</div>
  <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">GISTIN</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Liscense no.</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Pan no.</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Phone no.</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Mobile</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Email Address</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Website</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Optional(Rs)</label>
</div>
  <div className="mb-3">
  <label htmlFor="exampleInputPassword1" className="form-label">Debit</label>
  <select className="form-select" id="exampleInputPassword1">
    <option selected>Select </option>
    <option value="address1"> d 1</option>
    <option value="address2">d 2</option>
    <option value="address3"> d 3</option>
  </select>
</div>
  <button type="submit" class="btn btn-primary">License</button>
  <button type="submit" class="m-3 btn btn-primary">KYC</button>
</form>
    </div>
  )
}

export default Form