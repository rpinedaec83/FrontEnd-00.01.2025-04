import React, {useEffect, useState} from "react";
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import filterFactory,{ textFilter, selectFilter} from 'react-bootstrap-table2-filter'
import ToolkitProvider,{ Search, CSVExport} from 'react-bootstrap-table2-toolkit'
import axios from "axios";


export default function ProductTableAdvance(){

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const {SearchBar} = Search;
    const {ExportCSVButton} = CSVExport;

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log(res)
                setProducts(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError("Error en cargar los productos")
                setLoading(false)

    })
    }, [])

    if(error) return <p>{error}</p>
    if(loading) return <p>Cargando productos...</p>

    const categoryOptions = {};
    products.forEach((p)=>{
        if(!categoryOptions[p.category]){
            categoryOptions[p.category]=p.category;
        }
    })

    const columns = [
        {
            dataField: 'id',
            text: "ID",
            sort: true
        },
        {
            dataField: 'image',
            text: "Imagen",
            formatter: (img)=>{
                <img src={img} alt="img" height={50} style={{objectFit:'contain'}}/>
            }
        },
        {
            dataField: 'title',
            text: "Producto",
            sort: true,
            filter: textFilter({placeholder:"Buscar por nombre"})
        },
        {
            dataField: 'price',
            text: "Precio",
            sort: true,
            formatter: (price)=>`$${price.toFixed(2)}`
        },
        {
            dataField: 'category',
            text: "Categoria",
            sort: true,
            filter: selectFilter({
                options: categoryOptions,
                placeholder: "Filtrar por Categoria"
            })
        }
    ];

    return(
        <div className="container mt-4">
            <h2 className="mb-3">Tabla Avanzada de Productos</h2>
            <ToolkitProvider
                keyField="id"
                data={products}
                columns={columns}
                search
                exportCSV={{ onlyExportFiltered:true, exportAll:false}}
            >
                {
                    (props)=>(
                        <>
                            <div className="d-flex justify-content-between mb-3">
                                <SearchBar 
                                    {...props.searchProps}
                                    className="form-control w-50"
                                    placeholder="Buscar Global..."
                                />
                                <ExportCSVButton 
                                    {...props.csvProps}
                                    className="btn btn-success"
                                >
                                    Exportar
                                </ExportCSVButton>
                            </div>
                            <BootstrapTable
                                {...props.baseProps}
                                pagination={paginationFactory()}
                                filter={filterFactory()}
                                bordered={false}
                                hover
                                striped
                                condensed
                            />
                        </>
                    )
                }
            </ToolkitProvider>

        </div>
    )
}