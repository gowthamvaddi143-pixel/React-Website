import { createBrowserRouter } from "react-router-dom";
import { FoodAppIndex } from "../Food-App/food-app-Index";
import { FoodAppHome } from "../Food-App/food-app-home";
import { FoodAppList } from "../Food-App/foodapp-list";

 const router = createBrowserRouter([
    {
        path:'/',
        element:<FoodAppIndex/>
    },
    {
        path:'/home',
        element:<FoodAppHome/>,
        children:[
            {
                path:'list',
                element:<FoodAppList/>
            }
        ]
    }
 ])

 export default router