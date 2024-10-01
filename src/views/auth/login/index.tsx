import Link from "next/link";
import styles from "./Login.module.scss";
import { useRouter } from "next/router";

export const LoginView = () => {
    const {push} = useRouter()
    
    const loginHandler = () => {
        push('/product')
    }
    
    return (
        <div className={styles.login}>
            <h1 className="text-3xl font-bold">Login Page</h1>
            <button onClick={() => loginHandler()}>login</button>
            <p>Belum punya akun? <Link href="/auth/register">Register</Link></p>
        </div>
    );
}     