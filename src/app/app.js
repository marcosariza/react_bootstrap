import React, {Component} from 'react';

// Para GRID de la pantalla:
import {Grid, Row, Col} from 'react-bootstrap';

// Para routing y manejo de ventanas:
import {Router, Route, IndexRoute, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'





// ************** 1 IMPORTAR COMPONENTES A CARGAR EN LA PAGINA ************ //
// Para el manejo del menu:
import {Menu} from './menu';
import {Homevi} from './components/home/homevi';
import {Homevd} from './components/home/homevd';
import {Gridvi} from './components/grid/gridvi';
import {Gridvd} from './components/grid/gridvd';
import {Formvi} from './components/form/formvi';
import {Formvd} from './components/form/formvd';
import {Form2vi} from './components/form2/form2vi';
import {Form2vd} from './components/form2/form2vd';
const Pie = () => <h2>Pie2</h2>;
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

  const history = createBrowserHistory();
  class App extends Component {
    render() {

// ************ 2 MAPEO DE COMPONENTES  A VARIABLES ********************** //
     const propsHome = {vi: Homevi, vd: Homevd};
     const propsGrid = {vi: Gridvi, vd: Gridvd};
     const propsForm = {vi: Formvi, vd: Formvd};
     const propsForm2 = {vi: Form2vi, vd: Form2vd};
// ****************************************************************** //

      return (
      <Router history={history}>
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
