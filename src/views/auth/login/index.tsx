import Link from "next/link";
import styles from "./Login.module.css";
import { useRouter } from "next/router";

export const LoginView = () => {
    const {push} = useRouter()
    
    const loginHandler = () => {
        push('/product')
    }
    
    return (
        <div className={styles.login}>
            <h1 className="big">Login Page</h1>
            <button onClick={() => loginHandler()}>login</button>
            <p>Belum punya akun? <Link href="/auth/register">Register</Link></p>
        </div>
    );
}     