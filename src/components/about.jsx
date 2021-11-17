import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const About = (props) => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const handleClose = () => {
    setVisible1(false);
    setVisible2(false);
    setVisible3(false);
  };
  let modal1 = (
    <>
      <Button onClick={() => setVisible1(true)}>
        Xem thêm
      </Button>

      <Dialog
        open={visible1}
        onClose={() => setVisible1(false)}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <h3>Đặc điểm, ý nghĩa vị trí của Cổ Loa Thành</h3>
        </DialogTitle>
        <DialogContent dividers="paper">
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          ></DialogContentText>
          <div className="detail">
            <p>
              Vào thời Âu Lạc, Cổ Loa nằm vào vị trí đỉnh
              của tam giác châu thổ sông Hồng và là nơi giao
              lưu quan trọng của đường thủy và đường bộ. Từ
              đây có thể kiểm soát được cả vùng đồng bằng
              lẫn vùng sơn địa. Cổ Loa là một khu đất đồi
              cao ráo nằm ở tả ngạn sông Hoàng. Con sông này
              qua nhiều thế kỷ bị phù sa bồi đắp và nay đã
              trở thành một con lạch nhỏ, nhưng xưa kia sông
              Hoàng là một con sông nhánh lớn quan trọng của
              sông Hồng, nối liền sông Hồng với sông Cầu,
              con sông lớn nhất trong hệ thống sông Thái
              Bình. Như vậy, về phương diện giao thông đường
              thủy, Cổ Loa có một vị trí vô cùng thuận lợi
              hơn bất kỳ ở đâu tại đồng bằng Bắc Bộ vào thời
              ấy. Đó là vị trí nối liền mạng lưới đường thủy
              của sông Hồng cùng với mạng lưới đường thủy
              của sông Thái Bình. Hai mạng lưới đường thủy
              này chi phối toàn bộ hệ thống đường thủy tại
              Bắc bộ Việt Nam. Qua con sông Hoàng, thuyền bè
              có thể tỏa đi khắp nơi, nếu ngược lên sông
              Hồng là có thể thâm nhập vào vùng Bắc hay Tây
              Bắc của Bắc Bộ, nếu xuôi sông Hồng, thuyền có
              thể ra đến biển cả, còn nếu muốn đến vùng phía
              Đông Bắc bộ thì dùng sông Cầu để thâm nhập vào
              hệ thống sông Thái Bình đến tận sông Thương và
              sông Lục Nam.{' '}
            </p>
            <p>
              Địa điểm Cổ Loa chính là Phong Khê, lúc đó là
              một vùng đồng bằng trù phú có xóm làng, dân
              chúng đông đúc, sống bằng nghề làm ruộng, đánh
              cá và thủ công nghiệp. Việc dời đô từ Phong
              Châu về đây, đánh dấu một bước ngoặt phát
              triển của dân cư Việt cổ, giai đoạn người Việt
              chuyển trung tâm quyền lực từ vùng Trung du
              bán sơn địa về định cư tại vùng đồng bằng.
              Việc định cư tại đồng bằng chứng tỏ một bước
              tiến lớn trong các lĩnh vực xã hội, kinh tế
              trong giao tiếp, trao đổi con người dễ dàng đi
              lại bằng đường bộ hay bằng đường thủy; trong
              nông nghiệp có bước tiến đáng kể về kỹ thuật
              trồng lúa nước, mức độ dân cư cũng đông đúc
              hơn.
            </p>
            Trung tâm quyền lực của các cư dân Việt ở đồng
            bằng sông Hồng cũng thể hiện sự phát triển về
            chiều rộng của Văn hóa Đông Sơn.
            <p>
              Trong cấu trúc chung của thành Cổ Loa còn có
              một yếu tố khác làm phong phú thêm tổng thể
              kiến trúc này. Đó là những gò đất dài hoặc
              tròn được đắp rải rác giữa các vòng thành hoặc
              nằm ngoài thành ngoại. Không biết được có bao
              nhiêu ụ, lũy như thế, nhưng một số được dân
              chúng gọi là Đống Dân, Đống Chuông, Đống
              Bắn... Các lũy này được dùng làm công sự, có
              nhiệm vụ của những pháo đài tiền vệ, phối hợp
              với thành, hào trong việc bảo vệ và chiến đấu.
              Đây cũng là một điểm đặc biệt của thành Cổ
              Loa. Cổ Loa cũng được biết đến là một trong
              những đô thị đầu tiên trong lịch sử nước ta.
            </p>
            <p>
              Về mặt quân sự, thành Cổ Loa thể hiện sự sáng
              tạo độc đáo của người Việt cổ trong công cuộc
              giữ nước và chống ngoại xâm. Với các bức thành
              kiên cố, với hào sâu rộng cùng các ụ, lũy, Cổ
              Loa là một căn cứ phòng thủ vững chắc để bảo
              vệ nhà vua, triều đình và kinh đô. Đồng thời
              là một căn cứ kết hợp hài hòa thủy binh cùng
              bộ binh. Nhờ ba vòng hào thông nhau dễ dàng,
              thủy binh có thể phối hợp cùng bộ binh để vận
              động trên bộ cũng như trên nước khi tác chiến.
            </p>
            <p>
              Về mặt xã hội, với sự phân bố từng khu cư trú
              cho vua, quan, binh lính, thành Cổ Loa là một
              chứng cứ về sự phân hóa của xã hội thời ấy.
              Thời kỳ này, vua quan không những đã tách khỏi
              dân chúng mà còn phải được bảo vệ chặt chẽ,
              sống gần như cô lập hẳn với cuộc sống bình
              thường. Xã hội đã có giai cấp rõ ràng và xã
              hội có sự phân hóa giàu nghèo rõ ràng hơn thời
              Vua Hùng.
            </p>
            <p>
              Về mặt văn hóa, là một tòa thành cổ nhất còn
              để lại dấu tích, Cổ Loa trở thành một di sản
              văn hóa, một bằng chứng về sự sáng tạo, về
              trình độ kỹ thuật cũng như văn hóa của người
              Việt cổ. Đá kè chân thành, gốm rải rìa thành,
              hào nước quanh co, ụ lũy phức tạp, hỏa hồi
              chắc chắn và nhất là địa hình hiểm trở ngoằn
              ngoèo, tất cả những điều này làm chứng cho
              nghệ thuật và văn hóa thời An Dương Vương.
              Hàng năm, vào ngày 6 tháng giêng âm lịch, cư
              dân Cổ Loa tổ chức một lễ trang trọng để tưởng
              nhớ đến những người xưa đã có công xây thành,
              và nhất là để ghi ơn An Dương Vương.
            </p>
            <p>
              Hiện nay Cổ Loa là một trong 21 Khu du lịch
              Quốc gia của Việt Nam, và vào ngày 27/9/2012
              Di tích lịch sử kiến trúc nghệ thuật và khảo
              cổ Cổ Loa được Thủ tướng Chính phủ quyết định
              xếp hạng di tích quốc gia đặc biệt.
            </p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            <h5>Xong</h5>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );

  let modal2 = (
    <>
      <Button onClick={() => setVisible2(true)}>
        Xem thêm
      </Button>

      <Dialog
        open={visible2}
        onClose={() => setVisible2(false)}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <h3>Sự độc đáo trong kiến trúc của Cổ Loa</h3>
        </DialogTitle>
        <DialogContent dividers="paper">
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          ></DialogContentText>
          <div className="detail">
            <p>
              Thành Cổ Loa được các nhà khảo cổ học đánh giá
              là "tòa thành cổ nhất, quy mô lớn vào bậc
              nhất, cấu trúc cũng thuộc loại độc đáo nhất
              trong lịch sử xây dựng thành lũy của người
              Việt cổ".
            </p>
            <p>
              Khi xây thành, người Việt cổ đã biết lợi dụng
              tối đa và khéo léo các địa hình tự nhiên. Họ
              tận dụng chiều cao của các đồi, gò, đắp thêm
              đất cho cao hơn để xây nên hai bức tường thành
              phía ngoài, vì thế hai bức tường thành này có
              đường nét uốn lượn theo địa hình chứ không
              băng theo đường thẳng như bức tường thành
              trung tâm. Người xưa lại xây thành bên cạnh
              con sông Hoàng để dùng sông này vừa làm hào
              bảo vệ thành vừa là nguồn cung cấp nước cho
              toàn bộ hệ thống hào vừa là đường thủy quan
              trọng. Đầm Cả rộng lớn nằm ở phía Đông cũng
              được tận dụng biến thành bến cảng làm nơi tụ
              họp cho đến cả hàng trăm thuyền bè.
            </p>
            <p>
              Chất liệu chủ yếu dùng để xây thành là đất,
              sau đó là đá và gốm vỡ. Đá được dùng để kè cho
              chân thành được vững chắc. Các đoạn thành ven
              sông, ven đầm được kè nhiều đá hơn các đoạn
              khác. Đá kè là loại đá tảng lớn và đá cuội
              được chở tới từ các miền khác. Xen giữa đám
              đất đá là những lớp gốm được rải dày mỏng khác
              nhau, nhiều nhất là ở chân thành và rìa thành
              để chống sụt lở. Các cuộc khai quật khảo cổ
              học đã tìm thấy một số lượng gốm khổng lồ gồm
              ngói ống, ngói bản, đầu ngói, đinh ngói. Ngói
              có nhiều loại với độ nung khác nhau. Có cái
              được nung ở nhiệt độ thấp, có cái được nung
              rất cao gần như sành. Ngói được trang trí
              nhiều loại hoa văn ở một mặt hay hai mặt.
            </p>
            <p>
              Thành Cổ Loa theo tương truyền gồm 9 vòng xoáy
              trôn ốc, nhưng căn cứ trên dấu tích hiện còn,
              các nhà khoa học nhận thấy thành có 3 vòng,
              trong đó vòng thành nội rất có thể được làm về
              sau, dưới thời Ngô Quyền. Chu vi vòng ngoài 8
              km, vòng giữa 6,5 km, vòng trong 1,6 km, diện
              tích trung tâm lên tới 2 km². Thành được xây
              theo phương pháp đào đất đến đâu, khoét hào
              đến đó, thành đắp đến đâu, lũy xây đến đó. Mặt
              ngoài lũy dốc thẳng đứng, mặt trong thoải để
              đánh vào thì khó, trong đánh ra thì dễ. Lũy
              cao trung bình từ 4–5 m, có chỗ cao đến 8–12
              m. Chân lũy rộng 20–30 m, mặt lũy rộng 6–12 m.
              Khối lượng đất đào đắp ước tính 2,2 triệu mét
              khối.
            </p>
            <p>
              Thành nội hình chữ nhật, cao trung bình 5m so
              với mặt đất, mặt thành rộng từ 6–12 m, chân
              rộng từ 20–30 m, chu vi 1.650 m và có một cửa
              nhìn vào tòa kiến trúc Ngự triều di quy.
            </p>
            <p>
              Thành trung là một vòng thành không có khuôn
              hình cân xứng, dài 6.500 m, nơi cao nhất là 10
              m, mặt thành rộng trung bình 10 m, có bốn cửa
              ở các hướng đông, bắc, tây bắc và tây nam,
              trong đó cửa đông ăn thông với sông Hồng.
            </p>
            <p>
              Thành ngoại cũng không có hình dáng rõ ràng,
              dài hơn 8.000m, cao trung bình 3–4 m (có chỗ
              tới hơn 8 m).
            </p>
            <p>
              Mỗi vòng thành đều có hào nước bao quanh bên
              ngoài, hào rộng trung bình từ 10m đến 30m, có
              chỗ còn rộng hơn. Các vòng hào đều thông với
              nhau và thông với sông Hoàng. Sự kết hợp của
              sông, hào và tường thành không có hình dạng
              nhất định, khiến thành như một mê cung, là một
              khu quân sự vừa thuận lợi cho tấn công vừa tốt
              cho phòng thủ.
            </p>
            <p>
              Sông Hoàng được dùng làm hào thiên nhiên cho
              thành ngoại ở về phía tây nam và am. Phần hào
              còn lại được đào sát chân tường thành từ gò
              Cột Cờ đến Đầm Cả. Con hào này nối với hào của
              thành trung ở Đầm Cả và Xóm Mít, chảy qua cửa
              Cống Song nối với năm con lạch có hình dáng
              như bàn tay xòe và với một nhánh của con lạch
              này, nước chảy thông vào vòng hào của thành
              Nội.
            </p>
            <p>
              Thuyền bè đi lại dễ dàng trên ba vòng hào để
              đến trú đậu ở Đầm Cả hoặc ra sông Hoàng và từ
              đó có thể tỏa đi khắp nơi. Theo truyền
              thuyết,Thục Phán An Dương Vương thường dùng
              thuyền đi khắp các hào rồi ra sông Hồng.{' '}
            </p>
            <p>
              Thành Cổ Loa được xây bằng đất do thời ấy ở Âu
              Lạc chưa có gạch nung. Khu vực Cổ Loa được coi
              là một nền đất yếu nên việc xây dựng thành Cổ
              Loa có thể khó khăn và thành bị đổ nhiều lần
              là dễ hiểu. Khi xẻ dọc thành để nghiên cứu,
              các nhà khảo cổ học phát hiện kỹ thuật gia cố
              thành của Thục Phán: chân thành được chẹn một
              lớp tảng đá. Hòn nhỏ có đường kính 15 cm, hòn
              lớn có đường kính 60 cm. Xung quanh Cổ Loa,
              một mạng lưới thủy văn dày đặc đã được tạo ra
              thành một vùng khép kín, thuận lợi cho việc
              xây dựng căn cứ thủy binh hùng mạnh. Thuở ấy,
              sông Thiếp – Ngũ Huyền Khê - Hoàng Giang thông
              với sông Cầu ở Thổ Hà, Quả Cảm (Hà Bắc) thông
              với sông Hồng ở Vĩnh Thanh (Đông Anh). Ngay
              sau khi xây thành, Thục Phán An Dương Vương đã
              chiêu tập những thợ mộc giỏi, sử dụng gỗ ở địa
              phương đóng thuyền chiến. Nhân dân cũng được
              điều tới khai phá rừng đa (Gia Lâm), rừng Mơ
              (Mai Lâm), rừng dâu da (Du Lâm)... thành
              ruộng. Những hiệp thợ chuyên rèn vũ khí cũng
              xuất hiện, chế tạo côn, kiếm, giáo, mác và nỏ
              liên châu, mỗi phát bắn nhiều mũi tên. Có
              nhiều bằng chứng khảo cổ về sự tồn tại của
              hàng chục vạn mũi tên đồng, có thể dùng nỏ
              liên châu ở đây.
            </p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            <h5>Xong</h5>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
  let modal3 = (
    <>
      <Button onClick={() => setVisible3(true)}>
        Xem thêm
      </Button>

      <Dialog
        open={visible3}
        onClose={() => setVisible3(false)}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <h3>Cổ Loa thời nay</h3>
        </DialogTitle>
        <DialogContent dividers="paper">
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          ></DialogContentText>
          <div className="detail">
            <p>
              Theo thống kê, trong khu vực Cổ Loa hiện có
              khoảng 60 di tích (trong đó có 07 di tích cấp
              quốc gia), bao gồm các loại hình: di tích kiến
              trúc nghệ thuật, di tích lịch sử, cách mạng,
              di chỉ khảo cổ học. Đời sống tinh thần của cư
              dân Cổ Loa rất phong phú, với nhiều tập tục
              mang đậm sắc thái vùng miền, như tục kết
              chiềng, kết chạ, tục ăn sêu Bà Chúa vào ngày
              13 tháng Tám ( Âm lịch), tục khất keo làm cụ
              Từ, tục kiêng tên húy, tục kiêng nuôi gà,
              ngan, ngỗng trắng, tục đãi dâu, không đãi rể.
              Lễ hội Cổ Loa được tổ chức tại đền Thượng vào
              ngày 6 tháng Giêng hàng năm (tương truyền là
              ngày Thục Phán lên ngôi vua, lấy hiệu là An
              Dương Vương)…
            </p>
            <p>
              Di tích Cổ Loa cũng là địa điểm khảo cổ học có
              giá trị nổi bật, gắn với các giai đoạn văn hóa
              khảo cổ của người Việt, như văn hóa Sơn Vi,
              văn hóa Phùng Nguyên, văn hóa Đồng Đậu, văn
              hóa Gò Mun, mà đỉnh cao là Văn hóa Đông Sơn,
              với nhiều di chỉ khảo cổ tiêu biểu: Đồng Vông,
              Bãi Mèn, Đình Chiền, Đình Tràng, Mả Tre, Thành
              Nội, Thành Ngoại, Thành Trung, Xuân Kiều, xóm
              Nhồi, đền Thượng, Tiên Hội, Đường Mây, Cầu
              Vực... Tại khu vực này, các nhà khảo cổ đã
              phát hiện được hàng vạn công cụ lao động, nhạc
              khí và vũ khí bằng đồng, góp phần làm sáng tỏ
              nhiều vấn đề về thời kỳ An Dương Vương và lịch
              sử vùng đất này.
            </p>
            <p>
              Thành Cổ Loa: có diện tích gần 46ha, gồm 3
              vòng thành (thành Nội, thành Trung, thành
              Ngoại) khép kín, đắp bằng đất, với tổng chiều
              dài là 15,820km. Thành được đắp dựa theo địa
              hình tự nhiên - nối những gò, đống và những
              dải đất cao dọc theo sông; bao quanh thành là
              các hào nước thông với sông Hoàng, trên mặt
              thành có các ụ đất nhô ra ngoài, gọi là “hỏa
              hồi”; vòng thành có chỗ xẻ làm cửa, phía trên
              xây miếu thờ thần. Các nhà khảo cổ học đã tiến
              hành 03 đợt khai quật khảo cổ tại khu vực này,
              vào những năm 1970, 2005, 2007 - 2008. Kết quả
              khai quật cho thấy, trong lịch sử thành Cổ Loa
              đã trải qua ít nhất 3 lần đắp, mà dấu tích
              liên quan còn được biểu hiện qua các di tích:
              lũy phòng thủ, di tích bếp, cụm gốm Đông Sơn,
              lò nung gạch, ngói có niên đại thế kỷ XVIII -
              XIX...
            </p>
            <p>
              Đền Thượng (đền thờ An Dương Vương): dựng trên
              khu đất rộng 19.138,6m2. Tại vị trí lối lên
              cửa giữa của đền đặt đôi rồng đá, mang phong
              cách nghệ thuật thời Lê mạt. Trong đền còn lưu
              giữ được 5 tấm bia đá và 53 hiện vật có giá
              trị lịch sử, văn hóa và khoa học đặc sắc. Kiến
              trúc đền gồm: tiền tế - 3 gian, 2 chái, hệ
              khung kết cấu gỗ, mái lợp ngói mũi hài. Trên
              hệ mái đắp các đầu đao cong, tượng nghê chầu.
              Các bộ vì chính được làm theo kiểu giá chiêng,
              sơn son thếp vàng, chạm họa tiết “rồng vờn
              mây”; trung đường đấu mái liền với hậu cung,
              tạo thành dạng thức kiến trúc kiểu “chuôi vồ”,
              bên trong đặt tượng An Dương Vương, bằng đồng,
              nặng khoảng 200kg, đúc năm 1897. Từ cuối năm
              2004 đến năm 2007, các nhà khảo cổ học đã tiến
              hành 3 đợt khai quật tại đền Thượng, với 9 hố,
              trên tổng diện tích 311,5m2. Qua những đợt
              khai quật này, đã phát hiện được hệ thống lò
              đúc mũi tên đồng và nhiều hiện vật có giá trị
              liên quan khác.
            </p>
            <p>
              Đình Cổ Loa (Ngự Triều Di Quy): có bố cục mặt
              bằng nền hình chữ “Đinh”, gồm đại đình và hậu
              cung. Đại đình gồm 5 gian, 2 chái, kết cấu
              khung gỗ, mái lợp ngói mũi hài, với 4 góc đao
              cong vút. Các bộ vì nóc được kết cấu theo kiểu
              “giá chiêng, chồng rường”, với 6 hàng chân
              cột. Hậu cung nối liền với đại đình qua bộ cửa
              bức bàn phía dưới và đấu mái ở phía trên. Các
              đề tài trang trí trên kiến trúc này mang phong
              cách nghệ thuật của thế kỷ XVIII. Đặc biệt,
              trong đình còn lưu giữ được 17 hiện vật có giá
              trị lịch sử, văn hóa và khoa học khá tiêu
              biểu.
            </p>
            <p>
              Am Mỵ Châu (am Bà Chúa hay đền thờ Mỵ Châu):
              tọa lạc trên khu vực rộng 925,4m2. Mặt bằng
              kiến trúc được bố cục theo dạng “tiền Nhất,
              hậu Đinh”, gồm các tòa tiền tế, trung đường và
              hậu cung.
            </p>
            <p>
              Chùa Cổ Loa (Bảo Sơn tự): được khởi dựng vào
              khoảng đầu thế kỷ XVII, bố cục mặt bằng nền
              theo dạng “nội Công, ngoại Quốc”, gồm các hạng
              mục: tiền đường, thiêu hương, thượng điện, hậu
              cung, gác chuông, tháp mộ, cổng hậu, nhà Tổ,
              nhà ni, nhà khách. Đặc biệt, trong chùa còn
              lưu giữ được 132 hiện vật có giá trị lịch sử,
              văn hóa, khoa học đặc sắc.
            </p>
            <p>
              Chùa Mạch Tràng (Quang Linh tự): được dựng vào
              thời Hậu Lê, trên diện tích rộng 4.922,4m2.
              Chùa quay hướng Nam, bao gồm các hạng mục: Tam
              bảo, tiền đường, thượng điện, nhà Mẫu, giải
              vũ, hành lang...
            </p>
            <p>
              Đình Mạch Tràng: tọa lạc trên một khu đất cao,
              có diện tích 6.198,4m2, gồm các hạng mục tiền
              tế, đại đình và hậu cung. Với những giá trị
              lịch sử, văn hóa và khoa học tiêu biểu của di
              tích, ngày 27/9/2012, Thủ tướng Chính phủ đã
              quyết định xếp hạng Di tích lịch sử, kiến trúc
              nghệ thuật và khảo cổ Cổ Loa là Di tích quốc
              gia đặc biệt (Quyết định số 1419/QĐ-TTg).
            </p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            <h5>Xong</h5>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
  return (
    <div id="structure">
      <div className="container">
        <div className="col-md-offset-1 section-title text-center">
          <h2 className="header"> Kiến trúc</h2>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img
              src="img/coloakientruc1.png"
              className="img-responsive"
              alt=""
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h3>
                Đặc điểm, ý nghĩa vị trí của Cổ Loa Thành.
              </h3>
              <p>
                Vào thời Âu Lạc, Cổ Loa nằm vào vị trí đỉnh
                của tam giác châu thổ sông Hồng và là nơi
                giao lưu quan trọng của đường thủy và đường
                bộ. Từ đây có thể kiểm soát được cả vùng
                đồng bằng lẫn vùng sơn địa. Cổ Loa là một
                khu đất đồi cao ráo nằm ở tả ngạn sông
                Hoàng. Con sông này qua nhiều thế kỷ bị phù
                sa bồi đắp và nay đã trở thành một con lạch
                nhỏ, nhưng xưa kia sông Hoàng là một con
                sông nhánh lớn quan trọng của sông Hồng, nối
                liền sông Hồng với sông Cầu, con sông lớn
                nhất trong hệ thống sông Thái Bình. Như vậy,
                về phương diện giao thông đường thủy, Cổ Loa
                có một vị trí vô cùng thuận lợi hơn bất kỳ ở
                đâu tại đồng bằng Bắc Bộ vào thời ấy. Đó là
                vị trí nối liền mạng lưới đường thủy của
                sông Hồng cùng với mạng lưới đường thủy của
                sông Thái Bình. Hai mạng lưới đường thủy này
                chi phối toàn bộ hệ thống đường thủy tại Bắc
                bộ Việt Nam. Qua con sông Hoàng, thuyền bè
                có thể tỏa đi khắp nơi, nếu ngược lên sông
                Hồng là có thể thâm nhập vào vùng Bắc hay
                Tây Bắc của Bắc Bộ, nếu xuôi sông Hồng,
                thuyền có thể ra đến biển cả, còn nếu muốn
                đến vùng phía Đông Bắc bộ thì dùng sông Cầu
                để thâm nhập vào hệ thống sông Thái Bình đến
                tận sông Thương và sông Lục Nam.
                {modal1}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h3>
                Sự độc đáo trong kiến trúc của Cổ Loa.
              </h3>
              <p>
                Thành Cổ Loa được xây bằng đất do thời ấy ở
                Âu Lạc chưa có gạch nung. Khu vực Cổ Loa
                được coi là một nền đất yếu nên việc xây
                dựng thành Cổ Loa có thể khó khăn và thành
                bị đổ nhiều lần là dễ hiểu. Khi xẻ dọc thành
                để nghiên cứu, các nhà khảo cổ học phát hiện
                kỹ thuật gia cố thành của Thục Phán: chân
                thành được chẹn một lớp tảng đá. Hòn nhỏ có
                đường kính 15 cm, hòn lớn có đường kính 60
                cm. Xung quanh Cổ Loa, một mạng lưới thủy
                văn dày đặc đã được tạo ra thành một vùng
                khép kín, thuận lợi cho việc xây dựng căn cứ
                thủy binh hùng mạnh. Thuở ấy, sông Thiếp –
                Ngũ Huyền Khê - Hoàng Giang thông với sông
                Cầu ở Thổ Hà, Quả Cảm (Hà Bắc) thông với
                sông Hồng ở Vĩnh Thanh (Đông Anh). Ngay sau
                khi xây thành, Thục Phán An Dương Vương đã
                chiêu tập những thợ mộc giỏi, sử dụng gỗ ở
                địa phương đóng thuyền chiến. Nhân dân cũng
                được điều tới khai phá rừng đa (Gia Lâm),
                rừng Mơ (Mai Lâm), rừng dâu da (Du Lâm)...
                thành ruộng. Những hiệp thợ chuyên rèn vũ
                khí cũng xuất hiện, chế tạo côn, kiếm, giáo,
                mác và nỏ liên châu, mỗi phát bắn nhiều mũi
                tên. Có nhiều bằng chứng khảo cổ về sự tồn
                tại của hàng chục vạn mũi tên đồng, có thể
                dùng nỏ liên châu ở đây. {modal2}
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <img
              src="img/coloakientruc2.jpg"
              className="img-responsive"
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img
              src="img/coloakientruc3.jpg"
              className="img-responsive"
              alt=""
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h3>Cổ Loa thời nay</h3>
              <p>
                Theo thống kê, trong khu vực Cổ Loa hiện có
                khoảng 60 di tích (trong đó có 07 di tích
                cấp quốc gia), bao gồm các loại hình: di
                tích kiến trúc nghệ thuật, di tích lịch sử,
                cách mạng, di chỉ khảo cổ học. Đời sống tinh
                thần của cư dân Cổ Loa rất phong phú, với
                nhiều tập tục mang đậm sắc thái vùng miền,
                như tục kết chiềng, kết chạ, tục ăn sêu Bà
                Chúa vào ngày 13 tháng Tám ( Âm lịch), tục
                khất keo làm cụ Từ, tục kiêng tên húy, tục
                kiêng nuôi gà, ngan, ngỗng trắng, tục đãi
                dâu, không đãi rể. Lễ hội Cổ Loa được tổ
                chức tại đền Thượng vào ngày 6 tháng Giêng
                hàng năm (tương truyền là ngày Thục Phán lên
                ngôi vua, lấy hiệu là An Dương Vương)…{' '}
                {modal3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
