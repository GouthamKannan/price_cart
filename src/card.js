// Function to create cards for the given data
// (Title, price, features available and features not available)
function Card(props) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            {/* Card title */}
            <h5 className="card-title text-muted text-uppercase text-center">
              {props.values.title}
            </h5>

            {/* Price */}
            <h6 className="card-price text-center">
              ${props.values.price}
              <span className="period">/month</span>
            </h6>
            <hr></hr>

            {/* Features that are available */}
            <ul className="fa-ul">
              {props.values.available.map((value) => {
                return (
                  <li>
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    {value}
                  </li>
                );
              })}

              {/* Features that are not available */}
              {props.values.notAvailable.map((value) => {
                return (
                  <li className="text-muted">
                    <span className="fa-li">
                      <i className="fas fa-times"></i>
                    </span>
                    {value}
                  </li>
                );
              })}
            </ul>

            {/* Button */}
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">
                Select
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
