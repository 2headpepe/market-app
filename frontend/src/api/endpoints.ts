const Endpoints = {
  AUTH: {
    LOGIN: "http://89.108.71.29:8003/api/auth/authenticate",
    REFRESH: "/refresh",
    LOGOUT: "/logout",
    PROFILE: "/api/v1/users/profile",
  },
  LISTINGS:{
    MY_LISTINGS:"/api/v1/listings/myListings",
  },
  IMAGES:{
    LISTING_IMAGES:"/api/v1/images/{listingId}"
  },
  ORDERS:{
    SELLS:"/api/v1/orders/sells",
    BUYS:"/api/v1/orders/buys"
  }
};

export default Endpoints;
