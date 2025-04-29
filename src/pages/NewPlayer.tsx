export default function NewPlayer() {

  return (
    <div className="flex flex-col items-center mx-auto py-8 px-4 max-w-md w-full space-y-8 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-orange-600">Welcome New Player!</h1>

      <div className="w-full space-y-4 text-center">
        <h2 className="text-lg font-medium text-gray-700">Choose your profile</h2>
        <div className="flex justify-center space-x-6">
          <div className="cursor-pointer flex justify-center items-center">
            <span className="material-symbols-outlined">
              keyboard_arrow_left
            </span>
          </div>
          <div className="w-48 h-48 rounded-full ring-black ring-3 flex justify-center items-center bg-gray-100">
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: '48px',
                fontVariationSettings: '"opsz" 48',
              }}
            >
              photo_camera
            </span>
          </div>
          <div className="cursor-pointer flex justify-center items-center"><span className="material-symbols-outlined">
            keyboard_arrow_right
          </span></div>
        </div>
      </div>

      <form className="w-full space-y-6">
        <div className="space-y-2">
          <label htmlFor="playerName" className="block text-sm font-medium text-gray-700">
            Player Name
          </label>
          <input
            type="text"
            id="playerName"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
            required
            minLength={3}
            maxLength={20}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md transition duration-200 hover:scale-[1.02]"
        >
          Create Account
        </button>
      </form>

      <div className="text-xs text-gray-500 text-center">
        Note: 30 days inactive accounts will automatically be deleted.
      </div>
    </div>
  )
}
