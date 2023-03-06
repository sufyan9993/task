import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { Public, Private } from "./childSections"

const Section = ({ publicData, pvtData }) => {
    const params = useParams()
    const { register, handleSubmit } = useForm()
    const Navigate = useNavigate()
    const [draggedItem, setDraggedItem] = useState('')
    // console.log(draggedItem);

    const { userData, setUserData } = publicData
    const { usersPrivateData, setusersPrivateData } = pvtData
    const submitHandler = (data) => {
        console.log(data);
        if (data.typeSelect === 'private') {
            if (params.id === 'User1') {
                setusersPrivateData({ ...usersPrivateData, User1: [...usersPrivateData.User1, data.textBox] })
            }
            else {
                setusersPrivateData({ ...usersPrivateData, User2: [...usersPrivateData.User2, data.textBox] })
            }
        } else {
            setUserData([...userData, data.textBox])
        }
    }

    return (
        <>
            <div className="addElement">
                <form onSubmit={handleSubmit(submitHandler)}>
                    <select {...register('typeSelect')}>
                        <option value="public">public</option>
                        <option value="private">private</option>
                    </select>
                    <input type="text" {...register('textBox')} />
                    <button type="submit" className="btn">+Add</button>
                </form>
            </div>

            <div className="sections">
                <div onDragLeave={(e) => console.log('object')} >
                    <h1>Public</h1>
                    {<Public data={userData} />}
                </div>
                <div>
                    <h1>private</h1>
                    {
                        <Private setDraggedItem={setDraggedItem} user={params.id === 'User1' ? usersPrivateData.User1 : usersPrivateData.User2} />
                    }
                </div>
            </div>
            <button className="btn" onClick={() => { Navigate('/') }}>LogOut</button>
        </>
    )
}
export default Section