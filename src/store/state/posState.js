import TableActions from "../../components/Global/TableActions/TableActions";





export const posState = {
        productList:[
                {
                        id: 300,
                        product:<img className='data-img' src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"></img>,
                        productName:'Pizza',
                        productCode: <span className='product-code'>300</span>,
                        productPrice: '120',
                        productCategory: 'Food',
                        action: <TableActions productId="300"/>
                    },
        ],
        productCategories:[],
        Orders:[],
        Users:[]
}