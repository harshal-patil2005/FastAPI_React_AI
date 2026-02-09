const BASE_URL = "http://127.0.0.1:8000/users";

export const getUsers = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};


// user is defined in components\UserList.jsx
export const createUser = async (user) => {
  await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
};

export const deleteUser = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
// its just calling delete method 
