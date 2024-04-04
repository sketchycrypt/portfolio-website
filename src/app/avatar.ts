async function fetchAvatar(): Promise<string> {
  const username = 'sketchycrypt';
  const avatarUrl = `https://avatars.githubusercontent.com/${username}`;
  return avatarUrl;
}
export default fetchAvatar;
