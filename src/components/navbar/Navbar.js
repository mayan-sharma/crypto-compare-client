import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.container}>
            <h3>CryptoCompare</h3>
            <div>
                <Link to='/'>
                    Compare
                </Link>
                <Link to='/history'>
                    History
                </Link>
            </div>
        </div>
    );
}

export default Navbar;