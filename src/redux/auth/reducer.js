import { types } from "./actions";

const INITIAL_STATE = {
  user: {
    _id: "5ddfd151ddbc8082d02cad4d",
    role: 2,
    email: "merttaylandurmaz@gmail.com",
    password: "qwerty",
    name: "Mert Taylan",
    surname: "Durmaz",
    phoneNumber: "05555555555",
    tokens: [
      {
        _id: { $oid: "5de00c305ffc7193d1be7512" },
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRmZDE1MWRkYmM4MDgyZDAyY2FkNGQiLCJpYXQiOjE1NzQ5NjQyNzJ9.7y3dSyNMTh05EVa78QBRTSIgSRQYgl-3D37r7x6ZD3Q"
      },
      {
        _id: { $oid: "5de00cc6cc5bf99428e16796" },
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRmZDE1MWRkYmM4MDgyZDAyY2FkNGQiLCJpYXQiOjE1NzQ5NjQ0MjJ9.GDpd6NFn0eQcHUXLqvvPh8BGc0DMYPomZBEf8jSKBPo"
      },
      {
        _id: { $oid: "5de06af55ea77aacf7c06179" },
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRmZDE1MWRkYmM4MDgyZDAyY2FkNGQiLCJpYXQiOjE1NzQ5ODg1MzN9.0EYP8cRSo_h3HZ8c-KM8SUsSrKCr_R1tuuyOaQ8aXlw"
      },
      {
        _id: { $oid: "5de070245ea77aacf7c06185" },
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRmZDE1MWRkYmM4MDgyZDAyY2FkNGQiLCJpYXQiOjE1NzQ5ODk4NjB9.bfZWZBp_Z2TbquEtrDdmrwIkduLoGxbTWFqkQURmLAU"
      }
    ],
    __v: { $numberInt: "4" },
    ownerOf: { $oid: "5ddfd151ddbc8082d02cad4e" }
  },
  loggedIn: true
};

function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOGIN_ACTION_TYPE:
      return { ...state, user: action.payload.user, loggedIn: true };
    case types.LOGOUT_ACTION_TYPE:
      return { ...state, user: null, loggedIn: false };
    default:
      return state;
  }
}

export default authReducer;
