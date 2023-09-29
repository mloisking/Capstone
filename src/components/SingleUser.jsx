import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function SingleUser() {
    const {id} = useParams ()
    const [singleUser, setSingleUser] = useState([])
    
//Get a single user from API
useEffect(() => {

        const getUser = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/users/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
                )
                
                const result = await response.json();
                console.log(result);
                setSingleUser(result)
            } catch (err) {
                console.error(err);
            }
        }

        getUser()
    }, []);

//Single users info
    return (
        <div className="Users">
            <div className="Single User">
                <h1>{singleUser?.name?.firstname} {singleUser?.name?.lastname} </h1>
                <p>{singleUser.email}</p>
                <p>{singleUser.phone}</p>
                <p>{singleUser?.address?.number}</p>
                <p>{singleUser?.address?.street}</p>
                <p>{singleUser?.address?.city}</p>
                <p>{singleUser?.address?.zipcode}</p>
            </div>
        </div>
    )

}

