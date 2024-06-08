// this is used to centralize all backend endpoints
const api = {
    auth: {
        signIn: '/login/',
        signUp: '/signup/'
    },
    logistics: {
        base: "logistics",
        commodities: "/commodities",
        warehouses: "/warehouses"
    }
};

// here are backend URLs located
export const BACKEND = {
    base: "http://localhost:8000/",
    api: api,
};
