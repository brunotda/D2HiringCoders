import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav>
            <div className='innerNav'>
                <Link to='/'>Home</Link>
                <Link to='/produto'>Produto</Link>
                <Link to='/cliente'>Cliente</Link>
            </div>
        </nav>
    );
}

