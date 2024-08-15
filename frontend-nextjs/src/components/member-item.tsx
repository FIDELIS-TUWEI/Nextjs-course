import Image from "next/image";
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
            <Image width={100} height={100} src={member.avatar} alt={member.name} className="border-2 border-blue-700 rounded-full" />
            <div className="font-bold text-center">{member.name}</div>
        </Link>
    )
};