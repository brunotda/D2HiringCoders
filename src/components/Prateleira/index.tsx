import { useState, useEffect } from 'react';
import { ProdList, Shelf } from './styled';

interface IProduct {
    id: number;
    image: string;
    titulo: string;
    estoque: number;
}

export default function Prateleira() {

    const [prods, setProds] = useState<IProduct[]>([]);

    useEffect(() => {
        setProds(JSON.parse(localStorage.getItem('btda_produtos') as string))
    }, [])

    return (
        <ProdList>
            {prods !== null ? (prods.map(prod => (
                <Shelf>
                    <div key={prod.id}>
                        <img src={prod.image} alt={prod.titulo} />
                        <h3>{prod.titulo}</h3>
                        <p>{prod.estoque}</p>
                        <button>Adicionar</button>
                    </div>
                </Shelf>
            ))) : (<p>Nenhum produto encontrado. T.T</p>)}
        </ProdList>
    );
}