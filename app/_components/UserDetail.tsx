import { fetchUser } from "../utils/fetchUser";

export default async function UserDetail({ userId }: { userId: string }) {
  const user = await fetchUser(userId);

  return (
    <div className="bg-gray-100 p-4 rounded-md mt-4">
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>名前:</strong> {user.name}</p>
      <p><strong>年齢:</strong> {user.age} 歳</p>
    </div>
  );
}
