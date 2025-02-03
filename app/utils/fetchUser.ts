export async function fetchUser(userId: string) {
  const res = await fetch(`http://localhost:3000/users/${userId}`);
  if (!res.ok) {
    throw new Error("ユーザー情報の取得に失敗しました");
  }
  return res.json();
}
