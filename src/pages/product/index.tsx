import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ProductPages() {
    const {push} = useRouter()
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        if(!isLogin){
            push('/auth/login')
        }
    }, [])
    return (
        <div>
            <h1>Product Page</h1>
        </div>
    );
}