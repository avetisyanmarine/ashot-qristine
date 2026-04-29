import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restaurant.jpg";
import HeartLine from "../../assets/image/heartline.png";
import LineAes from "../../assets/image/lineaes.png";
import AttendanceGuests from "../AttendanceGuests/index";

export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Սուրբ Սարգիս եկեղեցի"}
            mapSrc={
              "https://www.bing.com/maps/search?v=2&pc=FACEBK&mid=8100&mkt=en-US&fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExMWFEc2xNUExlMDlXbE1DRHNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR6zOLggqmKjfsDy0hrD7osHyPhmk-0y-GZqxv-46-u-0bsQwO--tpmr2TCg_g_aem_x9k6coWyXYA9bHRJG-X4ig&FORM=FBKPL1&q=46+Galshoyan+St%2C+Yerevan%2C+Armenia&cp=40.181431%7E44.566588&lvl=16&style=r"
            }
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Մկրտչյանս Հոլլ"}
            mapSrc={
              "https://www.bing.com/maps/directions?v=2&pc=FACEBK&mid=8100&mkt=en-US&fbclid=IwY2xjawRe3z9leHRuA2FlbQIxMABicmlkETExZHZnTmMxQVlta1VySjE1c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHgk49wAvIPyGLsoCqlmJ27yvv2ImkSqG9lKQj8Qv7tjMXeKFm4bT0ceQUMmW_aem_e8mxNwl-Zq6nIR6m8Coyrw&FORM=FBKPL1&style=r&rtp=%7Epos.40.07264979745_44.42429419852124_Echmiatsin%2520Hwy%252C%2520Masis%252C%2520Armenia_Echmiatsin%2520Hwy%252C%2520Masis%252C%2520Armenia_&cp=40.072650%7E44.424294&lvl=16"
            }
          />
        </ForthPagePartContext>
      </Container>
      <img src={LineAes} alt="" className="w-full" />

      <div className="text-center my-14">
        <h2>Դետալներ</h2>
        <img src={HeartLine} className="mx-auto my-8 w-[300px]" />
        <Flexible
          className=" font-[600] px-5"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ. ինչպես նաև
          հարմարավետ կոշիկներ` պարելու համար:
          <br />
          <br />
          Հարսի պարի և հրավառության ընթացքում կխնդրենք ծնողներին ուշադիր լինել
          իրենց բալիկների նկատմամբ:
        </Flexible>
        <hr className="mx-auto my-8 w-[300px]" />
      </div>
      <Container>
        <AttendanceGuests />
      </Container>
    </ForthPagePart>
  );
};
