import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginPage() {
    const {push} = useRouter()
    
    const loginHandler = () => {
        push('/product')
    }
    
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={() => loginHandler()}>login</button>
            <p>Belum punya akun? <Link href="/auth/register">Register</Link></p>
        </div>
    );
}