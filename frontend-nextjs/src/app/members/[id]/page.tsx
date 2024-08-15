import { members } from "@/db";

interface MemberPageProps {
    params: {
        id: string;
    }
}

export default function MemberPage (props: MemberPageProps) {
    const member = members.find((m) => m.id === props.params.id);

    if (!member) {
        return <h1>Member not found!</h1>
    }
    
    return (
        <div>
            <h1>{member.name}</h1>
            <img src={member.avatar} alt={member.name} />
            <p>Member Since: {member.createdAt}</p>
        </div>
    );
}