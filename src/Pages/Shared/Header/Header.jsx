import moment from 'moment';
import logo from "../../../assets/logo.png"
const Header = () => {
  return (
    <div className="text-center">
      <img className='mx-auto mb-6' src={logo} alt="" />
      <p className='mb-4'>Journalism Without Fear or Favour</p>
      <p>{moment().format('dddd, MMMM D, YYYY,')}</p>

    </div>
  );
};

export default Header;