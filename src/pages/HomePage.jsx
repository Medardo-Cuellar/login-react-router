import {Link} from 'react-router-dom';

export default function HomePage() {
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-center">Welcome to the Home Page</h1>
            <p className="text-xl">This is a Home Page</p>
            <Link to="/login">login</Link>
            <Link to="/productos">productos</Link>
        </div>
    )
}