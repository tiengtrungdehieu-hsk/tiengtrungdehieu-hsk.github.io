/* Dữ liệu 2 đề thi mô phỏng HSK 3.0 Cấp 2 (hsk2_t1 & hsk2_t2 — 120 câu) — Tiếng Trung Dễ Hiểu */
window.HSK_EXAMS_DATA = window.HSK_EXAMS_DATA || {};

window.HSK_EXAMS_DATA["hsk2_t1"] = {
  id: "hsk2_t1",
  sections: [
    {
      id: "listening",
      title: "一、听力 · Nghe hiểu",
      parts: [
        {
          id: "l1",
          title: "第一部分 · Phần 1 (Câu 1–5)",
          instruction: "Nghe một câu và chọn bức tranh tương ứng (A, B hoặc C).",
          type: "mcq",
          items: [
            {
              num: 1,
              type: "mcq",
              img: "assets/exams/hsk2_t1_l1_q1.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "C",
              audioLines: [
                { speaker: "", text: "别忘了你的咖啡。" }
              ],
              explainVi: "Câu nghe: “别忘了你的咖啡。” (Đừng quên cà phê của bạn.) → Tranh C là hình tay cầm cốc cà phê."
            },
            {
              num: 2,
              type: "mcq",
              img: "assets/exams/hsk2_t1_l1_q2.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "B",
              audioLines: [
                { speaker: "", text: "她的头有点儿疼。" }
              ],
              explainVi: "Câu nghe: “她的头有点儿疼。” (Đầu của cô ấy hơi đau.) → Tranh B vẽ cô gái đang ôm đầu (A đau đầu gối, C đau răng)."
            },
            {
              num: 3,
              type: "mcq",
              img: "assets/exams/hsk2_t1_l1_q3.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "A",
              audioLines: [
                { speaker: "", text: "孩子们正在快乐地游泳呢。" }
              ],
              explainVi: "Câu nghe: “孩子们正在快乐地游泳呢。” (Bọn trẻ đang vui vẻ bơi lội.) → Tranh A là các em nhỏ đang bơi."
            },
            {
              num: 4,
              type: "mcq",
              img: "assets/exams/hsk2_t1_l1_q4.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "C",
              audioLines: [
                { speaker: "", text: "朋友送给我两张电影票。" }
              ],
              explainVi: "Câu nghe: “朋友送给我两张电影票。” (Bạn tặng cho tôi hai vé xem phim.) → Tranh C là hai tấm vé xem phim (A hai cây bút, B hai chiếc đồng hồ)."
            },
            {
              num: 5,
              type: "mcq",
              img: "assets/exams/hsk2_t1_l1_q5.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "A",
              audioLines: [
                { speaker: "", text: "您一不舒服就给我们打电话。" }
              ],
              explainVi: "Câu nghe: “您一不舒服就给我们打电话。” (Ông/bà hễ thấy không khỏe là gọi điện cho chúng tôi ngay nhé.) → Tranh A là bác sĩ đang dặn dò bệnh nhân."
            }
          ]
        },
        {
          id: "l2a",
          title: "第二部分（一）· Phần 2a (Câu 6–10)",
          instruction: "Nghe hội thoại và ghép với bức tranh phù hợp (A–F).",
          type: "match",
          sharedImage: "assets/exams/hsk2_t1_l2a_pool.jpg",
          poolOptions: ["A", "B", "C", "D", "E", "F"],
          items: [
            {
              num: 6,
              type: "match",
              audioLines: [
                { speaker: "男", text: "你们家谁个子最高？" },
                { speaker: "女", text: "我爸。" }
              ],
              answer: "E",
              explainVi: "Nam: Nhà bạn ai cao nhất? — Nữ: Bố mình. → Tranh E là ảnh cả gia đình đứng cạnh nhau, bố cao nhất."
            },
            {
              num: 7,
              type: "match",
              audioLines: [
                { speaker: "女", text: "请进！先生，您几位？" },
                { speaker: "男", text: "三位。" }
              ],
              answer: "B",
              explainVi: "Nữ: Mời vào! Thưa anh, anh đi mấy người ạ? — Nam: Ba người. → Tranh B là nhân viên nhà hàng đón 3 vị khách."
            },
            {
              num: 8,
              type: "match",
              audioLines: [
                { speaker: "男", text: "你知道哪儿卖衣服便宜吗？" },
                { speaker: "女", text: "你上网看看吧。" }
              ],
              answer: "A",
              explainVi: "Nam: Bạn có biết chỗ nào bán quần áo rẻ không? — Nữ: Bạn lên mạng xem thử đi. → Tranh A là người đang xem mua đồ trên điện thoại và máy tính."
            },
            {
              num: 9,
              type: "match",
              audioLines: [
                { speaker: "女", text: "我来介绍一下，这是我最好的朋友。" },
                { speaker: "男", text: "你好，常听小林说起你。" }
              ],
              answer: "C",
              explainVi: "Nữ: Để mình giới thiệu nhé, đây là bạn thân nhất của mình. — Nam: Chào bạn, mình thường nghe Tiểu Lâm nhắc tới bạn. → Tranh C là cảnh giới thiệu và bắt tay làm quen."
            },
            {
              num: 10,
              type: "match",
              audioLines: [
                { speaker: "男", text: "这么早就出门啊？" },
                { speaker: "女", text: "去跑跑步，运动运动。" }
              ],
              answer: "F",
              explainVi: "Nam: Sáng sớm thế đã ra khỏi nhà rồi à? — Nữ: Đi chạy bộ một chút, vận động chút. → Tranh F là cô gái mặc đồ thể thao chạy bộ buổi sáng."
            }
          ]
        },
        {
          id: "l2b",
          title: "第二部分（二）· Phần 2b (Câu 11–15)",
          instruction: "Nghe hội thoại và ghép với bức tranh phù hợp (A–E).",
          type: "match",
          sharedImage: "assets/exams/hsk2_t1_l2b_pool.jpg",
          poolOptions: ["A", "B", "C", "D", "E"],
          items: [
            {
              num: 11,
              type: "match",
              audioLines: [
                { speaker: "女", text: "你还是自己点吧。" },
                { speaker: "男", text: "你来点吧，你点的我都爱吃。" }
              ],
              answer: "A",
              explainVi: "Nữ: Anh tự gọi món đi. — Nam: Em gọi đi, món nào em gọi anh cũng thích ăn. → Tranh A là đôi bạn đang cầm thực đơn gọi món."
            },
            {
              num: 12,
              type: "match",
              audioLines: [
                { speaker: "男", text: "您要找的包是什么样的？" },
                { speaker: "女", text: "黑色的，上面有一只小鸟。" }
              ],
              answer: "C",
              explainVi: "Nam: Chiếc túi chị muốn tìm trông như thế nào ạ? — Nữ: Màu đen, bên trên có một con chim nhỏ. → Tranh C là chiếc túi đen có hình chim nhỏ."
            },
            {
              num: 13,
              type: "match",
              audioLines: [
                { speaker: "女", text: "就要下雨了，大家别踢了。" },
                { speaker: "男", text: "没事，再踢一会儿。" }
              ],
              answer: "E",
              explainVi: "Nữ: Sắp mưa rồi, mọi người đừng đá bóng nữa. — Nam: Không sao đâu, đá thêm một lát nữa. → Tranh E là cảnh đá bóng ngoài sân."
            },
            {
              num: 14,
              type: "match",
              audioLines: [
                { speaker: "男", text: "你坐得离电脑太近了，这样对眼睛不好。" },
                { speaker: "女", text: "我知道了，下次不这样了。" }
              ],
              answer: "B",
              explainVi: "Nam: Con ngồi gần máy tính quá rồi, thế này không tốt cho mắt đâu. — Nữ: Con biết rồi, lần sau con không ngồi thế nữa. → Tranh B là bố nhắc con gái ngồi sát màn hình máy tính."
            },
            {
              num: 15,
              type: "match",
              audioLines: [
                { speaker: "女", text: "妈妈不希望我花太多钱给孩子买衣服。" },
                { speaker: "男", text: "她也没错，孩子长得太快了。" }
              ],
              answer: "D",
              explainVi: "Nữ: Mẹ không muốn em tiêu quá nhiều tiền mua quần áo cho con. — Nam: Mẹ nói cũng đúng đấy, trẻ con lớn nhanh lắm. → Tranh D là hai vợ chồng đẩy xe nôi đi chọn quần áo trẻ em."
            }
          ]
        },
        {
          id: "l3",
          title: "第三部分 · Phần 3 (Câu 16–25)",
          instruction: "Nghe hội thoại và câu hỏi, sau đó chọn đáp án đúng nhất (A, B hoặc C).",
          type: "mcq",
          items: [
            {
              num: 16,
              type: "mcq",
              options: [
                { id: "A", text: "机场", pinyin: "jīchǎng" },
                { id: "B", text: "地铁站", pinyin: "dìtiězhàn" },
                { id: "C", text: "公交车站", pinyin: "gōngjiāochēzhàn" }
              ],
              answer: "C",
              audioLines: [
                { speaker: "男", text: "别等了，我们打车去吧。" },
                { speaker: "女", text: "好吧，今天这公交车真慢啊。" },
                { speaker: "问", text: "他们在哪儿？" }
              ],
              explainVi: "Người nữ nói xe buýt hôm nay chậm quá nên hai người quyết định bắt taxi → Họ đang ở trạm xe buýt (公交车站)."
            },
            {
              num: 17,
              type: "mcq",
              options: [
                { id: "A", text: "考试", pinyin: "kǎoshì" },
                { id: "B", text: "回国", pinyin: "huí guó" },
                { id: "C", text: "打电话", pinyin: "dǎ diànhuà" }
              ],
              answer: "A",
              audioLines: [
                { speaker: "女", text: "我给你打了好几次电话。" },
                { speaker: "男", text: "我在准备考试呢，考完试就去找你。" },
                { speaker: "问", text: "男的要做什么？" }
              ],
              explainVi: "Người nam nói: “我在准备考试呢，考完试就去找你。” (Mình đang chuẩn bị thi, thi xong sẽ qua tìm bạn.) → Anh ấy sắp phải thi (考试)."
            },
            {
              num: 18,
              type: "mcq",
              options: [
                { id: "A", text: "本子上", pinyin: "běnzi shang" },
                { id: "B", text: "书包上", pinyin: "shūbāo shang" },
                { id: "C", text: "桌子上", pinyin: "zhuōzi shang" }
              ],
              answer: "A",
              audioLines: [
                { speaker: "男", text: "同学们，请打开书包，拿出你们的新本子，写上名字。" },
                { speaker: "女", text: "老师，我的本子还在家里的桌子上。" },
                { speaker: "问", text: "名字写在哪儿？" }
              ],
              explainVi: "Thầy giáo yêu cầu lấy quyển vở mới ra và viết tên lên đó → Viết tên lên quyển vở (本子上)."
            },
            {
              num: 19,
              type: "mcq",
              options: [
                { id: "A", text: "老师教的", pinyin: "lǎoshī jiāo de" },
                { id: "B", text: "朋友教的", pinyin: "péngyou jiāo de" },
                { id: "C", text: "自己学的", pinyin: "zìjǐ xué de" }
              ],
              answer: "C",
              audioLines: [
                { speaker: "女", text: "你这是跟谁学的？跳得这么好！" },
                { speaker: "男", text: "没人教，我没事就跟着网上的音乐跳。" },
                { speaker: "问", text: "男的是怎么学会跳舞的？" }
              ],
              explainVi: "Người nam trả lời không ai dạy cả, rảnh thì nhảy theo nhạc trên mạng → Tự mình học (自己学的)."
            },
            {
              num: 20,
              type: "mcq",
              options: [
                { id: "A", text: "星期五", pinyin: "xīngqīwǔ" },
                { id: "B", text: "星期六", pinyin: "xīngqīliù" },
                { id: "C", text: "星期日", pinyin: "xīngqīrì" }
              ],
              answer: "A",
              audioLines: [
                { speaker: "男", text: "都几点了，还不睡觉？明天还要上班呢。" },
                { speaker: "女", text: "是谁告诉你星期六还要上班的？" },
                { speaker: "问", text: "今天星期几？" }
              ],
              explainVi: "Người nam nói ngày mai phải đi làm, người nữ hỏi lại ai bảo thứ Bảy (星期六) vẫn phải đi làm → Ngày mai là thứ Bảy nên hôm nay là thứ Sáu (星期五)."
            },
            {
              num: 21,
              type: "mcq",
              options: [
                { id: "A", text: "很新", pinyin: "hěn xīn" },
                { id: "B", text: "很远", pinyin: "hěn yuǎn" },
                { id: "C", text: "很好吃", pinyin: "hěn hǎochī" }
              ],
              answer: "C",
              audioLines: [
                { speaker: "女", text: "学校门口的那家饭馆是新开的吗？" },
                { speaker: "男", text: "那家店早就有了，我吃过几次。" },
                { speaker: "女", text: "我第一次见，菜怎么样？" },
                { speaker: "男", text: "很不错，下次一起去。" },
                { speaker: "问", text: "那家饭馆怎么样？" }
              ],
              explainVi: "Người nữ hỏi đồ ăn thế nào, người nam đáp “很不错” (rất ổn/rất ngon) → 很好吃."
            },
            {
              num: 22,
              type: "mcq",
              options: [
                { id: "A", text: "六点", pinyin: "liù diǎn" },
                { id: "B", text: "六点半", pinyin: "liù diǎn bàn" },
                { id: "C", text: "七点半", pinyin: "qī diǎn bàn" }
              ],
              answer: "C",
              audioLines: [
                { speaker: "女", text: "电影几点开始？已经六点了，我们快走吧。" },
                { speaker: "男", text: "七点半，我们六点半走也不晚。" },
                { speaker: "女", text: "这个时间路上车很多，还是早点儿去吧。" },
                { speaker: "男", text: "好吧，听你的。" },
                { speaker: "问", text: "电影几点开始？" }
              ],
              explainVi: "Khi người nữ hỏi phim mấy giờ bắt đầu, người nam trả lời “七点半” (7 giờ rưỡi)."
            },
            {
              num: 23,
              type: "mcq",
              options: [
                { id: "A", text: "多吃肉", pinyin: "duō chī ròu" },
                { id: "B", text: "多吃菜", pinyin: "duō chī cài" },
                { id: "C", text: "喝奶茶", pinyin: "hē nǎichá" }
              ],
              answer: "B",
              audioLines: [
                { speaker: "男", text: "医生给你说的什么，你都忘了？" },
                { speaker: "女", text: "记得呢，医生叫我多喝牛奶、多吃菜，少喝咖啡、少吃肉什么的。" },
                { speaker: "男", text: "那你还喝奶茶？" },
                { speaker: "女", text: "奶茶里边有牛奶啊。" },
                { speaker: "问", text: "医生让女的做什么？" }
              ],
              explainVi: "Bác sĩ dặn người nữ uống nhiều sữa, ăn nhiều rau (多吃菜), uống ít cà phê và ăn ít thịt."
            },
            {
              num: 24,
              type: "mcq",
              options: [
                { id: "A", text: "开车", pinyin: "kāichē" },
                { id: "B", text: "坐火车", pinyin: "zuò huǒchē" },
                { id: "C", text: "坐飞机", pinyin: "zuò fēijī" }
              ],
              answer: "C",
              audioLines: [
                { speaker: "女", text: "你过年回家吗？" },
                { speaker: "男", text: "回啊，下个星期就飞回去。" },
                { speaker: "女", text: "又不太远，怎么不开车或者坐火车啊？" },
                { speaker: "男", text: "开车太累了，火车票也卖完了。" },
                { speaker: "问", text: "男的怎么回家？" }
              ],
              explainVi: "Người nam nói tuần sau sẽ bay về (“下个星期就飞回去”), lái xe mệt và vé tàu đã bán hết → Đi máy bay (坐飞机)."
            },
            {
              num: 25,
              type: "mcq",
              options: [
                { id: "A", text: "教室很大", pinyin: "jiàoshì hěn dà" },
                { id: "B", text: "开学很晚", pinyin: "kāixué hěn wǎn" },
                { id: "C", text: "学生很多", pinyin: "xuésheng hěn duō" }
              ],
              answer: "C",
              audioLines: [
                { speaker: "男", text: "昨天去你哥哥的学校玩，觉得怎么样？" },
                { speaker: "女", text: "他们学校太大了，学生有好几万，每一间教室都很漂亮。" },
                { speaker: "男", text: "那你希望去那儿读书吗？" },
                { speaker: "女", text: "你等着看吧，能想到就能做到。" },
                { speaker: "问", text: "说话人哥哥的学校怎么样？" }
              ],
              explainVi: "Người nữ miêu tả trường của anh trai rất lớn, có hàng mấy vạn sinh viên (“学生有好几万”), phòng học rất đẹp → Học sinh/sinh viên rất đông (学生很多)."
            }
          ]
        }
      ]
    },
    {
      id: "reading",
      title: "二、阅读 · Đọc hiểu",
      parts: [
        {
          id: "r1",
          title: "第一部分 · Phần 1 (Câu 26–30)",
          instruction: "Đọc câu và chọn bức tranh tương ứng (A–F).",
          type: "match",
          sharedImage: "assets/exams/hsk2_t1_r1_pool.jpg",
          poolOptions: ["A", "B", "C", "D", "E", "F"],
          items: [
            {
              num: 26,
              type: "match",
              text: "请让一让好吗？我要下车。",
              pinyin: "Qǐng ràng yí ràng hǎo ma? Wǒ yào xià chē.",
              answer: "C",
              explainVi: "“Xin nhường đường một chút được không? Tôi muốn xuống xe.” → Tranh C là cảnh hành khách xuống xe buýt."
            },
            {
              num: 27,
              type: "match",
              text: "你想好买哪条裤子了吗？",
              pinyin: "Nǐ xiǎnghǎo mǎi nǎ tiáo kùzi le ma?",
              answer: "F",
              explainVi: "“Bạn đã nghĩ xong xem mua chiếc quần nào chưa?” → Tranh F là cửa hàng quần áo với nhiều giá treo quần."
            },
            {
              num: 28,
              type: "match",
              text: "我们可以坐地铁去机场。",
              pinyin: "Wǒmen kěyǐ zuò dìtiě qù jīchǎng.",
              answer: "A",
              explainVi: "“Chúng ta có thể đi tàu điện ngầm ra sân bay.” → Tranh A là hai hành khách kéo vali xem biển chỉ dẫn trong ga tàu điện."
            },
            {
              num: 29,
              type: "match",
              text: "天一冷，我就想喝杯热茶。",
              pinyin: "Tiān yì lěng, wǒ jiù xiǎng hē bēi rè chá.",
              answer: "E",
              explainVi: "“Trời hễ lạnh là tôi lại muốn uống một tách trà nóng.” → Tranh E là ấm trà và tách trà nóng bên cửa sổ."
            },
            {
              num: 30,
              type: "match",
              text: "做这个菜太花时间了，我们还是出去吃吧。",
              pinyin: "Zuò zhège cài tài huā shíjiān le, wǒmen háishi chūqù chī ba.",
              answer: "B",
              explainVi: "“Làm món này tốn thời gian quá, chúng ta ra ngoài ăn đi.” → Tranh B là cảnh nấu ăn trong bếp."
            }
          ]
        },
        {
          id: "r2",
          title: "第二部分 · Phần 2 (Câu 31–35)",
          instruction: "Chọn từ thích hợp (A–F) điền vào chỗ trống.",
          type: "match",
          wordBank: [
            { id: "A", text: "过", pinyin: "guo" },
            { id: "B", text: "次", pinyin: "cì" },
            { id: "C", text: "得", pinyin: "de" },
            { id: "D", text: "的", pinyin: "de" },
            { id: "E", text: "多", pinyin: "duō" },
            { id: "F", text: "但", pinyin: "dàn" }
          ],
          poolOptions: ["A", "B", "C", "D", "E", "F"],
          items: [
            {
              num: 31,
              type: "match",
              text: "她是昨天下午去（ ）医院。",
              pinyin: "Tā shì zuótiān xiàwǔ qù ( ) yīyuàn.",
              answer: "D",
              explainVi: "Cấu trúc nhấn mạnh “是……的” dùng để nhấn mạnh thời gian hành động đã xảy ra: “Cô ấy đi bệnh viện vào chiều hôm qua.” → Chọn D (的)."
            },
            {
              num: 32,
              type: "match",
              text: "这个药一天吃三（ ）。",
              pinyin: "Zhège yào yì tiān chī sān ( ).",
              answer: "B",
              explainVi: "Động lượng từ “次” nghĩa là lần: “Thuốc này một ngày uống ba lần.” → Chọn B (次)."
            },
            {
              num: 33,
              type: "match",
              text: "你出（ ）国吗？",
              pinyin: "Nǐ chū ( ) guó ma?",
              answer: "A",
              explainVi: "Trợ từ động thái “过” biểu thị trải nghiệm trong quá khứ: “Bạn đã từng ra nước ngoài chưa?” → Chọn A (过)."
            },
            {
              num: 34,
              type: "match",
              text: "这家商场不大，（ ）东西很多。",
              pinyin: "Zhè jiā shāngchǎng bú dà, ( ) dōngxi hěn duō.",
              answer: "F",
              explainVi: "Hai vế đối lập nhau: “Trung tâm thương mại này không lớn, nhưng đồ đạc rất nhiều.” → Chọn F (但)."
            },
            {
              num: 35,
              type: "match",
              text: "孩子们笑（ ）真好看。",
              pinyin: "Háizimen xiào ( ) zhēn hǎokàn.",
              answer: "C",
              explainVi: "Trợ từ kết cấu “得” đứng sau động từ để nối với bổ ngữ trình độ: “Bọn trẻ cười thật đẹp.” → Chọn C (得)."
            }
          ]
        },
        {
          id: "r3a",
          title: "第三部分（一）· Phần 3a (Câu 36–40)",
          instruction: "Ghép câu trả lời (36–40) với câu hỏi/lời thoại tương ứng (A–F).",
          type: "match",
          wordBank: [
            { id: "A", text: "你什么时候过生日啊？", pinyin: "Nǐ shénme shíhou guò shēngrì a?" },
            { id: "B", text: "我站的时间太长了，好累啊！", pinyin: "Wǒ zhàn de shíjiān tài cháng le, hǎo lèi a!" },
            { id: "C", text: "你学了多长时间汉语了？", pinyin: "Nǐ xuéle duō cháng shíjiān Hànyǔ le?" },
            { id: "D", text: "你能帮我买杯奶茶吗？", pinyin: "Nǐ néng bāng wǒ mǎi bēi nǎichá ma?" },
            { id: "E", text: "李老师在哪儿？你看见他了吗？", pinyin: "Lǐ lǎoshī zài nǎr? Nǐ kànjiàn tā le ma?" },
            { id: "F", text: "不工作的时候，你都做什么？", pinyin: "Bù gōngzuò de shíhou, nǐ dōu zuò shénme?" }
          ],
          poolOptions: ["A", "B", "C", "D", "E", "F"],
          items: [
            {
              num: 36,
              type: "match",
              text: "还有半个月呢。",
              pinyin: "Hái yǒu bàn gè yuè ne.",
              answer: "A",
              explainVi: "“Còn nửa tháng nữa cơ.” → Trả lời cho câu hỏi A: “Bao giờ bạn đón sinh nhật thế?”"
            },
            {
              num: 37,
              type: "match",
              text: "有时候跟朋友一起喝喝咖啡、看看电影。",
              pinyin: "Yǒushíhou gēn péngyou yìqǐ hēhe kāfēi, kànkan diànyǐng.",
              answer: "F",
              explainVi: "“Có lúc cùng bạn bè uống cà phê, xem phim.” → Trả lời cho câu hỏi F: “Lúc không làm việc bạn thường làm gì?”"
            },
            {
              num: 38,
              type: "match",
              text: "我已经买了，正在回去的路上呢。",
              pinyin: "Wǒ yǐjīng mǎi le, zhèngzài huíqù de lùshang ne.",
              answer: "D",
              explainVi: "“Mình mua rồi, đang trên đường quay về đây.” → Phản hồi lời nhờ D: “Bạn có thể mua giúp mình cốc trà sữa không?”"
            },
            {
              num: 39,
              type: "match",
              text: "那快坐下休息休息吧。",
              pinyin: "Nà kuài zuòxia xiūxi xiūxi ba.",
              answer: "B",
              explainVi: "“Vậy mau ngồi xuống nghỉ ngơi một chút đi.” → Đáp lại câu B: “Tôi đứng lâu quá rồi, mệt quá!”"
            },
            {
              num: 40,
              type: "match",
              text: "我从两个月前开始学的。",
              pinyin: "Wǒ cóng liǎng gè yuè qián kāishǐ xué de.",
              answer: "C",
              explainVi: "“Tôi bắt đầu học từ hai tháng trước.” → Trả lời cho câu hỏi C: “Bạn học tiếng Hán được bao lâu rồi?”"
            }
          ]
        },
        {
          id: "r3b",
          title: "第三部分（二）· Phần 3b (Câu 41–45)",
          instruction: "Ghép câu trả lời (41–45) với câu hỏi/lời thoại tương ứng (A–E).",
          type: "match",
          wordBank: [
            { id: "A", text: "先生，您觉得这件怎么样？", pinyin: "Xiānsheng, nín juéde zhè jiàn zěnmeyàng?" },
            { id: "B", text: "请问去地铁站怎么走？", pinyin: "Qǐngwèn qù dìtiězhàn zěnme zǒu?" },
            { id: "C", text: "您好，是您叫的出租车吗？", pinyin: "Nín hǎo, shì nín jiào de chūzūchē ma?" },
            { id: "D", text: "你什么时候回北京？", pinyin: "Nǐ shénme shíhou huí Běijīng?" },
            { id: "E", text: "你新买的那本书好看吗？", pinyin: "Nǐ xīn mǎi de nà běn shū hǎokàn ma?" }
          ],
          poolOptions: ["A", "B", "C", "D", "E"],
          items: [
            {
              num: 41,
              type: "match",
              text: "不好说，等忙完这边的工作吧。",
              pinyin: "Bù hǎo shuō, děng mángwán zhèbiān de gōngzuò ba.",
              answer: "D",
              explainVi: "“Khó nói lắm, đợi làm xong công việc bên này đã.” → Trả lời cho câu D: “Bao giờ bạn về Bắc Kinh?”"
            },
            {
              num: 42,
              type: "match",
              text: "太有意思了，我已经看完了。",
              pinyin: "Tài yǒu yìsi le, wǒ yǐjīng kànwán le.",
              answer: "E",
              explainVi: "“Hay quá trời luôn, mình đọc xong rồi.” → Trả lời cho câu E: “Cuốn sách bạn mới mua có hay không?”"
            },
            {
              num: 43,
              type: "match",
              text: "从这条路往东走，十分钟就到了。",
              pinyin: "Cóng zhè tiáo lù wǎng dōng zǒu, shí fēnzhōng jiù dào le.",
              answer: "B",
              explainVi: "“Từ con đường này đi về phía đông, 10 phút là tới.” → Chỉ đường cho câu B: “Xin hỏi đi đến ga tàu điện ngầm đi như thế nào?”"
            },
            {
              num: 44,
              type: "match",
              text: "对，我去黄河高中南门。",
              pinyin: "Duì, wǒ qù Huánghé Gāozhōng nánmén.",
              answer: "C",
              explainVi: "“Đúng rồi, tôi đi cổng nam trường THPT Hoàng Hà.” → Trả lời tài xế ở câu C: “Chào anh, có phải anh đặt xe taxi không?”"
            },
            {
              num: 45,
              type: "match",
              text: "穿着没上一件舒服呢。",
              pinyin: "Chuānzhe méi shàng yí jiàn shūfu ne.",
              answer: "A",
              explainVi: "“Mặc vào không thoải mái bằng chiếc trước.” → Trả lời câu A: “Thưa anh, anh thấy chiếc áo này thế nào?”"
            }
          ]
        },
        {
          id: "r4",
          title: "第四部分 · Phần 4 (Câu 46–50)",
          instruction: "Đọc đoạn văn ngắn và chọn đáp án đúng nhất (A, B hoặc C).",
          type: "mcq",
          items: [
            {
              num: 46,
              type: "mcq",
              passage: "你还记得我吗？你上中学的时候我们一起学过篮球。",
              passagePinyin: "Nǐ hái jìde wǒ ma? Nǐ shàng zhōngxué de shíhou wǒmen yìqǐ xuéguo lánqiú.",
              question: "他们：",
              questionPinyin: "Tāmen:",
              options: [
                { id: "A", text: "是中学生", pinyin: "shì zhōngxuéshēng" },
                { id: "B", text: "第一次见", pinyin: "dì-yī cì jiàn" },
                { id: "C", text: "一起打过篮球", pinyin: "yìqǐ dǎguo lánqiú" }
              ],
              answer: "C",
              explainVi: "Đoạn văn nói: “Hồi bạn học trung học, chúng ta từng cùng nhau học bóng rổ.” → Hai người từng chơi bóng rổ cùng nhau (C)."
            },
            {
              num: 47,
              type: "mcq",
              passage: "每次妈妈一包饺子，我就去帮忙。",
              passagePinyin: "Měi cì māma yì bāo jiǎozi, wǒ jiù qù bāngmáng.",
              question: "妈妈包饺子的时候，“我”：",
              questionPinyin: "Māma bāo jiǎozi de shíhou, “wǒ”:",
              options: [
                { id: "A", text: "做作业", pinyin: "zuò zuòyè" },
                { id: "B", text: "跟妈妈一起包", pinyin: "gēn māma yìqǐ bāo" },
                { id: "C", text: "准备吃", pinyin: "zhǔnbèi chī" }
              ],
              answer: "B",
              explainVi: "“Mỗi lần mẹ hễ gói sủi cảo là tôi lại ra giúp.” → “Tôi” cùng mẹ gói sủi cảo (B)."
            },
            {
              num: 48,
              type: "mcq",
              passage: "从小爷爷就告诉我：做错事情的时候，要说“对不起”。",
              passagePinyin: "Cóngxiǎo yéye jiù gàosu wǒ: zuòcuò shìqing de shíhou, yào shuō “duìbuqǐ”.",
              question: "爷爷：",
              questionPinyin: "Yéye:",
              options: [
                { id: "A", text: "经常做错事情", pinyin: "jīngcháng zuòcuò shìqing" },
                { id: "B", text: "不爱说“对不起”", pinyin: "bú ài shuō “duìbuqǐ”" },
                { id: "C", text: "教我说“对不起”", pinyin: "jiāo wǒ shuō “duìbuqǐ”" }
              ],
              answer: "C",
              explainVi: "“Từ nhỏ ông nội đã dặn tôi: khi làm sai việc gì thì phải nói 'xin lỗi'.” → Ông nội dạy tôi nói “对不起” (C)."
            },
            {
              num: 49,
              type: "mcq",
              passage: "这一周都是阴天，我们等天晴了再去游泳吧。",
              passagePinyin: "Zhè yì zhōu dōu shì yīntiān, wǒmen děng tiān qíngle zài qù yóuyǒng ba.",
              question: "他们可能：",
              questionPinyin: "Tāmen kěnéng:",
              options: [
                { id: "A", text: "喜欢阴天", pinyin: "xǐhuan yīntiān" },
                { id: "B", text: "喜欢晴天", pinyin: "xǐhuan qíngtiān" },
                { id: "C", text: "下周游泳", pinyin: "xià zhōu yóuyǒng" }
              ],
              answer: "C",
              explainVi: "“Tuần này đều là trời âm u, chúng ta đợi trời nắng rồi hãy đi bơi nhé.” → Có thể tuần sau họ mới đi bơi (C)."
            },
            {
              num: 50,
              type: "mcq",
              passage: "我怎么每次见他，他都在看书？",
              passagePinyin: "Wǒ zěnme měi cì jiàn tā, tā dōu zài kàn shū?",
              question: "他的爱好是：",
              questionPinyin: "Tā de àihào shì:",
              options: [
                { id: "A", text: "见我", pinyin: "jiàn wǒ" },
                { id: "B", text: "看书", pinyin: "kàn shū" },
                { id: "C", text: "买书", pinyin: "mǎi shū" }
              ],
              answer: "B",
              explainVi: "“Sao mỗi lần tôi gặp anh ấy, anh ấy đều đang đọc sách thế?” → Sở thích của anh ấy là đọc sách (B)."
            }
          ]
        }
      ]
    },
    {
      id: "writing",
      title: "三、书写 · Viết",
      parts: [
        {
          id: "w1",
          title: "第一部分 · Phần 1 (Câu 51–55)",
          instruction: "Chọn bộ thủ/thành phần đúng (A–F) ghép vào ô chữ Hán còn thiếu.",
          type: "match",
          wordBank: [
            { id: "A", text: "田" },
            { id: "B", text: "且" },
            { id: "C", text: "见" },
            { id: "D", text: "夕" },
            { id: "E", text: "十" },
            { id: "F", text: "又" }
          ],
          poolOptions: ["A", "B", "C", "D", "E", "F"],
          items: [
            {
              num: 51,
              type: "match",
              img: "assets/exams/hsk2_t1_w1_q51.jpg",
              text: "Ghép thành từ theo tranh",
              pinyin: "nán shēng",
              answer: "A",
              explainVi: "Chữ 男 (nán) gồm phần trên là 田 (A) và phần dưới là 力 → ghép thành 男生 (nam sinh)."
            },
            {
              num: 52,
              type: "match",
              img: "assets/exams/hsk2_t1_w1_q52.jpg",
              text: "Ghép thành từ theo tranh",
              pinyin: "jǐ suì",
              answer: "D",
              explainVi: "Chữ 岁 (suì) gồm phần trên là 山 và phần dưới là 夕 (D) → ghép thành 几岁 (mấy tuổi)."
            },
            {
              num: 53,
              type: "match",
              img: "assets/exams/hsk2_t1_w1_q53.jpg",
              text: "Ghép thành từ theo tranh",
              pinyin: "Hàn zì",
              answer: "F",
              explainVi: "Chữ 汉 (Hàn) gồm bộ 氵 bên trái và chữ 又 (F) bên phải → ghép thành 汉字 (chữ Hán)."
            },
            {
              num: 54,
              type: "match",
              img: "assets/exams/hsk2_t1_w1_q54.jpg",
              text: "Ghép thành từ theo tranh",
              pinyin: "xiàn zài",
              answer: "C",
              explainVi: "Chữ 现 (xiàn) gồm bộ 王 bên trái và chữ 见 (C) bên phải → ghép thành 现在 (hiện tại/bây giờ)."
            },
            {
              num: 55,
              type: "match",
              img: "assets/exams/hsk2_t1_w1_q55.jpg",
              text: "Ghép thành từ theo tranh",
              pinyin: "jiě mèi",
              answer: "B",
              explainVi: "Chữ 姐 (jiě) gồm bộ 女 bên trái và chữ 且 (B) bên phải → ghép thành 姐妹 (chị em)."
            }
          ]
        },
        {
          id: "w2",
          title: "第二部分 · Phần 2 (Câu 56–60)",
          instruction: "Điền 1 chữ Hán còn thiếu vào ô ( ) dựa theo Pinyin và ngữ cảnh câu.",
          type: "fill_char",
          items: [
            {
              num: 56,
              type: "fill_char",
              text: "这（ ）天下雪，路上不好走。",
              pinyin: "Zhè liǎng tiān xià xuě, lùshang bù hǎo zǒu.",
              targetPinyin: "liǎng",
              answer: "两",
              explainVi: "两 (liǎng): hai, vài — “Mấy hôm nay trời có tuyết rơi, đường khó đi.”"
            },
            {
              num: 57,
              type: "fill_char",
              text: "那是我（ ），要不要认识一下？",
              pinyin: "Nà shì wǒ gē, yào bú yào rènshi yíxià?",
              targetPinyin: "gē",
              answer: "哥",
              explainVi: "哥 (gē): anh trai — “Kia là anh trai tôi, có muốn làm quen một chút không?”"
            },
            {
              num: 58,
              type: "fill_char",
              text: "过（ ）的时候，我们一家人要去旅游。",
              pinyin: "Guònián de shíhou, wǒmen yì jiā rén yào qù lǚyóu.",
              targetPinyin: "nián",
              answer: "年",
              explainVi: "年 (nián) trong 过年 (đón Tết/năm mới) — “Lúc đón Tết, cả nhà chúng tôi sẽ đi du lịch.”"
            },
            {
              num: 59,
              type: "fill_char",
              text: "和玩手机（ ），学习很累，但很有意思。",
              pinyin: "Hé wán shǒujī bǐ, xuéxí hěn lèi, dàn hěn yǒu yìsi.",
              targetPinyin: "bǐ",
              answer: "比",
              explainVi: "比 (bǐ): so với — “So với chơi điện thoại, học tập rất mệt nhưng rất thú vị.”"
            },
            {
              num: 60,
              type: "fill_char",
              text: "（ ）天李老师身体不舒服，不能来上课了。",
              pinyin: "Jīntiān Lǐ lǎoshī shēntǐ bù shūfu, bù néng lái shàngkè le.",
              targetPinyin: "jīn",
              answer: "今",
              explainVi: "今 (jīn) trong 今天 (hôm nay) — “Hôm nay thầy/cô Lý không khỏe, không thể đến dạy được.”"
            }
          ]
        }
      ]
    }
  ]
};

