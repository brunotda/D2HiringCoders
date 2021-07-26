import Cabecalho from '../../components/Cabecalho/'
import Rodape from '../../components/Rodape/'
import Prateleira from '../../components/Prateleira/'

export default function Home() {
    return (
        <div className='page'>
            <Cabecalho />
                <div className='container'>
                    <section className='firstpage'>
                        <h1>Bem vindo, selecione uma opção</h1>
                        <Prateleira />
                    </section>
                </div>
            <Rodape />
        </div>
    );
}