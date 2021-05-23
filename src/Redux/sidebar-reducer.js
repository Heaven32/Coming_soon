let initialState = {
  friendsData: [
    {
      id: 1,
      name: "Jessy",
      ava: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-devushek.jpg",
    },
    {
      id: 2,
      name: "Dayana",
      ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaoTXiilJLzymv72qdm-SSIT5H3tBQnfj0bg&usqp=CAU",
    },
    {
      id: 4,
      name: "Fill",
      ava: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg",
    },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
