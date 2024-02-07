import * as userApi from "../api/userRequest";

export const updateUser = (id, formData) => async (dispatch) => {
  dispatch({ type: "UPDATE_START" });
  try {
    const { data } = await userApi.updateUser(id, formData);
    dispatch({ type: "UPDATE_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPDATE_FAIL" });
  }
};

export const followUser = (id, data) => async (dispatch) => {
  dispatch({ type: "FOLLOW_USER" });
  userApi.followUser(id, data);
};

export const unfollowUser = (id, data) => async (dispatch) => {
  dispatch({ type: "UNFOLLOW_USER" });
  userApi.unfollowUser(id, data);
};
