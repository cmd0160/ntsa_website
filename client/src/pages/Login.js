import React from 'react'

const Login = () => {
  return (
    <section id="login-form">
    <div className="container">

        <div className="exit-row">
            <i className="fa-solid fa-xmark"></i>
        </div>

        <div className="center">
            <h3>North Texas Suzuki Association</h3>
        </div>

        <form>
            <input className="form-input" type="text" placeholder="EMAIL ADDRESS" name="email" id="login-email" />
            <input className="form-input" type="password" placeholder="PASSWORD" name="password" id="login-password" />
            <div className="row justify-content-center">

                <div className="sign-up-button center">
                    <button className=" btn btn-primary" type="submit">
                        LOGIN
                    </button>
                </div>
            </div>
        </form>

        <div className="not-a-member center">
            <p>Not a member yet? Sign up here!</p>
        </div>
        <div className="sign-up-button center">
            <button className=" btn btn-primary" type="submit">
                SIGNUP
            </button>
        </div>
    </div>
</section>
  )
}

export default Login