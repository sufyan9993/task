import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { users } from '../users'
const LoginPage = () => {
    const [errMessage, setErrMessage] = useState('')
    const { register, handleSubmit } = useForm()
    const Navigate = useNavigate()

    const submitHandler = (data) => {
        // console.log(data);
        const { userName, password } = data
        const user = users.find((user) => user.username === userName && user.password === password)
        console.log(user);
        if (user) {
            setErrMessage('')
            Navigate('/dashboard/'+user.id)
        }
        else {
            setErrMessage('username or password incorrect')
        }
    }

    return (
        <div className="LoginPage">
            <form onSubmit={handleSubmit(submitHandler)} >
                <div style={{ color: 'red' }}>
                    {errMessage}
                </div>
                <div>
                    <input type="text" {...register('userName', { required: true })} placeholder='Username' />
                </div>
                <div>
                    <input autoComplete="123" type='password' {...register('password', { required: true })} placeholder='Password' />
                </div>
                <div>
                    <button type='submit' className="btn">Login</button>
                </div>
            </form>
        </div>
    )
}
export default LoginPage