
const Button = ({title,icon}) => {
    return (
        <div className='flex justify-start  '>
            <div className='p-3 border border-black rounded-3xl flex items-center    cursor-pointer'>
                <div className='p-2 border border-black  rounded-full relative right-3'>{icon}</div>
                <h1 className='font-semibold'>{title}</h1>
            </div>
        </div>
    );
};

export default Button;