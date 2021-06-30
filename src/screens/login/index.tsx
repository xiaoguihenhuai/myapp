import React from 'react';

const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () =>{ 
    const login = (param:{username:string,password:string}) =>{
        fetch(`${apiUrl}/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(param)
        }).then(
            async(response:Response) =>{
                if(response.ok){
                }
            }
        )
    }

    const handleSubumit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLFormElement).value
        const password = (event.currentTarget.elements[1] as HTMLFormElement).value
        login({username,password})
    }


    return <form onSubmit={handleSubumit}>
        <div>
            <label htmlFor='username'>用户名</label>
            <input type='text' id={'uername'} />
        </div>
        <div>
            <label htmlFor='username'>密码</label>
            <input type='password' id={'password'} />
        </div>
        <button type='submit'>登録</button>
    </form>
}