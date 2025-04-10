import Analytics from "./pages/Analytics/Analytics";
import Feedback from "./pages/Feedback/Feedback";
import Home from "./pages/Home/Home";
import Mail from "./pages/Mail/Mail";
import Massages from "./pages/Massages/Massages";
import NewProduct from "./pages/NewProduct/New_Product";
import NewUsre from "./pages/NewUser/NewUsre";
import NotFaund from "./pages/NotFaund/NotFaund";
import Product from "./pages/Prroduct/Prroduct";
import Sales from "./pages/Sales/Sales";
import Settings from "./pages/Settings/Settings";
import Transactions from "./pages/Transactions/Transactions";
import Users from "./pages/Users/Users";
import Products from "./pages/products/Products"

let route = [
    {path : "/" , element : <Home />},
    {path : "/users" , element : <Users />},
    {path : "/new_user" , element : <NewUsre />},
    {path : "/products" , element : <Products />},
    {path: "/product/:productID" , element :<Product />},
    {path: "/new-products" , element :<NewProduct />},
    {path: "/massages" , element :<Massages />},
    {path: "/Settings" , element :<Settings />},
    {path: "/Analytics" , element :<Analytics />},
    {path: "/Sales" , element :<Sales />},
    {path: "/mail" , element :<Mail />},
    {path: "/Feedback" , element :<Feedback />},
    {path: "/Transactions" , element :<Transactions />},
     
    {path:"*" , element : <NotFaund />}
]

export default route