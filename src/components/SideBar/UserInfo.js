import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';
import { connect } from 'react-redux';
import cx from 'classnames';

// Se realiza el módulo del perfil del usuario en el SideBar
class UserInfo extends Component {

  state = {
    isShowingUserMenu: false
  };

  render() {
    let { user } = this.props;
    let { isShowingUserMenu } = this.state;
    return (
      <div className="user-wrapper">
        <div className="user">
          <img src={user.image} alt={user.name} className="photo" />
          <div className="userinfo">
            <div className="username">
              {user.name}
            </div>
            <div className="title">Admin</div>
          </div>
          <span
            onClick={() => this.setState({ isShowingUserMenu: !this.state.isShowingUserMenu })}
            className={cx("pe-7s-angle-down collapse-arrow", {
              active: isShowingUserMenu
            })}></span>
        </div>
        <Collapse in={isShowingUserMenu}>
          <ul className="nav user-nav">
            <li><a href="#">Mi Perfil</a></li>
            <li><a href="#">Editar Perfil</a></li>
            <li><a href="#">Ajustes</a></li>
          </ul>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.Auth.user
});

export default connect(mapStateToProps)(UserInfo);