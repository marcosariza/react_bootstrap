import React, {Component} from 'react';

// Para GRID de la pantalla:
import {Grid, Row, Col} from 'react-bootstrap';

// Para routing y manejo de ventanas:
import {Router, Route, IndexRoute, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'





// ************** 1 IMPORTAR OBJETOS A CARGAR EN LA PAGINA ************ //
// Para el manejo del menu:
import {Menu} from './menu';
import {Homevi} from './components/home/homevi';
import {Homevd} from './components/home/homevd';
import {Gridvi} from './components/grid/gridvi';
import {Gridvd} from './components/grid/gridvd';
const Pie = () => <h2>Pie</h2>;
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
          <Row className="menu border">
            <Col className="marco border" xs={12} md={12}>
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

// ************ 2 MAPEO DE OBJETOS A VARIABLES ********************** //
     const propsHome = {vi: Homevi, vd: Homevd};
     const propsGrid = {vi: Gridvi, vd: Gridvd};

// ****************************************************************** //

      return (
      <Router history={history}>
        <div>
          <Route exact path="/" render={() => ( <Template {...propsHome} />)} />
          <Route exact path="/grid" render={() => ( <Template {...propsGrid} />)} />
        </div>
      </Router>);
    }
  }

  export {
    App
  };
