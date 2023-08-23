import React from 'react';

const Features = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Característica 1</h3>
                <p className="card-text">Descripción de la característica 1.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Característica 2</h3>
                <p className="card-text">Descripción de la característica 2.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Característica 3</h3>
                <p className="card-text">Descripción de la característica 3.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
