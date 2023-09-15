import { useState, useEffect } from "react";

function Teas() {

    const [datas, setDatas] = useState(null);
    const [datas2, setDatas2] = useState(null);

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

    useEffect(() => {
        async function getData() {
            try {
                const result = await (
                    await fetch("/api/v1/tea/all")
                ).json();
                setDatas2(result);
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
                    <section>
                        <h2>{data.label}</h2>
                        <p>{data.description}</p>


                        {!datas2 ? (
                            <p>LOADING ...</p>
                        ) : (
                            datas2.map((data2) => (
                                data.label === data2.label && (
                                    <article>
                                        <h3>{data2.label_1}</h3>
                                        <img src={"server/public/assets/img/tea/" + data2.url_image} alt={data2.label_1} />
                                        <p>A partir de</p>
                                        <a href={"the/" + data2.url_tea + "/" + data2.id}>Voir ce produit</a>
                                    </article>
                                )
                            ))
                        )}


                    </section>
                ))
            )}
        </>
    )
}

export default Teas;