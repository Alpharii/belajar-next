import { useRouter } from "next/router";

export default function ShopPages() {
    const { query } = useRouter();
    return (
        <div>
            <h1>Product Detail</h1>
            <p>product : {`${query.slug && query.slug[0] + '-' + query.slug[1]}`}</p>
        </div>
    );
}