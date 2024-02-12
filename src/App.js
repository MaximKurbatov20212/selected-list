import './App.css';
import NodeList from "./component/NodeList";
import {useEffect, useState} from "react";

import React from 'react';
import axios from "axios";

const App = () => {
    const [nodes, setNodes] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => {
        getServices()
    }, [])


    const getServices = async () => {
        try {
            setIsLoading(() => true)
            const {data} = await axios.get("http://localhost:8080/api/service");
            setNodes(data)
            setIsLoading(() => false)
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="app">
            <div className="container">
                {
                    isLoading ?
                        <div className={'app__loading'}>
                            <span className={'app__loading-title'}>Загрузка...</span>
                        </div>
                        :
                        <NodeList list={nodes}/>
                }
            </div>
        </div>
    );
};

export default App;