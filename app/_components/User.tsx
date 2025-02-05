export default function User({ users }: { users: { id: number; name: string; age: number }[] }) {
  return (
    <ul className="space-y-2 mt-4">
      {users.map((user) => (
        <li key={user.id} className="bg-gray-100 p-4 rounded-md">
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>名前:</strong> {user.name}</p>
          <p><strong>年齢:</strong> {user.age} 歳</p>
        </li>
      ))}
    </ul>
  );
}
