import Navbar from "../Navbar/Index";
import { useRouter } from "next/router";

type AppShellProps = {
    children: React.ReactNode;
};

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

export default function AppShell(props : AppShellProps) {
    const { children } = props;
    const {pathname} = useRouter();
    
    return (
        <main>
            {!disableNavbar.includes(pathname) && <Navbar/>}
            {children}
        </main>
    );
}