import { useEffect, useState } from "react";

/**
 * Fetchコンポーネントを使わずにデータを受信のみしたい場合に使用
 * @param uri 取得対象
 * @returns 
 */
export function useFetch(uri: string) {
    const [data, setData ] = useState<any>();
    const [error, setError ] = useState<any>();
    const [ loading, setLoading ] = useState<boolean>(true);

    useEffect(() => {
        if(!uri) return;

        setLoading(true);
        fetch(uri)
            .then( data => data.json)
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, [uri]);

    return {
        loading, data, error
    };
}


export function Fetch({url, renderSuccess, loadingFallback=(<p></p>), renderError= (error:any) => (<pre>{JSON.stringify(error, null, 2)}</pre>)}:
{url: string,renderSuccess: JSX.Element,loadingFallback?: JSX.Element, renderError?: any}): JSX.Element {
    const { loading, data, error } = useFetch(url);

    if(error){
        return renderError(error);
    }
    if(loading){
        return loadingFallback;
    }
    if(data){
        return renderSuccess;
    }
    return (<></>);
}

export default Fetch;