import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center py-4">
                <Logo></Logo>
                <ul className="flex gap-10">
                    <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
                        }
                        >
                    Home
                    </NavLink>

                    </li>

                    <li>
                    <NavLink
                        to="/donations"
                        className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
                        }
                        >
                    Donation
                    </NavLink>

                    </li>

                    <li>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
                        }
                        >
                    Statistics
                    </NavLink>

                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;