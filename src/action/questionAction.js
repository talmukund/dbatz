import * as types from "./actionTypes";

export async function loadQuestion(question) {
  await fetchDbData(question);
  return {
    type: types.LOAD_QUESTION,
    payload: { result: question }
  };
}

function fetchDbData(question) {
  const data = new FormData();
  data.append("json", JSON.stringify(question));

 return fetch("/question/data", {
    method: "POST",
    body: data
  }).then(function(res) {
    return res.json();
  });
}
