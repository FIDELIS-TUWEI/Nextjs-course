import { members } from "@/db";
import Image from "next/image";

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
        <div className="container mx-auto bg-blue-700">

            <div className="flex p-2 items-center">
                <Image width={200} height={200} src={member.avatar} alt={member.name} className="border-4 rounded-full" />

                <div className="flex-col text-white ml-5">
                    <h1 className="text-2xl font-bold">{member.name}</h1>
                    <p>Member Since: {member.createdAt}</p>
                </div>
                
            </div>
            
        </div>
    );
}