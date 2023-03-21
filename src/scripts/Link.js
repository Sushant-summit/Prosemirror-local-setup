import {Schema, DOMParser} from "prosemirror-model"
import {schema} from "prosemirror-schema-basic"

const LinkNodeSpec = {

  content: "inline*",
  group: "block",
  draggable: true,
  name:"Link",

  toDOM: (node) => {
    return ["a", 0];
  },

  parseDOM: [
    {
      tag: "a",
    },
  ],
};


const LinkNodeSchema = new Schema({
    nodes: schema.spec.nodes.addToEnd('linkblock', LinkNodeSpec),
    marks: schema.spec.marks
})

console.log("nodes : ", LinkNodeSpec.nodes)
  

export default LinkNodeSchema;