interface TeamMember {
    id: number;
    name: string;
    icon: string;
}
  
interface DisplayTeamProps {
    members: TeamMember[];
}
  
export default function DisplayTeam({ members }: DisplayTeamProps) {
return (
    <div>
        <ul>
            {members.map((member) => (
            <li key={member.id}>
                <img src={member.icon} alt={member.name} />
                {member.name}
            </li>
            ))}
        </ul>
    </div>
);
}