
import { Link } from "react-router-dom";

export default function Join() {

  return (
    <div className='flex flex-col items-center mx-auto py-8 px-4 max-w-md w-full space-y-6'>
      <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-600">
        Welcome to Connect Net!
      </h1>

      <form className="w-full space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
            required
            minLength={2}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="volleyballId" className="block text-sm font-medium text-gray-700">
            Volleyball ID:
          </label>
          <input
            type="text"
            id="volleyballId"
            name="volleyballId"
            placeholder="Enter your VID"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
            required
          />
        </div>

        <Link 
          to='/new_player' 
          className="block text-center text-orange-600 hover:text-orange-800 text-sm mb-6 transition"
        >
          Don't have an account? <span className="font-semibold underline">Click here</span>
        </Link>

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md transition duration-200 'hover:scale-[1.02]'
          "
        >
          Join
        </button>
      </form>
    </div>
  );
}