function repeatNames(list1 = [], list2 = []) {
  let ans = [];
  let names = {};
  list1.forEach((name) => {
    names[name] = 1;
  });
  list2.forEach((name) => {
    if (names[name]) {
      ans.push(name);
    }
  });
  console.log(ans);
}

repeatNames(
  ["alice", "bob", "trudy", "jack"],
  ["janet", "alice", "james", "jack"]
);