window.HSK_EXAMS_DATA["hsk2_t2"] = {
  id: "hsk2_t2",
  sections: [
    {
      id: "listening",
      title: "一、听力 · Nghe hiểu",
      parts: [
        {
          id: "l1",
          title: "第一部分 · Phần 1 (Câu 1–5)",
          instruction: "Nghe một câu và chọn bức tranh tương ứng (A, B hoặc C).",
          type: "mcq",
          items: [
            {
              num: 1,
              type: "mcq",
              img: "assets/exams/hsk2_t2_l1_q1.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "B",
              audioLines: [
                { speaker: "", text: "老师，这个题我会做。" }
              ],
              explainVi: "Câu nghe: “老师，这个题我会做。” (Thưa cô/thầy, bài này em biết làm ạ.) → Tranh B là học sinh giơ tay phát biểu trong lớp."
            },
            {
              num: 2,
              type: "mcq",
              img: "assets/exams/hsk2_t2_l1_q2.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "A",
              audioLines: [
                { speaker: "", text: "大家在地铁上可以玩玩手机、上上网。" }
              ],
              explainVi: "Câu nghe: “大家在地铁上可以玩玩手机、上上网。” (Mọi người trên tàu điện ngầm có thể nghịch điện thoại, lướt mạng.) → Tranh A là hành khách dùng điện thoại trên tàu điện."
            },
            {
              num: 3,
              type: "mcq",
              img: "assets/exams/hsk2_t2_l1_q3.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "A",
              audioLines: [
                { speaker: "", text: "谢谢！有你帮忙，妈妈做得快多了。" }
              ],
              explainVi: "Câu nghe: “谢谢！有你帮忙，妈妈做得快多了。” (Cảm ơn con! Có con giúp nên mẹ làm nhanh hơn hẳn.) → Tranh A là em bé giúp mẹ nấu ăn trong bếp."
            },
            {
              num: 4,
              type: "mcq",
              img: "assets/exams/hsk2_t2_l1_q4.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "C",
              audioLines: [
                { speaker: "", text: "我太喜欢家门口这些花了。" }
              ],
              explainVi: "Câu nghe: “我太喜欢家门口这些花了。” (Tôi thích những bông hoa trước cửa nhà này quá đi.) → Tranh C là khóm hoa trồng ngay trước cửa nhà."
            },
            {
              num: 5,
              type: "mcq",
              img: "assets/exams/hsk2_t2_l1_q5.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "C",
              audioLines: [
                { speaker: "", text: "他们经常一起看电影。" }
              ],
              explainVi: "Câu nghe: “他们经常一起看电影。” (Họ thường xuyên đi xem phim cùng nhau.) → Tranh C là hai người ngồi trong rạp chiếu phim."
            }
          ]
        },
        {
          id: "l2a",
          title: "第二部分（一）· Phần 2a (Câu 6–10)",
          instruction: "Nghe hội thoại và ghép với bức tranh phù hợp (A–F).",
          type: "match",
          sharedImage: "assets/exams/hsk2_t2_l2a_pool.jpg",
          poolOptions: ["A", "B", "C", "D", "E", "F"],
          items: [
            {
              num: 6,
              type: "match",
              audioLines: [
                { speaker: "男", text: "您慢一点儿，请坐这儿吧。" },
                { speaker: "女", text: "谢谢你，孩子！" }
              ],
              answer: "B",
              explainVi: "Nam: Bà đi chậm thôi ạ, mời bà ngồi chỗ này nhé. — Nữ: Cảm ơn cháu nhé! → Tranh B là cảnh nhường ghế trên xe buýt."
            },
            {
              num: 7,
              type: "match",
              audioLines: [
                { speaker: "女", text: "爸、妈，新年快乐！" },
                { speaker: "男", text: "过年好！" }
              ],
              answer: "F",
              explainVi: "Nữ: Bố mẹ, chúc mừng năm mới! — Nam: Chúc mừng năm mới! → Tranh F là gia đình mang quà về chúc Tết bố mẹ."
            },
            {
              num: 8,
              type: "match",
              audioLines: [
                { speaker: "男", text: "请问去地铁站怎么走？" },
                { speaker: "女", text: "从这儿往前 200 米就到了。" }
              ],
              answer: "A",
              explainVi: "Nam: Xin hỏi đi đến ga tàu điện ngầm đi như thế nào? — Nữ: Từ đây đi thẳng về phía trước 200 mét là tới. → Tranh A là người phụ nữ đang chỉ đường."
            },
            {
              num: 9,
              type: "match",
              audioLines: [
                { speaker: "女", text: "我们一起出去玩雪吧。" },
                { speaker: "男", text: "太冷了吧。" }
              ],
              answer: "E",
              explainVi: "Nữ: Chúng mình cùng ra ngoài nghịch tuyết đi. — Nam: Lạnh quá đi mất. → Tranh E là hai người đứng bên cửa sổ nhìn tuyết rơi."
            },
            {
              num: 10,
              type: "match",
              audioLines: [
                { speaker: "男", text: "你哪儿不舒服？" },
                { speaker: "女", text: "头有点儿疼。" }
              ],
              answer: "C",
              explainVi: "Nam: Cháu khó chịu ở đâu? — Nữ: Cháu hơi đau đầu ạ. → Tranh C là bác sĩ đang khám bệnh cho em nhỏ."
            }
          ]
        },
        {
          id: "l2b",
          title: "第二部分（二）· Phần 2b (Câu 11–15)",
          instruction: "Nghe hội thoại và ghép với bức tranh phù hợp (A–E).",
          type: "match",
          sharedImage: "assets/exams/hsk2_t2_l2b_pool.jpg",
          poolOptions: ["A", "B", "C", "D", "E"],
          items: [
            {
              num: 11,
              type: "match",
              audioLines: [
                { speaker: "女", text: "她们几个谁跳得最好？" },
                { speaker: "男", text: "这几个小孩儿跳得都不错。" }
              ],
              answer: "D",
              explainVi: "Nữ: Trong mấy bé này ai múa đẹp nhất? — Nam: Mấy đứa nhỏ này múa đều ổn cả. → Tranh D là các bé gái đang múa."
            },
            {
              num: 12,
              type: "match",
              audioLines: [
                { speaker: "男", text: "不好意思，我晚十分钟到！" },
                { speaker: "女", text: "没关系。下雨了，路上不好走。" }
              ],
              answer: "B",
              explainVi: "Nam: Xin lỗi, mình tới muộn 10 phút! — Nữ: Không sao đâu. Trời mưa rồi, đường khó đi lắm. → Tranh B là cảnh đi xe máy giao hàng dưới trời mưa."
            },
            {
              num: 13,
              type: "match",
              audioLines: [
                { speaker: "女", text: "你看见我的手表了吗？" },
                { speaker: "男", text: "没在你包里吗？" }
              ],
              answer: "C",
              explainVi: "Nữ: Bạn có thấy đồng hồ của mình đâu không? — Nam: Không ở trong túi bạn à? → Tranh C là cô gái đang lục tìm đồ trong ba lô."
            },
            {
              num: 14,
              type: "match",
              audioLines: [
                { speaker: "男", text: "这是我第一次来这家饭店。" },
                { speaker: "女", text: "那让我来点吧。" }
              ],
              answer: "A",
              explainVi: "Nam: Đây là lần đầu anh đến nhà hàng này. — Nữ: Vậy để em gọi món nhé. → Tranh A là hai người xem thực đơn trong nhà hàng."
            },
            {
              num: 15,
              type: "match",
              audioLines: [
                { speaker: "女", text: "她们两个是姐妹吗？" },
                { speaker: "男", text: "不是，但从小就是好朋友。" }
              ],
              answer: "E",
              explainVi: "Nữ: Hai cô ấy là chị em à? — Nam: Không phải, nhưng từ nhỏ đã là bạn thân rồi. → Tranh E là hai cô bạn thân ngồi trò chuyện vui vẻ."
            }
          ]
        },
        {
          id: "l3",
          title: "第三部分 · Phần 3 (Câu 16–25)",
          instruction: "Nghe hội thoại và câu hỏi, sau đó chọn đáp án đúng nhất (A, B hoặc C).",
          type: "mcq",
          items: [
            {
              num: 16,
              type: "mcq",
              options: [
                { id: "A", text: "书店", pinyin: "shūdiàn" },
                { id: "B", text: "饭店", pinyin: "fàndiàn" },
                { id: "C", text: "花店", pinyin: "huādiàn" }
              ],
              answer: "B",
              audioLines: [
                { speaker: "男", text: "这家店我们来过吗？" },
                { speaker: "女", text: "你忘了？你还说这里的菜非常好吃呢！" },
                { speaker: "问", text: "他们在哪儿？" }
              ],
              explainVi: "Người nữ nhắc lại rằng anh ấy từng khen đồ ăn ở đây rất ngon (“这里的菜非常好吃”) → Họ đang ở nhà hàng/quán ăn (饭店)."
            },
            {
              num: 17,
              type: "mcq",
              options: [
                { id: "A", text: "回北京", pinyin: "huí Běijīng" },
                { id: "B", text: "介绍北京", pinyin: "jièshào Běijīng" },
                { id: "C", text: "去北京旅游", pinyin: "qù Běijīng lǚyóu" }
              ],
              answer: "B",
              audioLines: [
                { speaker: "女", text: "我想下周去北京旅游。" },
                { speaker: "男", text: "我可是“老北京”了，给你介绍介绍吧。" },
                { speaker: "问", text: "男的想做什么？" }
              ],
              explainVi: "Người nữ muốn tuần sau đi du lịch Bắc Kinh, người nam nói mình là dân Bắc Kinh lâu năm nên muốn giới thiệu cho cô ấy → 介绍北京."
            },
            {
              num: 18,
              type: "mcq",
              options: [
                { id: "A", text: "买东西", pinyin: "mǎi dōngxi" },
                { id: "B", text: "找东西", pinyin: "zhǎo dōngxi" },
                { id: "C", text: "拿东西", pinyin: "ná dōngxi" }
              ],
              answer: "C",
              audioLines: [
                { speaker: "男", text: "女士，请问您要帮忙吗？" },
                { speaker: "女", text: "帮我拿一下书包好吗？谢谢啊！" },
                { speaker: "问", text: "女的要男的帮着做什么？" }
              ],
              explainVi: "Người nữ nhờ: “帮我拿一下书包好吗？” (Cầm giúp tôi chiếc cặp sách một chút được không?) → 拿东西 (cầm đồ giúp)."
            },
            {
              num: 19,
              type: "mcq",
              options: [
                { id: "A", text: "看时间", pinyin: "kàn shíjiān" },
                { id: "B", text: "看电脑", pinyin: "kàn diànnǎo" },
                { id: "C", text: "看手机", pinyin: "kàn shǒujī" }
              ],
              answer: "C",
              audioLines: [
                { speaker: "女", text: "上课的时候，不可以看手机。" },
                { speaker: "男", text: "不好意思，我是想看时间。" },
                { speaker: "问", text: "女的不让男的做什么？" }
              ],
              explainVi: "Cô giáo/người nữ nói: “Lúc lên lớp không được xem điện thoại.” → 不让男的看手机 (C)."
            },
            {
              num: 20,
              type: "mcq",
              options: [
                { id: "A", text: "楼外边", pinyin: "lóu wàibian" },
                { id: "B", text: "楼上边", pinyin: "lóu shàngbian" },
                { id: "C", text: "楼下边", pinyin: "lóu xiàbian" }
              ],
              answer: "B",
              audioLines: [
                { speaker: "男", text: "我到楼下了，您快下来吧。" },
                { speaker: "女", text: "您能送上来吗？我在 309 房间。" },
                { speaker: "问", text: "女的现在在哪儿？" }
              ],
              explainVi: "Người nam đã tới dưới tầng và gọi xuống, nhưng người nữ nhờ mang lên phòng 309 (“送上来”) → Cô ấy đang ở trên tầng (楼上边)."
            },
            {
              num: 21,
              type: "mcq",
              options: [
                { id: "A", text: "生病了", pinyin: "shēngbìng le" },
                { id: "B", text: "没药了", pinyin: "méi yào le" },
                { id: "C", text: "家里有事", pinyin: "jiā li yǒu shì" }
              ],
              answer: "A",
              audioLines: [
                { speaker: "女", text: "你昨天是家里有事吗？怎么没来上班？" },
                { speaker: "男", text: "我身体不太舒服，去医院看了看。" },
                { speaker: "女", text: "没事吧？医生说什么了？" },
                { speaker: "男", text: "不是大问题，吃几天药就好了。" },
                { speaker: "问", text: "男的怎么了？" }
              ],
              explainVi: "Người nam nói hôm qua thấy trong người không khỏe nên đi bệnh viện khám và uống vài ngày thuốc là khỏi → Bị ốm (生病了)."
            },
            {
              num: 22,
              type: "mcq",
              options: [
                { id: "A", text: "公司", pinyin: "gōngsī" },
                { id: "B", text: "机场", pinyin: "jīchǎng" },
                { id: "C", text: "地铁站", pinyin: "dìtiězhàn" }
              ],
              answer: "B",
              audioLines: [
                { speaker: "男", text: "喂，我现在下飞机了，正准备打车。" },
                { speaker: "女", text: "公司有事情，小高给你打了好多电话。" },
                { speaker: "男", text: "不好意思，你告诉他，我半个多小时就到了。" },
                { speaker: "女", text: "你给他回个电话吧。" },
                { speaker: "问", text: "男的现在最可能在哪儿？" }
              ],
              explainVi: "Người nam nói: “我现在下飞机了，正准备打车。” (Bây giờ tôi xuống máy bay rồi, đang chuẩn bị bắt taxi.) → Đang ở sân bay (机场)."
            },
            {
              num: 23,
              type: "mcq",
              options: [
                { id: "A", text: "做饭", pinyin: "zuò fàn" },
                { id: "B", text: "工作", pinyin: "gōngzuò" },
                { id: "C", text: "跟孩子玩", pinyin: "gēn háizi wán" }
              ],
              answer: "A",
              audioLines: [
                { speaker: "女", text: "我最快乐的事就是跟孩子们一起玩。" },
                { speaker: "男", text: "我最快乐的事就是看着你和孩子们一起玩。" },
                { speaker: "女", text: "快中午了，你就这么看着，什么事也不做？" },
                { speaker: "男", text: "好吧，我懂了。你们玩，我去做饭。" },
                { speaker: "问", text: "女的让男的做什么？" }
              ],
              explainVi: "Người nữ nhắc sắp trưa rồi mà chẳng chịu làm gì, người nam liền hiểu ý: “你们玩，我去做饭。” → Nấu cơm (做饭)."
            },
            {
              num: 24,
              type: "mcq",
              options: [
                { id: "A", text: "八点", pinyin: "bā diǎn" },
                { id: "B", text: "七点五十", pinyin: "qī diǎn wǔshí" },
                { id: "C", text: "八点十分", pinyin: "bā diǎn shí fēn" }
              ],
              answer: "C",
              audioLines: [
                { speaker: "男", text: "已经八点了，电影怎么还没开始？" },
                { speaker: "女", text: "还有十分钟呢。我都想出去买杯咖啡了。" },
                { speaker: "男", text: "那我记错时间了。你想喝什么咖啡？我去买。" },
                { speaker: "女", text: "我用手机点完了，一会儿你帮我出去拿吧。" },
                { speaker: "问", text: "电影什么时候开始？" }
              ],
              explainVi: "Hiện tại đã 8 giờ và còn 10 phút nữa phim mới bắt đầu → Phim bắt đầu lúc 8 giờ 10 phút (八点十分)."
            },
            {
              num: 25,
              type: "mcq",
              options: [
                { id: "A", text: "准备回家", pinyin: "zhǔnbèi huí jiā" },
                { id: "B", text: "买衣服", pinyin: "mǎi yīfu" },
                { id: "C", text: "做吃的", pinyin: "zuò chī de" }
              ],
              answer: "C",
              audioLines: [
                { speaker: "女", text: "奶奶身体还好吧？" },
                { speaker: "男", text: "很好，她一回家就开始忙着准备过年的饭菜。" },
                { speaker: "女", text: "别让她太累了，很多东西商店里都有卖的。" },
                { speaker: "男", text: "她觉得买的没有自己做的好吃。" },
                { speaker: "问", text: "奶奶正在忙什么？" }
              ],
              explainVi: "Bà về nhà là bắt đầu bận rộn chuẩn bị đồ ăn ngày Tết (“准备过年的饭菜”) và thấy tự làm ngon hơn mua sẵn → Làm đồ ăn (做吃的)."
            }
          ]
        }
      ]
    },
    {
      id: "reading",
      title: "二、阅读 · Đọc hiểu",
      parts: [
        {
          id: "r1",
          title: "第一部分 · Phần 1 (Câu 26–30)",
          instruction: "Đọc câu và chọn bức tranh tương ứng (A–F).",
          type: "match",
          sharedImage: "assets/exams/hsk2_t2_r1_pool.jpg",
          poolOptions: ["A", "B", "C", "D", "E", "F"],
          items: [
            {
              num: 26,
              type: "match",
              text: "你怎么了？可以跟我说说吗？",
              pinyin: "Nǐ zěnme le? Kěyǐ gēn wǒ shuōshuo ma?",
              answer: "E",
              explainVi: "“Con sao thế? Có thể kể với mẹ/cô được không?” → Tranh E là người lớn đang an ủi cậu bé buồn bã trên ghế sofa."
            },
            {
              num: 27,
              type: "match",
              text: "你看，这里是不是写错了？我没看懂。",
              pinyin: "Nǐ kàn, zhèlǐ shì bú shì xiěcuò le? Wǒ méi kàndǒng.",
              answer: "C",
              explainVi: "“Anh xem, chỗ này có phải viết nhầm rồi không? Em đọc không hiểu.” → Tranh C là hai đồng nghiệp đang cùng xem tài liệu."
            },
            {
              num: 28,
              type: "match",
              text: "她喜欢听着歌做运动。",
              pinyin: "Tā xǐhuan tīngzhe gē zuò yùndòng.",
              answer: "F",
              explainVi: "“Cô ấy thích vừa nghe nhạc vừa tập thể dục.” → Tranh F là cô gái đeo tai nghe chạy bộ trên máy."
            },
            {
              num: 29,
              type: "match",
              text: "我的游泳是妈妈教的。",
              pinyin: "Wǒ de yóuyǒng shì māma jiāo de.",
              answer: "A",
              explainVi: "“Bơi lội của tôi là do mẹ dạy đấy.” → Tranh A là người mẹ đang dạy con tập bơi."
            },
            {
              num: 30,
              type: "match",
              text: "别睡那么晚，对身体不好。",
              pinyin: "Bié shuì nàme wǎn, duì shēntǐ bù hǎo.",
              answer: "B",
              explainVi: "“Đừng ngủ muộn thế, không tốt cho sức khỏe đâu.” → Tranh B là cô gái ngáp ngủ trước máy tính vào ban đêm."
            }
          ]
        },
        {
          id: "r2",
          title: "第二部分 · Phần 2 (Câu 31–35)",
          instruction: "Chọn từ thích hợp (A–F) điền vào chỗ trống.",
          type: "match",
          wordBank: [
            { id: "A", text: "进去", pinyin: "jìnqù" },
            { id: "B", text: "回去", pinyin: "huíqu" },
            { id: "C", text: "出来", pinyin: "chūlái" },
            { id: "D", text: "里面", pinyin: "lǐmiàn" },
            { id: "E", text: "多", pinyin: "duō" },
            { id: "F", text: "前面", pinyin: "qiánmiàn" }
          ],
          poolOptions: ["A", "B", "C", "D", "E", "F"],
          items: [
            {
              num: 31,
              type: "match",
              text: "喂，我现在有事，一会儿给你打（ ）好吗？",
              pinyin: "Wèi, wǒ xiànzài yǒu shì, yíhuìr gěi nǐ dǎ ( ) hǎo ma?",
              answer: "B",
              explainVi: "“打回去” nghĩa là gọi điện lại: “Alo, giờ tôi đang có việc, lát nữa gọi lại cho bạn nhé?” → Chọn B (回去)."
            },
            {
              num: 32,
              type: "match",
              text: "她弟弟已经上中学了，我一开始都没认（ ）。",
              pinyin: "Tā dìdi yǐjīng shàng zhōngxué le, wǒ yì kāishǐ dōu méi rèn ( ).",
              answer: "C",
              explainVi: "“认出来” là bổ ngữ kết quả/xu hướng nghĩa là nhận ra: “Em trai cô ấy đã học trung học rồi, lúc đầu tôi còn chẳng nhận ra.” → Chọn C (出来)."
            },
            {
              num: 33,
              type: "match",
              text: "我爱看书，因为书（ ）有很多好玩儿的东西。",
              pinyin: "Wǒ ài kàn shū, yīnwèi shū ( ) yǒu hěn duō hǎowánr de dōngxi.",
              answer: "D",
              explainVi: "“书里面” nghĩa là bên trong sách: “Tôi thích đọc sách vì trong sách có rất nhiều điều thú vị.” → Chọn D (里面)."
            },
            {
              num: 34,
              type: "match",
              text: "快（ ）吧，外面太冷了。",
              pinyin: "Kuài ( ) ba, wàimiàn tài lěng le.",
              answer: "A",
              explainVi: "“快进去吧” nghĩa là mau vào trong đi: “Vào nhanh đi, bên ngoài lạnh quá rồi.” → Chọn A (进去)."
            },
            {
              num: 35,
              type: "match",
              text: "开车的时候，看好（ ）的路。",
              pinyin: "Kāichē de shíhou, kànhǎo ( ) de lù.",
              answer: "F",
              explainVi: "“前面的路” nghĩa là con đường phía trước: “Khi lái xe hãy chú ý nhìn đường phía trước.” → Chọn F (前面)."
            }
          ]
        },
        {
          id: "r3a",
          title: "第三部分（一）· Phần 3a (Câu 36–40)",
          instruction: "Ghép câu trả lời (36–40) với câu hỏi/lời thoại tương ứng (A–F).",
          type: "match",
          wordBank: [
            { id: "A", text: "你买到回家的机票了吗？", pinyin: "Nǐ mǎidào huí jiā de jīpiào le ma?" },
            { id: "B", text: "小林画的画儿真漂亮啊！", pinyin: "Xiǎo Lín huà de huàr zhēn piàoliang a!" },
            { id: "C", text: "我们什么时候再见面啊？", pinyin: "Wǒmen shénme shíhou zài jiànmiàn a?" },
            { id: "D", text: "我们今晚去KTV唱歌，你也一起去吧。", pinyin: "Wǒmen jīnwǎn qù KTV chàng gē, nǐ yě yìqǐ qù ba." },
            { id: "E", text: "李老师在哪儿？你看见他了吗？", pinyin: "Lǐ lǎoshī zài nǎr? Nǐ kànjiàn tā le ma?" },
            { id: "F", text: "站在他右边的那位女士是谁啊？", pinyin: "Zhàn zài tā yòubian de nà wèi nǚshì shì shéi a?" }
          ],
          poolOptions: ["A", "B", "C", "D", "E", "F"],
          items: [
            {
              num: 36,
              type: "match",
              text: "我也想去啊，但是明天有考试。",
              pinyin: "Wǒ yě xiǎng qù a, dànshì míngtiān yǒu kǎoshì.",
              answer: "D",
              explainVi: "“Mình cũng muốn đi lắm, nhưng ngày mai có bài thi.” → Đáp lại lời rủ D: “Tối nay bọn mình đi KTV hát, bạn cũng đi cùng đi.”"
            },
            {
              num: 37,
              type: "match",
              text: "是啊，比去年画得好多了。",
              pinyin: "Shì a, bǐ qùnián huà de hǎoduō le.",
              answer: "B",
              explainVi: "“Đúng vậy, vẽ đẹp hơn năm ngoái nhiều rồi.” → Đồng tình với câu khen B: “Tranh Tiểu Lâm vẽ đẹp thật đấy!”"
            },
            {
              num: 38,
              type: "match",
              text: "很快，我一开学就去找你。",
              pinyin: "Hěn kuài, wǒ yì kāixué jiù qù zhǎo nǐ.",
              answer: "C",
              explainVi: "“Nhanh thôi, vừa khai giảng là mình qua tìm bạn ngay.” → Trả lời câu hỏi C: “Bao giờ chúng ta gặp lại nhau thế?”"
            },
            {
              num: 39,
              type: "match",
              text: "还没，正想着要不要坐火车呢。",
              pinyin: "Hái méi, zhèng xiǎngzhe yào bú yào zuò huǒchē ne.",
              answer: "A",
              explainVi: "“Chưa, đang phân vân xem có nên đi tàu hỏa không đây.” → Trả lời câu hỏi A: “Bạn đã mua được vé máy bay về nhà chưa?”"
            },
            {
              num: 40,
              type: "match",
              text: "我也不认识，可能是他妻子吧。",
              pinyin: "Wǒ yě bú rènshi, kěnéng shì tā qīzi ba.",
              answer: "F",
              explainVi: "“Mình cũng không quen, chắc là vợ anh ấy đấy.” → Trả lời câu hỏi F: “Người phụ nữ đứng bên phải anh ấy là ai thế?”"
            }
          ]
        },
        {
          id: "r3b",
          title: "第三部分（二）· Phần 3b (Câu 41–45)",
          instruction: "Ghép câu trả lời (41–45) với câu hỏi/lời thoại tương ứng (A–E).",
          type: "match",
          wordBank: [
            { id: "A", text: "这苹果怎么卖啊？", pinyin: "Zhè píngguǒ zěnme mài a?" },
            { id: "B", text: "请进，你找我有什么事？", pinyin: "Qǐng jìn, nǐ zhǎo wǒ yǒu shénme shì?" },
            { id: "C", text: "怎么没见你用新书包啊？", pinyin: "Zěnme méi jiàn nǐ yòng xīn shūbāo a?" },
            { id: "D", text: "您来杯咖啡还是奶茶？", pinyin: "Nín lái bēi kāfēi háishi nǎichá?" },
            { id: "E", text: "自己的事情自己做。", pinyin: "Zìjǐ de shìqing zìjǐ zuò." }
          ],
          poolOptions: ["A", "B", "C", "D", "E"],
          items: [
            {
              num: 41,
              type: "match",
              text: "知道了，不用你帮忙。",
              pinyin: "Zhīdào le, búyòng nǐ bāngmáng.",
              answer: "E",
              explainVi: "“Biết rồi, không cần bạn giúp đâu.” → Đáp lại câu E: “Việc của mình thì tự mình làm.”"
            },
            {
              num: 42,
              type: "match",
              text: "有热牛奶吗？",
              pinyin: "Yǒu rè niúnǎi ma?",
              answer: "D",
              explainVi: "“Có sữa nóng không ạ?” → Trả lời câu hỏi D của nhân viên: “Quý khách dùng một ly cà phê hay trà sữa ạ?”"
            },
            {
              num: 43,
              type: "match",
              text: "我听了您的课，想问您几个问题。",
              pinyin: "Wǒ tīngle nín de kè, xiǎng wèn nín jǐ gè wèntí.",
              answer: "B",
              explainVi: "“Em nghe bài giảng của thầy/cô rồi, muốn hỏi thầy/cô vài câu hỏi.” → Trả lời câu B: “Mời vào, em tìm tôi có việc gì thế?”"
            },
            {
              num: 44,
              type: "match",
              text: "便宜了，十块钱都给你了。",
              pinyin: "Piányi le, shí kuài qián dōu gěi nǐ le.",
              answer: "A",
              explainVi: "“Rẻ thôi, 10 tệ bán hết cho bạn đấy.” → Trả lời câu hỏi A: “Táo này bán thế nào vậy?”"
            },
            {
              num: 45,
              type: "match",
              text: "就用了一次，我不太喜欢那个颜色。",
              pinyin: "Jiù yòngle yí cì, wǒ bú tài xǐhuan nàge yánsè.",
              answer: "C",
              explainVi: "“Mới dùng một lần, mình không thích màu đó lắm.” → Trả lời câu C: “Sao không thấy bạn dùng cặp sách mới thế?”"
            }
          ]
        },
        {
          id: "r4",
          title: "第四部分 · Phần 4 (Câu 46–50)",
          instruction: "Đọc đoạn văn ngắn và chọn đáp án đúng nhất (A, B hoặc C).",
          type: "mcq",
          items: [
            {
              num: 46,
              type: "mcq",
              passage: "他就住在学校旁边，离得比我近多了。",
              passagePinyin: "Tā jiù zhù zài xuéxiào pángbiān, lí de bǐ wǒ jìnduō le.",
              question: "“我”家：",
              questionPinyin: "“Wǒ” jiā:",
              options: [
                { id: "A", text: "在学校旁边", pinyin: "zài xuéxiào pángbiān" },
                { id: "B", text: "离学校很近", pinyin: "lí xuéxiào hěn jìn" },
                { id: "C", text: "离学校很远", pinyin: "lí xuéxiào hěn yuǎn" }
              ],
              answer: "C",
              explainVi: "“Anh ấy sống ngay cạnh trường, gần hơn tôi nhiều.” → Suy ra nhà của “tôi” ở rất xa trường (C)."
            },
            {
              num: 47,
              type: "mcq",
              passage: "这个药一天吃三次，每次一包。",
              passagePinyin: "Zhège yào yì tiān chī sān cì, měi cì yì bāo.",
              question: "这个药：",
              questionPinyin: "Zhège yào:",
              options: [
                { id: "A", text: "每天吃一次", pinyin: "měi tiān chī yí cì" },
                { id: "B", text: "每天吃一包", pinyin: "měi tiān chī yì bāo" },
                { id: "C", text: "一次吃一包", pinyin: "yí cì chī yì bāo" }
              ],
              answer: "C",
              explainVi: "“Thuốc này một ngày uống 3 lần, mỗi lần 1 gói.” → Một lần uống một gói (C)."
            },
            {
              num: 48,
              type: "mcq",
              passage: "看她们笑得！什么事情这么有意思？",
              passagePinyin: "Kàn tāmen xiào de! Shénme shìqing zhème yǒu yìsi?",
              question: "她们：",
              questionPinyin: "Tāmen:",
              options: [
                { id: "A", text: "很高兴", pinyin: "hěn gāoxìng" },
                { id: "B", text: "没事做", pinyin: "méishì zuò" },
                { id: "C", text: "没意思", pinyin: "méi yìsi" }
              ],
              answer: "A",
              explainVi: "“Nhìn họ cười kìa! Chuyện gì mà vui thú vị thế?” → Họ đang rất vui vẻ (A)."
            },
            {
              num: 49,
              type: "mcq",
              passage: "虽然王先生有时候人不在公司，但工作没少做。",
              passagePinyin: "Suīrán Wáng xiānsheng yǒushíhou rén bú zài gōngsī, dàn gōngzuò méi shǎo zuò.",
              question: "王先生：",
              questionPinyin: "Wáng xiānsheng:",
              options: [
                { id: "A", text: "不爱工作", pinyin: "bú ài gōngzuò" },
                { id: "B", text: "经常不上班", pinyin: "jīngcháng bú shàngbān" },
                { id: "C", text: "有时不去公司", pinyin: "yǒushí bú qù gōngsī" }
              ],
              answer: "C",
              explainVi: "“Tuy ông Vương thỉnh thoảng không có mặt ở công ty, nhưng công việc không làm ít đi chút nào.” → Thỉnh thoảng không đến công ty (C)."
            },
            {
              num: 50,
              type: "mcq",
              passage: "奶奶一回家就开始忙着准备过年的东西。",
              passagePinyin: "Nǎinai yì huí jiā jiù kāishǐ mángzhe zhǔnbèi guònián de dōngxi.",
              question: "奶奶：",
              questionPinyin: "Nǎinai:",
              options: [
                { id: "A", text: "在准备过年", pinyin: "zài zhǔnbèi guònián" },
                { id: "B", text: "工作很忙", pinyin: "gōngzuò hěn máng" },
                { id: "C", text: "过年不回家", pinyin: "guònián bù huí jiā" }
              ],
              answer: "A",
              explainVi: "“Bà vừa về nhà là bắt đầu bận rộn chuẩn bị đồ đón Tết.” → Bà đang chuẩn bị đón Tết (A)."
            }
          ]
        }
      ]
    },
    {
      id: "writing",
      title: "三、书写 · Viết",
      parts: [
        {
          id: "w1",
          title: "第一部分 · Phần 1 (Câu 51–55)",
          instruction: "Chọn bộ thủ/thành phần đúng (A–F) ghép vào ô chữ Hán còn thiếu.",
          type: "match",
          wordBank: [
            { id: "A", text: "门" },
            { id: "B", text: "丁" },
            { id: "C", text: "寸" },
            { id: "D", text: "巴" },
            { id: "E", text: "十" },
            { id: "F", text: "乍" }
          ],
          poolOptions: ["A", "B", "C", "D", "E", "F"],
          items: [
            {
              num: 51,
              type: "match",
              img: "assets/exams/hsk2_t2_w1_q51.jpg",
              text: "Ghép thành từ theo tranh",
              pinyin: "guò lái",
              answer: "C",
              explainVi: "Chữ 过 (guò) gồm bộ 辶 (sước) bao ngoài và chữ 寸 (C) bên trong → ghép thành 过来 (lại đây)."
            },
            {
              num: 52,
              type: "match",
              img: "assets/exams/hsk2_t2_w1_q52.jpg",
              text: "Ghép thành từ theo tranh",
              pinyin: "bà mā",
              answer: "D",
              explainVi: "Chữ 爸 (bà) gồm phần trên là 父 và phần dưới là 巴 (D) → ghép thành 爸妈 (bố mẹ)."
            },
            {
              num: 53,
              type: "match",
              img: "assets/exams/hsk2_t2_w1_q53.jpg",
              text: "Ghép thành từ theo tranh",
              pinyin: "gōng zuò",
              answer: "F",
              explainVi: "Chữ 作 (zuò) gồm bộ 亻 bên trái và chữ 乍 (F) bên phải → ghép thành 工作 (công việc)."
            },
            {
              num: 54,
              type: "match",
              img: "assets/exams/hsk2_t2_w1_q54.jpg",
              text: "Ghép thành từ theo tranh",
              pinyin: "wǒ men",
              answer: "A",
              explainVi: "Chữ 们 (men) gồm bộ 亻 bên trái và chữ 门 (A) bên phải → ghép thành 我们 (chúng tôi)."
            },
            {
              num: 55,
              type: "match",
              img: "assets/exams/hsk2_t2_w1_q55.jpg",
              text: "Ghép thành từ theo tranh",
              pinyin: "dǎ qiú",
              answer: "B",
              explainVi: "Chữ 打 (dǎ) gồm bộ 扌 bên trái và chữ 丁 (B) bên phải → ghép thành 打球 (chơi bóng)."
            }
          ]
        },
        {
          id: "w2",
          title: "第二部分 · Phần 2 (Câu 56–60)",
          instruction: "Điền 1 chữ Hán còn thiếu vào ô ( ) dựa theo Pinyin và ngữ cảnh câu.",
          type: "fill_char",
          items: [
            {
              num: 56,
              type: "fill_char",
              text: "请问，这里有人懂汉（ ）吗？",
              pinyin: "Qǐngwèn, zhèlǐ yǒu rén dǒng Hànyǔ ma?",
              targetPinyin: "yǔ",
              answer: "语",
              explainVi: "语 (yǔ) trong 汉语 (tiếng Hán) — “Xin hỏi, ở đây có ai biết tiếng Hán không ạ?”"
            },
            {
              num: 57,
              type: "fill_char",
              text: "过年了，很多人喜欢出（ ）旅游。",
              pinyin: "Guònián le, hěn duō rén xǐhuan chūguó lǚyóu.",
              targetPinyin: "guó",
              answer: "国",
              explainVi: "国 (guó) trong 出国 (ra nước ngoài) — “Tết đến rồi, rất nhiều người thích đi du lịch nước ngoài.”"
            },
            {
              num: 58,
              type: "fill_char",
              text: "快走吧，别让人等你太（ ）时间。",
              pinyin: "Kuài zǒu ba, bié ràng rén děng nǐ tài cháng shíjiān.",
              targetPinyin: "cháng",
              answer: "长",
              explainVi: "长 (cháng): dài, lâu — “Đi nhanh lên nào, đừng để người ta đợi bạn lâu quá.”"
            },
            {
              num: 59,
              type: "fill_char",
              text: "你能告诉我他（ ）什么名字吗？",
              pinyin: "Nǐ néng gàosu wǒ tā jiào shénme míngzi ma?",
              targetPinyin: "jiào",
              answer: "叫",
              explainVi: "叫 (jiào): tên là, gọi là — “Bạn có thể cho tôi biết anh ấy tên là gì không?”"
            },
            {
              num: 60,
              type: "fill_char",
              text: "不好意思，你名字里面的这个（ ）怎么读啊？",
              pinyin: "Bù hǎoyìsi, nǐ míngzi lǐmiàn de zhège zì zěnme dú a?",
              targetPinyin: "zì",
              answer: "字",
              explainVi: "字 (zì): chữ — “Ngại quá, chữ này trong tên của bạn đọc thế nào vậy?”"
            }
          ]
        }
      ]
    }
  ]
};
