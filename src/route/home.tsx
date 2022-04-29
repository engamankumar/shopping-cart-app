import AdCoantiner from "../component/coantiner-component/container-component";
import Button from "../component/Button/Button-component";
import { Box, Typography, SxProps } from "@mui/material";
import CarouselComponent from "../component/Carousel/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../store/hook";
import { selectCategory } from "../store/action/action";
import {
  MainBox,
  ImageBox,
  ADBox,
  ADTitle,
  ADDescription,
  textColor,
  btnText,
} from "./home.style";
import { Dispatch } from "redux";
const Home = ({ bannersImage, category }: any) => {
  const dispatch: Dispatch<any> = useAppDispatch();
  const MainBoxStyle: SxProps = (index:any) => {
    let bool = false;
    if (index % 2 === 0) {
      bool = true;
    }
    const style = MainBox(bool);
    return { ...style };
  };

  return (
    <>
      <AdCoantiner>
        <CarouselComponent image={bannersImage} />
      </AdCoantiner>
      {category &&
        category.map((cate: any) => {
          return (
            cate.imageUrl && (
              <AdCoantiner key={cate.id}>
                <Box sx={MainBoxStyle(cate.order)}>
                  <Box
                    component={"img"}
                    src={cate.imageUrl}
                    sx={ImageBox}
                    alt={cate.name}
                  />
                  <Box sx={ADBox}>
                    <Typography sx={ADTitle}>{cate.name}</Typography>
                    <Typography sx={ADDescription}>
                      {cate.description}
                    </Typography>
                    <Button
                      id={cate.order}
                      sx={btnText}
                      onClick={() => dispatch(selectCategory(cate.order))}
                    >
                      <Link className="link" to={`/products`}>
                        <Typography sx={textColor}>
                          {`Explore ${cate.key}`}
                        </Typography>
                      </Link>
                    </Button>
                  </Box>
                </Box>
              </AdCoantiner>
            )
          );
        })}
    </>
  );
};

export default Home;
