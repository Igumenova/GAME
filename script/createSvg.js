export const createSvg = (file, id) => {
    const xmlns = "http://www.w3.org/2000/svg";
    const xlinkns = "http://www.w3.org/1999/xlink";

    const svg = document.createElementNS(xmlns, "svg");
    const use = document.createElementNS(xmlns, "use");

    use.setAttributeNS(xlinkns, "href", `./img/svg/${file}#${id}`);
    use.setAttribute("width", "100%");
    use.setAttribute("height", "100%");
    svg.appendChild(use);
    return svg;
};
