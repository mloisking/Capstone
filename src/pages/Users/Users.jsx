import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



export default function Users() {
  const [users, setUsers] = useState([])


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

return (
  <div className="Users">
    <div className="Single User">
      </div>
    {users.map((user) => {
      return (
        <div key={user.id}>
          <Link to={`/singleuser/${user.id}`}>
          <p>{user.name.firstname} {user.name.lastname}</p>
          </Link> 
        </div>
      );
    })}
  </div>
)

  }