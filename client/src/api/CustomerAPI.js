import {useState,useEffect} from 'react'
import axios from 'axios'

function CustomerAPI(){
    const [leads, setLeads] = useState([])
    const [callback, setCallback] = useState(false)
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

    const baseURL="http://localhost:5000"

    useEffect(() =>{
        const getLeads = async () => {
            const res = await axios.get(`${baseURL}/api/lead?limit=${page*9}&${sort}&title[regex]=${search}`)
            setLeads(res.data.leads)
            setResult(res.data.result)
        }
        getLeads()
    },[callback, sort, search, page])
    
    return {
        leads: [leads, setLeads],
        callback: [callback, setCallback],
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
        result: [result, setResult]
    }
}

export default CustomerAPI