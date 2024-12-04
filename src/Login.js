import React, { Fragment, useEffect, useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  const userRef = useRef()
  const errRef = useRef()
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)
  useEffect(() => {
    userRef.current.focus()
  }, [])
  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get('https://fakestoreapi.com/users',
        JSON.stringify({ user, pwd }),
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );
      setUser('')
      setPwd('')
      setSuccess(true)
    } catch (err) {
      if (!err?.res) {
        setErrMsg('No Server Response')
      } else if(err.res?.status === 400) {
        setErrMsg('Missing Username or Password')
      } else if (err.res?.status === 401) {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg('Login Failed')
      }
      errRef.current.focus()
    }

  }
  return (
    <Fragment>
      <div className='login-page'>
        <div className='card-log'>
          <div className='container'>
            {success ? (
              <section className='login-success'>
                <h1>You are Logged in!</h1>
                <p><Link to='/home'>Go to Home</Link></p>
              </section>
            ) : (
              <div>
                <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>{errMsg}</p>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                  <input
                    type='email'
                    placeholder='Your Email'
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                  />
                  <input
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                  />
                  <div className='checkk'>
                    <div className='remm'>
                      <input id='rem' type='checkbox' />
                      <label htmlFor='rem'>Remember me</label>
                    </div>
                    <Link>Forget password?</Link>
                  </div>
                  <button>Log In</button>
                </form>
                <span>OR</span>
                <div className='social'>
                  <Link className='face'><i className="fa fa-brands fa-facebook-f"></i>Facebook</Link>
                  <Link className='google'><i className="fa fa-brands fa-google-plus-g"></i>Google</Link>
                </div>
                <p>Don't Have an Account? <Link>Sign up now</Link></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login