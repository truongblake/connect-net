interface LocationStatus{
    players: number,
    teams: number,
}

export default function DisplayLocationStatus({players,teams}: LocationStatus) {
  return (
    <div>
        <div>`Thur 04/06`</div>
        <div>`${players} Expected Players`</div>
        <div>`${teams} Expected Teams`</div>
    </div>
  )
}
