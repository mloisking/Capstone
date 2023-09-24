import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



export default function Users() {
  const [users, setUsers] = useState([])
  const [sortUsers, setSortUsers] = useState([])
  const[singleUser, setSingleUser]=useState([])
  const[updateUser, setUpdateUser]=useState([])


//Get all users from API
  useEffect(() => {
    async function fetchAllUsers() {
      try {
        const response = await fetch('https://fakestoreapi.com/users',)
        const users = await response.json();
        console.log(users, "users");
        setUsers(users);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllUsers();
  }, []);


  //Get a single user from API
  const  getUser = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/users/3', {
         headers: {
        'Content-Type': 'application/json',
      },
     }
    );
    const result = await response.json();
    console.log(User);
    setSingleUser(result)
  } catch (err) {
    console.error(err);
  }
}

//Update a user information

const updateUserInfo= async () => {
  try {
fetch('https://fakestoreapi.com/users/7',{
            method:"PUT",
            body:JSON.stringify(
                {
                email:email,
                username:username,
                password:password,
                name:{
                    firstname:firstname,
                    lastname:lastname,
                },
                address:{
                    city:city,
                    street:street,
                    number:number,
                    zipcode:zipcode,
                    geolocation:{
                        lat:lat,
                        long:long,
                    }
                },
                phone:phone,
                }
            )
        })
        const result = await response.json();
        console.log(User);
        setUpdateUser(result)
      } catch (err) {
        console.error(err);
      }
    }


//   // fetch('https://fakestoreapi.com/users/1')

// //Sort users from API
// // const sort=async=()=>{
//   try{
//   const response=await fetch('https://fakestoreapi.com/users?sort=desc')
//   const result = await response.json();
//   console.log(result);
//   setSortUsers(result);
// } catch (error) {
//   console.error(error);
// }
return (
  <div className="Users">
    <div className="Single User">
    {users.map((user) => {
      return (
        <div key={user.id}>
          <Link to={`/singleuser/${user.id}`}>
         
          <p>{user.name.firstname} {user.name.lastname}</p>
          {/* <p>{user.address.city} {user.address.street} {user.address.number} {user.address.zipcode}
             {user.geolocation.latitude} {user.geolocation.longitude}</p> */}
         
          </Link> 
        </div>
      );
    })}
  </div>
  </div>
)

  }
  