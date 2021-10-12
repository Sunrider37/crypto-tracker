import { AppBar, Container, createTheme, 
    makeStyles, MenuItem, Select, Toolbar,
     Typography, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import { CryptoState } from '../CryptoContext'

const useStyles = makeStyles(() => ({
    title: {
        flex:1,
        color: 'gold',
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
}))


const Header = () => {

    const classes = useStyles()

    const history = useHistory()

    const {currency, setCurrency } = CryptoState()

    const darkTheme = createTheme({
        palette: {
            primary:{
                main: '#fff'
            },
        type: 'dark'
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>

        <AppBar color="transparent" position="static" >
            <Container>
                <Toolbar>
                    <Typography 
                    className={classes.title}
                    onClick={() => history.push("/")}
                    variant="h6"
                    
                    >Crypto Hunter</Typography>
                    <Select variant="outlined"
                     style={{width: 100, height: 40, marginRight: 15}}
                     value={currency}
                     onChange={(e) => setCurrency(e.target.value)}
                    >
                        <MenuItem value={"USD"}>USD</MenuItem>
                        <MenuItem value={"RUB"}>RUB</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
                    </ThemeProvider>
    )
}

export default Header
