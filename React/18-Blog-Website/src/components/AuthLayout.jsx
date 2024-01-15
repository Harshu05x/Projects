import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Loader} from './index';

function Protected({children,authentication}) {
    const navigate = useNavigate();
    const authStatus = useSelector( store => store.Auth.status);
    const [loading,setLoading] = useState(true);

    useEffect( () => {

        if(authentication && authStatus !== authentication)
            navigate("/login");
        else if( !authentication && authStatus !== authentication)
            navigate("/");
        
        setLoading(false);

    },[authStatus,navigate,authentication])

    return  loading ? <Loader /> : <>{children}</>
}

export default Protected;