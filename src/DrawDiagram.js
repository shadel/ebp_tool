import "jointjs/dist/joint.css";
import * as joint from "jointjs";

import { BuildBbuMagazines } from "./BBU_Magazine";
import { BuildRfuMagazines } from "./RFU_Magazine";
import { BuildAntennas } from "./Antenna";
import { BuildRRUs } from "./RRU";
import { BuildTMAs } from "./TMA";
import { BuildCombiners } from "./Combiner";
import { BuildFeeders } from "./Feeder";
import { BuildExternalConnectionPoints } from "./ExternalConnectionPoint";
import GlobalScope from "./GlobalScope";
import CustomGraph from "./CustomGraph";

export const Draw = function (siteDetail, container, renderCallback) {
    // init grap
    GlobalScope.ebpGraph = new CustomGraph();
    GlobalScope.ebpGraph.clear();

    let paper = new joint.dia.Paper({
        el: container, // container of diagram
        async: true,
        model: GlobalScope.ebpGraph.jointGraph,
        gridSize: 1,
        interactive: function (cellView, method) {
            return cellView instanceof joint.dia.LinkView; // Only allow interaction with joint.dia.LinkView instances.
        }
    });

    paper.on('render:done', (...args) => {
        console.log(args);
        if (renderCallback) {
            renderCallback(paper, ...args);
        } else {
            paper.fitToContent();
        }
    })

    paper.on('cell:mouseover',
        function (cellView, evt, x, y) {
            var cell = cellView.model;
            if (cell.userclass.typename != "BBU_Magazine" && cell.userclass.typename != "RFU_Magazine" && cell.userclass.typename != "Antenna") {
                if (cell.isLink()) {
                    cell.attr('line/stroke', 'red');
                    cell.attr('line/strokeWidth', 3);
                }
                else {
                    cell.attr('body/fill', 'yellow');
                }
            }
        }
    );
    paper.on('cell:mouseout',
        function (cellView, evt, x, y) {
            var cell = cellView.model;
            if (cell.userclass.typename != "BBU_Magazine" && cell.userclass.typename != "RFU_Magazine" && cell.userclass.typename != "Antenna") {
                if (cell.isLink()) {
                    cell.attr('line/stroke', 'black');
                    cell.attr('line/strokeWidth', 1);
                }
                else {
                    cell.attr('body/fill', cell.userclass.color);
                }
            }
        }
    );

    GlobalScope.BBU_Magazines = [];
    BuildBbuMagazines(siteDetail.bbuDataMagazines);
    GlobalScope.RFU_Magazines = [];
    BuildRfuMagazines(siteDetail.rfuDataMagazines);
    GlobalScope.Antennas = [];
    BuildAntennas(siteDetail.antennas);
    GlobalScope.RRUs = [];
    BuildRRUs(siteDetail.rrus);
    GlobalScope.TMAs = [];
    BuildTMAs(siteDetail.tmas);
    GlobalScope.Combiners = [];
    BuildCombiners(siteDetail.combiners);
    GlobalScope.Feeders = [];
    BuildFeeders(siteDetail.feeders);
    GlobalScope.ExternalConnectionPoints = [];
    BuildExternalConnectionPoints(siteDetail.externalConnections)
}