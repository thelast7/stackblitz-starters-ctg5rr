import { BsFillEyeSlashFill } from 'react-icons/bs';

export default function Home() {
  return (
    <div className="flex max-w-screen-xl mx-auto">
      <div className="hidden lg:block lg:w-1/2">
        <img
          src="path/to/your/image.jpg"
          alt="Login Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-2 text-left">Hello</h1>
        <p className="text-lg mb-12">Enter your email and password to login.</p>
        <form onSubmit={null}>
          <span className="text-lg">Email</span>
          <input
            type="text"
            placeholder="email"
            // value={auth.username}
            // onChange={(e) => dispatch(setUsername(e.target.value))}
            className="block w-full text-lg px-4 py-2 mb-4 border rounded-lg"
          />
          <span className="text-lg">Password</span>
          <div className="relative mb-4">
            <input
              // type={auth.showPassword ? 'text' : 'password'}
              placeholder="Password"
              // value={auth.password}
              // onChange={(e) => dispatch(setPassword(e.target.value))}
              className="block w-full text-lg px-4 py-2 border rounded-lg"
            />
            <button
              type="button"
              // onClick={() => dispatch(toggleShowPassword())}
              className="absolute top-1/2 right-4 transform -translate-y-1/2"
            >
              {/* {auth.showPassword ? 'Hide' : 'Show'} */}
              <BsFillEyeSlashFill />
            </button>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="rememberMe"
              // checked={auth.rememberMe}
              // onChange={(e) => dispatch(setRememberMe(e.target.checked))}
              className="mr-2"
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button
            type="submit"
            className="w-full bg-[#7879F1] text-white py-2 rounded hover:bg-[#7879F1]/50"
          >
            Login
          </button>
          <div className="mt-4 flex justify-between">
            <button className="text-blue-500 hover:underline">
              Forgot Password?
            </button>
            <button className="text-blue-500 hover:underline">Sign Up</button>
          </div>
        </form>
        <div className="mt-4">
          <button className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-700 mb-2">
            Login with Google
          </button>
          <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 mb-2">
            Login with Facebook
          </button>
          <button className="w-full bg-indigo-700 text-white py-2 rounded hover:bg-indigo-800">
            Login with LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}
