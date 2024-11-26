import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-12 bg-yellow-800 flex justify-center items-center text-white font-bold gap-4 text-lg transition-all duration-200'>
            <button onClick={() => navigate('/home')} className='hover:text-xl'>Home</button>
            <button onClick={() => navigate('/experience')} className='hover:text-xl'>Experiences</button>
            <button onClick={() => navigate('/project')} className='hover:text-xl'>Projects</button>
        </div>
    )
}

export default NavBar