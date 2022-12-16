import { Card, CardHeader, CardMedia } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useParams } from 'react-router-dom'

function ImageDetail() {
    const { title, Image } = useParams();

    var regex = /\d+/g;
    var matches = title.match(regex);
    const id = (parseInt(matches[0]));

    const titleName = title.replace(/\d+/g, '');
    return (
        <>
            <Box sx={{ mt: 10 }}>
                <Card sx={{ maxWidth: 400, m: "auto", textAlign: "center" }}>

                    <CardHeader
                        sx={{ backgroundColor: "#fff3e0" }}
                        title={titleName}

                    />
                    <CardMedia
                        component="img"
                        height="100%"
                        image={`https://buch-kunstregister.de/storage/${id}/${Image}`}
                        alt={Image}
                    />
                </Card>
            </Box>



        </>
    )
}
export default ImageDetail