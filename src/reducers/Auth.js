const defaultUserInfo = {
  name: 'Kaline',
  image: 'https://media.licdn.com/dms/image/C4E03AQF40JcAE5t5RA/profile-displayphoto-shrink_800_800/0?e=1548892800&v=beta&t=MuYa7gatntwV7-nZEvznpw5Hn0hVAfpHzOIFQAczn68'
};

export default function reducer(state = {
  user: defaultUserInfo
}) {
  return state;
}
