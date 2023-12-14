import React, { useEffect, useState } from "react";
import { API_KEY } from '@env';
import { FetchResponse, ApiResponse } from '../types';

 const useFetch = (param: string): FetchResponse => {
    const [data, setData] = useState<ApiResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadData() {
            setLoading(true);
            let url = `${param}?api_key=${API_KEY}&include_adult=false`;
            //console.log(url);
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch (err) {
                console.log('err', err);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, [param]);
    return { data, loading };
};

export default useFetch;