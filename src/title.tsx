import React from 'react';
import { css } from '@emotion/css'


type TitleProps = {
    title:string
}

const style = css({
    color:'red',
    fontSize:40
})

export const Title = ({title}:TitleProps)=>{
    return (
        <div className={style}>
            {title}
        </div>
    )
}