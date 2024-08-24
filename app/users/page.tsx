interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", 
    //{ next: { revalidate: 10 } } // fetch fresh data every 10 seconds
    { cache: 'no-store' } // to render this page as dynamic render
  );
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user) => (
          <tr key={user.id}> 
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td> 
          </tr>
        ))}
        </tbody>
      </table>
      <p>Last Updated: {new Date().toLocaleTimeString()}</p>
    </>
  )
}

export default UsersPage;