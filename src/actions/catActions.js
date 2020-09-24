export function fetchCats() {
  const ENDPOINT = "https://learn-co-curriculum.github.io/cat-api/cats.json";

  return (dispatch) => {
    dispatch({ type: "LOADING_CATS" });
    fetch(ENDPOINT)
      .then((resp) => resp.json())
      .then((cats) => dispatch(addCats(cats.images)));
  };
}

export function addCats(cats) {
  return { type: "ADD_CATS", cats: cats };
}
