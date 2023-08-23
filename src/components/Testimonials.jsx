import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center">Testimonios</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">"¡Increíble servicio! Estoy muy satisfecho."</p>
                <p className="card-title">- Cliente Satisfecho 1</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">"¡Nunca he visto algo tan genial! 5 estrellas."</p>
                <p className="card-title">- Cliente Feliz 2</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">"¡La experiencia fue asombrosa! Altamente recomendado."</p>
                <p className="card-title">- Cliente Contento 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
