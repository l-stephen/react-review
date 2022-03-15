import React from 'react'

function Login(props){
    return(
    <>
    <h3 style={{color: "whitesmoke",height: "",position:"center"}}>{props.title}</h3>
    <form>
        <label>{props.users}
            <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
        <br></br>
        <label>{props.pwd}
            <input type="text" name="pwd" />
        </label>
        <input type="submit" value="Submit" />
    </form>
    </>
    )
}

export default Login;


