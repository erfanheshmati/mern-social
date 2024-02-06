import * as postApi from "../api/postRequest";

export const getPostsTimeline = (id) => async (dispatch) => {
  dispatch({ type: "RETRIEVING_START" });
  try {
    const { data } = await postApi.getPostsTimeline(id);
    dispatch({ type: "RETRIEVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETRIEVING_FAIL" });
  }
};
