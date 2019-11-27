// TYPES
const SAVE_CLUB_LIST = "SAVE_CLUB_LIST";
const CREATE_CLUB = "CREATE_CLUB";

export const types = {
  SAVE_CLUB_LIST,
  CREATE_CLUB
};

// ACTION CREATORS
export const saveClubListActionCreator = clubList => ({
  type: SAVE_CLUB_LIST,
  payload: clubList
});
