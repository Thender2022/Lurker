import { useParams } from "react-router-dom";


export default function ProductPage() {
    const params = useParams();
    const { slug } = params;

    return (
        <div>
            <h1>Product Page</h1>
            <h2>{slug}</h2>
        </div>
    )
}