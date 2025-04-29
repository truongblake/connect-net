interface UserStatus {
  court: number,
  team: number,
  vs: string,
}

export default function DisplayUserStatus({ court, team, vs }: UserStatus) {
  return (
    <div className="flex flex-row ">
      <div>You are on
        <div>
          team {team}
        </div>
      </div>
      <div>You are on court {court}</div>
      <div>You playing aganist team {vs}</div>
    </div>
  )
}
