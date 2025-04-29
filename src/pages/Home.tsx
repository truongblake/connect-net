import DisplayUserStatus from "../components/ui/DisplayUserStatus"

export default function home() {
  return (
    <div className="flex flex-col mx-[20%] py-15 space-y-4">
      <div className="self-center">
        Hi <span>Blake</span>! Are you ready to play?
      </div>
      <div className="self-center">
        <DisplayUserStatus court={1} team={1} vs='2'></DisplayUserStatus>
      </div>
      <div className="flex flex-row gap-3 justify-center">
        <button className="bg-orange-600 hover:bg-orange-700 text-black py-3 px-4 rounded-md transition duration-200 hover:scale-[1.02]">
          View Games
        </button>
        <button className="bg-orange-600 hover:bg-orange-700 text-black py-3 px-4 rounded-md transition duration-200 hover:scale-[1.02]">
          View Teams
        </button>
      </div>

    </div>
  )
}
