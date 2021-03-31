import React from 'react';
// import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//   return { id, date, name, shipTo, paymentMethod, amount };
// }

const sentimentsData = [
    {
        "id": 2,
        "created_at": "2021-03-21T16:20:34.607514Z",
        "average_score": 0.739429831504822,
        "positive_sentiment": 0,
        "negative_sentiment": 1,
        "stock": {
            "symbol": "ADM"
        }
    },
    {
        "id": 3,
        "created_at": "2021-03-21T16:20:34.897537Z",
        "average_score": 0.674659788608551,
        "positive_sentiment": 1,
        "negative_sentiment": 0,
        "stock": {
            "symbol": "BIO"
        }
    },
    {
        "id": 4,
        "created_at": "2021-03-21T16:20:34.899542Z",
        "average_score": 0.674659788608551,
        "positive_sentiment": 1,
        "negative_sentiment": 0,
        "stock": {
            "symbol": "BIO.B"
        }
    },
    {
        "id": 5,
        "created_at": "2021-03-21T16:20:35.023514Z",
        "average_score": 0.70326954126358,
        "positive_sentiment": 2,
        "negative_sentiment": 1,
        "stock": {
            "symbol": "CCE"
        }
    },
    {
        "id": 6,
        "created_at": "2021-03-21T16:20:35.128535Z",
        "average_score": 0.703447618792134,
        "positive_sentiment": 11,
        "negative_sentiment": 20,
        "stock": {
            "symbol": "CNW"
        }
    },
    {
        "id": 7,
        "created_at": "2021-03-21T16:20:35.259514Z",
        "average_score": 0.678860137237583,
        "positive_sentiment": 705,
        "negative_sentiment": 1753,
        "stock": {
            "symbol": "DANG"
        }
    },
    {
        "id": 8,
        "created_at": "2021-03-21T16:20:35.340514Z",
        "average_score": 0.669770605862141,
        "positive_sentiment": 3,
        "negative_sentiment": 5,
        "stock": {
            "symbol": "DRQ"
        }
    },
    {
        "id": 9,
        "created_at": "2021-03-21T16:20:35.432513Z",
        "average_score": 0.678860137237583,
        "positive_sentiment": 705,
        "negative_sentiment": 1753,
        "stock": {
            "symbol": "EJ"
        }
    },
    {
        "id": 10,
        "created_at": "2021-03-21T16:20:35.732528Z",
        "average_score": 0.618173499902089,
        "positive_sentiment": 0,
        "negative_sentiment": 3,
        "stock": {
            "symbol": "GTS"
        }
    },
    {
        "id": 11,
        "created_at": "2021-03-21T16:20:35.760513Z",
        "average_score": 0.664757026566399,
        "positive_sentiment": 12,
        "negative_sentiment": 24,
        "stock": {
            "symbol": "HCLP"
        }
    },
    {
        "id": 12,
        "created_at": "2021-03-21T16:20:36.032583Z",
        "average_score": 0.70326954126358,
        "positive_sentiment": 2,
        "negative_sentiment": 1,
        "stock": {
            "symbol": "KO"
        }
    },
    {
        "id": 13,
        "created_at": "2021-03-21T16:20:36.117515Z",
        "average_score": 0.681544478911334,
        "positive_sentiment": 575,
        "negative_sentiment": 1670,
        "stock": {
            "symbol": "LLL"
        }
    },
    {
        "id": 14,
        "created_at": "2021-03-21T16:20:36.151514Z",
        "average_score": 0.692204427363268,
        "positive_sentiment": 24,
        "negative_sentiment": 43,
        "stock": {
            "symbol": "LZB"
        }
    },
    {
        "id": 15,
        "created_at": "2021-03-21T16:20:36.155516Z",
        "average_score": 0.670283006297217,
        "positive_sentiment": 2,
        "negative_sentiment": 7,
        "stock": {
            "symbol": "MAA"
        }
    },
    {
        "id": 16,
        "created_at": "2021-03-21T16:20:36.502576Z",
        "average_score": 0.670411743720372,
        "positive_sentiment": 12,
        "negative_sentiment": 18,
        "stock": {
            "symbol": "ODC"
        }
    },
    {
        "id": 17,
        "created_at": "2021-03-21T16:20:36.767518Z",
        "average_score": 0.640572981400923,
        "positive_sentiment": 3,
        "negative_sentiment": 8,
        "stock": {
            "symbol": "RKT"
        }
    },
    {
        "id": 18,
        "created_at": "2021-03-21T16:20:36.904517Z",
        "average_score": 0.639673837593624,
        "positive_sentiment": 2,
        "negative_sentiment": 5,
        "stock": {
            "symbol": "SNA"
        }
    },
    {
        "id": 19,
        "created_at": "2021-03-21T16:20:37.151530Z",
        "average_score": 0.680836379348119,
        "positive_sentiment": 945,
        "negative_sentiment": 2699,
        "stock": {
            "symbol": "TMUS"
        }
    },
    {
        "id": 20,
        "created_at": "2021-03-21T16:20:37.199531Z",
        "average_score": 0.680836379348119,
        "positive_sentiment": 945,
        "negative_sentiment": 2699,
        "stock": {
            "symbol": "TMUS$A"
        }
    },
    {
        "id": 21,
        "created_at": "2021-03-21T16:20:37.423545Z",
        "average_score": 0.649729669094086,
        "positive_sentiment": 6,
        "negative_sentiment": 11,
        "stock": {
            "symbol": "WMT"
        }
    },
    {
        "id": 22,
        "created_at": "2021-03-21T16:20:37.647513Z",
        "average_score": 0.686548923564314,
        "positive_sentiment": 852,
        "negative_sentiment": 2352,
        "stock": {
            "symbol": "AMRK"
        }
    },
    {
        "id": 23,
        "created_at": "2021-03-21T16:20:37.831514Z",
        "average_score": 0.674659788608551,
        "positive_sentiment": 1,
        "negative_sentiment": 0,
        "stock": {
            "symbol": "BPTH"
        }
    },
    {
        "id": 24,
        "created_at": "2021-03-21T16:20:37.840513Z",
        "average_score": 0.674659788608551,
        "positive_sentiment": 1,
        "negative_sentiment": 0,
        "stock": {
            "symbol": "BRLI"
        }
    },
    {
        "id": 25,
        "created_at": "2021-03-21T16:20:37.876516Z",
        "average_score": 0.678325553175429,
        "positive_sentiment": 20,
        "negative_sentiment": 51,
        "stock": {
            "symbol": "CALM"
        }
    },
    {
        "id": 26,
        "created_at": "2021-03-21T16:20:38.030585Z",
        "average_score": 0.70326954126358,
        "positive_sentiment": 2,
        "negative_sentiment": 1,
        "stock": {
            "symbol": "COKE"
        }
    },
    {
        "id": 27,
        "created_at": "2021-03-21T16:20:38.272509Z",
        "average_score": 0.545038521289825,
        "positive_sentiment": 0,
        "negative_sentiment": 1,
        "stock": {
            "symbol": "ERIC"
        }
    },
    {
        "id": 28,
        "created_at": "2021-03-21T16:20:38.301519Z",
        "average_score": 0.661351000720804,
        "positive_sentiment": 22,
        "negative_sentiment": 66,
        "stock": {
            "symbol": "EVK"
        }
    },
    {
        "id": 29,
        "created_at": "2021-03-21T16:20:38.343514Z",
        "average_score": 0.728043675422668,
        "positive_sentiment": 2,
        "negative_sentiment": 0,
        "stock": {
            "symbol": "FDML"
        }
    },
    {
        "id": 30,
        "created_at": "2021-03-21T16:20:38.396515Z",
        "average_score": 0.695956458952027,
        "positive_sentiment": 327,
        "negative_sentiment": 1307,
        "stock": {
            "symbol": "FLWS"
        }
    },
    {
        "id": 31,
        "created_at": "2021-03-21T16:20:38.464511Z",
        "average_score": 0.70490825176239,
        "positive_sentiment": 1,
        "negative_sentiment": 1,
        "stock": {
            "symbol": "GAI"
        }
    },
    {
        "id": 32,
        "created_at": "2021-03-21T16:20:38.523513Z",
        "average_score": 0.679082962515714,
        "positive_sentiment": 695,
        "negative_sentiment": 1564,
        "stock": {
            "symbol": "GIII"
        }
    },
    {
        "id": 33,
        "created_at": "2021-03-21T16:20:38.704516Z",
        "average_score": 0.659412582715352,
        "positive_sentiment": 2,
        "negative_sentiment": 1,
        "stock": {
            "symbol": "IIVI"
        }
    },
    {
        "id": 34,
        "created_at": "2021-03-21T16:20:38.820516Z",
        "average_score": 0.677148103713989,
        "positive_sentiment": 2,
        "negative_sentiment": 3,
        "stock": {
            "symbol": "KLAC"
        }
    },
    {
        "id": 35,
        "created_at": "2021-03-21T16:20:38.840510Z",
        "average_score": 0.753973960876465,
        "positive_sentiment": 0,
        "negative_sentiment": 1,
        "stock": {
            "symbol": "LABL"
        }
    },
    {
        "id": 36,
        "created_at": "2021-03-21T16:20:38.946561Z",
        "average_score": 0.670283006297217,
        "positive_sentiment": 2,
        "negative_sentiment": 7,
        "stock": {
            "symbol": "MCEP"
        }
    },
    {
        "id": 37,
        "created_at": "2021-03-21T16:20:38.976516Z",
        "average_score": 0.753973960876465,
        "positive_sentiment": 0,
        "negative_sentiment": 1,
        "stock": {
            "symbol": "MFLX"
        }
    },
    {
        "id": 38,
        "created_at": "2021-03-21T16:20:39.016517Z",
        "average_score": 0.591734230518341,
        "positive_sentiment": 0,
        "negative_sentiment": 1,
        "stock": {
            "symbol": "MOBI"
        }
    },
    {
        "id": 39,
        "created_at": "2021-03-21T16:20:39.230529Z",
        "average_score": 0.678307731946309,
        "positive_sentiment": 10,
        "negative_sentiment": 20,
        "stock": {
            "symbol": "PCTI"
        }
    },
    {
        "id": 40,
        "created_at": "2021-03-21T16:20:39.239510Z",
        "average_score": 0.671355071949632,
        "positive_sentiment": 29,
        "negative_sentiment": 44,
        "stock": {
            "symbol": "PDEX"
        }
    },
    {
        "id": 41,
        "created_at": "2021-03-21T16:20:39.272513Z",
        "average_score": 0.67195600271225,
        "positive_sentiment": 1,
        "negative_sentiment": 0,
        "stock": {
            "symbol": "PKOH"
        }
    },
    {
        "id": 42,
        "created_at": "2021-03-21T16:20:39.286513Z",
        "average_score": 0.836430072784424,
        "positive_sentiment": 0,
        "negative_sentiment": 1,
        "stock": {
            "symbol": "PMCS"
        }
    },
    {
        "id": 43,
        "created_at": "2021-03-21T16:20:39.442514Z",
        "average_score": 0.570073902606964,
        "positive_sentiment": 0,
        "negative_sentiment": 1,
        "stock": {
            "symbol": "ROBO"
        }
    },
    {
        "id": 44,
        "created_at": "2021-03-21T16:20:39.608513Z",
        "average_score": 0.702404081821442,
        "positive_sentiment": 0,
        "negative_sentiment": 1,
        "stock": {
            "symbol": "SPAN"
        }
    },
    {
        "id": 45,
        "created_at": "2021-03-21T16:20:39.707539Z",
        "average_score": 0.674659788608551,
        "positive_sentiment": 1,
        "negative_sentiment": 0,
        "stock": {
            "symbol": "TECH"
        }
    },
    {
        "id": 46,
        "created_at": "2021-03-21T16:20:39.780515Z",
        "average_score": 0.689690056774351,
        "positive_sentiment": 7,
        "negative_sentiment": 11,
        "stock": {
            "symbol": "TTWO"
        }
    },
    {
        "id": 47,
        "created_at": "2021-03-21T16:20:39.809518Z",
        "average_score": 0.728991842269897,
        "positive_sentiment": 2,
        "negative_sentiment": 3,
        "stock": {
            "symbol": "UG"
        }
    },
    {
        "id": 48,
        "created_at": "2021-03-21T16:20:39.822517Z",
        "average_score": 0.706700767789568,
        "positive_sentiment": 2,
        "negative_sentiment": 5,
        "stock": {
            "symbol": "UNXL"
        }
    },
    {
        "id": 49,
        "created_at": "2021-03-21T16:20:39.899518Z",
        "average_score": 0.501777648925781,
        "positive_sentiment": 1,
        "negative_sentiment": 0,
        "stock": {
            "symbol": "VSCI"
        }
    },
    {
        "id": 50,
        "created_at": "2021-03-21T16:20:39.925513Z",
        "average_score": 0.664616847038269,
        "positive_sentiment": 1,
        "negative_sentiment": 4,
        "stock": {
            "symbol": "WDFC"
        }
    },
    {
        "id": 51,
        "created_at": "2021-03-21T16:20:39.943514Z",
        "average_score": 0.709605295688678,
        "positive_sentiment": 16,
        "negative_sentiment": 62,
        "stock": {
            "symbol": "WILN"
        }
    }
]

// function preventDefault(event) {
//   event.preventDefault();
// }

// const useStyles = makeStyles((theme) => ({
//   seeMore: {
//     marginTop: theme.spacing(3),
//   },
// }));

export default function Orders() {
//   const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Sentiments</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Stock</TableCell>
            <TableCell>Positive</TableCell>
            <TableCell>Negative</TableCell>
            <TableCell>Average</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sentimentsData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.stock.symbol}</TableCell>
              <TableCell>{row.positive_sentiment}</TableCell>
              <TableCell>{row.negative_sentiment}</TableCell>
              <TableCell>{row.average_score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}
    </React.Fragment>
  );
}