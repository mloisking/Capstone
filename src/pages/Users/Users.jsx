import { useEffect, useState } from 'react';

//Get all users
export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchAllUsers() {
      try {
        const response = await fetch('https://fakestoreapi.com/users')
        const users = await response.json();
        console.log(users, "users");
        setUsers(users);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllUsers();
  }, []);

  return (
    <div className="Users">
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.email}</p>
            <p>{user.username}</p>
            <p>{user.firstname} {user.lastname}</p>
            {/* <p>{user.address.city} {user.address.street} {user.address.number} {user.address.zipcode}
             {user.geolocation.latitude} {user.geolocation.longitude}</p> */}
            <p>{user.phone}</p>
          </div>
        );
      })}
    </div>
  )
}
