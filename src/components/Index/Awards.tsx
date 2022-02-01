import { BlockLayout, TextBox } from '@components/Shared';
import { SectionComponent } from "@types";

const Whatis: SectionComponent = ({ variant }) => {
  const replaceAllRe = /\S/g;

  return (
    <>
      <BlockLayout header="Awards" variant={variant ?? 1} id="awards">
        <TextBox variant="white">
          <ul className="list-container">
            <li className="list"><a href="#Team01">เทคโนโลยีสมัยนี้</a></li>
            <li className="list"><a href="#Team02">oung ounG ouNg ouNG oUng oUnG oUNg oUNG Oung OunG OuNg OuNG OUng OUnG OUNg OUNG</a></li>
            <li className="list"><a href="#Team07">Team07</a></li>
            <li className="list"><a href="#Team09">ลํ า เ ค็ ญ</a></li>
            <li className="list"><a href="#Team14">โอ้เด้เพื่อนเอ๋ย คือดังเคยกันนั้น สังสรรค์กันจักหว่าง ในเวลาว่างว่าง มาแกล้มฮ่วมกัน บรรยากาศอยู่นา หลายคนมา เทิงเล่นลมเย็นเย็น ได้พัดผ่าน เหล้าเด็ดเด็ด อยู่บ้าน ของแกล้มอยู่ท่งนา เลาะเลียบตามแคบน้ำ แคมหนอง ก็มีของกินเป็นอาหาร หอยปากกว้าง นั่นหล่ะโตการ มันเป็นโตมาร กัดกกข้าวในนา มันเป็นโตมาร กัดกกข้าวในนา จับขึ้นมา ใส่กะต้าเต็มหาบ มาซอยกันปราบ มากินหอยอัปรีย์ แล้วกะยังแถม เป็นของแกล้มอย่างดี มันแซบอีหลี หอยจี่แกล้มเหล้า ตะเว็นคล้อยบ่าย ฟ้าเป็นลายดอกซ่อน ลำกลอนฟ้อนแอ่ว ลำใส่แคนดอกสร้อย สาวน้อยนั่งนำทำหน้าที่ จี่หอยและทยอยมาหงิ่น รินมาเสิร์ฟถี่ถี่ มีหอยจี่ฮ้อนฮ้อน มาป้อนนั่งเฮียง ฟังสำเนียงเสียงเพลงบ้านนา ม่วนแท้หนาเฮฮาสุขสันต์ หอยปากกว้าง แกล้มเหล้าเข้ากัน ทั้งแซ่บทั้งมัน กอยซอยหอยจี่ ทั้งแซ่บทั้งมัน กอยซอยหอยจี่</a></li>
            {/* redacted */}
            <li className="list">
              <a href="#Team18">{"เด็กบางมด".replace(replaceAllRe, '█')}</a>
            </li>
            <li className="list"><a href="#Team21">TightFistNinja</a></li>
          </ul>
        </TextBox>
      </BlockLayout>
    </>
  );
}

export default Whatis;