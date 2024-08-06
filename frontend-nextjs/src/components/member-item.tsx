
interface MemberItemProps {
    member: {
        id: string;
        name: string;
        avatar: string;
        createdAt: string;
    }
}

export default function MemberItem(props: MemberItemProps) {
    const { member } = props;
    return (
        <div>
            <img src={member.avatar} alt="member photo" />
            <div>{member.name}</div>
        </div>
    )
};