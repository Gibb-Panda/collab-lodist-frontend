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

export const BACKEND = {
    base: "http://localhost:8000/",
    api: api,
};
