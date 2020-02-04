import React from 'react';
import uuid from 'uuid';


const stateInicial = {
  cita: {
    empresa: '',
    contacto: '',
    fecha: '',
    medio: '',
    mensaje: ''
  },
  error: false
}

class NuevaCita extends React.Component {

  state = { ...stateInicial }
  handleChange = ev => {
    this.setState({
      cita: {
        ...this.state.cita,
        [ev.target.name]: ev.target.value
      }
    })
  }

  handleSubmit = ev => {
    ev.preventDefault();

    const { empresa, contacto, fecha, medio, mensaje } = this.state.cita;

    if (empresa === '' || contacto === '' || fecha === '' || medio === '' || mensaje === '') {
      this.setState({
        error: true
      });
      return;
    }
    const nuevaCita = { ...this.state.cita };
    nuevaCita.id = uuid();
    this.props.crearNuevaCita(nuevaCita)
    this.setState({
      ...stateInicial
    })
  }
  render() {
    const { error } = this.state;
    return (

      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Rellena tu nueva solicitud de empleo</h2>
          {error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}
          <form onSubmit={this.handleSubmit} action="data.php" method="post">
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Empresa</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Empresa"
                  name="empresa"
                  onChange={this.handleChange}
                  value={this.state.cita.empresa} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Persona de contacto</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Persona de contacto"
                  name="contacto"
                  onChange={this.handleChange}
                  value={this.state.cita.contacto} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Medio de contacto</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Medio de contacto"
                  name="medio"
                  onChange={this.handleChange}
                  value={this.state.cita.medio} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  value={this.state.cita.fecha} />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Observaciones</label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="observaciones"
                  placeholder="¿Qué mensaje les mandaste para contactar?"
                  onChange={this.handleChange}
                  value={this.state.cita.observaciones}>
                </textarea>
                
              </div>
              
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Mensaje enviado</label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="mensaje"
                  placeholder="Anotaciones de interés"
                  onChange={this.handleChange}
                  value={this.state.cita.anotaciones}>
                </textarea>
                
              </div>
              
            </div>
            
            <input type="submit" className="py-3 mt-2 btn btn-dark btn-block" value="Agregar nueva solicitud" />
          </form>
        </div>
      </div >
    )
  }
}
export default NuevaCita;