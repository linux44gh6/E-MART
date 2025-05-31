import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { NavLink } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
import CustomDialog from "../Dialog/Dialog";
import { setSearchQuery } from "@/Redux/Features/ProductSlice/SearchSlice";
import DropDown from "../DropDown/DropDown";
import { components } from "./DropDownItem";

const Nav = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const user = useSelector((state: RootState) => state.auth.user);
  const totalQuantity = cart.totalQuantity;

  return (
    <div className="bg-secondary shadow-md fixed z-50 w-full" style={{ borderBottom: "2px solid #4A90E225" }}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink 
            to={'/'} 
            className="text-2xl font-bold tracking-tight"
            style={{ color: 'primary' }}
          >
            MERCH-BITE
          </NavLink>

          {/* Search Bar */}
          <div className="mx-6 flex-1 max-w-2xl">
            <div className="relative">
              <Input 
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                className="pl-10 pr-4 py-2 rounded-full border-2 border-primary/20 focus:border-primary/40 focus-visible:ring-0"
                placeholder="Search your item"
                style={{
                  backgroundColor: '#F5F7FA',
                  color: 'text'
                }}
              />
              <AiOutlineSearch 
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: 'primary' }}
              />
            </div>
          </div>

          {/* User Controls */}
          <div className="flex items-center gap-4">
            {user ? (
              <DropDown 
                button={
                  <div className="p-2 rounded-full hover:bg-primary/10 transition-colors">
                    <IoPersonOutline 
                      size={28} 
                      style={{ color: 'text' }}
                      className="hover:text-primary transition-colors"
                    />
                  </div>
                } 
              />
            ) : (
              <CustomDialog 
                button={
                  <div className="p-2 rounded-full hover:bg-primary/10 transition-colors">
                    <IoPersonOutline 
                      size={28} 
                      style={{ color: 'text' }}
                      className="hover:text-primary transition-colors"
                    />
                  </div>
                } 
              />
            )}

            <NavLink 
              to={'/cart'} 
              className="relative p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <AiOutlineShoppingCart 
                size={28}
                style={{ color: 'text' }}
                className="hover:text-primary transition-colors"
              />
              <Badge 
                className="absolute -top-1 -right-1 min-w-5 flex justify-center items-center shadow-sm"
                style={{ backgroundColor: 'accent', color: 'text' }}
              >
                {totalQuantity}
              </Badge>
            </NavLink>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex justify-center mt-4">
          <NavigationMenu>
            <NavigationMenuList>
              {components.map((com, idx) => (
                <NavigationMenuItem key={idx}>
                  <NavigationMenuTrigger>{com.title}</NavigationMenuTrigger>
                  <NavigationMenuContent className="">
                  <ul className="w-92">
                      {com.subItems?.map((sub) => (
                      <NavigationMenuLink key={sub.title} className="bg-red-400">
                        <NavLink to={sub.href} className="block p-2 hover:bg-gray-100">
                          {sub.title}
                        </NavLink>
                      </NavigationMenuLink>
                    )) ?? []}
                  </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

export default Nav;
