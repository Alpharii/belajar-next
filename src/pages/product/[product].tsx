import { useRouter } from "next/router";

export default function DetailProduct() {
    const { query } = useRouter();
    return (
        <div>
            <h1>Product Detail</h1>
            <p>product : {query.product}</p>
        </div>
    );
}