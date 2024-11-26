import { useState, useEffect } from 'react';
import NavBar from './../components/NavBar';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);
    // const

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://api.github.com/users/rastuak');
                setData(res.data);
                console.log(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [])

    const handleClick = () => {
        axios
            .post("https://getform.io/f/bgddjxza", {
                message: "Hello World!!",
            },
                { headers: { 'Accept': 'application/json' } })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    return (
        <>
            <NavBar />
            <div>
                <img src={data.avatar_url} alt="rastuak's avatar"  className='w-32 h-32 rounded-full mx-auto mt-4' />
                <h1 className='text-2xl font-bold text-center mt-4'>{data.name}</h1>
                <h2 className='text-xl text-center'>{data.bio}</h2>
                <div className='flex justify-center items-center gap-2 mt-4'>
                    <button onClick={handleClick} className='p-4 bg-blue-800 rounded-xl text-white'>Click Me!</button>
                </div>
                modified
            </div>
        </>
    )
}

export default Home