const prompt = require("prompt-sync")({ sigint: true });

class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
  traverse = () => {
    let nodes = [this];
    while (nodes.length > 0) {
      let current = nodes.pop();
      console.log(current.name);
      nodes = [...nodes, ...current.children];
    }
  };
  searchForParent = (child) => {
    let nodes = [this];
    while (nodes.length > 0) {
      let current = nodes.pop();
      if (child.name.split(" ")[1] === current.name.split(" ")[0]) {
        return current;
      }
      nodes = [...nodes, ...current.children];
    }
    return "parent does not exist";
  };

  addChild = (child) => {
    if (this.children.length < 2) {
      this.children.push(child);
      console.log(`child ${child.name} has been added`);
    } else console.log("child is an orphan");
  };
}

let childName = prompt("enter child full name : (DONE if finished:)");
const root = new TreeNode("family");
while (childName.toLocaleUpperCase() !== "DONE") {
  let child = new TreeNode(childName);
  let parent = root.searchForParent(child);
  if (parent !== "parent does not exist") {
    parent.addChild(child);
  } else console.log(parent);
  childName = prompt("enter child full name (DONE if finished:)");
}
root.traverse();
