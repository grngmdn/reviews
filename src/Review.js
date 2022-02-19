import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import data from "./Data.js"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';



function Review() {

  const [index, setIndex] = useState(1)
  const {id, name, job, image, text} = data[index]

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        width: "100vw",
        height: "100vh",
      }}
    >
      <Typography
        variant="h3"
        color= "primary"
        sx={{
          paddingBottom: "50px",
          fontWeight: "bold"
        }}
      >
        Our Reviews
      </Typography>
        <Card
          sx={{ 
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',  
            padding: "25px"           
            }}
        >
          <img
            className="circle-img"
            src={image}
            alt="green iguana"
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: 'center',
              alignItems: 'center',  
              textAlign: "center"           
            }}
          >
            <Typography
              variant="h6"
              color= "primary"
            >
              {name.toUpperCase()}
            </Typography>
            <Typography
              variant="subtitle1"
            >
              {job}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{
                    paddingTop: "10px"
              }}
            >
              {text}
            </Typography>
            <CardActions>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: 'column'
                }}
              >
                <Box
                  sx={{
                    paddingBottom: "10px",
                    paddingTop: "10px"
                  }}
                >
                  <Button>
                    <FaChevronLeft />
                  </Button>
                  <Button>
                    <FaChevronRight />
                  </Button>
                </Box>
                <Button
                  variant="outlined"
                >
                  Surprise me
                </Button>
              </Box>

            </CardActions>
          </CardContent>
        </Card>
    </Box>
  )
}

export default Review