import { Link, useLocation } from "react-router-dom";



const Header = () => {

       const navbar = [
              {title: "home", path:"/"},
              {title:"service", path:"/service"},
              {title:"Contact", path:"/contact"},
              {title:"about", path:"/about"}
       ]

       const location = useLocation()
       const pathName = location.pathname


       return (
         <div className="flex items-center justify-between p-6 bg-gray-400">
           <h1>Logo</h1>
           <ul className="flex gap-6  uppercase underline">
             {navbar.map((item) => (
     
                 <Link
                   className={`${
                     pathName === item.path ? "text-red-600" : "text-black"
                   }`}
                   to={item.path}
                   key={item.title}
                 >
                   {item.title}
                 </Link>
   
             ))}
           </ul>
         </div>
       );
};

export default Header;