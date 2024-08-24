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
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <div key={user.id}>
            <li>{user.name} <span>{user.username}</span> <small>{user.email}</small></li>
          </div>
        ))}
      </ul>
    </>
  )
}

export default UsersPage;