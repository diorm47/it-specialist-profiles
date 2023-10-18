const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const ADD_PROFILE = "ADD_PROFILE";
const CREATE_USER = "CREATE_USER";
const UPDATE_PROFILE = "UPDATE_PROFILE";
const UPDATE_USER = "UPDATE_USER";

const initialState = {
  is_logged: false,
  user_data: null,
  specialists: [
    {
      id: 1,
      name: "John Doe",
      dob: "1985-02-20",
      age: 38,
      city: "New York",
      education: "MSc in Computer Science",
      specialization: "Frontend Development",
      skills: "React, Redux",
      contacts: "john@example.com",
      username: "johndoe",
      password: "acdc2000",
    },
    // Другие предустановленные анкеты
  ],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        specialists: [...state.specialists, action.payload],
      };
    case LOGIN_USER:
      const user_data = state.specialists.find(
        (profile) =>
          profile.username === action.payload.username &&
          profile.password === action.payload.password
      );
      return {
        ...state,
        is_logged: !!user_data,
        user_data: user_data || null,
      };

    case LOGOUT_USER:
      return {
        ...state,
        is_logged: false,
        user_data: null,
      };

    case ADD_PROFILE:
      if (state.is_logged) {
        const newProfile = {
          ...action.payload,
          id: state.specialists.length + 1,
        };
        return {
          ...state,
          specialists: [...state.specialists, newProfile],
          user_data: newProfile,
        };
      }
      return state;

    case UPDATE_USER:
      return {
        ...state,
        user_data: { ...state.user_data, ...action.payload },
      };

    case UPDATE_PROFILE:
      return {
        ...state,
        specialists: state.specialists.map((profile) => {
          if (profile.id === action.userId) {
            return { ...profile, ...action.payload };
          }
          return profile;
        }),
      };
    default:
      return state;
  }
};

export const createUserAction = (newUser) => {
  return {
    type: CREATE_USER,
    payload: newUser,
  };
};

export const loginUserAction = (username, password) => {
  return {
    type: LOGIN_USER,
    payload: { username, password },
  };
};

export const logoutUserAction = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const addProfileAction = (payload) => {
  return {
    type: ADD_PROFILE,
    payload,
  };
};

export const updateProfileAction = (userId, updatedProfile) => {
  return {
    type: UPDATE_PROFILE,
    userId,
    payload: updatedProfile,
  };
};
export const updateUserAction = (updatedUser) => {
  return {
    type: UPDATE_USER,
    payload: updatedUser,
  };
};

export default appReducer;
