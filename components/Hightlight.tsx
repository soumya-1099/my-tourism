import styleHighlight from "../styles/Highlight.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IHighlightProps {
  hightlights: any;
}

export const Highlight = ({ hightlights }: IHighlightProps) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styleHighlight.highlight}>
      <h2 className={styleHighlight.title}>Highlight</h2>
      <Slider {...settings}>
        {Array.isArray(hightlights) &&
          hightlights.length > 1 &&
          hightlights?.map((cval: any, id: number) => {
            return (
              <div className={styleHighlight.cardContainer} key={id}>
                <Card sx={{ maxWidth: 345 }} className={styleHighlight.card}>
                  <CardMedia
                    sx={{ height: 170 }}
                    image={cval?.image}
                    title="Highlights image"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className={styleHighlight.cardTitle}
                    >
                      {cval?.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontFamily: "IBM Plex Mono" }}
                      className={styleHighlight.cardDescription}
                    >
                      {cval?.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{ justifyContent: "end", paddingRight: "2rem" }}
                  >
                    <button className={styleHighlight.cardButton}>
                      <ArrowForwardIcon style={{ color: "#008080" }} />
                    </button>
                  </CardActions>
                </Card>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Highlight;
