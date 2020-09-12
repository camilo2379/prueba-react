const defaultUserInfo = {
  name: 'Camilo Rojas',
  image: 'https://images.vexels.com/media/users/3/137047/isolated/preview/5831a17a290077c646a48c4db78a81bb-perfil-de-usuario-icono-azul-by-vexels.png'
};

export default function reducer(state = {
  user: defaultUserInfo
}, action) {
  return state;
}