import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveEmail as saveEmailAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  validateLogin() {
    const { email, password } = this.state;
    const isEmail = /\S+@\S+\.\S+/;
    const minimumPasswordSize = 6;
    return !isEmail.test(email) || (password.length < minimumPasswordSize);
  }

  render() {
    const { email, password } = this.state;
    const { saveEmail } = this.props;
    return (
      <div>
        <form>
          E-mail:
          <input
            type="text"
            value={ email }
            name="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
          Senha:
          <input
            type="password"
            value={ password }
            name="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
          <Link
            to="/carteira"
          >
            <button
              type="button"
              disabled={ this.validateLogin() }
              onClick={ () => saveEmail(email) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(saveEmailAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
