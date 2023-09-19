import { useState } from 'react';
import { BsFillEyeSlashFill, BsFillEyeFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setLogin } from './redux/action/actionLogin';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.login.loading);

  const handleLogin = (e) => {
    e.preventDefault();

    // email validation
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return;
    } else {
      setEmailError('');
    }

    // password validation
    if (!password) {
      setPasswordError('Password is required');
      return;
    } else {
      setPasswordError('');
    }

    // go login
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLogin(true));
      dispatch(setLoading(false));
    }, 2000);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  
  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen">
      <div className="hidden md:flex xl:w-3/5 lg:w-full bg-[#7879F1] justify-center items-center p-48">
        <div className="w-full h-full bg-[#FFFFFF66]">
          <div className="pl-24 lg:px-auto pr-4 py-10 lg:pt-32">
            <div className="w-72">
              <h1 className="text-5xl text-bold text-white">Lorem ipsum dolor si amet</h1>
              <h1 className="mt-2 mb-8 text-5xl text-bold text-[#3E334E]">consectetur</h1>
            </div>
            <div className="w-80">
              <p className="text-[#3E334E]/90">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 lg:my-auto px-7 md:px-28 w-100 xl:w-2/5 lg:w-full">
        <h1 className="text-3xl font-bold mb-2 text-left">Hello</h1>
        <p className="text-lg mb-8">Enter your email and password to login.</p>

        <h1 className="text-2xl font-bold mb-2 text-left">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="text-lg">Email</div>
          <input
            type="text"
            placeholder="Email"
            className="block w-full text-lg px-4 py-2 border rounded-lg focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <span className="text-red-500">{emailError}</span>}
          <div className="text-lg mt-4">Password</div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full text-lg px-4 py-2 border rounded-lg focus:outline-none"
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute top-1/2 right-4 transform -translate-y-1/2"
            >
              {showPassword ? (<BsFillEyeFill color="#B2A6C5" />) : (<BsFillEyeSlashFill color="#B2A6C5" />)}
            </button>
          </div>
          {passwordError && <span className="text-red-500">{passwordError}</span>}
          <div className="flex justify-between my-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2"
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <p className="hover:underline underline-offset-4 cursor-pointer">
              Forgot Password?
            </p>
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-80 bg-[#7879F1] text-white py-2 mr-2 rounded-lg hover:bg-[#7879F1]/50"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                  <span className="ml-2">Loading...</span>
                </div>
              ) : (
                'Login'
              )}
            </button>
            <button
              type="button"
              className="w-80 bg-[#FFFFFF] text-black py-2 ml-2 rounded-lg border-2 border-[#3E334E]-500 hover:border-[#7879F1]/50 hover:text-opacity-50"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-14 text-center">
          Or, login with
        </div>
        <div className="mt-4 grid gap-4 grid-cols-3">
          <button className="w-full border border-[#AFA2C3]-500 text-black py-2 rounded-md hover:border-[#AFA2C3]/50 hover:text-opacity-50 mb-2">
            Google
          </button>
          <button className="w-full border border-[#AFA2C3]-500 text-black py-2 rounded-md hover:border-[#AFA2C3]/50 hover:text-opacity-50 mb-2">
            Facebook
          </button>
          <button className="w-full border border-[#AFA2C3]-500 text-black py-2 rounded-md hover:border-[#AFA2C3]/50 hover:text-opacity-50 mb-2">
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}
