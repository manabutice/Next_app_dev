export async function fetchUser(userId: string) {
  try {
    // 🚀 重要！Docker内部では `api:3000` を使う
    const res = await fetch(`http://api:3001/api/users/${userId}`);

    if (!res.ok) {
      throw new Error(`ユーザー情報の取得に失敗しました: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error("APIエラー:", error);
    throw new Error("ユーザー情報の取得に失敗しました。");
  }
}
