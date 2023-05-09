import { Switch, Route } from 'react-router-dom'
import Stats from "./Stats"
import Products from "./Products"
import LastProduct from "./LastProduct"
import ProductDetail from './ProductDetail'
import UserDetail from './UserDetail'
import Users from './Users'
import LastUser from './LastUser'

const MainContent = () => {

  return (
    <div className="container-fluid">
      <Switch>
        <Route path="/" exact>

            {/* <div className="mb-4 d-flex justify-content-center">
              <h2 className="p-3 rounded border border-dark text-gray-800 ">
                LOOP | Dashboard
              </h2>
            </div> */}

            <Stats />

            <div className="row">
              <LastProduct />
              <LastUser />
            </div>

        </Route>

        <Route exact path="/products">
            <Products />
        </Route>

        <Route exact path="/products/:id">
            <ProductDetail />
        </Route>

        <Route exact path="/users">
            <Users />
        </Route>

        <Route exact path="/users/:id">
            <UserDetail />
        </Route>

        <Route path="*">
          <h1>ERROR 404</h1>
          Pagina no encontrada...
        </Route>

        {/* CATEGORIAS : latas, botellas, merchandising */}

      </Switch>
    </div>
  )
}

export default MainContent