import * as joint from "jointjs";

export default class CustomGraph {

    get cells() {
        return this._cells;
    }
    set cells(value) {
        this.isModified = true;
        this._cells = value;
    }
    constructor() {
        this.jointGraph = new joint.dia.Graph;
        this.cells = [];

        this.render();
    }

    addCell(cell) {
        this.cells = [...this.cells, cell];
    }

    render() {
        if (this.isModified) {
            this.isModified = false;
            this.jointGraph.resetCells(this.cells);
        }
        window.requestAnimationFrame(() => this.render());
    }

    clear() {
        this.cells = [];
        this.jointGraph.clear();
    }
}