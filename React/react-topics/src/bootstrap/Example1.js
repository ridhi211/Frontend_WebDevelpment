import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function Example1() {
    return (
        <>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>

            <h1>Bootstrap example</h1>


            {/* sm, md, lg, xl */}

            <div className="container text-center">
                <div className="row ">
                    <div className="g-3 col-12 col-md-6 col-lg-4 brdr p-5">
                        Column
                    </div>
                    <div className="g-3 col-12 col-md-6 col-lg-2 brdr">
                        Column
                    </div>
                    <div className="g-5 col-12 col-md-6 col-lg-2 brdr">
                        Column
                    </div>
                    <div className='g-3 col-12 col-md-6 col-lg-2 brdr'>
                        4th col
                    </div>
                </div>
            </div>


            <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>



        </>
    )
}

export default Example1
