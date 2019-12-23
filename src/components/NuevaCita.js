import React from 'react';
class NuevaCita extends React.Component {
  state = {}
  render() {
    return (

      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Rellena el formulario para una nueva cita</h2>
          <form>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre mascota"
                  name="mascota" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño Mascota"
                  name="propietario" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Síntomas</label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Describe los síntomas"
                />
              </div>

            </div>
            <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar nueva cita" />

          </form>
        </div>
      </div >
    )
  }
}

export default NuevaCita;