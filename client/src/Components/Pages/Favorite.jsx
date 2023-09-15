import { useState, useEffect } from "react";

function Favorite() {

    const [datas, setDatas] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const result = await (
                    await fetch("/api/v1/tea/favorite")
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
                <article>
                    <h3>{datas[0].label_1}</h3>
                    <img src={datas[0].url_image} alt={datas[0].label_1} />
                    <p>{datas[0].description}</p>
                    <p>A partir de</p>
                    <a href={"the/" + datas[0].url_tea + "/" + datas[0].id}>Voir ce produit</a>
                </article>
            )}
        </>
    )
}

export default Favorite;