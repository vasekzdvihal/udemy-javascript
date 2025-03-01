import {MatchReader} from "./MatchReader";
import {CsvFileReader} from "./CsvFileReader";
import {Summary} from "./Summary";

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
