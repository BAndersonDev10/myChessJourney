import { NavLink } from "react-router-dom";


export default function NavBar(){
    const style = {
        width: '10 em',
        height: '10 em',
        borderRadius: '1000',
        overflow: 'hidden',
    }

    return(
        <nav className='navbar navbar-expand-lg bd-body-tertiary border-bottom border-dark'>
            <div className='container rounded-header px-4'>
                <NavLink className='navbar-brand navbar-link-active' aria-current='page' to='/'>Home</NavLink>
                <NavLink className='navbar-brand navbar-link-active' aria-current='page' to='/gameOfTheDay'>Game Of The Day</NavLink>
                <NavLink className='navbar-brand navbar-link-active' aria-current='page' to='/blog'>Blog</NavLink>
            </div>

        </nav>

    );
}