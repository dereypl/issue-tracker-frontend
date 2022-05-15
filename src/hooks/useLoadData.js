import {useEffect, useState} from "react";
import {fetchItems} from "../services/httpService";

const useLoadData = ({restUrl}) => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const loadData = async () => {
        try {
            setIsLoading(true)
            const {data: {results}} = await fetchItems({restUrl})
            setItems(results)
        } catch (e) {
            console.error(`Failed to load ${restUrl}!`)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadData()
    }, [restUrl])

    return {
        items,
        isLoading,
    }
}

export default useLoadData