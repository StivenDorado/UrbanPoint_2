import BarraSuperior from "../components/BarraSuperior";


{/*perfiles de administradores */}
const PerfilAdmins = () =>{
    const perfiles =
    [
        {
            id: 1,
            name: "Administrador",
            username: "Sebastian Urrego",
        },
        {
            id: 2,
            name: "Administrador",
            username: "Stiven Dorado",
        },
        {
            id: 3,
            name: "Administrador",
            username: "Muriel",
        },
        {
            id: 4,
            name: "Administrador",
            username: "Daniel Madroñero",
        },
        {
            id: 5,
            name: "Administrador",
            username: "Kevin Andres Penagos",
        },
        {
            id: 6,
            name: "Administrador",
            username: "Julian Mauricio",
        },
        {
            id: 7,
            name: "Administrador",
            username: "Cristian Ordoñez Ipia",
        }
    ];
    
    return (
        <div>
            <BarraSuperior title="Perfil administrador" />
            <div className="p-4 mt-16 md:ml-16">
            <h1 className="text-2xl font-bold">Administradores</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {perfiles.map(perfil => (
                <div key={perfil.id} className="bg-white rounded-lg shadow-md p-4">
                    {/*aqui pueden cambiar las imagenes de los administradores*/}
                    <img src="./public/user.png" alt="" className="w-20 h-20 rounded-full mx-auto" />


                    <h2 className="text-xl font-bold mt-2 text-center">{perfil.name}</h2>
                    <p className="text-gray-600 text-center">{perfil.username}</p>
                </div>
                ))}
            </div>
            </div>
        </div>
        );
    };
    
    
export default PerfilAdmins;

