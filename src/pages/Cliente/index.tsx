import Cabecalho from '../../components/Cabecalho/'
import Rodape from '../../components/Rodape/'
import { useState } from 'react';

export default function Cliente() {

    const [clienteNome, setCliNome] = useState('');
    const [clienteDocumento, setCliDoc] = useState('');

    function handleAddClient(e: any) {
        e.preventDefault();
        if (clienteNome.length === 0 || clienteDocumento.length === 0) {
            alert('Um campo obrigatório está vazio!');
        } else {
            let listClientes = [];
            if (localStorage.getItem('btda_cliente') !== null) {
                listClientes = JSON.parse(localStorage.getItem('btda_cliente') as string);
            }
            const clienteNovo = {
                "nome": clienteNome,
                "documento": clienteDocumento
            }
            listClientes.push(clienteNovo);
            localStorage.setItem('btda_cliente', JSON.stringify(listClientes));
            alert('Cliente adicionado com sucesso! =D');
            setCliNome('');
            setCliDoc('');
        }
    }

    return (
        <div className='page'>
            <Cabecalho />
            <div className='container'>
                <section className="card">
                    <h1>Cadasto de Usuários</h1>
                    <form onSubmit={(e) => handleAddClient(e)}>
                        <input type="text" placeholder="Nome" onChange={e => setCliNome(e.target.value)} value={clienteNome} />
                        <input type="text" placeholder="Documento" onChange={e => setCliDoc(e.target.value)} value={clienteDocumento} />
                        <button >Adicionar Cliente</button>
                    </form>
                </section>
            </div>
            <Rodape />
        </div>
    );
}