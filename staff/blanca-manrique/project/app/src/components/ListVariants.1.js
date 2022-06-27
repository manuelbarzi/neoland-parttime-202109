import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { retrieveAllVariantsFromProduct } from '../logic'
import { IoChevronForwardOutline, IoAdd } from "react-icons/io5"
import './ListVariants.css'

function ListVariants() {
    const { supplierId } = useParams()
    const { productId } = useParams()
    const [variants, setVariants] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveAllVariantsFromProduct(sessionStorage.token, supplierId, productId)
                .then(variants => setVariants(variants))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])


    const handleAddVariant = () => {
        navigate('variants/new-variant')
    }

    const handleVariantDetail = variantId => {
        navigate(`variants/${variantId}`)
    }

    // return <div>
    //     <h1>Variants</h1>
    //     {variants ? <ul>
    //         {variants.map(variant =>
    //             <li key={variant.id} onClick={() => handleVariantDetail(variant.id)}>
    //                 <p>{variant.id}</p>
    //                 <p>{variant.color}</p>
    //                 <p>{variant.size}</p>
    //                 <p>{variant.stockOnHand}</p>
    //                 <p>{variant.criticalStock}</p>
    //             </li>)}
    //     </ul> : <p>no variants yet: You can create a new one</p>}

    //     <IoAdd className='Variants__addIcon' onClick={handleAddVariant}/>
    // </div>

    return <div className='Variants'>
        <h1 className='Variants__title'>Variants</h1>
        {variants ?
            variants.map(variant => (
                <table className='Variants__table' key={variant.id}>
                    <thead className='Variants__table-header'>
                        <tr>
                            <th>Color</th>
                            <th>Size</th>
                            <th>Critical on hand</th>
                            <th>Critical stock</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody className='Variants__table-body'>
                        <tr>
                            <td>{variant.color}</td>
                            <td>{variant.size}</td>
                            <td>{variant.stockOnHand}</td>
                            <td>{variant.criticalStock}</td>
                            <td><IoChevronForwardOutline className='Variants__table-bodyIcon' onClick={() => handleVariantDetail(variant.id)}/></td>
                        </tr>
                    </tbody>
                </table>
                
                ))

            : <p>no variants yet: You can create a new one</p>
        }

        <IoAdd className='Variants__addIcon' onClick={handleAddVariant} />
    </div>

}
export default ListVariants