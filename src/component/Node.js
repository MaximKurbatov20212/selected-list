import React, {useMemo, useState} from 'react';
import './Node.css'
import right from '../img/right.png'

const Node = ({name, price, innerNodes, map, degree}) => {
    const [isInnerVisible, setInnerVisible] = useState(false);

    const shift = 10;

    function handleClick() {
        setInnerVisible(!isInnerVisible)
    }

    const sortedNodes = useMemo(() => {
        if (!innerNodes) return []
        return [...innerNodes].sort((node1, node2) => node1.sorthead - node2.sorthead)
    }, [innerNodes])

    return (
        <li style={{marginLeft: `${degree * shift}px`}}>

            <div className={'node'} onClick={handleClick}>
                <img className={`node__img ${isInnerVisible ? 'active' : ''} ${innerNodes ? '' : 'none'}`} src={right} alt={'open list'}/>
                <span className={'node__name'}> {name} </span>
                <span className={'node__price'}> {price !== null  ? '(' : ''} {price} {price !== null ? ')' : ''} </span>
            </div>

            <ul>
                {
                    isInnerVisible &&
                    sortedNodes?.map(node => {
                        return (
                            <Node
                                key={node.id}
                                name={node.name}
                                price={node.price}
                                innerNodes={map?.[node.id]}
                                map={map}
                                degree={degree + 1}
                            />
                        )
                    })
                }
            </ul>
        </li>
    );
};

export default Node;