import React from 'react';
import { connect } from 'react-redux';
import "../stylesheets/auth.css"
import { register } from '../actions/user';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.username && user.password && user.password.length >= 6) {
            dispatch(register(user));
        }
    }

    render() {
        const { user, submitted } = this.state;
        return (
          <div>
            <div id="bg"></div>
            <div className="container">
              <form className="login-form" onSubmit={this.handleSubmit}>
                <h1>Register</h1>
                <input placeholder="username" className="username" name="username" onChange={this.handleChange} />
                {submitted && !user.username &&
                  <div className="help-block">Username is required</div>
                }
                <input placeholder="password" type="password" className="password" name="password" onChange={this.handleChange} />
                {submitted && !user.password &&
                  <div className="help-block">Password is required</div>
                }
                {submitted && !(user.password.length >= 6) &&
                  <div className="help-block">Password must contain at least 6 symbols</div>
                }
                <button className="log-in">Register</button>
              </form>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  const { registering } = state.registration;
  return {
      registering
  };
}

export default connect(mapStateToProps)(RegisterPage);