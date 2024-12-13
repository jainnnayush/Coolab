import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories) {
  return { name, calories }; // Only include necessary columns
}

const rows = [
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
];

export default function TopContributors() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const getContri = async() => {
      var response = await fetch('https://coolab-server.onrender.com/api/top-contributors', {
        method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
        response = await response.json();
        setData(response);
        setLoading(false);
    }
    getContri();
  }, []);

  if(loading){
    return (
      <div>
        loading...
      </div>
    )
  }
  return (
    <TableContainer component={Paper} sx={{ width: '250px' ,height:'100%',cursor:"default",backgroundColor:"#A8DADC"}}> 
      <Table sx={{ minWidth: 100  }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{backgroundColor:"white",color:"#1D3557",fontWeight:"700"}}>Top Contributors</StyledTableCell>
            <StyledTableCell style={{backgroundColor:"white"}}align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" style={{color:"#1D3557",fontWeight:"600"}}>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.contributions}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
