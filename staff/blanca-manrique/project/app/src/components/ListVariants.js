import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { retrieveAllVariantsFromProduct, filterVariants } from '../logic'
import { IoChevronForwardOutline, IoAdd, IoSearch } from "react-icons/io5"
import './ListVariants.css'
import Context from './Context'

function ListVariants() {
    const { setFeedback } = useContext(Context)
    const { supplierId } = useParams()
    const { productId } = useParams()
    const [variants, setVariants] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredResults, setFilteredResults] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveAllVariantsFromProduct(sessionStorage.token, supplierId, productId)
                .then(variants => setVariants(variants))
                .catch(error => setFeedback({ level: 'info', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }
    }, [])


    const handleAddVariant = () => {
        navigate('variants/new-variant')
    }

    const handleVariantDetail = variantId => {
        navigate(`variants/${variantId}`)
    }

    const searchVariants = (query) => {
        setSearchTerm(query)
        setFilteredResults(filterVariants(query, variants))
    }

    return <div className='Variants'>
        <h1 className='Variants__title'>Variants</h1>
        <div className='Variants__search'>
            <input
                className='Variants__search-input'
                type="text"
                placeholder='Search variant...'
                onChange={(e) => searchVariants(e.target.value)}
            />
            <IoSearch className='Variants__search-icon'/>
        </div>

        {searchTerm.length > 1 ? (
            filteredResults.map((variant) => {
                return (
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
                                <td><IoChevronForwardOutline className='Variants__table-bodyIcon' onClick={() => handleVariantDetail(variant.id)} /></td>
                            </tr>
                        </tbody>
                    </table>
                )
            })
        ) : (
            variants.map((variant) => {
                return (
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
                                <td><IoChevronForwardOutline className='Variants__table-bodyIcon' onClick={() => handleVariantDetail(variant.id)} /></td>
                            </tr>
                        </tbody>
                    </table>
                )
            })
        )}

        {(searchTerm.length === 0 && variants.length === 0) ?
            <>
                <p>No variants yet, you can aggregate a new one</p>
            </> : null}

        {(searchTerm.length > 1 && filteredResults.length === 0) ?
            <>
                <p>Variant not found</p>
            </> : null}

        <IoAdd className='Variants__addIcon' onClick={handleAddVariant} />
    </div>

}
export default ListVariants