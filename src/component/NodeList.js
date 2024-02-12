import React, {useMemo} from 'react';
import Node from "./Node";

const NodeList = ({list}) => {

    const treeNodes = useMemo(() => {
        const map = {};

        list?.forEach((node) => {
            let key = node.head === null ? 0 : node.head;
            map[key] = map[key] ? [...map[key], node] : [node];
        })
        return map;
    }, [list])


    return (
        <ul className={'node-list'}>
            <Node
                name={"Services"}
                price={null}
                innerNodes={list?.filter(node => node.head === null)}
                map={treeNodes}
                degree={1}
            />
        </ul>
    );
};

export default NodeList;