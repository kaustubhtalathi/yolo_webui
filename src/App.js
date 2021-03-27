import "./App.css";
import BarChart from './BarChart';
import TableData from "./tableData";
import Header from "./header";

const data = [
    { year: 1980, efficiency: 24.3, sales: 8949000 },
    { year: 1985, efficiency: 27.6, sales: 10979000 },
    { year: 1990, efficiency: 28, sales: 9303000 },
    { year: 1991, efficiency: 28.4, sales: 8185000 },
    { year: 1992, efficiency: 27.9, sales: 8213000 },
    { year: 1993, efficiency: 28.4, sales: 8518000 },
    { year: 1994, efficiency: 28.3, sales: 8991000 },
    { year: 1995, efficiency: 28.6, sales: 8620000 },
    { year: 1996, efficiency: 28.5, sales: 8479000 },
    { year: 1997, efficiency: 28.7, sales: 8217000 },
    { year: 1998, efficiency: 28.8, sales: 8085000 },
    { year: 1999, efficiency: 28.3, sales: 8638000 },
    { year: 2000, efficiency: 28.5, sales: 8778000 },
    { year: 2001, efficiency: 28.8, sales: 8352000 },
    { year: 2002, efficiency: 29, sales: 8042000 },
    { year: 2003, efficiency: 29.5, sales: 7556000 },
    { year: 2004, efficiency: 29.5, sales: 7483000 },
    { year: 2005, efficiency: 30.3, sales: 7660000 },
    { year: 2006, efficiency: 30.1, sales: 7762000 },
    { year: 2007, efficiency: 31.2, sales: 7562000 },
    { year: 2008, efficiency: 31.5, sales: 6769000 },
    { year: 2009, efficiency: 32.9, sales: 5402000 },
    { year: 2010, efficiency: 33.9, sales: 5636000 },
    { year: 2011, efficiency: 33.1, sales: 6093000 },
    { year: 2012, efficiency: 35.3, sales: 7245000 },
    { year: 2013, efficiency: 36.4, sales: 7586000 },
    { year: 2014, efficiency: 36.5, sales: 7708000 },
    { year: 2015, efficiency: 37.2, sales: 7517000 },
    { year: 2016, efficiency: 37.7, sales: 6873000 },
    { year: 2017, efficiency: 39.4, sales: 6081000 },
];

const tableData = [
    {
        created_at: "2021-03-21T16:20:34.607514Z",
        updated_at: "2021-03-21T16:20:34.607514Z",
        average_score: 0.7394298315048218,
        positive_sentiment: 0,
        negative_sentiment: 1,
        stock: "ADM",
        id: 1,
    },
    {
        created_at: "2021-03-21T16:20:34.897537Z",
        updated_at: "2021-03-21T16:20:34.897537Z",
        average_score: 0.674659788608551,
        positive_sentiment: 1,
        negative_sentiment: 0,
        stock: "BIO",
        id: 2,
    },
    {
        created_at: "2021-03-21T16:20:34.899542Z",
        updated_at: "2021-03-21T16:20:34.899542Z",
        average_score: 0.674659788608551,
        positive_sentiment: 1,
        negative_sentiment: 0,
        stock: "BIO.B",
        id: 3,
    },
    {
        created_at: "2021-03-21T16:20:35.023514Z",
        updated_at: "2021-03-21T16:20:35.024522Z",
        average_score: 0.7032695412635803,
        positive_sentiment: 2,
        negative_sentiment: 1,
        stock: "CCE",
        id: 4,
    },
    {
        created_at: "2021-03-21T16:20:35.128535Z",
        updated_at: "2021-03-21T16:20:35.128535Z",
        average_score: 0.7034476187921339,
        positive_sentiment: 11,
        negative_sentiment: 20,
        stock: "CNW",
        id: 5,
    },
    {
        created_at: "2021-03-21T16:20:35.259514Z",
        updated_at: "2021-03-21T16:20:35.259514Z",
        average_score: 0.678860137237583,
        positive_sentiment: 705,
        negative_sentiment: 1753,
        stock: "DANG",
        id: 6,
    },
    {
        created_at: "2021-03-21T16:20:35.340514Z",
        updated_at: "2021-03-21T16:20:35.340514Z",
        average_score: 0.6697706058621407,
        positive_sentiment: 3,
        negative_sentiment: 5,
        stock: "DRQ",
        id: 7,
    },
    {
        created_at: "2021-03-21T16:20:35.432513Z",
        updated_at: "2021-03-21T16:20:35.432513Z",
        average_score: 0.678860137237583,
        positive_sentiment: 705,
        negative_sentiment: 1753,
        stock: "EJ",
        id: 8,
    },
    {
        created_at: "2021-03-21T16:20:35.732528Z",
        updated_at: "2021-03-21T16:20:35.732528Z",
        average_score: 0.6181734999020895,
        positive_sentiment: 0,
        negative_sentiment: 3,
        stock: "GTS",
        id: 9,
    },
    {
        created_at: "2021-03-21T16:20:35.760513Z",
        updated_at: "2021-03-21T16:20:35.760513Z",
        average_score: 0.6647570265663995,
        positive_sentiment: 12,
        negative_sentiment: 24,
        stock: "HCLP",
        id: 10,
    },
];

function App() {
    return (
        <div>
            <Header></Header>
            <TableData data={tableData} />
            <BarChart data={data} />
        </div>
    );
}

export default App;
