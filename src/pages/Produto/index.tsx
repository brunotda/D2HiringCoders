import Cabecalho from '../../components/Cabecalho/'
import Rodape from '../../components/Rodape/'
import { useState } from 'react';

export default function Produto() {

    const [prodId, setSku] = useState('');
    const [prodNome, setNome] = useState('');
    const [prodImage, setImage] = useState('');
    const [prodEstoque, setEstoque] = useState('');

    function handleAddProd(e: any) {
        e.preventDefault();
        if (prodId.length === 0 || prodImage.length === 0 || prodImage.length === 0) {
            alert('Um campo obrigatório está vazio!');
        } else {
            let listProdutos = [];
            if (localStorage.getItem('btda_produtos') !== null) {
                listProdutos = JSON.parse(localStorage.getItem('btda_produtos') as string);
            }
            const novoProd = {
                "id": prodId,
                "titulo": prodNome,
                "image": prodImage,
                "estoque": prodEstoque
            };
            listProdutos.push(novoProd);
            localStorage.setItem('btda_produtos', JSON.stringify(listProdutos));

            setSku('');
            setNome('');
            setImage('');
            setEstoque('');
            alert('Produto adicionado com sucesso! ;D');
        }
    }
    return (
        <div className='page'>
            <Cabecalho />
            <div className='container'>
                <section className="card">
                    <h1>Cadastro de produtos</h1>
                    <form onSubmit={(e) => handleAddProd(e)}>
                        <input type="number" placeholder="SKU do produto" onChange={e => setSku(e.target.value)} value={prodId} />
                        <input type="text" placeholder="Nome do produto" onChange={e => setNome(e.target.value)} value={prodNome} />
                        <input type="text" placeholder="URL Imagem do produto" onChange={e => setImage(e.target.value)} value={prodImage} />
                        <input type="number" placeholder="Estoque" onChange={e => setEstoque(e.target.value)} value={prodEstoque} />
                        <button type="submit">Adicionar Produto</button>
                    </form>
                </section>
            </div>
            <Rodape />
        </div>
    );
}