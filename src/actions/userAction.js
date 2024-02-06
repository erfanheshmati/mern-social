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
