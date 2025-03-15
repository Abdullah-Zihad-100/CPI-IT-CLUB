import { NavLink } from "react-router";

const Navbar = () => {
  const Links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/"}>About Us</NavLink>
      <NavLink to={"/"}>Blogs</NavLink>
      <NavLink to={"/"}>Event</NavLink>
      <NavLink to={"/"}>Members</NavLink>
    </>
  );
  return (
    <nav className="bg-blue-700 p-5">
      <div className="flex justify-between items-center poppins-regular max-w-7xl mx-auto">
        <div>
          <img className="bg-white rounded-full" width={50} src="/It-Club-Logo.png" alt="" />
        </div>
        <div className="space-x-6 text-lg text-white font-[400]">{Links}</div>
      </div>
    </nav>
  );
};
export default Navbar;
