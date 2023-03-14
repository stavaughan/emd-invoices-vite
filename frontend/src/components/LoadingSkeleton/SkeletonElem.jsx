import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonElem = ({ width, height, style, className }) => {

    return (
        <Skeleton
            {...className && { className }}
            style={{
                opacity: '0.7',
                ...width && { width },
                ...height && { height },
                ...style || {}
            }}
        />
    )
}

export default SkeletonElem
