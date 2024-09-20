import Cmp from "./Component";

export class Tooltip extends Cmp {
  constructor(closeNotifierFunction, text, hostElement) {
    super(hostElement);
    this.closeNotifier = closeNotifierFunction;
    this.text = text;

    this.closeTooltip = () => {
      this.detach();
      this.closeNotifier();
    };
    this.create();
  }

  create() {
    const tooltipElement = document.createElement("div");
    tooltipElement.className = "card";
    const tooltipTemplate = document.getElementById("tooltip");
    const tooltipBody = document.importNode(tooltipTemplate.content, true);
    tooltipBody.querySelector("p").textContent = this.text;
    tooltipElement.append(tooltipBody);

    const hostElPostLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;

    const x = hostElPostLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;

    tooltipElement.style.position = "absolute"; // access styles
    tooltipElement.style.left = x + "px"; //500px
    tooltipElement.style.top = y + "px";

    tooltipElement.addEventListener("click", this.closeTooltip);
    this.element = tooltipElement;
  }
}
