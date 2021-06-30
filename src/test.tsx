import React,{useState} from 'react';
import { css } from '@emotion/css'



export const Test = ()=>{
const [show, setshow] = useState(true)
const style = css({
    color:show?'red':'',
    fontSize:40
})

const styles ={
    buttonStyle:css({
        border:'2px solid red',
        display:'inline-block',
        padding:10,
        fontWeight:'bold',
        borderRadius:8
    }),
    label:css({
        color:show?"yellow":'cyan'
    })
}

const hanleShow = ()=>{
    setshow(!show)
}
    return (
        <>
        <div onClick={hanleShow} className={styles.buttonStyle}>
            show
        </div>
        <h1 className={style}>111</h1>
        <h1 className={styles.label}>111</h1>
        </>
    )
}