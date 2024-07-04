import { Link } from "react-router-dom";

const BarraSuperior = ({ title}) => {
    return(
    <section className="bg-gray-800 text-white p-4 w-full fixed top-0 left-0 z-10">
        <div className="flex items-center justify-between">
            {/*en el <Link to="#" onClick={() => window.history.back()} colocar la ruta para que devuelva*/}
            <Link to="#" onClick={() => window.history.back()} className="flex items-center text-xl font-bold">
            <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
            </Link>
            <h1 className="text-xl font-bold">{title}</h1>
            <div></div>
        </div>
        </section>
    );
};

export default BarraSuperior;