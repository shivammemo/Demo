import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Render() {
    const[users, setUsers] = useState([])

    useEffect(() =>{
    setTimeout(()=>{
        axios.get('/users/')
      .then(res => {
        setUsers(res.data)
      })
      .catch((error) => {
        console.log(error);
      })
    }, 250)
})

    const getTechnology = (obj) => {
        let tech = Object.keys(obj).filter(t => obj[t])
        let s = ""
        for (let i = 0; i < tech.length; i++) {
            if (tech[i] === "Cplus") {
                s = s + "C++  "
            } else {
                s = s + tech[i] + "  "
            }
        }
        return s
    }

    // eslint-disable-next-line no-restricted-globals
    const confirmDelete = (id) =>{
        let x = window.confirm("Are you sure you want to delete?");
        if (x){
            axios.delete('/users/delete-user/' + id)
            .then((res) => {
                console.log('Student successfully deleted!')
                window.location.reload();
            }).catch((error) => {
                console.log(error)
            })
        }
        else
            return false;
    }

    // const handleDelete = (id) =>{
    //     if(confirmDelete()){
    //     axios.delete('/users/delete-user/' + id)
    //         .then((res) => {
    //             console.log('Student successfully deleted!')
    //             window.location.reload();
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    //     }else{
    //         console.log("Not Delete")
    //     }
    // }

    const renderObj = (object, index) => (
        <tr key={index}>
            {/* <td><img src={object.file} alt="" height="100px" width="100px" /></td> */}
            <td>{object.name}</td>
            <td>{object.email}</td>
            <td>{object.mobile}</td>
            <td>{object.gender}</td>
            <td>{object.category}</td>
            <td>{getTechnology(object.technology)}</td>
            <td> 
                <Link to={"/edit-user/" + object._id}><button className="btn-edit btn-sm btn-primary">Edit</button></Link>
            </td>
            <td>
            <button onClick={() => confirmDelete(object._id)} className="btn-delete btn-danger btn-sm">Delete</button>
            </td>
        </tr>
    )
    return (
        <div className="container2">
            <div className="table-responsive table-sm">
                <table className="table">
                    <thead>
                        <tr>
                            {/* <th>Image</th> */}
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Gender</th>
                            <th>Category</th>
                            <th>Technology</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users !== null && users.map(renderObj)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Render
