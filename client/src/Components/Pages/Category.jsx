import { useState, useEffect } from "react";

function Category() {
    const [datas, setDatas] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const result = await (
                    await fetch("/api/v1/category/all")
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
        <section>
            {!datas ? (
                <p>LOADING ...</p>
            ) : (
                datas.map((data) => (
                    <article key={data.id}>
                        <h2>{data.label}</h2>
                        <img src={data.url_image} alt={data.category} />
                    </article>
                ))
            )}
        </section>
        </>
    );
}

export default Category;