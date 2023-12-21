import ProductsTable from "../components/admin/ProductsTable"
import { Suspense } from "react"
import LogoutButton from "../components/admin/LogoutButton"


const Admin = () => {

    return(

        <div className="containet mx-8 px-auto">
            <LogoutButton />
            <h2 className="mx-3 mt-3">Panel Admin</h2>
            <Suspense fallback={<div> Cargando Listado de Productos...</div>}>
            <ProductsTable />
            </Suspense>
        </div>
    )

}

export default Admin