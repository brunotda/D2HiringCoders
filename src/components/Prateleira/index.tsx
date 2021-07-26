import { useState, useEffect } from 'react';


export default function Prateleira() {

    const [prods, setProds] = useState([]);

    useEffect(() => {
        setProds(JSON.parse(localStorage.getItem('btda_produtos') as string))
    }, [])

    return (
        <div className='shelf'>
            {prods !== null ? (prods.map(prod => (
                <div >
                    <button>Adicionar</button>
                </div>

            ))) : (<p>Nenhum produto encontrado. T.T</p>)}
        </div>
    );
}