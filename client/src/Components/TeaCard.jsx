import { useState, useEffect } from "react";

function TeaCard({category}) {

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

    return(
        <>
            {!datas ? (
                <p>LOADING ...</p>
            ) : (
                datas.map((data) => (
                <article>
                    <h3>{data.label_1}</h3>
                    <img src={data.url_image} alt={data.label_1} />
                    <p>A partir de</p>
                    <a href="">Voir ce produit</a>
                </article>
                ))
            )}
        </>
    )
}

export default TeaCard;