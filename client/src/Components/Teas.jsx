import { useState, useEffect } from "react";

function Teas() {
    const [datas, setDatas] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const result = await (
                    await fetch("/api/v1/tea/all")
                ).json();
                setDatas(result);
            } catch (error) {
                console.log(error);
            }
        }

        getData();
    }, []);

    return (
        <>
            {!datas ? (
                <p>LOADING ...</p>
            ) : (
                datas.map((data) => (
                    <article key={data.id}>
                        <h2>{data.label_1}</h2>
                        <h3>{data.label_2}</h3>
                        <img src={data.url_image} alt={data.category} />
                        <p>{data.description}</p>
                    </article>
                ))
            )}
        </>
    );
}

export default Teas;