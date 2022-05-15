import {useEffect, useState} from "react";
import {fetchItems} from "../services/httpService";

const useLoadData = ({restUrl}) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    const loadData = async () => {
        try {
            setLoading(true)
            const {data: {results}} = await fetchItems({restUrl})
            setItems(results)
        } catch (e) {
            console.error(`Failed to load ${restUrl}!`)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadData()
    }, [restUrl])

    return {
        items,
        loading,
    }
}

export default useLoadData