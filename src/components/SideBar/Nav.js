import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';


class Nav extends Component {

  state = {};

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={this.isPathActive('/') ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-home"></i>
            <p>Home</p>
          </Link>
        </li>
        <li className={this.isPathActive('/gerenciar-etapas') ? 'active' : null}>
          <Link to="/gerenciar-etapas">
            <i className="pe-7s-cup"></i>
            <p>Etapas</p>
          </Link>
        </li>
        <li className={this.isPathActive('/filtrar-publico') ? 'active' : null}>
          <Link to="/filtrar-publico">
            <i className="pe-7s-users"></i>
            <p>Público</p>
          </Link>
        </li>
        <li className={this.isPathActive('/filtrar-avaliacoes') ? 'active' : null}>
          <Link to="/filtrar-avaliacoes">
            <i className="pe-7s-note2"></i>
            <p>Avaliações</p>
          </Link>
        </li>
        <li className={this.isPathActive('/cadastrar') || this.state.componentMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ componentMenuOpen: !this.state.componentMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-edit"></i>
            <p>
              Cadastrar
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.componentMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/cadastrar/processo') ? 'active' : null}>
                  <Link to="/cadastrar/buttons">Processo Seletivo</Link>
                </li>
                <li className={this.isPathActive('/cadastrar/avaliacao') ? 'active' : null}>
                  <Link to="/cadastrar/avaliacao">Avaliações</Link>
                </li>
                <li className={this.isPathActive('/cadastrar/notificacao') ? 'active' : null}>
                  <Link to="/cadastrar/notificacao">Notificações</Link>
                </li>
                <li className={this.isPathActive('/cadastrar/sala') ? 'active' : null}>
                  <Link to="/cadastrar/sala">Sala</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/notas') ? 'active' : null}>
          <Link to="/notas">
            <i className="pe-7s-graph3"></i>
            <p>Notas</p>
          </Link>
        </li>
        <li className={this.isPathActive('/socioemocional') ? 'active' : null}>
          <Link to="/socioemocional">
            <i className="pe-7s-chat"></i>
            <p>Avaliação Socioemocional</p>
          </Link>
        </li>
        <li className={this.isPathActive('/login') ? 'active' : null}>
          <Link to="/login">
            <i className="pe-7s-close"></i>
            <p>Sair</p>
          </Link>
        </li>
        {/* Excluir depois */}
        <li className={this.isPathActive('/components') || this.state.componentMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ componentMenuOpen: !this.state.componentMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-plugin"></i>
            <p>
              Components
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.componentMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/components/buttons') ? 'active' : null}>
                  <Link to="/components/buttons">Buttons</Link>
                </li>
                <li className={this.isPathActive('/components/grid') ? 'active' : null}>
                  <Link to="/components/grid">Grid System</Link>
                </li>
                <li className={this.isPathActive('/components/icons') ? 'active' : null}>
                  <Link to="/components/icons">Icons</Link>
                </li>
                <li className={this.isPathActive('/components/notifications') ? 'active' : null}>
                  <Link to="/components/notifications">Notifications</Link>
                </li>
                <li className={this.isPathActive('/components/panels') ? 'active' : null}>
                  <Link to="/components/panels">Panels</Link>
                </li>
                <li className={this.isPathActive('/components/sweetalert') ? 'active' : null}>
                  <Link to="/components/sweetalert">Sweet Alert</Link>
                </li>
                <li className={this.isPathActive('/components/typography') ? 'active' : null}>
                  <Link to="/components/typography">Typography</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/forms') || this.state.formMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ formMenuOpen: !this.state.formMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-note2"></i>
            <p>Forms <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.formMenuOpen}>
            <div>
              <ul className="nav">
              <li className={this.isPathActive('/forms/login-form') ? 'active' : null}>
                  <Link to="/forms/login-form">Login</Link>
                </li>
                <li className={this.isPathActive('/forms/regular-forms') ? 'active' : null}>
                  <Link to="/forms/regular-forms">Regular Forms</Link>
                </li>
                <li className={this.isPathActive('/forms/extended-forms') ? 'active' : null}>
                  <Link to="/forms/extended-forms">Extended Forms</Link>
                </li>
                <li className={this.isPathActive('/forms/validation-forms') ? 'active' : null}>
                  <Link to="/forms/validation-forms">Validation Forms</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/tables') || this.state.tableMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ tableMenuOpen: !this.state.tableMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-news-paper"></i>
            <p>Tables <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.tableMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/tables/regular-tables') ? 'active' : null}>
                  <Link to="/tables/regular-tables">Regular Table</Link>
                </li>
                <li className={this.isPathActive('/tables/extended-tables') ? 'active' : null}>
                  <Link to="/tables/extended-tables">Extended Tables</Link>
                </li>
                <li className={this.isPathActive('/tables/fixed-data-table') ? 'active' : null}>
                  <Link to="/tables/react-bootstrap-table">React Bootstrap Table</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/maps') || this.state.mapMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ mapMenuOpen: !this.state.mapMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-map-marker"></i>
            <p>Map <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.mapMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/maps/google-map') ? 'active' : null}>
                  <Link to="/maps/google-map">Google Map</Link>
                </li>
                <li className={this.isPathActive('/maps/vector-map') ? 'active' : null}>
                  <Link to="/maps/vector-map">Vector Map</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/charts') ? 'active' : null}>
          <Link to="/charts">
            <i className="pe-7s-graph"></i>
            <p>Charts</p>
          </Link>
        </li>
        <li className={location.pathname === '/dashboard' ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-graph"></i>
            <p>Dashboard</p>
          </Link>
        </li>
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);
