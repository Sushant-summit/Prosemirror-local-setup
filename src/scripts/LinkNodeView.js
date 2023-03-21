 class LinkView {
  constructor(node) {
    console.log("node link view called...")
    this.dom = this.contentDOM = document.createElement("a");
    if (node.content.size == 0) this.dom.classList.add("empty");
  }

  update(node) {
    if (node.type.name != "paragraph") return false;
    if (node.content.size > 0) this.dom.classList.remove("empty");
    else this.dom.classList.add("empty");
    return true;
  }
}


export default class ParagraphView {
    constructor(node) {
      this.dom = this.contentDOM = document.createElement("p")
      if (node.content.size == 0) this.dom.classList.add("empty")
    }
  
    update(node) {
      if (node.type.name != "paragraph") return false
      if (node.content.size > 0) this.dom.classList.remove("empty")
      else this.dom.classList.add("empty")
      return true
    }
  }