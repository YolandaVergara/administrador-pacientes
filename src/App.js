import React from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';
import { Switch, Route } from 'react-router-dom';
class App extends React.Component {

  state = {
    citas: []
  }

  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    const citas = [...this.state.citas, datos];

    this.setState({
      citas
    });
  }

  eliminarCita = id => {
    const citasActuales = [...this.state.citas];
    const citas = citasActuales.filter(cita => cita.id !== id)
    this.setState({
      citas
    })
  }
  render() {
    return (
      <div className="container">
        <Header
          titulo='Control de ofertas de empresas' />

        <Switch>
          <Route exact path="/" component={NuevaCita} />
          <Route path="/child/:id" />
          <div className="row">
            <div className="col-md-10 mx-auto">
              <NuevaCita
                crearNuevaCita={this.crearNuevaCita}
              />
            </div>
            <div className="mt-5 col-md-10 mx-auto">
            </div>
          </div>
        </Switch >
        <ListaCitas
          citas={this.state.citas}
          eliminarCita={this.eliminarCita}
        />
      </div>
    );
  }
}
export default App;