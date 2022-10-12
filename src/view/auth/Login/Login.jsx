import { Link } from 'react-router-dom'
import { logo } from 'shared/assets/images'
import Button from 'shared/components/Form/Button/Button'

const Login = () => {
    return (
        <div className="wrapper">
            <div class="login">
                <div className="login__title">
                    <div className="logo">
                        <img src={logo} alt="" width={150} />
                    </div>
                    <h2>Welcome Back!</h2>
                    <p>Amet minim mallit non desert</p>
                </div>

                <div className="login__body">
                    <div class="login__body__form">
                        <input class="login__body__form-input" type="text" placeholder=" " />
                        <label class="login__body__form-label">Email</label>
                    </div>

                    <div class="login__body__form">
                        <input class="login__body__form-input" type="password" placeholder=" " />
                        <label class="login__body__form-label">Password</label>
                    </div>

                    <p className="forgot__password">
                        <Link to="register">Forgot Password</Link>
                    </p>
                    <Button size="block">
                        <Link to="/">Sign In</Link>
                    </Button>

                    <div class="divider">
                        <div class="or or--x">Or sign in with</div>
                    </div>

                    <Button size="block">Sign with google</Button>
                    <p className="signup">
                        Don't have an account?{' '}
                        <Link to="register" className="register">
                            Sign Up
                        </Link>
                    </p>
                </div>

                {/* <div class="login__body__form input-group">
        <span class="input-group-prepend">
          <div class="input-group-text">$</div>
        </span>
        <input class="login__body__form-input" type="text" placeholder=" " />
        <label class="login__body__form-label">Sale Price with $ symbol</label>
      </div> */}
            </div>
        </div>
    )
}

export default Login
