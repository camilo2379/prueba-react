import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';


class Nav extends Component {

  state = {};

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-graph"></i>
            <p>Dashboard</p>
          </Link>
        </li>
        <li className={this.isPathActive('/administracion') || this.state.componentMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ componentMenuOpen: !this.state.componentMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-plugin"></i>
            <p>
              Administración
            <b className="caret"></b>
            </p>
          </a>
          
        </li>
        <li className={this.isPathActive('/usuarios') || this.state.formMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ formMenuOpen: !this.state.formMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-note2"></i>
            <p>Usuarios <b className="caret"></b></p>
          </a>
        </li> 

        <li className={this.isPathActive('/catalogo') || this.state.componentMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ componentMenuOpen: !this.state.componentMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-plugin"></i>
            <p>
              Catalogo
            <b className="caret"></b>
            </p>
          </a>
          
        </li>


      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);