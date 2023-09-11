import profile from '../../assets/image/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center py-5 px-10 mx-auto container border-b-2'>
             <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;