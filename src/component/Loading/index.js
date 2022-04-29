import { Container, Typography } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';
const Loading = () => {
    return (
        <Container sx={mainContainer}>
            <CircularProgress size={80} />
            <Typography variant="h5"> Loading...</Typography>
        </Container>
    )
}

export default Loading;

export const mainContainer : SxProps={
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    height: '100vh', justifyContent: 'center', alignContent: 'center'
}