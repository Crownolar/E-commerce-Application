import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { alProduct } from '../ProductState/ProductState'




const ApiRedux = () => {
    const dispatch = useDispatch()
    const url = "https://fakestoreapi.com/products";

    const getApi = () => {
        axios.get(url)
        .then(res => dispatch(alProduct(res.data)))
    }

    useEffect(() => {
        getApi()
    }, [])
}

export default ApiRedux