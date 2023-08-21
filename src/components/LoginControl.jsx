/* eslint-disable react/prop-types */
import React from 'react'

class LoginButton extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  }
  render() {
    const {onLoginClick} = this.props

    return <button onClick={onLoginClick}>Login</button>
  }
}

class LogoutButton extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  }
  render() {
    const {onLogoutClick} = this.props
    return <button onClick={onLogoutClick}>Logout</button>
  }
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    const { isLoggedIn } = this.state

    return (
      <div className="login-control">
        {isLoggedIn && <LogoutButton onLogoutClick={this.handleLogout} />}
        {!isLoggedIn && <LoginButton onLoginClick={this.handleLogin}/>}
      </div>
    )
  }
}

export default LoginControl