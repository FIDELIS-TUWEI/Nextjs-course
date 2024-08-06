import Link from "next/link"

export default function Header() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/members">Members</Link>
            <Link href="/about">About</Link>
        </nav>
    )
};