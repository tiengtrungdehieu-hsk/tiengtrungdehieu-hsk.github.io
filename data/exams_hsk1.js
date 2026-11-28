/* Đề thi mô phỏng chuẩn HSK 3.0 Cấp 1 (Đề 1 & Đề 2 — 80 câu) — Tiếng Trung Dễ Hiểu */
window.HSK_EXAMS_DATA = window.HSK_EXAMS_DATA || {};

window.HSK_EXAMS_DATA["hsk1_t1"] = {
  id: "hsk1_t1",
  sections: [
    {
      id: "listening",
      title: "一、听力 · Nghe hiểu",
      parts: [
        {
          id: "l1",
          title: "第一部分 · Phần 1 (Câu 1–5)",
          type: "mcq",
          instruction: "Nghe cụm từ ngắn và chọn bức tranh đúng (A, B hoặc C). Mỗi câu nghe 2 lần.",
          items: [
            {
              num: 1,
              type: "mcq",
              img: "assets/exams/hsk1_t1_l1_q1.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "B",
              audioLines: [{ speaker: "", text: "喝茶" }],
              explainVi: "喝茶 (hē chá): uống trà. Tranh B vẽ người đàn ông đang ngồi uống trà bên ấm trà."
            },
            {
              num: 2,
              type: "mcq",
              img: "assets/exams/hsk1_t1_l1_q2.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "C",
              audioLines: [{ speaker: "", text: "做午饭" }],
              explainVi: "做午饭 (zuò wǔfàn): nấu bữa trưa. Tranh C vẽ người đàn ông đang nấu ăn trong bếp."
            },
            {
              num: 3,
              type: "mcq",
              img: "assets/exams/hsk1_t1_l1_q3.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "B",
              audioLines: [{ speaker: "", text: "两个面包" }],
              explainVi: "两个面包 (liǎng gè miànbāo): hai cái bánh mì. Tranh B vẽ hai ổ bánh mì."
            },
            {
              num: 4,
              type: "mcq",
              img: "assets/exams/hsk1_t1_l1_q4.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "A",
              audioLines: [{ speaker: "", text: "在房间学习" }],
              explainVi: "在房间学习 (zài fángjiān xuéxí): học bài trong phòng. Tranh A vẽ cậu bé đang ngồi học bên bàn có đèn học."
            },
            {
              num: 5,
              type: "mcq",
              img: "assets/exams/hsk1_t1_l1_q5.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "C",
              audioLines: [{ speaker: "", text: "漂亮的衣服" }],
              explainVi: "漂亮的衣服 (piàoliang de yīfu): quần áo đẹp. Tranh C vẽ một chiếc váy/áo đẹp."
            }
          ]
        },
        {
          id: "l2",
          title: "第二部分 · Phần 2 (Câu 6–10)",
          type: "mcq",
          instruction: "Nghe câu hỏi và chọn câu trả lời đúng (A, B hoặc C). Mỗi câu nghe 2 lần.",
          items: [
            {
              num: 6,
              type: "mcq",
              options: [
                { id: "A", text: "三月", pinyin: "sān yuè" },
                { id: "B", text: "五个", pinyin: "wǔ gè" },
                { id: "C", text: "星期天", pinyin: "xīngqītiān" }
              ],
              answer: "C",
              audioLines: [{ speaker: "", text: "今天星期几？" }],
              explainVi: "Câu hỏi: \"今天星期几？\" (Hôm nay là thứ mấy?). Đáp án phù hợp là C: 星期天 (Chủ nhật)."
            },
            {
              num: 7,
              type: "mcq",
              options: [
                { id: "A", text: "上课", pinyin: "shàngkè" },
                { id: "B", text: "书店", pinyin: "shūdiàn" },
                { id: "C", text: "大学生", pinyin: "dàxuéshēng" }
              ],
              answer: "B",
              audioLines: [{ speaker: "", text: "你现在在哪儿？" }],
              explainVi: "Câu hỏi: \"你现在在哪儿？\" (Bây giờ bạn đang ở đâu?). Đáp án chỉ địa điểm là B: 书店 (hiệu sách)."
            },
            {
              num: 8,
              type: "mcq",
              options: [
                { id: "A", text: "没有", pinyin: "méiyǒu" },
                { id: "B", text: "不知道", pinyin: "bù zhīdào" },
                { id: "C", text: "六点十分", pinyin: "liù diǎn shí fēn" }
              ],
              answer: "A",
              audioLines: [{ speaker: "", text: "请问你有时间吗？" }],
              explainVi: "Câu hỏi: \"请问你有时间吗？\" (Xin hỏi bạn có thời gian không?). Đáp án phù hợp cho câu hỏi 有...吗 là A: 没有 (Không có)."
            },
            {
              num: 9,
              type: "mcq",
              options: [
                { id: "A", text: "没关系", pinyin: "méi guānxi" },
                { id: "B", text: "非常好", pinyin: "fēicháng hǎo" },
                { id: "C", text: "很好看", pinyin: "hěn hǎokàn" }
              ],
              answer: "B",
              audioLines: [{ speaker: "", text: "她的中文怎么样？" }],
              explainVi: "Câu hỏi: \"她的中文怎么样？\" (Tiếng Trung của cô ấy thế nào?). Đáp án đúng là B: 非常好 (Rất tốt/giỏi)."
            },
            {
              num: 10,
              type: "mcq",
              options: [
                { id: "A", text: "十个", pinyin: "shí gè" },
                { id: "B", text: "不好吃", pinyin: "bù hǎochī" },
                { id: "C", text: "在饭店", pinyin: "zài fàndiàn" }
              ],
              answer: "A",
              audioLines: [{ speaker: "", text: "你吃几个饺子？" }],
              explainVi: "Câu hỏi: \"你吃几个饺子？\" (Bạn ăn mấy cái sủi cảo?). Đáp án chỉ số lượng là A: 十个 (Mười cái)."
            }
          ]
        },
        {
          id: "l3",
          title: "第三部分 · Phần 3 (Câu 11–15)",
          type: "match",
          sharedImage: "assets/exams/hsk1_t1_l3_pool.jpg",
          poolOptions: ["A", "B", "C", "D", "E", "F"],
          instruction: "Nghe hội thoại và chọn bức tranh tương ứng (A–F). Mỗi câu nghe 2 lần.",
          items: [
            {
              num: 11,
              type: "match",
              answer: "B",
              audioLines: [
                { speaker: "女", text: "请坐！" },
                { speaker: "男", text: "谢谢！" }
              ],
              explainVi: "Nữ nói \"请坐！\" (Mời ngồi!), Nam đáp \"谢谢！\" (Cảm ơn!). Khớp tranh B (người phụ nữ kéo ghế mời ngồi)."
            },
            {
              num: 12,
              type: "match",
              answer: "E",
              audioLines: [
                { speaker: "男", text: "现在几点？" },
                { speaker: "女", text: "四点十分。" }
              ],
              explainVi: "Nam hỏi \"现在几点？\" (Bây giờ mấy giờ?), Nữ trả lời \"四点十分。\" (4 giờ 10 phút). Khớp đồng hồ tranh E."
            },
            {
              num: 13,
              type: "match",
              answer: "A",
              audioLines: [
                { speaker: "女", text: "你在做什么呢？" },
                { speaker: "男", text: "我在超市买东西呢。" }
              ],
              explainVi: "Nam nói đang mua đồ ở siêu thị (在超市买东西). Khớp tranh A (người đẩy xe mua hàng trong siêu thị)."
            },
            {
              num: 14,
              type: "match",
              answer: "F",
              audioLines: [
                { speaker: "男", text: "你晚上想吃什么？" },
                { speaker: "女", text: "吃面条儿，怎么样？" }
              ],
              explainVi: "Nữ gợi ý ăn mì (吃面条儿). Khớp tranh F (bát mì)."
            },
            {
              num: 15,
              type: "match",
              answer: "D",
              audioLines: [
                { speaker: "男", text: "房间里有电脑吗？" },
                { speaker: "女", text: "有。" }
              ],
              explainVi: "Hỏi trong phòng có máy tính không (房间里有电脑吗), đáp Có. Khớp tranh D (máy tính trên bàn trong phòng)."
            }
          ]
        },
        {
          id: "l4",
          title: "第四部分 · Phần 4 (Câu 16–20)",
          type: "mcq",
          instruction: "Nghe câu trần thuật và câu hỏi, chọn đáp án đúng (A, B hoặc C). Mỗi câu nghe 2 lần.",
          items: [
            {
              num: 16,
              type: "mcq",
              options: [
                { id: "A", text: "很热", pinyin: "hěn rè" },
                { id: "B", text: "下雪", pinyin: "xià xuě" },
                { id: "C", text: "下雨", pinyin: "xià yǔ" }
              ],
              answer: "C",
              audioLines: [
                { speaker: "", text: "今天天气不好，下雨了。" },
                { speaker: "问", text: "今天是什么天气？" }
              ],
              explainVi: "Bài nghe nói: \"今天天气不好，下雨了。\" (Hôm nay thời tiết không tốt, trời mưa rồi). Đáp án đúng: C (下雨)."
            },
            {
              num: 17,
              type: "mcq",
              options: [
                { id: "A", text: "做饭", pinyin: "zuò fàn" },
                { id: "B", text: "学中文", pinyin: "xué Zhōngwén" },
                { id: "C", text: "去外边玩", pinyin: "qù wàibian wán" }
              ],
              answer: "B",
              audioLines: [
                { speaker: "", text: "我今天晚上和同学一起学习中文。" },
                { speaker: "问", text: "说话人今晚做什么？" }
              ],
              explainVi: "Bài nghe nói tối nay cùng bạn học học tiếng Trung (学习中文). Đáp án đúng: B (学中文)."
            },
            {
              num: 18,
              type: "mcq",
              options: [
                { id: "A", text: "家", pinyin: "jiā" },
                { id: "B", text: "医院", pinyin: "yīyuàn" },
                { id: "C", text: "学校", pinyin: "xuéxiào" }
              ],
              answer: "A",
              audioLines: [
                { speaker: "", text: "我明天不忙，可以在家里休息。" },
                { speaker: "问", text: "说话人明天在哪里？" }
              ],
              explainVi: "Bài nghe nói ngày mai không bận, có thể nghỉ ngơi ở nhà (在家里休息). Đáp án đúng: A (家)."
            },
            {
              num: 19,
              type: "mcq",
              options: [
                { id: "A", text: "读书", pinyin: "dúshū" },
                { id: "B", text: "唱歌", pinyin: "chàng gē" },
                { id: "C", text: "买衣服", pinyin: "mǎi yīfu" }
              ],
              answer: "C",
              audioLines: [
                { speaker: "", text: "这件衣服小了，我想买件新的。" },
                { speaker: "问", text: "说话人想做什么？" }
              ],
              explainVi: "Bài nghe nói chiếc áo này chật rồi, muốn mua cái mới (买件新的). Đáp án đúng: C (买衣服)."
            },
            {
              num: 20,
              type: "mcq",
              options: [
                { id: "A", text: "开车", pinyin: "kāichē" },
                { id: "B", text: "坐火车", pinyin: "zuò huǒchē" },
                { id: "C", text: "坐飞机", pinyin: "zuò fēijī" }
              ],
              answer: "B",
              audioLines: [
                { speaker: "", text: "坐飞机太贵了，我坐火车去那儿吧。" },
                { speaker: "问", text: "说话人怎么去那儿？" }
              ],
              explainVi: "Bài nghe nói đi máy bay đắt quá nên đi tàu hỏa đến đó (坐火车去那儿). Đáp án đúng: B (坐火车)."
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
          title: "第一部分 · Phần 1 (Câu 21–25)",
          type: "match",
          sharedImage: "assets/exams/hsk1_t1_r1_pool.jpg",
          poolOptions: ["A", "B", "C", "D", "E", "F"],
          instruction: "Đọc câu và chọn bức tranh phù hợp (A–F).",
          items: [
            {
              num: 21,
              type: "match",
              text: "我的儿子还没下课。",
              pinyin: "Wǒ de érzi hái méi xiàkè.",
              answer: "D",
              explainVi: "\"我的儿子还没下课。\" (Con trai tôi vẫn chưa tan học). Khớp tranh D (học sinh đang ngồi trong lớp)."
            },
            {
              num: 22,
              type: "match",
              text: "她明天去医院看病。",
              pinyin: "Tā míngtiān qù yīyuàn kànbìng.",
              answer: "C",
              explainVi: "\"她明天去医院看病。\" (Ngày mai cô ấy đi bệnh viện khám bệnh). Khớp tranh C (bác sĩ khám cho bệnh nhân)."
            },
            {
              num: 23,
              type: "match",
              text: "你的小猫真漂亮！它几岁了？",
              pinyin: "Nǐ de xiǎo māo zhēn piàoliang! Tā jǐ suì le?",
              answer: "A",
              explainVi: "\"你的小猫真漂亮！它几岁了？\" (Chú mèo con của bạn thật xinh! Nó mấy tuổi rồi?). Khớp tranh A (chú mèo)."
            },
            {
              num: 24,
              type: "match",
              text: "妈妈正在睡觉，不要说话。",
              pinyin: "Māma zhèngzài shuìjiào, búyào shuōhuà.",
              answer: "B",
              explainVi: "\"妈妈正在睡觉，不要说话。\" (Mẹ đang ngủ, đừng nói chuyện). Khớp tranh B (người mẹ đang ngủ)."
            },
            {
              num: 25,
              type: "match",
              text: "朋友在一家公司工作。",
              pinyin: "Péngyou zài yì jiā gōngsī gōngzuò.",
              answer: "F",
              explainVi: "\"朋友在一家公司工作。\" (Bạn tôi làm việc tại một công ty). Khớp tranh F (người làm việc trước máy tính)."
            }
          ]
        },
        {
          id: "r2",
          title: "第二部分 · Phần 2 (Câu 26–30)",
          type: "match",
          wordBank: [
            { id: "A", text: "有点儿贵。", pinyin: "Yǒudiǎnr guì." },
            { id: "B", text: "没有。", pinyin: "Méiyǒu." },
            { id: "C", text: "20岁。", pinyin: "20 suì." },
            { id: "D", text: "没事。", pinyin: "Méishì." },
            { id: "E", text: "对，他是我同学。", pinyin: "Duì, tā shì wǒ tóngxué." },
            { id: "F", text: "好的，谢谢！", pinyin: "Hǎo de, xièxie!" }
          ],
          poolOptions: ["A", "B", "C", "D", "E", "F"],
          instruction: "Đọc vế trái (26–30) và ghép với câu đáp lại phù hợp (A–F).",
          items: [
            {
              num: 26,
              type: "match",
              text: "你认识高先生吧？",
              pinyin: "Nǐ rènshi Gāo xiānsheng ba?",
              answer: "E",
              explainVi: "\"你认识高先生吧？\" (Bạn quen ông Cao phải không?) → E: \"对，他是我同学。\" (Đúng vậy, anh ấy là bạn học của tôi)."
            },
            {
              num: 27,
              type: "match",
              text: "真对不起，我来晚了。",
              pinyin: "Zhēn duìbuqǐ, wǒ láiwǎn le.",
              answer: "D",
              explainVi: "\"真对不起，我来晚了。\" (Thật xin lỗi, tôi đến muộn rồi) → D: \"没事。\" (Không sao đâu)."
            },
            {
              num: 28,
              type: "match",
              text: "你看见谢老师了吗？",
              pinyin: "Nǐ kànjiàn Xiè lǎoshī le ma?",
              answer: "B",
              explainVi: "\"你看见谢老师了吗？\" (Bạn có thấy thầy/cô Tạ không?) → B: \"没有。\" (Không thấy)."
            },
            {
              num: 29,
              type: "match",
              text: "那个超市的东西怎么样？",
              pinyin: "Nàge chāoshì de dōngxi zěnmeyàng?",
              answer: "A",
              explainVi: "\"那个超市的东西怎么样？\" (Đồ ở siêu thị kia thế nào?) → A: \"有点儿贵。\" (Hơi đắt một chút)."
            },
            {
              num: 30,
              type: "match",
              text: "你姐姐今年多大？",
              pinyin: "Nǐ jiějie jīnnián duō dà?",
              answer: "C",
              explainVi: "\"你姐姐今年多大？\" (Chị gái bạn năm nay bao nhiêu tuổi?) → C: \"20岁。\" (20 tuổi)."
            }
          ]
        },
        {
          id: "r3",
          title: "第三部分 · Phần 3 (Câu 31–35)",
          type: "match",
          wordBank: [
            { id: "A", text: "问", pinyin: "wèn" },
            { id: "B", text: "电视", pinyin: "diànshì" },
            { id: "C", text: "生病", pinyin: "shēngbìng" },
            { id: "D", text: "叫", pinyin: "jiào" },
            { id: "E", text: "一下", pinyin: "yíxià" },
            { id: "F", text: "说话", pinyin: "shuōhuà" }
          ],
          poolOptions: ["A", "B", "C", "D", "E", "F"],
          instruction: "Chọn từ thích hợp (A–F) điền vào chỗ trống ( ).",
          items: [
            {
              num: 31,
              type: "match",
              text: "他 ( ) 了，今天不能来上班了。",
              pinyin: "Tā ( ) le, jīntiān bù néng lái shàngbān le.",
              answer: "C",
              explainVi: "\"他（生病）了，今天不能来上班了。\" (Anh ấy bị ốm rồi, hôm nay không thể đi làm được). Chọn C: 生病."
            },
            {
              num: 32,
              type: "match",
              text: "女士，你好！请在这儿写 ( ) 你的手机号。",
              pinyin: "Nǚshì, nǐ hǎo! Qǐng zài zhèr xiě ( ) nǐ de shǒujīhào.",
              answer: "E",
              explainVi: "\"写一下\" (viết một chút / ghi giúp): động từ + 一下 diễn đạt sự nhờ vả nhẹ nhàng. Chọn E: 一下."
            },
            {
              num: 33,
              type: "match",
              text: "现在看 ( ) 的人很少了。",
              pinyin: "Xiànzài kàn ( ) de rén hěn shǎo le.",
              answer: "B",
              explainVi: "\"看电视\" (xem tivi): \"现在看电视的人很少了。\" (Bây giờ người xem tivi rất ít rồi). Chọn B: 电视."
            },
            {
              num: 34,
              type: "match",
              text: "A: 你找老师有什么事？\nB: 我想 ( ) 他一个问题。",
              pinyin: "A: Nǐ zhǎo lǎoshī yǒu shénme shì?\nB: Wǒ xiǎng ( ) tā yí gè wèntí.",
              dialogue: [
                { speaker: "A", text: "你找老师有什么事？", pinyin: "Nǐ zhǎo lǎoshī yǒu shénme shì?" },
                { speaker: "B", text: "我想 ( ) 他一个问题。", pinyin: "Wǒ xiǎng ( ) tā yí gè wèntí." }
              ],
              answer: "A",
              explainVi: "\"问他一个问题\" (hỏi thầy/cô một câu hỏi). Chọn A: 问 (hỏi)."
            },
            {
              num: 35,
              type: "match",
              text: "A: 你孩子会 ( ) 了吗？\nB: 她会叫“妈妈”了。",
              pinyin: "A: Nǐ háizi huì ( ) le ma?\nB: Tā huì jiào “māma” le.",
              dialogue: [
                { speaker: "A", text: "你孩子会 ( ) 了吗？", pinyin: "Nǐ háizi huì ( ) le ma?" },
                { speaker: "B", text: "她会叫“妈妈”了。", pinyin: "Tā huì jiào “māma” le." }
              ],
              answer: "F",
              explainVi: "A hỏi: \"Con bạn biết nói chuyện chưa?\", B đáp: \"Bé biết gọi 'mẹ' rồi\". Chọn F: 说话 (nói chuyện)."
            }
          ]
        },
        {
          id: "r4",
          title: "第四部分 · Phần 4 (Câu 36–40)",
          type: "mcq",
          instruction: "Đọc đoạn ngắn và câu hỏi (★), chọn đáp án đúng (A, B hoặc C).",
          items: [
            {
              num: 36,
              type: "mcq",
              passage: "下雪了，你多穿一件衣服吧。",
              passagePinyin: "Xià xuě le, nǐ duō chuān yí jiàn yīfu ba.",
              question: "说话人觉得天气怎么样？",
              questionPinyin: "Shuōhuàrén juéde tiānqì zěnmeyàng?",
              options: [
                { id: "A", text: "雨太大", pinyin: "yǔ tài dà" },
                { id: "B", text: "太热了", pinyin: "tài rè le" },
                { id: "C", text: "有点儿冷", pinyin: "yǒudiǎnr lěng" }
              ],
              answer: "C",
              explainVi: "Tuyết rơi rồi, khuyên mặc thêm một chiếc áo → thời tiết hơi lạnh (C: 有点儿冷)."
            },
            {
              num: 37,
              type: "mcq",
              passage: "今天公司有很多事，他没有时间吃饭。",
              passagePinyin: "Jīntiān gōngsī yǒu hěn duō shì, tā méiyǒu shíjiān chī fàn.",
              question: "我们可以知道什么？",
              questionPinyin: "Wǒmen kěyǐ zhīdào shénme?",
              options: [
                { id: "A", text: "他很忙", pinyin: "tā hěn máng" },
                { id: "B", text: "他生病了", pinyin: "tā shēngbìng le" },
                { id: "C", text: "他喜欢做饭", pinyin: "tā xǐhuan zuò fàn" }
              ],
              answer: "A",
              explainVi: "Công ty có nhiều việc đến mức không có thời gian ăn cơm → anh ấy rất bận (A: 他很忙)."
            },
            {
              num: 38,
              type: "mcq",
              passage: "家里没有水果了，我再去买些吧。",
              passagePinyin: "Jiā li méiyǒu shuǐguǒ le, wǒ zài qù mǎi xiē ba.",
              question: "说话人要去哪儿？",
              questionPinyin: "Shuōhuàrén yào qù nǎr?",
              options: [
                { id: "A", text: "超市", pinyin: "chāoshì" },
                { id: "B", text: "朋友家", pinyin: "péngyoujiā" },
                { id: "C", text: "电影院", pinyin: "diànyǐngyuàn" }
              ],
              answer: "A",
              explainVi: "Nhà hết hoa quả, đi mua thêm → nơi mua hoa quả là siêu thị (A: 超市)."
            },
            {
              num: 39,
              type: "mcq",
              passage: "他的女朋友很漂亮，学习也很好。",
              passagePinyin: "Tā de nǚpéngyou hěn piàoliang, xuéxí yě hěn hǎo.",
              question: "他的女朋友怎么样？",
              questionPinyin: "Tā de nǚpéngyou zěnmeyàng?",
              options: [
                { id: "A", text: "很好看", pinyin: "hěn hǎokàn" },
                { id: "B", text: "很少生病", pinyin: "hěn shǎo shēngbìng" },
                { id: "C", text: "不爱说话", pinyin: "bú ài shuōhuà" }
              ],
              answer: "A",
              explainVi: "Đoạn văn nói bạn gái rất xinh (很漂亮), đồng nghĩa với rất đẹp/ưa nhìn (A: 很好看)."
            },
            {
              num: 40,
              type: "mcq",
              passage: "一个杯子八十块？太贵了！有便宜一点儿的吗？",
              passagePinyin: "Yí gè bēizi bāshí kuài? Tài guì le! Yǒu piányi yìdiǎnr de ma?",
              question: "说话人正在做什么？",
              questionPinyin: "Shuōhuàrén zhèngzài zuò shénme?",
              options: [
                { id: "A", text: "见朋友", pinyin: "jiàn péngyou" },
                { id: "B", text: "写汉字", pinyin: "xiě Hànzì" },
                { id: "C", text: "买东西", pinyin: "mǎi dōngxi" }
              ],
              answer: "C",
              explainVi: "Người nói hỏi giá chiếc cốc (80 tệ, đắt quá, có loại rẻ hơn chút không?) → đang mua đồ (C: 买东西)."
            }
          ]
        }
      ]
    }
  ]
};

window.HSK_EXAMS_DATA["hsk1_t2"] = {
  id: "hsk1_t2",
  sections: [
    {
      id: "listening",
      title: "一、听力 · Nghe hiểu",
      parts: [
        {
          id: "l1",
          title: "第一部分 · Phần 1 (Câu 1–5)",
          type: "mcq",
          instruction: "Nghe cụm từ ngắn và chọn bức tranh đúng (A, B hoặc C). Mỗi câu nghe 2 lần.",
          items: [
            {
              num: 1,
              type: "mcq",
              img: "assets/exams/hsk1_t2_l1_q1.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "A",
              audioLines: [{ speaker: "", text: "喝牛奶" }],
              explainVi: "喝牛奶 (hē niúnǎi): uống sữa. Tranh A vẽ cậu bé đang uống ly sữa."
            },
            {
              num: 2,
              type: "mcq",
              img: "assets/exams/hsk1_t2_l1_q2.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "C",
              audioLines: [{ speaker: "", text: "坐出租车" }],
              explainVi: "坐出租车 (zuò chūzūchē): đi xe taxi. Tranh C vẽ người đàn ông ngồi trong xe có biển TAXI."
            },
            {
              num: 3,
              type: "mcq",
              img: "assets/exams/hsk1_t2_l1_q3.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "A",
              audioLines: [{ speaker: "", text: "三只猫" }],
              explainVi: "三只猫 (sān zhī māo): ba con mèo. Tranh A vẽ ba chú mèo."
            },
            {
              num: 4,
              type: "mcq",
              img: "assets/exams/hsk1_t2_l1_q4.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "A",
              audioLines: [{ speaker: "", text: "在书店看书" }],
              explainVi: "在书店看书 (zài shūdiàn kànshū): đọc sách ở hiệu sách. Tranh A vẽ cô gái đọc sách giữa các giá sách."
            },
            {
              num: 5,
              type: "mcq",
              img: "assets/exams/hsk1_t2_l1_q5.jpg",
              options: [
                { id: "A", text: "Tranh A" },
                { id: "B", text: "Tranh B" },
                { id: "C", text: "Tranh C" }
              ],
              answer: "B",
              audioLines: [{ speaker: "", text: "漂亮的汉字" }],
              explainVi: "漂亮的汉字 (piàoliang de Hànzì): chữ Hán đẹp. Tranh B vẽ trang giấy viết chữ Hán ngay ngắn."
            }
          ]
        },
        {
          id: "l2",
          title: "第二部分 · Phần 2 (Câu 6–10)",
          type: "mcq",
          instruction: "Nghe câu hỏi và chọn câu trả lời đúng (A, B hoặc C). Mỗi câu nghe 2 lần.",
          items: [
            {
              num: 6,
              type: "mcq",
              options: [
                { id: "A", text: "没关系", pinyin: "méi guānxi" },
                { id: "B", text: "很喜欢", pinyin: "hěn xǐhuan" },
                { id: "C", text: "不好吃", pinyin: "bù hǎochī" }
              ],
              answer: "B",
              audioLines: [{ speaker: "", text: "你喜欢吃饺子吗？" }],
              explainVi: "Câu hỏi: \"你喜欢吃饺子吗？\" (Bạn có thích ăn sủi cảo không?). Đáp án phù hợp là B: 很喜欢 (Rất thích)."
            },
            {
              num: 7,
              type: "mcq",
              options: [
                { id: "A", text: "谢谢", pinyin: "xièxie" },
                { id: "B", text: "很好听", pinyin: "hěn hǎotīng" },
                { id: "C", text: "会一点儿", pinyin: "huì yìdiǎnr" }
              ],
              answer: "C",
              audioLines: [{ speaker: "", text: "先生，请问您会说中文吗？" }],
              explainVi: "Câu hỏi: \"先生，请问您会说中文吗？\" (Thưa ngài, xin hỏi ngài biết nói tiếng Trung không?). Đáp án là C: 会一点儿 (Biết một chút)."
            },
            {
              num: 8,
              type: "mcq",
              options: [
                { id: "A", text: "十分钟", pinyin: "shí fēnzhōng" },
                { id: "B", text: "八点半", pinyin: "bā diǎn bàn" },
                { id: "C", text: "三个小时", pinyin: "sān gè xiǎoshí" }
              ],
              answer: "B",
              audioLines: [{ speaker: "", text: "你每天早上几点起床？" }],
              explainVi: "Câu hỏi: \"你每天早上几点起床？\" (Mỗi sáng bạn thức dậy lúc mấy giờ?). Đáp án chỉ mốc giờ là B: 八点半 (8 giờ rưỡi)."
            },
            {
              num: 9,
              type: "mcq",
              options: [
                { id: "A", text: "商店", pinyin: "shāngdiàn" },
                { id: "B", text: "衣服", pinyin: "yīfu" },
                { id: "C", text: "睡觉", pinyin: "shuìjiào" }
              ],
              answer: "A",
              audioLines: [{ speaker: "", text: "哥哥去哪儿买东西了？" }],
              explainVi: "Câu hỏi: \"哥哥去哪儿买东西了？\" (Anh trai đi đâu mua đồ rồi?). Đáp án chỉ nơi chốn là A: 商店 (cửa hàng)."
            },
            {
              num: 10,
              type: "mcq",
              options: [
                { id: "A", text: "两岁", pinyin: "liǎng suì" },
                { id: "B", text: "很漂亮", pinyin: "hěn piàoliang" },
                { id: "C", text: "是学生", pinyin: "shì xuésheng" }
              ],
              answer: "A",
              audioLines: [{ speaker: "", text: "你妹妹今年多大了？" }],
              explainVi: "Câu hỏi: \"你妹妹今年多大了？\" (Em gái bạn năm nay mấy tuổi rồi?). Đáp án chỉ tuổi là A: 两岁 (2 tuổi)."
            }
          ]
        },
        {
          id: "l3",
          title: "第三部分 · Phần 3 (Câu 11–15)",
          type: "match",
          sharedImage: "assets/exams/hsk1_t2_l3_pool.jpg",
          poolOptions: ["A", "B", "C", "D", "E", "F"],
          instruction: "Nghe hội thoại và chọn bức tranh tương ứng (A–F). Mỗi câu nghe 2 lần.",
          items: [
            {
              num: 11,
              type: "match",
              answer: "F",
              audioLines: [
                { speaker: "女", text: "谢谢你给我面包！" },
                { speaker: "男", text: "不客气。多吃点儿。" }
              ],
              explainVi: "Nữ cảm ơn vì được tặng bánh mì (谢谢你给我面包). Khớp tranh F (chàng trai đưa túi bánh mì cho cô gái)."
            },
            {
              num: 12,
              type: "match",
              answer: "A",
              audioLines: [
                { speaker: "男", text: "你看见女儿了吗？" },
                { speaker: "女", text: "在那儿呢。" }
              ],
              explainVi: "Hỏi có nhìn thấy con gái đâu không (看见女儿了吗). Khớp tranh A (bé gái đang chơi trên bãi cỏ)."
            },
            {
              num: 13,
              type: "match",
              answer: "B",
              audioLines: [
                { speaker: "女", text: "外边天气怎么样？" },
                { speaker: "男", text: "很冷，还下雨了。" }
              ],
              explainVi: "Bên ngoài rất lạnh, lại còn mưa (很冷，还下雨了). Khớp tranh B (đôi nam nữ mặc áo ấm giữa trời mưa lạnh)."
            },
            {
              num: 14,
              type: "match",
              answer: "D",
              audioLines: [
                { speaker: "男", text: "你晚上要做什么？" },
                { speaker: "女", text: "我去和朋友吃饭。" }
              ],
              explainVi: "Tối đi ăn cơm với bạn bè (去和朋友吃饭). Khớp tranh D (nhóm bạn ngồi ăn uống quanh bàn)."
            },
            {
              num: 15,
              type: "match",
              answer: "E",
              audioLines: [
                { speaker: "女", text: "那是你的手机吗？" },
                { speaker: "男", text: "桌子上的那个吗？不是。" }
              ],
              explainVi: "Hỏi chiếc điện thoại trên bàn (桌子上的那个手机). Khớp tranh E (điện thoại đặt trên mặt bàn)."
            }
          ]
        },
        {
          id: "l4",
          title: "第四部分 · Phần 4 (Câu 16–20)",
          type: "mcq",
          instruction: "Nghe câu trần thuật và câu hỏi, chọn đáp án đúng (A, B hoặc C). Mỗi câu nghe 2 lần.",
          items: [
            {
              num: 16,
              type: "mcq",
              options: [
                { id: "A", text: "608", pinyin: "" },
                { id: "B", text: "809", pinyin: "" },
                { id: "C", text: "908", pinyin: "" }
              ],
              answer: "C",
              audioLines: [
                { speaker: "", text: "我的房间号是908。" },
                { speaker: "问", text: "说话人住在哪个房间？" }
              ],
              explainVi: "Bài nghe nói rõ số phòng là 908 (我的房间号是908). Đáp án đúng: C (908)."
            },
            {
              num: 17,
              type: "mcq",
              options: [
                { id: "A", text: "姐姐", pinyin: "jiějie" },
                { id: "B", text: "弟弟", pinyin: "dìdi" },
                { id: "C", text: "哥哥", pinyin: "gēge" }
              ],
              answer: "A",
              audioLines: [
                { speaker: "", text: "弟弟喜欢吃面条儿，姐姐喜欢吃米饭。" },
                { speaker: "问", text: "谁喜欢吃米饭？" }
              ],
              explainVi: "Em trai thích ăn mì, chị gái thích ăn cơm (姐姐喜欢吃米饭). Câu hỏi: Ai thích ăn cơm? → A: 姐姐."
            },
            {
              num: 18,
              type: "mcq",
              options: [
                { id: "A", text: "吃晚饭", pinyin: "chī wǎnfàn" },
                { id: "B", text: "看电影", pinyin: "kàn diànyǐng" },
                { id: "C", text: "玩电脑", pinyin: "wán diànnǎo" }
              ],
              answer: "B",
              audioLines: [
                { speaker: "", text: "我下课后和朋友去电影院。" },
                { speaker: "问", text: "说话人下课后做什么？" }
              ],
              explainVi: "Sau giờ học đi rạp chiếu phim cùng bạn (去电影院) → đi xem phim (B: 看电影)."
            },
            {
              num: 19,
              type: "mcq",
              options: [
                { id: "A", text: "三月", pinyin: "sān yuè" },
                { id: "B", text: "星期三", pinyin: "xīngqīsān" },
                { id: "C", text: "三年后", pinyin: "sān nián hòu" }
              ],
              answer: "A",
              audioLines: [
                { speaker: "", text: "我三月回国去看爸爸妈妈。" },
                { speaker: "问", text: "说话人什么时候回国？" }
              ],
              explainVi: "Tháng 3 về nước thăm bố mẹ (三月回国). Đáp án đúng: A (三月)."
            },
            {
              num: 20,
              type: "mcq",
              options: [
                { id: "A", text: "上班了", pinyin: "shàngbān le" },
                { id: "B", text: "不喝茶", pinyin: "bù hē chá" },
                { id: "C", text: "生病了", pinyin: "shēngbìng le" }
              ],
              answer: "C",
              audioLines: [
                { speaker: "", text: "小高生病了，不能来上班了。" },
                { speaker: "问", text: "小高怎么了？" }
              ],
              explainVi: "Tiểu Cao bị ốm rồi, không đến làm việc được (小高生病了). Đáp án đúng: C (生病了)."
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
          title: "第一部分 · Phần 1 (Câu 21–25)",
          type: "match",
          sharedImage: "assets/exams/hsk1_t2_r1_pool.jpg",
          poolOptions: ["A", "B", "C", "D", "E", "F"],
          instruction: "Đọc câu và chọn bức tranh phù hợp (A–F).",
          items: [
            {
              num: 21,
              type: "match",
              text: "昨天是妈妈的生日。",
              pinyin: "Zuótiān shì māma de shēngrì.",
              answer: "D",
              explainVi: "\"昨天是妈妈的生日。\" (Hôm qua là sinh nhật của mẹ). Khớp tranh D (mẹ mỉm cười bên bánh sinh nhật cắm nến)."
            },
            {
              num: 22,
              type: "match",
              text: "这是我新买的电视。",
              pinyin: "Zhè shì wǒ xīn mǎi de diànshì.",
              answer: "F",
              explainVi: "\"这是我新买的电视。\" (Đây là chiếc tivi tôi mới mua). Khớp tranh F (màn hình tivi)."
            },
            {
              num: 23,
              type: "match",
              text: "这些衣服都很好看。",
              pinyin: "Zhèxiē yīfu dōu hěn hǎokàn.",
              answer: "C",
              explainVi: "\"这些衣服都很好看。\" (Những bộ quần áo này đều rất đẹp). Khớp tranh C (giá treo nhiều quần áo)."
            },
            {
              num: 24,
              type: "match",
              text: "这儿有一只小狗，真可爱。",
              pinyin: "Zhèr yǒu yì zhī xiǎo gǒu, zhēn kě'ài.",
              answer: "B",
              explainVi: "\"这儿有一只小狗，真可爱。\" (Ở đây có một chú chó con, thật đáng yêu). Khớp tranh B (chú chó con)."
            },
            {
              num: 25,
              type: "match",
              text: "爸爸给家人做饭呢。",
              pinyin: "Bàba gěi jiārén zuò fàn ne.",
              answer: "A",
              explainVi: "\"爸爸给家人做饭呢。\" (Bố đang nấu cơm cho cả nhà). Khớp tranh A (bố đang nấu ăn bên bếp)."
            }
          ]
        },
        {
          id: "r2",
          title: "第二部分 · Phần 2 (Câu 26–30)",
          type: "match",
          wordBank: [
            { id: "A", text: "下了，雪不大。", pinyin: "Xià le, xuě bú dà." },
            { id: "B", text: "坐吧，没人。", pinyin: "Zuò ba, méi rén." },
            { id: "C", text: "一杯牛奶吧。", pinyin: "Yì bēi niúnǎi ba." },
            { id: "D", text: "没有，怎么了？", pinyin: "Méiyǒu, zěnme le?" },
            { id: "E", text: "一百五十个。", pinyin: "Yìbǎi wǔshí gè." },
            { id: "F", text: "好的，谢谢！", pinyin: "Hǎo de, xièxie!" }
          ],
          poolOptions: ["A", "B", "C", "D", "E", "F"],
          instruction: "Đọc vế trái (26–30) và ghép với câu đáp lại phù hợp (A–F).",
          items: [
            {
              num: 26,
              type: "match",
              text: "你们公司有多少人？",
              pinyin: "Nǐmen gōngsī yǒu duōshao rén?",
              answer: "E",
              explainVi: "\"你们公司有多少人？\" (Công ty các bạn có bao nhiêu người?) → E: \"一百五十个。\" (150 người)."
            },
            {
              num: 27,
              type: "match",
              text: "你们那儿下雪了吗？",
              pinyin: "Nǐmen nàr xià xuě le ma?",
              answer: "A",
              explainVi: "\"你们那儿下雪了吗？\" (Chỗ các bạn tuyết rơi chưa?) → A: \"下了，雪不大。\" (Rơi rồi, tuyết không lớn)."
            },
            {
              num: 28,
              type: "match",
              text: "老师给你打电话了吗？",
              pinyin: "Lǎoshī gěi nǐ dǎ diànhuà le ma?",
              answer: "D",
              explainVi: "\"老师给你打电话了吗？\" (Thầy/cô giáo đã gọi điện cho bạn chưa?) → D: \"没有，怎么了？\" (Chưa, có chuyện gì thế?)."
            },
            {
              num: 29,
              type: "match",
              text: "睡觉前你想喝点儿什么？",
              pinyin: "Shuìjiào qián nǐ xiǎng hē diǎnr shénme?",
              answer: "C",
              explainVi: "\"睡觉前你想喝点儿什么？\" (Trước khi ngủ bạn muốn uống chút gì?) → C: \"一杯牛奶吧。\" (Một cốc sữa nhé)."
            },
            {
              num: 30,
              type: "match",
              text: "请问，我可以坐在这儿吗？",
              pinyin: "Qǐngwèn, wǒ kěyǐ zuò zài zhèr ma?",
              answer: "B",
              explainVi: "\"请问，我可以坐在这儿吗？\" (Xin hỏi, tôi có thể ngồi ở đây không?) → B: \"坐吧，没人。\" (Ngồi đi, không có ai đâu)."
            }
          ]
        },
        {
          id: "r3",
          title: "第三部分 · Phần 3 (Câu 31–35)",
          type: "match",
          wordBank: [
            { id: "A", text: "去", pinyin: "qù" },
            { id: "B", text: "有点儿", pinyin: "yǒudiǎnr" },
            { id: "C", text: "正在", pinyin: "zhèngzài" },
            { id: "D", text: "叫", pinyin: "jiào" },
            { id: "E", text: "同学", pinyin: "tóngxué" },
            { id: "F", text: "个", pinyin: "gè" }
          ],
          poolOptions: ["A", "B", "C", "D", "E", "F"],
          instruction: "Chọn từ thích hợp (A–F) điền vào chỗ trống ( ).",
          items: [
            {
              num: 31,
              type: "match",
              text: "我早上吃了一 ( ) 苹果。",
              pinyin: "Wǒ zǎoshang chīle yí ( ) píngguǒ.",
              answer: "F",
              explainVi: "\"一个苹果\" (một quả táo): dùng lượng từ 个. Chọn F: 个."
            },
            {
              num: 32,
              type: "match",
              text: "昨天这个时候，我 ( ) 飞机上呢。",
              pinyin: "Zuótiān zhège shíhou, wǒ ( ) fēijī shang ne.",
              answer: "C",
              explainVi: "\"昨天这个时候，我（正在）飞机上呢。\" (Giờ này hôm qua tôi đang ở trên máy bay). Chọn C: 正在 (đang)."
            },
            {
              num: 33,
              type: "match",
              text: "现在 ( ) 热，我们喝口水吧。",
              pinyin: "Xiànzài ( ) rè, wǒmen hē kǒu shuǐ ba.",
              answer: "B",
              explainVi: "Cấu trúc \"有点儿 + tính từ\" (hơi...): \"现在有点儿热\" (Bây giờ hơi nóng). Chọn B: 有点儿."
            },
            {
              num: 34,
              type: "match",
              text: "A: 妈妈，下午我想 ( ) 书店买本书。\nB: 去吧。对了，你有钱吗？",
              pinyin: "A: Māma, xiàwǔ wǒ xiǎng ( ) shūdiàn mǎi běn shū.\nB: Qù ba. Duìle, nǐ yǒu qián ma?",
              dialogue: [
                { speaker: "A", text: "妈妈，下午我想 ( ) 书店买本书。", pinyin: "Māma, xiàwǔ wǒ xiǎng ( ) shūdiàn mǎi běn shū." },
                { speaker: "B", text: "去吧。对了，你有钱吗？", pinyin: "Qù ba. Duìle, nǐ yǒu qián ma?" }
              ],
              answer: "A",
              explainVi: "\"去书店买本书\" (đi hiệu sách mua một quyển sách), B cũng đáp lại \"去吧\". Chọn A: 去."
            },
            {
              num: 35,
              type: "match",
              text: "A: 你们认识很多年了吧？\nB: 对，我们是小学 ( )。",
              pinyin: "A: Nǐmen rènshi hěn duō nián le ba?\nB: Duì, wǒmen shì xiǎoxué ( ).",
              dialogue: [
                { speaker: "A", text: "你们认识很多年了吧？", pinyin: "Nǐmen rènshi hěn duō nián le ba?" },
                { speaker: "B", text: "对，我们是小学 ( )。", pinyin: "Duì, wǒmen shì xiǎoxué ( )." }
              ],
              answer: "E",
              explainVi: "\"小学同学\" (bạn học tiểu học): phù hợp với câu hỏi hai người quen nhau nhiều năm. Chọn E: 同学."
            }
          ]
        },
        {
          id: "r4",
          title: "第四部分 · Phần 4 (Câu 36–40)",
          type: "mcq",
          instruction: "Đọc đoạn ngắn và câu hỏi (★), chọn đáp án đúng (A, B hoặc C).",
          items: [
            {
              num: 36,
              type: "mcq",
              passage: "明天是星期六，我不上班。我们去买衣服吧。",
              passagePinyin: "Míngtiān shì xīngqīliù, wǒ bú shàngbān. Wǒmen qù mǎi yīfu ba.",
              question: "说话人明天要去哪里？",
              questionPinyin: "Shuōhuàrén míngtiān yào qù nǎli?",
              options: [
                { id: "A", text: "公司", pinyin: "gōngsī" },
                { id: "B", text: "饭店", pinyin: "fàndiàn" },
                { id: "C", text: "商店", pinyin: "shāngdiàn" }
              ],
              answer: "C",
              explainVi: "Ngày mai thứ Bảy không đi làm, rủ nhau đi mua quần áo (去买衣服) → đến cửa hàng (C: 商店)."
            },
            {
              num: 37,
              type: "mcq",
              passage: "我爸爸在医院上班，今天很多人去找他看病，他非常忙。",
              passagePinyin: "Wǒ bàba zài yīyuàn shàngbān, jīntiān hěn duō rén qù zhǎo tā kànbìng, tā fēicháng máng.",
              question: "说话人的爸爸做什么工作？",
              questionPinyin: "Shuōhuàrén de bàba zuò shénme gōngzuò?",
              options: [
                { id: "A", text: "医生", pinyin: "yīshēng" },
                { id: "B", text: "老师", pinyin: "lǎoshī" },
                { id: "C", text: "学生", pinyin: "xuésheng" }
              ],
              answer: "A",
              explainVi: "Bố làm ở bệnh viện, nhiều người tìm ông khám bệnh (找他看病) → nghề nghiệp là bác sĩ (A: 医生)."
            },
            {
              num: 38,
              type: "mcq",
              passage: "我昨天晚上没去上课，在家看电视了。",
              passagePinyin: "Wǒ zuótiān wǎnshang méi qù shàngkè, zài jiā kàn diànshì le.",
              question: "说话人昨天晚上在哪儿？",
              questionPinyin: "Shuōhuàrén zuótiān wǎnshang zài nǎr?",
              options: [
                { id: "A", text: "家", pinyin: "jiā" },
                { id: "B", text: "学校", pinyin: "xuéxiào" },
                { id: "C", text: "电影院", pinyin: "diànyǐngyuàn" }
              ],
              answer: "A",
              explainVi: "Tối hôm qua không đi học mà xem tivi ở nhà (在家看电视了) → ở nhà (A: 家)."
            },
            {
              num: 39,
              type: "mcq",
              passage: "我爱去学校后边那家超市，那里卖的东西很便宜。",
              passagePinyin: "Wǒ ài qù xuéxiào hòubian nà jiā chāoshì, nàlǐ mài de dōngxi hěn piányi.",
              question: "那家超市的东西怎么样？",
              questionPinyin: "Nà jiā chāoshì de dōngxi zěnmeyàng?",
              options: [
                { id: "A", text: "不多", pinyin: "bù duō" },
                { id: "B", text: "不贵", pinyin: "bú guì" },
                { id: "C", text: "不好吃", pinyin: "bù hǎochī" }
              ],
              answer: "B",
              explainVi: "Đồ bán ở siêu thị đó rất rẻ (很便宜), đồng nghĩa với không đắt (B: 不贵)."
            },
            {
              num: 40,
              type: "mcq",
              passage: "A: 你好，我要一个鸡蛋和一个包子，多少钱？\nB: 六块五。",
              passagePinyin: "A: Nǐ hǎo, wǒ yào yí gè jīdàn hé yí gè bāozi, duōshao qián?\nB: Liù kuài wǔ.",
              question: "说话人在做什么？",
              questionPinyin: "Shuōhuàrén zài zuò shénme?",
              options: [
                { id: "A", text: "休息", pinyin: "xiūxi" },
                { id: "B", text: "看病", pinyin: "kànbìng" },
                { id: "C", text: "买东西", pinyin: "mǎi dōngxi" }
              ],
              answer: "C",
              explainVi: "A gọi mua một quả trứng và một cái bánh bao rồi hỏi giá tiền → đang mua đồ (C: 买东西)."
            }
          ]
        }
      ]
    }
  ]
};
