const API_URL = "https://dummyjson.com";

export async function login(username, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const json = await response.json();
  return json.token;
}

export async function getProducts() {
  const token = window.localStorage.getItem("token");
  const response = await fetch(`${API_URL}/products`,
    {
      method: "GET",
      authorization: {authorization: `Bearer ${token}`},
      
    }//no se le pone headers porque es metodo get
  );
  const json = await response.json();
  return json.products;
}

// tarea 1: crear una funcion que reciba un id y retorne un producto necesitamos useState

export async function getProductById(id) {
  const token = window.localStorage.getItem("token");
  const response = await fetch(`${API_URL}/products/${id}`,
    {
      method: "GET",
      authorization: {authorization: `Bearer ${token}`},
    }
  );
  const json = await response.json();
  return json;
}