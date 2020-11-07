function stringifyNumbers(ob) {
  const modifiedObj = {};
  for (key in ob) {
    if (typeof ob[key] === "number") {
      modifiedObj[key] = "" + ob[key];
    } else if (typeof ob[key] === "object" && !Array.isArray(ob[key])) {
      modifiedObj[key] = stringifyNumbers(ob[key]);
    } else {
      modifiedObj[key] = ob[key];
    }
  }
  return modifiedObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
