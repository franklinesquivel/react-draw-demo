import { Link, Outlet, useLocation } from 'react-router-dom';

export const App = () => {
    const location = useLocation();
    const isNotInHome = location.pathname !== '/';

    return (
        <div id='main-app'>
            <h3>Demos</h3>

            <ul>
                <Link to='/tldraw'>
                    <li>TLDraw</li>
                </Link>
            </ul>

            { isNotInHome && (
                <>
                    <Link to='/' className='btn-back'>
                        <button>Back</button>
                    </Link>

                </>
            ) }

            <div className='demos-container' style={ { display: isNotInHome ? 'block' : 'none' } }>
                <Outlet />
            </div>
        </div>
    );
};