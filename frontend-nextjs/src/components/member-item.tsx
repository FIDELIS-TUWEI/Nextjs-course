import Link from "next/link";

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
        <Link href={`/members/${member.id}`}>
            <img src={member.avatar} alt={member.name} />
            <div>{member.name}</div>
        </Link>
    )
};