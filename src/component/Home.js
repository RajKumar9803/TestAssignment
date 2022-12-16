import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import Cards from './Cards';
import axios from 'axios';
import { Grid, Typography } from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';




function Home() {
    const [datas, setData] = useState(null);
    console.log(datas, "df")


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]





    };




    useEffect(() => {
        axios
            .post(`https://buch-kunstregister.de/api/customers/get?pagination-no=12&page=1& id=${9585285517364942}&password=${"password1"}`)
            .then((response) => {

                setData(response && response?.data)

            });
    }, [])

    return (
        <>

            {
                datas == null ? (<Box component={"div"} textAlign="center">
                    <h1>Loading....</h1>


                </Box>) :
                    (datas?.data?.data.map((cv) => (
                        <>


                            <Box component={"div"} sx={{ backgroundColor: "#eee", padding: "25px 30px", margin: 2 }}>
                                <Grid Container sx={{ display: { md: "flex", xs: "block" }, justifyContent: "space-between", borderBottom: "1px solid black", paddingBottom: "10px" }}>

                                    <Grid item>
                                        <Grid Container sx={{ display: { md: "flex", xs: "flex", padding: "6px 30px 7px 14px" } }}>
                                            <Grid item>
                                                <Box component={"span"} sx={{ backgroundColor: "#fec84e", padding: "6px 30px 7px 14px", backgroundImage: "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);", color: "#3f3f3f", fontSize: "15px", fontWeight: 600 }}>
                                                    Gold
                                                </Box>
                                            </Grid>
                                            <Grid item>
                                                <Box component={"span"} sx={{ paddingLeft: "20px", color: "#d4af37", fontWeight: 600 }}>
                                                    ID
                                                </Box>
                                            </Grid>
                                            <Grid item>
                                                <Box component={"span"} sx={{ paddingLeft: "5px", color: "", fontWeight: 600 }}>
                                                    :
                                                </Box>
                                            </Grid>
                                            <Grid item>
                                                <Box component={"span"} sx={{ paddingLeft: "5px", color: "#3f3f3f", fontWeight: 600 }}>

                                                    {cv.id}
                                                </Box>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                    <Grid item>
                                        <Grid Container sx={{ display: "flex" }}>
                                            <Grid item >
                                                <Typography fontWeight={600} fontSize={"20px"}> Werke :</Typography>

                                            </Grid>
                                            <Grid item>

                                                <Typography sx={{ fontSize: "22px" }}>
                                                    {cv.products_count}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                    </Grid>

                                    <Grid item>
                                        <Box component={"div"} color={"#d47b39"} display={"flex"} sx={{ padding: "3px", cursor: "pointer" }} >
                                            <Typography sx={{ fontSize: "19px", fontWeight: 600 }}>
                                                Sammlung genauer betrachten
                                            </Typography>

                                            <ArrowCircleRightOutlinedIcon />


                                        </Box>


                                    </Grid>
                                </Grid>
                                <Box sx={{ margin: "3% 0% 1% 0%" }}>
                                    <Slider {...settings} >
                                        {
                                            cv.products.map((cd) =>

                                                cd?.images.map((img) => {
                                                    return (<>
                                                        <div >
                                                            <Cards data={img} title={cd.title} />
                                                        </div>
                                                    </>)
                                                })


                                            )
                                        }














                                    </Slider>
                                </Box>
                            </Box>



                        </>


                    )))
            }




        </>
    )
}

export default Home