import NavBar from "../components/NavBar"

const Experience = () => {

    const experiences = [
        {
            title: 'Software Engineer',
            company: 'PT. Bumi Indonesia',
            location: 'Jakarta, Indonesia',
            date: '2021 - Present',
            description: 'Developing and maintaining web applications for internal and external clients. Using Laravel and Vue.js.'
        },
        {
            title: 'Electrical Engineer',
            company: 'PT. Bumi Teknologi',
            location: 'Bandung, Indonesia',
            date: '2020 - Present',
            description: 'bukan tukang reparasi'
        },
        {
            title: 'Data Engineer',
            company: 'PT. Teknologi Indonesia',
            location: 'Yogyakarta, Indonesia',
            date: '2019 - Present',
            description: 'ngerjain data'
        }
    ]
    return (
        <>
            <NavBar />
            <div className="flex justify-center items-center min-h-screen w-full overflow-hidden gap-2 bg-slate-600">
                {
                    experiences.map((experience, index) => (
                        <div key={index} className="w-52 h-fit bg-green-500 p-3">
                            <h1 className="text-center font-bold"> {experience.title} </h1>
                            <h2 className=""> {experience.company} </h2>
                            <h3 className=""> {experience.date} </h3>
                            <p className=""> {experience.description} </p>
                        </div>
                    ))
                }
            </div>
            
        </>
    )
}

export default Experience