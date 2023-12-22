

const PeopleType = () => {
    const peoples = [
        {
            type: 'Developers',
            description: 'Enhance coding workflows with organized task management and project tracking. Stay agile in coding sprints and boost feature development efficiency.',
            img : 'https://i.ibb.co/F3SRNfY/dev.png'
          },
          {
            type: 'Corporate Professionals',
            description: 'Efficiently manage work tasks, deadlines, and team collaboration. Keep projects organized for seamless communication in corporate environments.',
            img : 'https://i.ibb.co/Z8x3fnH/pro.png'
          },
          {
            type: 'Bankers',
            description: 'Streamline financial tasks, track transactions, and meet deadlines effortlessly. Manage financial projects and ensure compliance with powerful task management.',
            img : 'https://i.ibb.co/P5XVytB/2334578-200-removebg-preview.png'
          },
          {
            type: 'Graphics Designers',
            description: 'Fuel your creativity with effective task management. Organize design projects, track timelines, and collaborate seamlessly to bring your visual concepts to life.',
            img : 'https://i.ibb.co/vHMmp0L/478345-removebg-preview.png'
          }
    
      ];
    return (
        <div>
            <div className='text-center py-16'>
                <h1 className='text-2xl font-semibold text-[#BD4300] uppercase'>Some Types of People</h1>
                <p className='text-4xl'>who use this website and get benefits</p>
            </div>

            <div className='grid grid-cols-4 gap-5 pb-16'>
                {
                    peoples.map(people => <div className='bg-[#FAFBFC] p-5 rounded-md space-y-5'>
                    <img src={people.img} alt="" className='w-28 h-28' />
                    <div>
                        <h2 className='text-2xl'>{people.type}</h2>
                        <p className='text-[#091E42] text-sm tracking-wider font-light'>{people.description}</p>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default PeopleType;