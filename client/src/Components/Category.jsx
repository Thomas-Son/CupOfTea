import TeaCard from "./TeaCard"
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

    return(
        <>
            {!datas ? (
                <p>LOADING ...</p>
            ) : (
                datas.map((data) => (
                <section>
                    <h2>{data.label}</h2>
                    <p>{data.description}</p>

                    <TeaCard />
                </section>
                ))
            )}
        </>
    )
}

export default Category;