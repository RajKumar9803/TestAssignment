import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import { Button, TextField } from '@mui/material';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Popper from "@mui/material/Popper";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { Link } from 'react-router-dom';


function Cards({ data, title }) {
    const [expanded, setExpanded] = React.useState(false);
    // popper useState
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    const handleLeave = () => {
        setAnchorEl(null)
        setOpen(false);


    }
    return (
        <>
            <Box sx={{ display: "flex", padding: "0px" }} >
                <Card sx={{ maxWidth: 210 }}>

                    <CardHeader
                        avatar={
                            <Box component={"span"} sx={{ background: "black", color: "white", display: "flex", borderRadius: "7px", padding: "3px 9px" }}>
                                <BookmarkBorderRoundedIcon />
                                <Typography>{data?.order_no}</Typography>
                            </Box>
                        }

                    />
                    <Link to={`images/${title}${data.image_path} `} style={{ textDecoration: "none" }}>
                        <CardMedia
                            component="img"
                            height="200"
                            sx={{ paddingBottom: 7 }}
                            width="206"

                            image={"https://buch-kunstregister.de/storage/" + data.image_path}
                            alt={data.name}
                        />
                    </Link>

                    <CardContent>
                        <Box component={"div"} marginBottom={3}>
                            <Box component={"span"} sx={{ backgroundColor: "#70cd73", color: "#fff", marginLeft: 13.2, fontSize: "15px", fontWeight: "400", padding: "4px 4px 4px 5px" }}>
                                sehr gut
                            </Box>
                        </Box>
                        <Box >
                            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                                {({ TransitionProps }) => (
                                    <Fade {...TransitionProps} timeout={100}>
                                        <Paper sx={{ maxWidth: "200px", maxHeight: "90px", marginBottom: "5px", textAlign: "center", backgroundColor: "#d4b039", color: "#fff" }}>
                                            <Typography sx={{ p: 0.1 }}>{title}</Typography>
                                        </Paper>
                                    </Fade>
                                )}
                            </Popper>
                            <Grid container justifyContent="center">

                                <Grid item sx={{
                                    textAlign: "center", width: "70%", height: "50px", overflow: "hidden", textOverflow: "...",
                                    '&:hover': {
                                        color: "#b5bec4"
                                    }
                                    ,
                                }}>
                                    <Link to={`images/${title}${data.image_path} `} style={{ textDecoration: "none" }}>

                                        <Typography onMouseEnter={handleClick("top")} onMouseLeave={handleLeave} sx={{ textDecoration: "none" }}>{title}</Typography>

                                    </Link>
                                </Grid>

                            </Grid>
                            <hr />
                        </Box>
                        <Box>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Button size="small" startIcon={<ImportContactsIcon />} endIcon={<ArrowRightAltIcon sx={{ color: "red" }} />} sx={{
                            backgroundColor: "#d4b039 ", color: "#fff", boxShadow: "3px 3px 7px  #f0c7a8",
                            '&:hover': {
                                backgroundColor: "#d4b039 ",
                                boxShadow: 'none',
                            }
                        }}>Kaufinteresse</Button>
                    </CardActions>
                </Card >
            </Box >
        </>

    );
}
export default Cards

