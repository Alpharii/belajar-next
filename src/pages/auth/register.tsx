import Link from "next/link";

export default function RegisterPage() {
    return (
        <div>
            <h1>Register Page</h1>
            <p>sudah punya akun? <Link href="/auth/login">Login</Link></p>
        </div>
    );
}