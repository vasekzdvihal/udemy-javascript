"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
