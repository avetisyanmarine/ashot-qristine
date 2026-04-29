import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import Haverjutyun from "../../assets/image/haverjutyun.png";
import Church from "../../assets/image/church.png";
import Kenac from "../../assets/image/kenac.png";
import { ThirdPageBlock } from "./third-page-block";
import { TextShadow } from "../TextShadow";

export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <TextShadow title="Ժամանակացույց" />
        <ThirdPagePartContext>
          <ThirdPageBlock
            // uniqueMargin={50}
            // imageSize={80}
            number={"11:30"}
            bigText="ՀԱՐՍԻ ՏՈՒՆ"
            smallText=" Ջրվեժ 10րդ փ. , տուն 3"
          />
          <ThirdPageBlock
            // uniqueMargin={50}
            imageSize={80}
            number={"14:00"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
            smallText="Սուրբ Սարգիս եկեղեցի"
          />
          <ThirdPageBlock
            // imageSize={80}
            number={"17:00"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Մկրտչյանս Հոլլ"
          />
        </ThirdPagePartContext>
        <ThirdPagePartMini>
          {/* <h3>Սիրով սպասում ենք</h3> */}
          <hr />
        </ThirdPagePartMini>
      </Container>
    </ThirdPagePart>
  );
};
