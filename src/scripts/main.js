import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser} from "prosemirror-model"
import {schema} from "prosemirror-schema-basic"
import {addListNodes} from "prosemirror-schema-list"
import {exampleSetup} from "prosemirror-example-setup"
import LinkNodeSchema from "./Link"
import LinkView from "./LinkNodeView"
// Mix the nodes from prosemirror-schema-list into the basic schema to
// create a schema with list support.
import {MenuItem} from "prosemirror-menu"
import {buildMenuItems} from "prosemirror-example-setup";
import {blockTypeItem} from 'prosemirror-menu'

let menu = buildMenuItems(LinkNodeSchema)

menu.insertMenu.content.push(blockTypeItem(LinkNodeSchema.nodes.linkblock, {title:"Link", label:"link"}))

let linkType = LinkNodeSchema.nodes.linkblock;

console.log("heading type", linkType)


console.log("full menu :", menu.fullMenu)


window.view = new EditorView(document.querySelector("#editor"), {
  state: EditorState.create({
    doc: DOMParser.fromSchema(LinkNodeSchema).parse(document.querySelector("#content")),
    plugins: exampleSetup({schema: LinkNodeSchema, menuContent: menu.fullMenu})
  }),
  nodeViews:{
    paragraph(node) { return new LinkView(node) }
  }
})
