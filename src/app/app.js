import React, {Component} from 'react';

// Para GRID de la pantalla:
import {Grid, Row, Col} from 'react-bootstrap';

// Para routing y manejo de ventanas:
import {Router, Route, IndexRoute, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';

// CCS:
import './css/index.css';
import './css/react-bootstrap-table2.css';
import './css/react-input-calendar.css';

// SCSS:
import './scss/consolidado.scss';

// Imagenes:
import './img/tux.jpg';

// ************** 1 IMPORTAR COMPONENTES A CARGAR EN LA PAGINA ************ //
// Para el manejo del menu:
import {Menu} from './menu';
import {Homevi} from './components/home/homevi';
import {Homevd} from './components/home/homevd';
import Gridvi from './components/grid/gridvi';  //Cambia la forma del import debido a que se usa default
import Gridvd from './components/grid/gridvd';  //Cambia la forma del import debido a que se usa default
import {Formvi} from './components/form/formvi';
import {Formvd} from './components/form/formvd';
import {Form2vi} from './components/form2/form2vi';
import {Form2vd} from './components/form2/form2vd';
const Pie = () => <h2><div>{memoryHistory.location.pathname}</div></h2>;
// ************************************************ ******************* //


class Template extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    };

    render() {
     const TagNameVI = this.props.vi; //Ventana Izquierda
     const TagNameVD = this.props.vd; //Ventana Derecha


      return (<div className="marco externo">
        <Grid className="marco border">
          <Row className="menu border traeralfrente">
            <Col className="marco border traeralfrente" xs={12} md={12}>
              <Menu />
            </Col>
          </Row>
          <Row className="cuerpo border enviaralfondo">
            <Col className="marco border enviaralfondo" xs={3} md={3}>
               <TagNameVI />
            </Col>
            <Col className="marco border enviaralfondo" xs={9} md={9}>
               <TagNameVD />
            </Col>
          </Row>
          <Row className="pie border enviaralfondo">
            <Col className="marco border" xs={12} md={12}>
              <Pie/>
            </Col>
          </Row>
        </Grid>
      </div>);
    }
  }

  // Formas de registrar el historial de URL en react-router:
  // En el navegador:
  const historyURL = createBrowserHistory();
  // En un objeto de memoria:
  const memoryHistory = createMemoryHistory();

  class App extends Component {
    render() {

// ************ 2 MAPEO DE COMPONENTES  A VARIABLES ********************** //
     const propsHome = {vi: Homevi, vd: Homevd};
     const propsGrid = {vi: Gridvi, vd: Gridvd};
     const propsForm = {vi: Formvi, vd: Formvd};
     const propsForm2 = {vi: Form2vi, vd: Form2vd};
// ****************************************************************** //

      return (
      // <Router history={historyURL}>
      <Router history={memoryHistory}>
        <div>
          {/* *******************3 mapeo de variables a ruta********************** */}
          <Route exact path="/" render={() => ( <Template {...propsHome} />)} />
          <Route exact path="/grid" render={() => ( <Template {...propsGrid} />)} />
          <Route exact path="/form" render={() => ( <Template {...propsForm} />)} />
          <Route exact path="/form2" render={() => ( <Template {...propsForm2} />)} />
          {/* ******************AGREGAR NUEVA DIRECCION A MENU*********************** */}
        </div>
      </Router>);
    }
  }

  export {
    App
  };
