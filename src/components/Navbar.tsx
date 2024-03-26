import Image from 'next/image';
import Link from 'next/link'

const Navbar = () => {
  const navData = [
    {
      id:1,
      title: 'Home'
    },
    {
      id:2,
      title: 'Blog'
    },
    {
      id:3,
      title: 'Aboute'
    },
  ]
  return (
    <div>
      <div className="container mx-auto flex items-center py-2">
        <Link href='/'>
            <Image width={50} height={50} src="/favicon.ico" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
