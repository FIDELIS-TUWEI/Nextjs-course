import MemberItem from "@/components/member-item";
import { members } from "@/db";

export default function MembersPage() {
    return (
        <div>
            <h1>Members Page</h1>

            <div>
            {members.map(member => (
                <MemberItem member={member} key={member.id} />
            ))}
            </div>
        </div>
    )
}