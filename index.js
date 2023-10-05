ReactDOM.render(
  <React.Fragment>
    <NavBar />
    <Content />
  </React.Fragment>,
  document.getElementById("root")
);

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo-500x281.png"
            alt="AirBNB Logo"
            height="60px"
            width="auto"
          />
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

function Content() {
  return (
    <section id="content">
      <div className="container">
        <div className="row">
          <Package
            img="katie.png"
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={136}
          />

          <Package
            img="wedding.png"
            rating="5.0"
            reviewCount={30}
            country="USA"
            title="Learn Wedding Photography"
            price={125}
          />

          <Package
            img="bike.png"
            rating="4.8"
            reviewCount={2}
            country="USA"
            title="Group Mountain Biking"
            price={50}
          />
        </div>
      </div>
    </section>
  );
}

function Package(props) {
  console.log(props);
  console.log(props.rating);
  return (
    <div className="col-sm-3">
      <div className="card">
        {/* console.log("You name is " + name + " your last name is  " + last_name);
        console.log(`You name is ${name} your last name is ${last_name}`); */}
        
        <img src={`./images/${props.img}`} className="card--image" />
        <div className="card--stats py-2">
          <img src="./images/Star 1.png" className="card--star me-1" />
          <span>{props.rating}</span>
          <span className="gray me-1">({props.reviewCount}) • </span>
          <span className="gray">{props.country}</span>
        </div>
        <p className="mb-1">{props.title}</p>
        <p>
          <span className="bold">From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
}
