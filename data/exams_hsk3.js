/* Dữ liệu 2 đề thi mô phỏng HSK 3.0 Cấp 3 (hsk3_t1, hsk3_t2 — 140 câu) */
window.HSK_EXAMS_DATA = window.HSK_EXAMS_DATA || {};
window.HSK_EXAMS_DATA["hsk3_t1"] = {
  "id": "hsk3_t1",
  "sections": [
    {
      "id": "listening",
      "title": "一、听力 · Nghe hiểu",
      "parts": [
        {
          "id": "l1a",
          "title": "第一部分（1–5题）· Nghe đối chiếu tranh (1–5)",
          "type": "match",
          "instruction": "Nghe mỗi đoạn hội thoại 2 lần và chọn bức tranh A–F phù hợp nhất.",
          "sharedImage": "assets/exams/hsk3_t1_l1a_pool.jpg",
          "poolOptions": [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F"
          ],
          "items": [
            {
              "num": 1,
              "audioLines": [
                {
                  "speaker": "男",
                  "text": "您今天觉得舒服一点儿了吗？"
                },
                {
                  "speaker": "女",
                  "text": "还是有一点儿头疼，可以再帮我检查一下吗？"
                }
              ],
              "answer": "C",
              "explainVi": "Người nữ nói vẫn hơi đau đầu và nhờ kiểm tra lại -> khớp với tranh C (bệnh nhân nằm viện được bác sĩ kiểm tra)."
            },
            {
              "num": 2,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "你今天好像不太开心，怎么了？"
                },
                {
                  "speaker": "男",
                  "text": "我丢了银行卡，现在心里很难过。"
                }
              ],
              "answer": "A",
              "explainVi": "Người nam làm mất thẻ ngân hàng nên rất buồn -> khớp với tranh A (người đàn ông ôm mặt buồn bã)."
            },
            {
              "num": 3,
              "audioLines": [
                {
                  "speaker": "男",
                  "text": "你想吃什么？我帮你点。"
                },
                {
                  "speaker": "女",
                  "text": "我想吃米饭和鱼。"
                }
              ],
              "answer": "F",
              "explainVi": "Hai người hỏi nhau muốn ăn gì và gọi món (cơm và cá) -> khớp với tranh F (cùng xem thực đơn)."
            },
            {
              "num": 4,
              "audioLines": [
                {
                  "speaker": "男",
                  "text": "你最近怎么总是很晚才睡觉？"
                },
                {
                  "speaker": "女",
                  "text": "我在准备考试，每天都要复习到很晚。"
                }
              ],
              "answer": "E",
              "explainVi": "Người nữ đang chuẩn bị thi, ngày nào cũng ôn tập đến khuya -> khớp với tranh E (ngồi bàn học ôn bài)."
            },
            {
              "num": 5,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "你觉得这条裙子怎么样？"
                },
                {
                  "speaker": "男",
                  "text": "我觉得很好看，你穿上试试吧。"
                }
              ],
              "answer": "B",
              "explainVi": "Người nữ hỏi ý kiến về chiếc váy và người nam khuyên mặc thử -> khớp với tranh B (giơ váy/áo lên xem)."
            }
          ]
        },
        {
          "id": "l1b",
          "title": "第一部分（6–10题）· Nghe đối chiếu tranh (6–10)",
          "type": "match",
          "instruction": "Nghe mỗi đoạn hội thoại 2 lần và chọn bức tranh A–E phù hợp nhất.",
          "sharedImage": "assets/exams/hsk3_t1_l1b_pool.jpg",
          "poolOptions": [
            "A",
            "B",
            "C",
            "D",
            "E"
          ],
          "items": [
            {
              "num": 6,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "你站在那儿，我帮你拍张照片。"
                },
                {
                  "speaker": "男",
                  "text": "好的，这儿太漂亮了！"
                }
              ],
              "answer": "E",
              "explainVi": "Người nữ bảo người nam đứng đó để chụp ảnh cho -> khớp với tranh E (cầm máy ảnh chụp hình)."
            },
            {
              "num": 7,
              "audioLines": [
                {
                  "speaker": "男",
                  "text": "这个礼物我选了很久，希望你会喜欢。"
                },
                {
                  "speaker": "女",
                  "text": "你总是知道我喜欢什么。"
                }
              ],
              "answer": "A",
              "explainVi": "Người nam tặng món quà đã chọn rất lâu -> khớp với tranh A (tặng hộp quà)."
            },
            {
              "num": 8,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "听说你对体育很感兴趣？"
                },
                {
                  "speaker": "男",
                  "text": "是啊，我周末经常跟朋友一起打网球。"
                }
              ],
              "answer": "D",
              "explainVi": "Người nam cuối tuần thường đánh quần vợt -> khớp với tranh D (cầm vợt đánh tennis)."
            },
            {
              "num": 9,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "这本书你看了这么久，还没看完吗？"
                },
                {
                  "speaker": "男",
                  "text": "这本书很有意思，我想再读一遍。"
                }
              ],
              "answer": "C",
              "explainVi": "Hai người trò chuyện về cuốn sách đang đọc -> khớp với tranh C (hai bạn ngồi cùng đọc sách)."
            },
            {
              "num": 10,
              "audioLines": [
                {
                  "speaker": "男",
                  "text": "你能帮我一下吗？"
                },
                {
                  "speaker": "女",
                  "text": "没问题，我们一起把这些书搬到三楼去吧。"
                }
              ],
              "answer": "B",
              "explainVi": "Hai người cùng khiêng chồng sách lên tầng 3 -> khớp với tranh B (bê chồng sách cao)."
            }
          ]
        },
        {
          "id": "l2",
          "title": "第二部分（11–20题）· Nghe hội thoại chọn đáp án",
          "type": "mcq",
          "instruction": "Nghe đoạn hội thoại và câu hỏi, sau đó chọn đáp án đúng A, B hoặc C.",
          "items": [
            {
              "num": 11,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "周末你想去游泳还是打羽毛球？"
                },
                {
                  "speaker": "男",
                  "text": "最近我左腿有点儿疼，医生说最好不要运动。"
                },
                {
                  "speaker": "问",
                  "text": "男的周末可能做什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "去游泳"
                },
                {
                  "id": "B",
                  "text": "去打羽毛球"
                },
                {
                  "id": "C",
                  "text": "在家休息"
                }
              ],
              "answer": "C",
              "explainVi": "Người nam nói chân trái hơi đau, bác sĩ dặn tốt nhất không nên vận động (bơi lội và cầu lông đều là vận động) -> có thể sẽ ở nhà nghỉ ngơi (C)."
            },
            {
              "num": 12,
              "audioLines": [
                {
                  "speaker": "男",
                  "text": "你买的这件新衣服真好看，是在网上买的吗？"
                },
                {
                  "speaker": "女",
                  "text": "不是，是在商场里买的。"
                },
                {
                  "speaker": "问",
                  "text": "女的在哪儿买的新衣服？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "网上"
                },
                {
                  "id": "B",
                  "text": "商场"
                },
                {
                  "id": "C",
                  "text": "超市"
                }
              ],
              "answer": "B",
              "explainVi": "Người nữ trả lời rõ: '不是，是在商场里买的' (Không phải mua trên mạng, mà mua ở trung tâm thương mại) -> chọn B."
            },
            {
              "num": 13,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "明天就要考试了，我心里有点儿害怕。"
                },
                {
                  "speaker": "男",
                  "text": "别担心，你已经复习得很好了。"
                },
                {
                  "speaker": "问",
                  "text": "关于女的，可以知道什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "很担心考试"
                },
                {
                  "id": "B",
                  "text": "复习得不好"
                },
                {
                  "id": "C",
                  "text": "没准备考试"
                }
              ],
              "answer": "A",
              "explainVi": "Người nữ nói '明天就要考试了，我心里有点儿害怕' cho thấy cô ấy rất lo lắng cho kỳ thi (A); người nam nói cô ấy đã ôn tập rất tốt nên B, C sai."
            },
            {
              "num": 14,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "这张照片是你什么时候拍的？"
                },
                {
                  "speaker": "男",
                  "text": "是我去年夏天去海边旅游时拍的。"
                },
                {
                  "speaker": "问",
                  "text": "照片是什么时候拍的？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "去年夏天"
                },
                {
                  "id": "B",
                  "text": "今年夏天"
                },
                {
                  "id": "C",
                  "text": "去年秋天"
                }
              ],
              "answer": "A",
              "explainVi": "Người nam nói ảnh chụp khi đi du lịch biển vào mùa hè năm ngoái (去年夏天) -> chọn A."
            },
            {
              "num": 15,
              "audioLines": [
                {
                  "speaker": "男",
                  "text": "你今天怎么自己做饭了？"
                },
                {
                  "speaker": "女",
                  "text": "我妈妈今天工作很忙，要很晚才回家。"
                },
                {
                  "speaker": "问",
                  "text": "关于女的的妈妈，可以知道什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "生病了"
                },
                {
                  "id": "B",
                  "text": "爱做饭"
                },
                {
                  "id": "C",
                  "text": "工作忙"
                }
              ],
              "answer": "C",
              "explainVi": "Người nữ nói '我妈妈今天工作很忙，要很晚才回家' -> mẹ bận công việc (C). Hội thoại không nhắc đến ốm hay thích nấu ăn."
            },
            {
              "num": 16,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "你今天下午有时间吗？我们一起去超市吧。"
                },
                {
                  "speaker": "男",
                  "text": "不行，我下午四点要去机场接一个朋友。"
                },
                {
                  "speaker": "女",
                  "text": "你朋友的飞机几点到？"
                },
                {
                  "speaker": "男",
                  "text": "四点半，我还要跟他一起吃晚饭。"
                },
                {
                  "speaker": "问",
                  "text": "男的今天下午要做什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "去超市"
                },
                {
                  "id": "B",
                  "text": "坐飞机"
                },
                {
                  "id": "C",
                  "text": "接朋友"
                }
              ],
              "answer": "C",
              "explainVi": "Người nam từ chối đi siêu thị vì 4 giờ chiều phải ra sân bay đón bạn (接朋友) -> chọn C. Bạn anh ấy đi máy bay chứ không phải anh ấy."
            },
            {
              "num": 17,
              "audioLines": [
                {
                  "speaker": "男",
                  "text": "你今天是骑自行车来的吗？"
                },
                {
                  "speaker": "女",
                  "text": "我的自行车坏了，不能骑了。"
                },
                {
                  "speaker": "男",
                  "text": "那你怎么来的？坐地铁吗？"
                },
                {
                  "speaker": "女",
                  "text": "不是，我爸爸开车送我来的。"
                },
                {
                  "speaker": "问",
                  "text": "女的今天是怎么来学校的？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "坐地铁"
                },
                {
                  "id": "B",
                  "text": "骑自行车"
                },
                {
                  "id": "C",
                  "text": "坐爸爸的车"
                }
              ],
              "answer": "C",
              "explainVi": "Xe đạp hỏng, cũng không đi tàu điện ngầm mà được bố lái xe đưa đến (我爸爸开车送我来的) -> chọn C."
            },
            {
              "num": 18,
              "audioLines": [
                {
                  "speaker": "男",
                  "text": "你最近好像瘦了，生病了吗？"
                },
                {
                  "speaker": "女",
                  "text": "没有，我最近工作太忙了，常常忘记了吃饭。"
                },
                {
                  "speaker": "男",
                  "text": "这样对身体不好，再忙也要好好吃饭。"
                },
                {
                  "speaker": "女",
                  "text": "谢谢，我知道了。"
                },
                {
                  "speaker": "问",
                  "text": "女的为什么瘦了？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "生病了"
                },
                {
                  "id": "B",
                  "text": "工作忙"
                },
                {
                  "id": "C",
                  "text": "常运动"
                }
              ],
              "answer": "B",
              "explainVi": "Người nữ phủ nhận bị ốm, giải thích do gần đây công việc quá bận (工作忙) nên hay quên ăn cơm -> chọn B."
            },
            {
              "num": 19,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "听说你换工作了？"
                },
                {
                  "speaker": "男",
                  "text": "对，现在的公司离我家很近。"
                },
                {
                  "speaker": "女",
                  "text": "那太好了，每天可以多睡一会儿了。"
                },
                {
                  "speaker": "男",
                  "text": "是的，而且新公司的同事也很热情。"
                },
                {
                  "speaker": "问",
                  "text": "关于男的的新工作，可以知道什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "可以早睡觉"
                },
                {
                  "id": "B",
                  "text": "同事不热情"
                },
                {
                  "id": "C",
                  "text": "公司离家近"
                }
              ],
              "answer": "C",
              "explainVi": "Người nam nói '现在的公司离我家很近' (công ty gần nhà) và đồng nghiệp rất nhiệt tình -> chọn C. Câu nói được ngủ thêm chút không có nghĩa là đi ngủ sớm."
            },
            {
              "num": 20,
              "audioLines": [
                {
                  "speaker": "男",
                  "text": "这本书你看了快一个月了。"
                },
                {
                  "speaker": "女",
                  "text": "因为里面有很多字我不认识，所以读得比较慢。"
                },
                {
                  "speaker": "男",
                  "text": "需要我帮你吗？我读完了。"
                },
                {
                  "speaker": "女",
                  "text": "太好了，有些句子我不太明白是什么意思。"
                },
                {
                  "speaker": "问",
                  "text": "关于这本书，可以知道什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "女的读完了"
                },
                {
                  "id": "B",
                  "text": "女的觉得难"
                },
                {
                  "id": "C",
                  "text": "男的很喜欢"
                }
              ],
              "answer": "B",
              "explainVi": "Người nữ nói trong sách có nhiều chữ không biết và nhiều câu chưa hiểu nghĩa -> cô ấy thấy sách khó (B). Người nam mới là người đọc xong rồi."
            }
          ]
        },
        {
          "id": "l3",
          "title": "第三部分（21–30题）· Nghe đoạn văn ngắn chọn đáp án",
          "type": "mcq",
          "instruction": "Nghe đoạn văn ngắn và câu hỏi, sau đó chọn đáp án đúng A, B hoặc C.",
          "items": [
            {
              "num": 21,
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "我周末一般不在家学习，我喜欢去图书馆，很方便，而且那里也安静。"
                },
                {
                  "speaker": "问",
                  "text": "说话人周末喜欢在哪儿学习？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "家"
                },
                {
                  "id": "B",
                  "text": "咖啡馆"
                },
                {
                  "id": "C",
                  "text": "图书馆"
                }
              ],
              "answer": "C",
              "explainVi": "Người nói thích học ở thư viện (图书馆) vì tiện lợi và yên tĩnh, cuối tuần thường không học ở nhà -> chọn C."
            },
            {
              "num": 22,
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "下个月我打算坐高铁去上海，坐高铁比坐飞机便宜，也很舒服。"
                },
                {
                  "speaker": "问",
                  "text": "说话人下个月怎么去上海？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "坐飞机"
                },
                {
                  "id": "B",
                  "text": "坐地铁"
                },
                {
                  "id": "C",
                  "text": "坐高铁"
                }
              ],
              "answer": "C",
              "explainVi": "Người nói dự định đi tàu cao tốc (坐高铁) đến Thượng Hải vì rẻ hơn máy bay và thoải mái -> chọn C."
            },
            {
              "num": 23,
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "王老师不但是我们的中文老师，也是我们的朋友，她对学生总是很热情。"
                },
                {
                  "speaker": "问",
                  "text": "王老师对学生怎么样？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "很热情"
                },
                {
                  "id": "B",
                  "text": "很满意"
                },
                {
                  "id": "C",
                  "text": "不关心"
                }
              ],
              "answer": "A",
              "explainVi": "Câu văn nêu trực tiếp: '她对学生总是很热情' (Cô luôn rất nhiệt tình với học sinh) -> chọn A."
            },
            {
              "num": 24,
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "李阿姨的儿子上初中了，他这个学期的考试成绩不错，李阿姨和丈夫都很开心。"
                },
                {
                  "speaker": "问",
                  "text": "关于李阿姨，可以知道什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "很担心"
                },
                {
                  "id": "B",
                  "text": "很高兴"
                },
                {
                  "id": "C",
                  "text": "不放心"
                }
              ],
              "answer": "B",
              "explainVi": "Thành tích thi học kỳ của con trai tốt nên cô Lý và chồng đều rất vui (很开心 = 很高兴) -> chọn B."
            },
            {
              "num": 25,
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "这个季节有时候会突然下雨，所以我出门的时候习惯带上雨衣或者雨伞。"
                },
                {
                  "speaker": "问",
                  "text": "说话人现在出门时习惯带什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "雨伞"
                },
                {
                  "id": "B",
                  "text": "上衣"
                },
                {
                  "id": "C",
                  "text": "手机"
                }
              ],
              "answer": "A",
              "explainVi": "Mùa này hay mưa bất chợt nên người nói có thói quen mang áo mưa hoặc ô/dù (雨伞) khi ra ngoài -> chọn A."
            },
            {
              "num": 26,
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "今天晚上我想去看电影，但是票已经卖完了，所以还是在家休息吧，明天再去看。"
                },
                {
                  "speaker": "问",
                  "text": "说话人今天晚上可能做什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "看电影"
                },
                {
                  "id": "B",
                  "text": "去买票"
                },
                {
                  "id": "C",
                  "text": "在家休息"
                }
              ],
              "answer": "C",
              "explainVi": "Vì vé xem phim đã bán hết nên tối nay ở nhà nghỉ ngơi (在家休息), ngày mai mới đi xem -> chọn C."
            },
            {
              "num": 27,
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "我中午经常点外卖。今天我用手机点了一碗牛肉面，外卖员说大概半小时能送到我家。"
                },
                {
                  "speaker": "问",
                  "text": "说话人点的牛肉面大概什么时候能送到？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "十五分钟后"
                },
                {
                  "id": "B",
                  "text": "三十分钟后"
                },
                {
                  "id": "C",
                  "text": "六十分钟后"
                }
              ],
              "answer": "B",
              "explainVi": "Người giao đồ ăn nói khoảng nửa tiếng (半小时 = 30 phút) sẽ giao đến -> chọn B."
            },
            {
              "num": 28,
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "这个季节很凉快，我常带孩子出去玩，这个周末我们准备去动物园看大熊猫。"
                },
                {
                  "speaker": "问",
                  "text": "说话人这个周末要去哪儿？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "公园"
                },
                {
                  "id": "B",
                  "text": "校园"
                },
                {
                  "id": "C",
                  "text": "动物园"
                }
              ],
              "answer": "C",
              "explainVi": "Người nói cho biết cuối tuần này chuẩn bị đi sở thú (动物园) xem gấu trúc -> chọn C."
            },
            {
              "num": 29,
              "passageGroupId": "29-30",
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "我姐姐是医生，她在大学的医院工作。她平时工作很忙，但也很喜欢旅游，每年放假都会去不同的城市。她还喜欢画画儿，有空儿的时候会到外面画风景。最近，她打算去北京参加一个画画儿比赛，希望能认识更多喜欢画画儿的朋友。"
                },
                {
                  "speaker": "问",
                  "text": "说话人姐姐做什么工作？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "画家"
                },
                {
                  "id": "B",
                  "text": "医生"
                },
                {
                  "id": "C",
                  "text": "大学老师"
                }
              ],
              "answer": "B",
              "explainVi": "Câu đầu nói rõ: '我姐姐是医生，她在大学的医院工作' (Chị gái làm bác sĩ ở bệnh viện của trường đại học) -> chọn B."
            },
            {
              "num": 30,
              "passageGroupId": "29-30",
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "我姐姐是医生，她在大学的医院工作。她平时工作很忙，但也很喜欢旅游，每年放假都会去不同的城市。她还喜欢画画儿，有空儿的时候会到外面画风景。最近，她打算去北京参加一个画画儿比赛，希望能认识更多喜欢画画儿的朋友。"
                },
                {
                  "speaker": "问",
                  "text": "说话人姐姐喜欢什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "体育电影"
                },
                {
                  "id": "B",
                  "text": "手机游戏"
                },
                {
                  "id": "C",
                  "text": "旅游和画画儿"
                }
              ],
              "answer": "C",
              "explainVi": "Đoạn văn nói chị gái rất thích du lịch (很喜欢旅游) và còn thích vẽ tranh (还喜欢画画儿) -> chọn C."
            }
          ]
        }
      ]
    },
    {
      "id": "reading",
      "title": "二、阅读 · Đọc hiểu",
      "parts": [
        {
          "id": "r1a",
          "title": "第一部分（31–35题）· Ghép câu đối thoại (31–35)",
          "type": "match",
          "instruction": "Chọn câu đáp A–F phù hợp nhất với mỗi câu 31–35.",
          "wordBank": [
            {
              "id": "A",
              "text": "太好了，谢谢！"
            },
            {
              "id": "B",
              "text": "已经做完了，放在书包里了。"
            },
            {
              "id": "C",
              "text": "不，我更想在家看书。"
            },
            {
              "id": "D",
              "text": "经理怎么不在办公室？"
            },
            {
              "id": "E",
              "text": "因为那里的衣服又便宜又好看。"
            },
            {
              "id": "F",
              "text": "没问题，我下午要跟他见面。"
            }
          ],
          "poolOptions": [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F"
          ],
          "items": [
            {
              "num": 31,
              "text": "昨天的作业你做完了吗？",
              "answer": "B",
              "explainVi": "Hỏi đã làm xong bài tập hôm qua chưa -> B trả lời đã làm xong và cất vào cặp sách rồi."
            },
            {
              "num": 32,
              "text": "你为什么喜欢去那家商店买衣服？",
              "answer": "E",
              "explainVi": "Hỏi lý do '为什么...' -> E trả lời bắt đầu bằng '因为...' (vì quần áo ở đó vừa rẻ vừa đẹp)."
            },
            {
              "num": 33,
              "text": "这是我用过的汉语词典，送给你吧。",
              "answer": "A",
              "explainVi": "Người khác tặng từ điển tiếng Hán -> A đáp lời cảm ơn vui vẻ: 'Tuyệt quá, cảm ơn bạn!'."
            },
            {
              "num": 34,
              "text": "你能帮我把这本书给李老师吗？",
              "answer": "F",
              "explainVi": "Nhờ đưa sách cho thầy Lý -> F nhận lời: 'Không vấn đề, chiều nay mình sẽ gặp thầy ấy.'."
            },
            {
              "num": 35,
              "text": "周末你想去爬山吗？",
              "answer": "C",
              "explainVi": "Rủ cuối tuần đi leo núi không -> C từ chối: 'Không, mình thích ở nhà đọc sách hơn.'."
            }
          ]
        },
        {
          "id": "r1b",
          "title": "第一部分（36–40题）· Ghép câu đối thoại (36–40)",
          "type": "match",
          "instruction": "Chọn câu đáp A–E phù hợp nhất với mỗi câu 36–40.",
          "wordBank": [
            {
              "id": "A",
              "text": "我觉得爬楼梯可以锻炼身体。"
            },
            {
              "id": "B",
              "text": "他是我们公司新来的经理，很年轻。"
            },
            {
              "id": "C",
              "text": "我去图书馆复习了，准备明天的考试。"
            },
            {
              "id": "D",
              "text": "冰箱里还有牛奶和鸡蛋。"
            },
            {
              "id": "E",
              "text": "你可以查一下手机地图，或者问问旁边的人。"
            }
          ],
          "poolOptions": [
            "A",
            "B",
            "C",
            "D",
            "E"
          ],
          "items": [
            {
              "num": 36,
              "text": "电梯快下来了，你不等了吗？",
              "answer": "A",
              "explainVi": "Hỏi thang máy sắp xuống rồi sao không đợi -> A giải thích leo cầu thang bộ có thể rèn luyện sức khỏe."
            },
            {
              "num": 37,
              "text": "我找不到去火车站的路了。",
              "answer": "E",
              "explainVi": "Nói không tìm thấy đường ra ga tàu hỏa -> E gợi ý tra bản đồ điện thoại hoặc hỏi người bên cạnh."
            },
            {
              "num": 38,
              "text": "今天下午你去哪儿了？打电话也没接。",
              "answer": "C",
              "explainVi": "Hỏi chiều nay đi đâu mà gọi điện không nghe -> C trả lời đã đi thư viện ôn bài cho kỳ thi ngày mai."
            },
            {
              "num": 39,
              "text": "家里还有什么吃的吗？我有点儿饿。",
              "answer": "D",
              "explainVi": "Hỏi ở nhà còn gì ăn không vì hơi đói -> D trả lời trong tủ lạnh còn sữa và trứng gà."
            },
            {
              "num": 40,
              "text": "照片上站在你旁边的那个人是谁？",
              "answer": "B",
              "explainVi": "Hỏi người đứng cạnh trong ảnh là ai -> B giới thiệu đó là giám đốc mới đến của công ty."
            }
          ]
        },
        {
          "id": "r2a",
          "title": "第二部分（41–45题）· Điền từ vào câu (41–45)",
          "type": "match",
          "instruction": "Chọn từ A–F thích hợp điền vào chỗ trống ( ).",
          "wordBank": [
            {
              "id": "A",
              "text": "地方"
            },
            {
              "id": "B",
              "text": "遇到"
            },
            {
              "id": "C",
              "text": "健康"
            },
            {
              "id": "D",
              "text": "检查"
            },
            {
              "id": "E",
              "text": "结束"
            },
            {
              "id": "F",
              "text": "坚持"
            }
          ],
          "poolOptions": [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F"
          ],
          "items": [
            {
              "num": 41,
              "text": "他每天都运动，所以身体很 ( )。",
              "answer": "C",
              "explainVi": "Ngày nào cũng vận động nên cơ thể rất khỏe mạnh -> '健康' (khỏe mạnh)."
            },
            {
              "num": 42,
              "text": "这次考试的时间比较长，下午 5 点才 ( )。",
              "answer": "E",
              "explainVi": "Thời gian thi khá dài, 5 giờ chiều mới kết thúc -> '结束' (kết thúc)."
            },
            {
              "num": 43,
              "text": "我刚学中文的时候 ( ) 过一些问题，后来都解决了。",
              "answer": "B",
              "explainVi": "Lúc mới học tiếng Trung từng gặp một số vấn đề -> '遇到' (gặp phải)."
            },
            {
              "num": 44,
              "text": "我最近看东西有点儿不太清楚，要去 ( ) 一下眼睛。",
              "answer": "D",
              "explainVi": "Nhìn không rõ nên đi kiểm tra/khám mắt -> '检查' (kiểm tra)."
            },
            {
              "num": 45,
              "text": "你如果每天都 ( ) 学习，你的中文一定会越来越好。",
              "answer": "F",
              "explainVi": "Nếu ngày nào cũng kiên trì học -> '坚持' (kiên trì)."
            }
          ]
        },
        {
          "id": "r2b",
          "title": "第二部分（46–50题）· Điền từ vào hội thoại (46–50)",
          "type": "match",
          "instruction": "Chọn từ A–F thích hợp điền vào chỗ trống trong đoạn hội thoại.",
          "wordBank": [
            {
              "id": "A",
              "text": "忘记"
            },
            {
              "id": "B",
              "text": "一块儿"
            },
            {
              "id": "C",
              "text": "习惯"
            },
            {
              "id": "D",
              "text": "练习"
            },
            {
              "id": "E",
              "text": "新鲜"
            },
            {
              "id": "F",
              "text": "安静"
            }
          ],
          "poolOptions": [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F"
          ],
          "items": [
            {
              "num": 46,
              "text": "A: 你买的水果看起来很 ( )。\nB: 是的，今天早上我刚从超市买的。",
              "answer": "E",
              "explainVi": "Hoa quả vừa mua sáng nay trông rất tươi ngon -> '新鲜' (tươi mới)."
            },
            {
              "num": 47,
              "text": "A: 请大家 ( )，老师要讲课了。\nB: 好的，我们不说话了。",
              "answer": "F",
              "explainVi": "Giáo viên sắp giảng bài, mời mọi người giữ yên lặng -> '安静' (yên tĩnh/im lặng)."
            },
            {
              "num": 48,
              "text": "A: 你的作业呢？\nB: 真对不起，老师，我昨天 ( ) 写了。",
              "answer": "A",
              "explainVi": "Xin lỗi thầy, hôm qua em quên làm bài tập -> '忘记' (quên)."
            },
            {
              "num": 49,
              "text": "A: 我刚来中国，还不太 ( ) 这里的天气。\nB: 慢慢来，过一段时间就好了。",
              "answer": "C",
              "explainVi": "Mới đến Trung Quốc nên chưa quen với thời tiết ở đây -> '习惯' (quen)."
            },
            {
              "num": 50,
              "text": "A: 你经常去体育馆吗？\nB: 对啊，我是篮球运动员，每天都要 ( ) 打篮球。",
              "answer": "D",
              "explainVi": "Là vận động viên bóng rổ nên ngày nào cũng phải luyện tập -> '练习' (luyện tập)."
            }
          ]
        },
        {
          "id": "r3a",
          "title": "第三部分（51–56题）· Đọc hiểu đoạn ngắn (51–56)",
          "type": "mcq",
          "instruction": "Đọc đoạn văn ngắn và chọn đáp án đúng A, B hoặc C.",
          "items": [
            {
              "num": 51,
              "passage": "我在网上看了两件衬衫，红色的更好看，但是蓝色的便宜一些，我最后买了蓝色的。",
              "question": "说话人为什么买了蓝色的衬衫？",
              "options": [
                {
                  "id": "A",
                  "text": "更便宜"
                },
                {
                  "id": "B",
                  "text": "更好看"
                },
                {
                  "id": "C",
                  "text": "更舒服"
                }
              ],
              "answer": "A",
              "explainVi": "Người nói nêu rõ '蓝色的便宜一些，我最后买了蓝色的' (chiếc màu xanh lam rẻ hơn một chút nên đã mua) -> chọn A. Đẹp hơn là chiếc màu đỏ."
            },
            {
              "num": 52,
              "passage": "我每天早上先骑自行车到地铁站，然后坐地铁去公司。",
              "question": "说话人早上怎么去地铁站？",
              "options": [
                {
                  "id": "A",
                  "text": "走路"
                },
                {
                  "id": "B",
                  "text": "骑车"
                },
                {
                  "id": "C",
                  "text": "开车"
                }
              ],
              "answer": "B",
              "explainVi": "Đoạn văn nói rõ: '先骑自行车到地铁站' (đạp xe đến ga tàu điện ngầm trước) -> chọn B."
            },
            {
              "num": 53,
              "passage": "虽然这家饭馆有点儿贵，但是因为菜做得特别好吃，所以客人还是很多。",
              "question": "这家饭馆的菜：",
              "options": [
                {
                  "id": "A",
                  "text": "很便宜"
                },
                {
                  "id": "B",
                  "text": "不好吃"
                },
                {
                  "id": "C",
                  "text": "有点儿贵"
                }
              ],
              "answer": "C",
              "explainVi": "Câu văn nói: '虽然这家饭馆有点儿贵' (tuy quán ăn này hơi đắt) và món ăn rất ngon -> chọn C."
            },
            {
              "num": 54,
              "passage": "哥哥打算下个月搬家，新房子附近有公园，去超市也很方便，他非常满意。",
              "question": "哥哥为什么对新房子很满意？",
              "options": [
                {
                  "id": "A",
                  "text": "很干净"
                },
                {
                  "id": "B",
                  "text": "很便宜"
                },
                {
                  "id": "C",
                  "text": "附近有公园"
                }
              ],
              "answer": "C",
              "explainVi": "Đoạn văn nêu lý do anh trai rất hài lòng là gần nhà mới có công viên và đi siêu thị rất tiện -> chọn C. Không nhắc đến sạch hay rẻ."
            },
            {
              "num": 55,
              "passage": "我知道下午的会议很重要，但是我感冒了，头很疼，得去看医生。",
              "question": "说话人下午可能：",
              "options": [
                {
                  "id": "A",
                  "text": "去医院"
                },
                {
                  "id": "B",
                  "text": "去开会"
                },
                {
                  "id": "C",
                  "text": "去考试"
                }
              ],
              "answer": "A",
              "explainVi": "Người nói bị cảm, đau đầu, phải đi khám bác sĩ ('看医生' = đi bệnh viện) nên không thể đi họp -> chọn A."
            },
            {
              "num": 56,
              "passage": "周末我们班要开一个晚会，时间、地点我已经发到大家的电子邮箱里了，欢迎你们都来参加。",
              "question": "晚会的时间、地点在哪里可以看到？",
              "options": [
                {
                  "id": "A",
                  "text": "邮件里"
                },
                {
                  "id": "B",
                  "text": "黑板上"
                },
                {
                  "id": "C",
                  "text": "电话里"
                }
              ],
              "answer": "A",
              "explainVi": "Thời gian và địa điểm đã được gửi vào hộp thư điện tử (电子邮箱 = 邮件里) -> chọn A."
            }
          ]
        },
        {
          "id": "r3b",
          "title": "第三部分（57–60题）· Đọc hiểu đoạn văn 2 câu hỏi (57–60)",
          "type": "mcq",
          "instruction": "Đọc mỗi đoạn văn và trả lời 2 câu hỏi bên dưới.",
          "items": [
            {
              "num": 57,
              "passageGroupId": "57-58",
              "passage": "我们下个月9号就考完试了，我打算和朋友一起去北京旅游。飞机票有点儿贵，所以我们准备坐高铁去。北京有很多有名的公园，也有很多有名的大学，我们打算都去看看。当然，我们还要尝一下好吃的北京菜。",
              "question": "说话人下个月要去北京做什么？",
              "options": [
                {
                  "id": "A",
                  "text": "考试"
                },
                {
                  "id": "B",
                  "text": "旅游"
                },
                {
                  "id": "C",
                  "text": "上大学"
                }
              ],
              "answer": "B",
              "explainVi": "Người nói dự định tháng sau thi xong sẽ cùng bạn đi du lịch Bắc Kinh ('去北京旅游') -> chọn B. Các trường đại học chỉ để đi tham quan, không phải đi học đại học."
            },
            {
              "num": 58,
              "passageGroupId": "57-58",
              "passage": "我们下个月9号就考完试了，我打算和朋友一起去北京旅游。飞机票有点儿贵，所以我们准备坐高铁去。北京有很多有名的公园，也有很多有名的大学，我们打算都去看看。当然，我们还要尝一下好吃的北京菜。",
              "question": "说话人打算怎么去北京？",
              "options": [
                {
                  "id": "A",
                  "text": "坐高铁"
                },
                {
                  "id": "B",
                  "text": "坐飞机"
                },
                {
                  "id": "C",
                  "text": "坐汽车"
                }
              ],
              "answer": "A",
              "explainVi": "Vì vé máy bay hơi đắt nên họ chuẩn bị đi tàu cao tốc ('准备坐高铁去') -> chọn A."
            },
            {
              "num": 59,
              "passageGroupId": "59-60",
              "passage": "好的生活习惯对身体健康很重要。每天早点儿睡觉，多吃水果和蔬菜，少吃甜的东西，经常运动，这些都是好习惯。我爸爸就是这样，他每天早上六点就起床去公园跑步。虽然我也想去，但是六点起床太难了！",
              "question": "说话人主要想告诉我们什么？",
              "options": [
                {
                  "id": "A",
                  "text": "怎样能学好中文"
                },
                {
                  "id": "B",
                  "text": "健康的生活习惯"
                },
                {
                  "id": "C",
                  "text": "爸爸的工作很忙"
                }
              ],
              "answer": "B",
              "explainVi": "Ngay câu mở đầu người nói nêu chủ đề: thói quen sinh hoạt tốt rất quan trọng cho sức khỏe, sau đó liệt kê các thói quen lành mạnh -> chọn B."
            },
            {
              "num": 60,
              "passageGroupId": "59-60",
              "passage": "好的生活习惯对身体健康很重要。每天早点儿睡觉，多吃水果和蔬菜，少吃甜的东西，经常运动，这些都是好习惯。我爸爸就是这样，他每天早上六点就起床去公园跑步。虽然我也想去，但是六点起床太难了！",
              "question": "关于说话人的爸爸，可以知道什么？",
              "options": [
                {
                  "id": "A",
                  "text": "经常运动"
                },
                {
                  "id": "B",
                  "text": "起床很难"
                },
                {
                  "id": "C",
                  "text": "爱吃甜的"
                }
              ],
              "answer": "A",
              "explainVi": "Bố ngày nào cũng dậy lúc 6 giờ sáng ra công viên chạy bộ -> thường xuyên vận động (A). Người thấy dậy lúc 6 giờ khó là người nói, không phải bố."
            }
          ]
        }
      ]
    },
    {
      "id": "writing",
      "title": "三、书写 · Viết",
      "parts": [
        {
          "id": "w1",
          "title": "第一部分（61–65题）· Nhìn Pinyin viết chữ Hán",
          "type": "fill_char",
          "instruction": "Dựa vào Pinyin gợi ý phía trên chỗ trống ( ), viết 1 chữ Hán đúng.",
          "items": [
            {
              "num": 61,
              "text": "她买了一辆红色的 ( ) 车，很好看。",
              "targetPinyin": "qì",
              "answer": "汽",
              "explainVi": "汽车 (qìchē): xe ô tô."
            },
            {
              "num": 62,
              "text": "明天我要去 ( ) 书馆借一本书。",
              "targetPinyin": "tú",
              "answer": "图",
              "explainVi": "图书馆 (túshūguǎn): thư viện."
            },
            {
              "num": 63,
              "text": "太热了，咱们把 ( ) 调打开吧。",
              "targetPinyin": "kōng",
              "answer": "空",
              "explainVi": "空调 (kōngtiáo): điều hòa."
            },
            {
              "num": 64,
              "text": "今天午饭我只吃了一包 ( ) 便面。",
              "targetPinyin": "fāng",
              "answer": "方",
              "explainVi": "方便面 (fāngbiànmiàn): mì ăn liền / mì gói."
            },
            {
              "num": 65,
              "text": "这是我送给你的生日 ( ) 物。",
              "targetPinyin": "lǐ",
              "answer": "礼",
              "explainVi": "礼物 (lǐwù): món quà."
            }
          ]
        },
        {
          "id": "w2",
          "title": "第二部分（66–70题）· Nhìn tranh và từ gợi ý đặt câu",
          "type": "make_sentence",
          "instruction": "Quan sát tranh và dùng từ gợi ý để đặt một câu hoàn chỉnh.",
          "items": [
            {
              "num": 66,
              "img": "assets/exams/hsk3_t1_w2_q66.jpg",
              "keyword": "电话",
              "sampleAnswer": "她在给妈妈打电话。",
              "explainVi": "Câu mẫu tham khảo từ đáp án chính thức."
            },
            {
              "num": 67,
              "img": "assets/exams/hsk3_t1_w2_q67.jpg",
              "keyword": "聊天儿",
              "sampleAnswer": "她正在和朋友聊天儿。",
              "explainVi": "Câu mẫu tham khảo từ đáp án chính thức."
            },
            {
              "num": 68,
              "img": "assets/exams/hsk3_t1_w2_q68.jpg",
              "keyword": "环境",
              "sampleAnswer": "这家咖啡店的环境很好。",
              "explainVi": "Câu mẫu tham khảo từ đáp án chính thức."
            },
            {
              "num": 69,
              "img": "assets/exams/hsk3_t1_w2_q69.jpg",
              "keyword": "洗衣机",
              "sampleAnswer": "妈妈每个周末都用洗衣机洗衣服。",
              "explainVi": "Câu mẫu tham khảo từ đáp án chính thức."
            },
            {
              "num": 70,
              "img": "assets/exams/hsk3_t1_w2_q70.jpg",
              "keyword": "放学",
              "sampleAnswer": "放学后，男孩儿自己回家。",
              "explainVi": "Câu mẫu tham khảo từ đáp án chính thức."
            }
          ]
        }
      ]
    }
  ]
};

window.HSK_EXAMS_DATA["hsk3_t2"] = {
  "id": "hsk3_t2",
  "sections": [
    {
      "id": "listening",
      "title": "一、听力 · Nghe hiểu",
      "parts": [
        {
          "id": "l1a",
          "title": "第一部分（1–5题）· Nghe đối chiếu tranh (1–5)",
          "type": "match",
          "instruction": "Nghe mỗi đoạn hội thoại 2 lần và chọn bức tranh A–F phù hợp nhất.",
          "sharedImage": "assets/exams/hsk3_t2_l1a_pool.jpg",
          "poolOptions": [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F"
          ],
          "items": [
            {
              "num": 1,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "这个蛋糕真好吃，是你自己做的吗？"
                },
                {
                  "speaker": "男",
                  "text": "不是，是我妈妈给我做的。"
                }
              ],
              "answer": "A",
              "explainVi": "Hội thoại nhắc đến chiếc bánh kem ngon do mẹ làm -> khớp với tranh A (hai người bên chiếc bánh kem)."
            },
            {
              "num": 2,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "你想喝点儿什么？咖啡还是茶？"
                },
                {
                  "speaker": "男",
                  "text": "我喝茶，谢谢。"
                }
              ],
              "answer": "F",
              "explainVi": "Hội thoại hỏi uống cà phê hay trà -> khớp với tranh F (hai người ngồi uống trà/cà phê)."
            },
            {
              "num": 3,
              "audioLines": [
                {
                  "speaker": "男",
                  "text": "现在几点了？我们要迟到了吧？"
                },
                {
                  "speaker": "女",
                  "text": "别着急，现在七点半，还早呢。"
                }
              ],
              "answer": "E",
              "explainVi": "Người nam hỏi mấy giờ rồi, sợ muộn -> khớp với tranh E (đang xem đồng hồ đeo tay)."
            },
            {
              "num": 4,
              "audioLines": [
                {
                  "speaker": "男",
                  "text": "外面下雨了，你带雨衣了吗？"
                },
                {
                  "speaker": "女",
                  "text": "没带，可是没关系，我可以在教室里看书等一会儿。"
                }
              ],
              "answer": "C",
              "explainVi": "Ngoài trời mưa, người nữ đọc sách trong lớp học đợi tạnh -> khớp với tranh C (trong phòng học nhìn ra trời mưa)."
            },
            {
              "num": 5,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "这本书很有意思。"
                },
                {
                  "speaker": "男",
                  "text": "那你看完可以借给我吗？我也想读一读。"
                }
              ],
              "answer": "B",
              "explainVi": "Người nữ khen sách hay, người nam hỏi mượn đọc sau -> khớp với tranh B (cô gái đang đọc sách)."
            }
          ]
        },
        {
          "id": "l1b",
          "title": "第一部分（6–10题）· Nghe đối chiếu tranh (6–10)",
          "type": "match",
          "instruction": "Nghe mỗi đoạn hội thoại 2 lần và chọn bức tranh A–E phù hợp nhất.",
          "sharedImage": "assets/exams/hsk3_t2_l1b_pool.jpg",
          "poolOptions": [
            "A",
            "B",
            "C",
            "D",
            "E"
          ],
          "items": [
            {
              "num": 6,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "刚才外面风好大，把树都吹倒了。"
                },
                {
                  "speaker": "男",
                  "text": "是啊，最近出门一定要注意安全。"
                }
              ],
              "answer": "A",
              "explainVi": "Ngoài trời gió rất to thổi đổ cả cây -> khớp với tranh A (cây bị gió thổi đổ ngoài cửa sổ)."
            },
            {
              "num": 7,
              "audioLines": [
                {
                  "speaker": "男",
                  "text": "我的铅笔忘带了，你的借我用一下可以吗？"
                },
                {
                  "speaker": "女",
                  "text": "当然可以，给你。"
                }
              ],
              "answer": "E",
              "explainVi": "Mượn bút chì trong lớp học -> khớp với tranh E (đưa bút chì cho bạn ngồi bàn bên)."
            },
            {
              "num": 8,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "我在网上看到大家都说这个新电影特别好看。"
                },
                {
                  "speaker": "男",
                  "text": "我已经买好票了，咱们今天下午就去看。"
                }
              ],
              "answer": "D",
              "explainVi": "Người nam đã mua sẵn vé xem phim -> khớp với tranh D (cầm hai tấm vé xem phim)."
            },
            {
              "num": 9,
              "audioLines": [
                {
                  "speaker": "男",
                  "text": "你喜欢听音乐吗？"
                },
                {
                  "speaker": "女",
                  "text": "非常喜欢，看来咱们两个爱好一样。"
                }
              ],
              "answer": "B",
              "explainVi": "Cả hai cùng thích nghe nhạc -> khớp với tranh B (hai bạn cùng nghe nhạc)."
            },
            {
              "num": 10,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "今天天气很好，我们去公园玩一会儿吧。"
                },
                {
                  "speaker": "男",
                  "text": "好的，我们骑自行车去吧。"
                }
              ],
              "answer": "C",
              "explainVi": "Hai bạn đạp xe đạp đi công viên chơi -> khớp với tranh C (cùng đạp xe đạp)."
            }
          ]
        },
        {
          "id": "l2",
          "title": "第二部分（11–20题）· Nghe hội thoại chọn đáp án",
          "type": "mcq",
          "instruction": "Nghe đoạn hội thoại và câu hỏi, sau đó chọn đáp án đúng A, B hoặc C.",
          "items": [
            {
              "num": 11,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "外卖怎么还没到？我已经等了快一个小时了。"
                },
                {
                  "speaker": "男",
                  "text": "下雨天路难走，应该一会儿就到了。"
                },
                {
                  "speaker": "问",
                  "text": "外卖为什么还没到？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "店家还没做"
                },
                {
                  "id": "B",
                  "text": "女的没有点"
                },
                {
                  "id": "C",
                  "text": "下雨路难走"
                }
              ],
              "answer": "C",
              "explainVi": "Người nam giải thích '下雨天路难走' (trời mưa đường khó đi) -> chọn C."
            },
            {
              "num": 12,
              "audioLines": [
                {
                  "speaker": "男",
                  "text": "你家的小猫真可爱！你是从哪儿买的？"
                },
                {
                  "speaker": "女",
                  "text": "不是买的，是朋友送的。"
                },
                {
                  "speaker": "问",
                  "text": "小猫是从哪儿来的？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "朋友送的"
                },
                {
                  "id": "B",
                  "text": "邻居送的"
                },
                {
                  "id": "C",
                  "text": "店里买的"
                }
              ],
              "answer": "A",
              "explainVi": "Người nữ trả lời '不是买的，是朋友送的' (bạn tặng) -> chọn A."
            },
            {
              "num": 13,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "我的历史课本找不到了，你看到了吗？"
                },
                {
                  "speaker": "男",
                  "text": "我在家里没看到啊。你是不是放在教室里了？"
                },
                {
                  "speaker": "问",
                  "text": "男的觉得女的的历史课本可能在哪儿？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "家里"
                },
                {
                  "id": "B",
                  "text": "教室里"
                },
                {
                  "id": "C",
                  "text": "书包里"
                }
              ],
              "answer": "B",
              "explainVi": "Người nam nói không thấy ở nhà và đoán có phải cô ấy để quên ở lớp học ('教室里') không -> chọn B."
            },
            {
              "num": 14,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "我手机没电了，能借你的打一个电话吗？"
                },
                {
                  "speaker": "男",
                  "text": "当然可以，我这就拿给你。"
                },
                {
                  "speaker": "问",
                  "text": "女的想借什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "手机"
                },
                {
                  "id": "B",
                  "text": "耳机"
                },
                {
                  "id": "C",
                  "text": "筷子"
                }
              ],
              "answer": "A",
              "explainVi": "Điện thoại hết pin nên người nữ muốn mượn điện thoại ('手机') để gọi một cuộc -> chọn A."
            },
            {
              "num": 15,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "我最近在学做蛋糕，你要不要尝尝？"
                },
                {
                  "speaker": "男",
                  "text": "好啊，我最喜欢吃蛋糕了。"
                },
                {
                  "speaker": "问",
                  "text": "女的最近在学什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "做面包"
                },
                {
                  "id": "B",
                  "text": "做蛋糕"
                },
                {
                  "id": "C",
                  "text": "做米饭"
                }
              ],
              "answer": "B",
              "explainVi": "Người nữ nói '我最近在学做蛋糕' (gần đây đang học làm bánh kem) -> chọn B."
            },
            {
              "num": 16,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "你今天怎么这么晚才回来？"
                },
                {
                  "speaker": "男",
                  "text": "我们今天下午开了四个多小时的会。"
                },
                {
                  "speaker": "女",
                  "text": "那晚上咱们还去看电影吗？"
                },
                {
                  "speaker": "男",
                  "text": "明天晚上再去吧，今天太累了！"
                },
                {
                  "speaker": "问",
                  "text": "他们可能什么时候去看电影？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "今天下午"
                },
                {
                  "id": "B",
                  "text": "今天晚上"
                },
                {
                  "id": "C",
                  "text": "明天晚上"
                }
              ],
              "answer": "C",
              "explainVi": "Hôm nay họp mệt nên người nam đề nghị '明天晚上再去吧' (tối mai hẵng đi xem phim) -> chọn C."
            },
            {
              "num": 17,
              "audioLines": [
                {
                  "speaker": "男",
                  "text": "我们明天去南山玩吧，那里环境很好。"
                },
                {
                  "speaker": "女",
                  "text": "好啊，我带点儿吃的在山上吃。"
                },
                {
                  "speaker": "男",
                  "text": "那我买点儿喝的。"
                },
                {
                  "speaker": "女",
                  "text": "太好了，我们明天早上九点见。"
                },
                {
                  "speaker": "问",
                  "text": "他们明天打算干什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "吃饭"
                },
                {
                  "id": "B",
                  "text": "爬山"
                },
                {
                  "id": "C",
                  "text": "买东西"
                }
              ],
              "answer": "B",
              "explainVi": "Hai người hẹn nhau ngày mai đi núi Nam Sơn chơi, mang đồ ăn lên núi ăn -> leo núi ('爬山') -> chọn B."
            },
            {
              "num": 18,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "你周末有什么打算？"
                },
                {
                  "speaker": "男",
                  "text": "我想去图书馆看书。"
                },
                {
                  "speaker": "女",
                  "text": "图书馆在哪儿？我也想去，我能跟你一起去吗？"
                },
                {
                  "speaker": "男",
                  "text": "当然可以。"
                },
                {
                  "speaker": "问",
                  "text": "他们周末要去哪儿？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "书店"
                },
                {
                  "id": "B",
                  "text": "图书馆"
                },
                {
                  "id": "C",
                  "text": "体育馆"
                }
              ],
              "answer": "B",
              "explainVi": "Người nam muốn đi thư viện đọc sách và người nữ xin đi cùng -> cuối tuần họ sẽ đi thư viện ('图书馆') -> chọn B."
            },
            {
              "num": 19,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "你要穿这件衣服出去吗？外面有点儿冷。"
                },
                {
                  "speaker": "男",
                  "text": "我觉得不冷啊！"
                },
                {
                  "speaker": "女",
                  "text": "你还是再带一件上衣吧。"
                },
                {
                  "speaker": "男",
                  "text": "不用，我和朋友要去踢足球，跑起来很快就热了。"
                },
                {
                  "speaker": "问",
                  "text": "关于男的，可以知道什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "觉得冷"
                },
                {
                  "id": "B",
                  "text": "在跑步"
                },
                {
                  "id": "C",
                  "text": "要去踢球"
                }
              ],
              "answer": "C",
              "explainVi": "Người nam nói '我和朋友要去踢足球' (sắp đi đá bóng với bạn) và không thấy lạnh -> chọn C."
            },
            {
              "num": 20,
              "audioLines": [
                {
                  "speaker": "女",
                  "text": "你为什么一直看手表？是有什么事吗？"
                },
                {
                  "speaker": "男",
                  "text": "我要去火车站接我妹妹，她十点到。"
                },
                {
                  "speaker": "女",
                  "text": "那你快去吧，别迟到了。"
                },
                {
                  "speaker": "男",
                  "text": "好，我现在就走。"
                },
                {
                  "speaker": "问",
                  "text": "男的要去火车站做什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "坐火车"
                },
                {
                  "id": "B",
                  "text": "接妹妹"
                },
                {
                  "id": "C",
                  "text": "买车票"
                }
              ],
              "answer": "B",
              "explainVi": "Người nam nói rõ '我要去火车站接我妹妹' (ra ga tàu đón em gái) -> chọn B."
            }
          ]
        },
        {
          "id": "l3",
          "title": "第三部分（21–30题）· Nghe đoạn văn ngắn chọn đáp án",
          "type": "mcq",
          "instruction": "Nghe đoạn văn ngắn và câu hỏi, sau đó chọn đáp án đúng A, B hoặc C.",
          "items": [
            {
              "num": 21,
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "明天我想要去超市买苹果和牛奶，家里的苹果吃完了，牛奶也快没了。"
                },
                {
                  "speaker": "问",
                  "text": "说话人明天去超市买什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "苹果和牛奶"
                },
                {
                  "id": "B",
                  "text": "香蕉和面包"
                },
                {
                  "id": "C",
                  "text": "鸡蛋和米饭"
                }
              ],
              "answer": "A",
              "explainVi": "Người nói muốn đi siêu thị mua táo và sữa ('苹果和牛奶') -> chọn A."
            },
            {
              "num": 22,
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "我每天早上六点半起床，然后刷牙、洗脸，七点吃早饭，八点去上班。"
                },
                {
                  "speaker": "问",
                  "text": "说话人每天早上几点起床？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "六点"
                },
                {
                  "id": "B",
                  "text": "六点半"
                },
                {
                  "id": "C",
                  "text": "七点半"
                }
              ],
              "answer": "B",
              "explainVi": "Câu đầu nói rõ '每天早上六点半起床' (dậy lúc 6 giờ rưỡi sáng) -> chọn B."
            },
            {
              "num": 23,
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "这本书是我前天从图书馆借的，昨天看了一天，里面的故事很有意思，我想今天看完。"
                },
                {
                  "speaker": "问",
                  "text": "说话人是什么时候借的这本书？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "前天"
                },
                {
                  "id": "B",
                  "text": "昨天"
                },
                {
                  "id": "C",
                  "text": "今天"
                }
              ],
              "answer": "A",
              "explainVi": "Sách được mượn từ hôm kia ('前天'), hôm qua đọc cả ngày và hôm nay muốn đọc xong -> chọn A."
            },
            {
              "num": 24,
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "今天下午没有课，我要去医院看我奶奶，她上周生病住院了，现在还没好。"
                },
                {
                  "speaker": "问",
                  "text": "说话人今天下午要去哪里？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "学校"
                },
                {
                  "id": "B",
                  "text": "医院"
                },
                {
                  "id": "C",
                  "text": "奶奶家"
                }
              ],
              "answer": "B",
              "explainVi": "Bà bị ốm nằm viện nên chiều nay người nói đi bệnh viện ('医院') thăm bà -> chọn B."
            },
            {
              "num": 25,
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "我的手机昨天不小心摔坏了，今天我要和妈妈一起去商店买一部新的。"
                },
                {
                  "speaker": "问",
                  "text": "说话人今天要去商店买什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "电脑"
                },
                {
                  "id": "B",
                  "text": "手机"
                },
                {
                  "id": "C",
                  "text": "手表"
                }
              ],
              "answer": "B",
              "explainVi": "Điện thoại bị rơi hỏng hôm qua nên hôm nay đi mua một chiếc điện thoại ('手机') mới -> chọn B."
            },
            {
              "num": 26,
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "我喜欢去学校旁边的公园跑步，那里面有很多漂亮的花和树，还有很多人在那儿唱歌、跳舞。"
                },
                {
                  "speaker": "问",
                  "text": "说话人喜欢去公园做什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "唱歌"
                },
                {
                  "id": "B",
                  "text": "跑步"
                },
                {
                  "id": "C",
                  "text": "跳舞"
                }
              ],
              "answer": "B",
              "explainVi": "Người nói thích ra công viên chạy bộ ('跑步'); hát và nhảy múa là những người khác ở đó -> chọn B."
            },
            {
              "num": 27,
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "这家饭店又便宜又好吃，今天中午我点了一份饺子，弟弟点了一份面条儿。"
                },
                {
                  "speaker": "问",
                  "text": "说话人今天中午吃了什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "米饭"
                },
                {
                  "id": "B",
                  "text": "面条儿"
                },
                {
                  "id": "C",
                  "text": "饺子"
                }
              ],
              "answer": "C",
              "explainVi": "Người nói gọi một phần sủi cảo ('饺子'), còn em trai mới gọi mì -> chọn C."
            },
            {
              "num": 28,
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "我爷爷不喜欢看手机和电视，他每天下午都会看报纸，看报纸能让他知道很多新鲜事。"
                },
                {
                  "speaker": "问",
                  "text": "说话人的爷爷每天下午做什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "看电视"
                },
                {
                  "id": "B",
                  "text": "看报纸"
                },
                {
                  "id": "C",
                  "text": "看手机"
                }
              ],
              "answer": "B",
              "explainVi": "Ông nội không thích xem điện thoại hay tivi mà chiều nào cũng đọc báo ('看报纸') -> chọn B."
            },
            {
              "num": 29,
              "passageGroupId": "29-30",
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "这个星期六我要参加一个中国朋友的生日晚会。她叫小美，是我在大学认识的好朋友。我打算送她花和一个生日蛋糕。蛋糕上面写上“生日快乐”。花，我选红色的。小美收到后一定会很高兴，因为她最喜欢花了。希望她能过一个开心的生日。"
                },
                {
                  "speaker": "问",
                  "text": "说话人打算送朋友什么礼物？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "手表"
                },
                {
                  "id": "B",
                  "text": "蛋糕"
                },
                {
                  "id": "C",
                  "text": "奶茶"
                }
              ],
              "answer": "B",
              "explainVi": "Người nói dự định tặng hoa và một chiếc bánh sinh nhật ('蛋糕') -> chọn B."
            },
            {
              "num": 30,
              "passageGroupId": "29-30",
              "audioLines": [
                {
                  "speaker": "旁白",
                  "text": "这个星期六我要参加一个中国朋友的生日晚会。她叫小美，是我在大学认识的好朋友。我打算送她花和一个生日蛋糕。蛋糕上面写上“生日快乐”。花，我选红色的。小美收到后一定会很高兴，因为她最喜欢花了。希望她能过一个开心的生日。"
                },
                {
                  "speaker": "问",
                  "text": "说话人觉得朋友最喜欢什么？"
                }
              ],
              "options": [
                {
                  "id": "A",
                  "text": "花"
                },
                {
                  "id": "B",
                  "text": "红色"
                },
                {
                  "id": "C",
                  "text": "唱歌"
                }
              ],
              "answer": "A",
              "explainVi": "Đoạn văn nói '因为她最喜欢花了' (vì cô ấy thích hoa nhất). Màu đỏ là màu hoa do người nói chọn -> chọn A."
            }
          ]
        }
      ]
    },
    {
      "id": "reading",
      "title": "二、阅读 · Đọc hiểu",
      "parts": [
        {
          "id": "r1a",
          "title": "第一部分（31–35题）· Ghép câu đối thoại (31–35)",
          "type": "match",
          "instruction": "Chọn câu đáp A–F phù hợp nhất với mỗi câu 31–35.",
          "wordBank": [
            {
              "id": "A",
              "text": "我今天早上吃了很多，现在还不饿呢。"
            },
            {
              "id": "B",
              "text": "前面路口左转就到了。"
            },
            {
              "id": "C",
              "text": "小明今天怎么没来上学？"
            },
            {
              "id": "D",
              "text": "经理怎么不在办公室？"
            },
            {
              "id": "E",
              "text": "放在桌子上吧，那里有空地方。"
            },
            {
              "id": "F",
              "text": "我觉得红色的好看，你穿很合适。"
            }
          ],
          "poolOptions": [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F"
          ],
          "items": [
            {
              "num": 31,
              "text": "这件衣服选红色还是白色？",
              "answer": "F",
              "explainVi": "Hỏi chọn màu đỏ hay trắng -> F trả lời thấy màu đỏ đẹp và mặc rất hợp."
            },
            {
              "num": 32,
              "text": "我的笔记本电脑放哪里好呢？",
              "answer": "E",
              "explainVi": "Hỏi để laptop ở đâu -> E bảo đặt lên bàn vì ở đó có chỗ trống."
            },
            {
              "num": 33,
              "text": "请问，去超市怎么走？",
              "answer": "B",
              "explainVi": "Hỏi đường đi siêu thị -> B chỉ đường rẽ trái ở ngã tư phía trước là tới."
            },
            {
              "num": 34,
              "text": "他今天感冒了，所以在家休息。",
              "answer": "C",
              "explainVi": "Giải thích hôm nay cậu ấy bị cảm nên nghỉ ở nhà -> khớp với câu hỏi C: 'Sao hôm nay Tiểu Minh không đi học?'."
            },
            {
              "num": 35,
              "text": "中午你想吃点儿什么？",
              "answer": "A",
              "explainVi": "Hỏi trưa muốn ăn gì -> A trả lời sáng ăn nhiều rồi nên giờ chưa đói."
            }
          ]
        },
        {
          "id": "r1b",
          "title": "第一部分（36–40题）· Ghép câu đối thoại (36–40)",
          "type": "match",
          "instruction": "Chọn câu đáp A–E phù hợp nhất với mỗi câu 36–40.",
          "wordBank": [
            {
              "id": "A",
              "text": "昨天晚上我一点多才睡。"
            },
            {
              "id": "B",
              "text": "明天又到周末了，咱们在家休息吗？"
            },
            {
              "id": "C",
              "text": "我昨天从网上买的，花了 300 块。"
            },
            {
              "id": "D",
              "text": "先喝杯热水吧，可能会好一点儿。"
            },
            {
              "id": "E",
              "text": "你最喜欢吃什么菜？"
            }
          ],
          "poolOptions": [
            "A",
            "B",
            "C",
            "D",
            "E"
          ],
          "items": [
            {
              "num": 36,
              "text": "我现在有点儿不舒服，怎么办呢？",
              "answer": "D",
              "explainVi": "Nói hơi khó chịu trong người nên làm sao -> D khuyên uống cốc nước ấm trước có thể sẽ đỡ hơn."
            },
            {
              "num": 37,
              "text": "我喜欢吃鱼，我妈妈做的鱼特别好吃。",
              "answer": "E",
              "explainVi": "Kể mình thích ăn cá mẹ nấu -> khớp với câu hỏi E: 'Bạn thích ăn món gì nhất?'."
            },
            {
              "num": 38,
              "text": "这件衬衫是什么时候买的？多少钱？",
              "answer": "C",
              "explainVi": "Hỏi mua áo sơ mi khi nào và giá bao nhiêu -> C trả lời mua trên mạng hôm qua, hết 300 tệ."
            },
            {
              "num": 39,
              "text": "明天天气不错，咱们去海边玩吧。",
              "answer": "B",
              "explainVi": "Rủ ngày mai đi biển chơi -> khớp với câu B bàn kế hoạch ngày mai cuối tuần."
            },
            {
              "num": 40,
              "text": "你看起来很累，昨晚没有休息好吗？",
              "answer": "A",
              "explainVi": "Hỏi trông mệt thế, tối qua ngủ không ngon à -> A trả lời tối qua hơn 1 giờ mới đi ngủ."
            }
          ]
        },
        {
          "id": "r2a",
          "title": "第二部分（41–45题）· Điền từ vào câu (41–45)",
          "type": "match",
          "instruction": "Chọn từ A–F thích hợp điền vào chỗ trống ( ).",
          "wordBank": [
            {
              "id": "A",
              "text": "地方"
            },
            {
              "id": "B",
              "text": "参加"
            },
            {
              "id": "C",
              "text": "放学"
            },
            {
              "id": "D",
              "text": "地图"
            },
            {
              "id": "E",
              "text": "聪明"
            },
            {
              "id": "F",
              "text": "关心"
            }
          ],
          "poolOptions": [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F"
          ],
          "items": [
            {
              "num": 41,
              "text": "今天晚上是我同学的生日晚会，我和姐姐都要 ( )。",
              "answer": "B",
              "explainVi": "Tham gia tiệc sinh nhật bạn học -> '参加' (tham gia)."
            },
            {
              "num": 42,
              "text": "妈妈很 ( ) 我，经常问我在中国过得怎么样。",
              "answer": "F",
              "explainVi": "Mẹ rất quan tâm hỏi han cuộc sống ở Trung Quốc -> '关心' (quan tâm)."
            },
            {
              "num": 43,
              "text": "我们下午四点 ( )，回到家后我一般先写作业。",
              "answer": "C",
              "explainVi": "4 giờ chiều tan học rồi về nhà làm bài tập -> '放学' (tan học)."
            },
            {
              "num": 44,
              "text": "这是一张中国 ( )，你看，我们家住在这儿。",
              "answer": "D",
              "explainVi": "Một tấm bản đồ Trung Quốc -> '地图' (bản đồ)."
            },
            {
              "num": 45,
              "text": "这个孩子又 ( ) 又努力，所以学习成绩非常好。",
              "answer": "E",
              "explainVi": "Đứa trẻ vừa thông minh vừa chăm chỉ -> '聪明' (thông minh)."
            }
          ]
        },
        {
          "id": "r2b",
          "title": "第二部分（46–50题）· Điền từ vào hội thoại (46–50)",
          "type": "match",
          "instruction": "Chọn từ A–F thích hợp điền vào chỗ trống trong đoạn hội thoại.",
          "wordBank": [
            {
              "id": "A",
              "text": "方便"
            },
            {
              "id": "B",
              "text": "一块儿"
            },
            {
              "id": "C",
              "text": "复习"
            },
            {
              "id": "D",
              "text": "担心"
            },
            {
              "id": "E",
              "text": "感冒"
            },
            {
              "id": "F",
              "text": "舒服"
            }
          ],
          "poolOptions": [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F"
          ],
          "items": [
            {
              "num": 46,
              "text": "A: 快要考试了，我还没有 ( ) 完。\nB: 别着急，下个星期五才考，还有时间。",
              "answer": "C",
              "explainVi": "Sắp thi rồi mà vẫn chưa ôn tập xong -> '复习' (ôn tập)."
            },
            {
              "num": 47,
              "text": "A: 这个超市离我家很近，买东西很 ( )。\nB: 真好。我家去超市就远多了，要走很长的路。",
              "answer": "A",
              "explainVi": "Siêu thị rất gần nhà nên mua đồ rất tiện -> '方便' (tiện lợi)."
            },
            {
              "num": 48,
              "text": "A: 这双运动鞋穿起来很 ( )，我很喜欢。\nB: 颜色也很好看，你就买这双吧。",
              "answer": "F",
              "explainVi": "Đôi giày thể thao đi vào rất thoải mái/êm chân -> '舒服' (thoải mái)."
            },
            {
              "num": 49,
              "text": "A: 老师，对不起，我今天 ( ) 了，所以不能去上课了。\nB: 没关系，你先休息，等病好了再来。",
              "answer": "E",
              "explainVi": "Hôm nay bị cảm nên không thể đi học -> '感冒' (bị cảm)."
            },
            {
              "num": 50,
              "text": "A: 妈妈，你别 ( )，我到了地方就给你打电话。\nB: 好的，路上小心，注意安全。",
              "answer": "D",
              "explainVi": "Mẹ đừng lo lắng, đến nơi con sẽ gọi điện ngay -> '担心' (lo lắng)."
            }
          ]
        },
        {
          "id": "r3a",
          "title": "第三部分（51–56题）· Đọc hiểu đoạn ngắn (51–56)",
          "type": "mcq",
          "instruction": "Đọc đoạn văn ngắn và chọn đáp án đúng A, B hoặc C.",
          "items": [
            {
              "num": 51,
              "passage": "周末我常常先去超市买东西，然后回家做午饭，下午如果有时间就去体育馆游泳。",
              "question": "说话人下午常常：",
              "options": [
                {
                  "id": "A",
                  "text": "去超市"
                },
                {
                  "id": "B",
                  "text": "吃东西"
                },
                {
                  "id": "C",
                  "text": "去游泳"
                }
              ],
              "answer": "C",
              "explainVi": "Người nói kể buổi chiều nếu có thời gian sẽ đi nhà thi đấu bơi lội ('去体育馆游泳'). Đi siêu thị và nấu cơm là buổi sáng/trước bữa trưa -> chọn C."
            },
            {
              "num": 52,
              "passage": "今天早上出门的时候没下雨，所以我没带伞，没想到中午突然下起了雨。",
              "question": "说话人早上为什么没带伞？",
              "options": [
                {
                  "id": "A",
                  "text": "没有伞"
                },
                {
                  "id": "B",
                  "text": "伞坏了"
                },
                {
                  "id": "C",
                  "text": "没下雨"
                }
              ],
              "answer": "C",
              "explainVi": "Sáng nay lúc ra khỏi nhà trời không mưa ('没下雨') nên không mang ô -> chọn C."
            },
            {
              "num": 53,
              "passage": "爸爸今天中午做了牛肉、鱼和青菜，我不喜欢吃牛肉，所以只吃了鱼和青菜。",
              "question": "说话人中午没有吃：",
              "options": [
                {
                  "id": "A",
                  "text": "鱼"
                },
                {
                  "id": "B",
                  "text": "牛肉"
                },
                {
                  "id": "C",
                  "text": "青菜"
                }
              ],
              "answer": "B",
              "explainVi": "Người nói không thích ăn thịt bò nên chỉ ăn cá và rau xanh -> trưa nay không ăn thịt bò ('牛肉') -> chọn B."
            },
            {
              "num": 54,
              "passage": "考完试后我想去旅游，北京和上海我都想去，可是最近上海的机票比较贵，所以我决定去北京。",
              "question": "说话人最后决定：",
              "options": [
                {
                  "id": "A",
                  "text": "去北京"
                },
                {
                  "id": "B",
                  "text": "去上海"
                },
                {
                  "id": "C",
                  "text": "在家"
                }
              ],
              "answer": "A",
              "explainVi": "Vì vé máy bay đi Thượng Hải đắt nên cuối cùng quyết định đi Bắc Kinh ('去北京') -> chọn A."
            },
            {
              "num": 55,
              "passage": "我有两个书包，一个是蓝色的旧书包，一个是新买的红色书包，我现在常用这个新买的。",
              "question": "说话人现在常用哪个书包？",
              "options": [
                {
                  "id": "A",
                  "text": "旧的"
                },
                {
                  "id": "B",
                  "text": "蓝的"
                },
                {
                  "id": "C",
                  "text": "红的"
                }
              ],
              "answer": "C",
              "explainVi": "Người nói hiện thường dùng chiếc cặp mới mua, mà chiếc mới mua có màu đỏ ('红的') -> chọn C."
            },
            {
              "num": 56,
              "passage": "水果店里有苹果、香蕉和西瓜，我不想吃香蕉，就买了两斤苹果和半个西瓜。",
              "question": "说话人买了：",
              "options": [
                {
                  "id": "A",
                  "text": "香蕉和苹果"
                },
                {
                  "id": "B",
                  "text": "香蕉和西瓜"
                },
                {
                  "id": "C",
                  "text": "苹果和西瓜"
                }
              ],
              "answer": "C",
              "explainVi": "Không muốn ăn chuối nên chỉ mua táo và dưa hấu ('苹果和西瓜') -> chọn C."
            }
          ]
        },
        {
          "id": "r3b",
          "title": "第三部分（57–60题）· Đọc hiểu đoạn văn 2 câu hỏi (57–60)",
          "type": "mcq",
          "instruction": "Đọc mỗi đoạn văn và trả lời 2 câu hỏi bên dưới.",
          "items": [
            {
              "num": 57,
              "passageGroupId": "57-58",
              "passage": "很多人都觉得，养小动物会让生活变得更有意思。比如养一只小猫或者小狗，虽然照顾它们需要花很多时间，也要给它们洗澡、买吃的，但是和小动物一起玩的时候，可以让人忘记不开心的事情。",
              "question": "说话人觉得养小动物会让生活变得怎么样？",
              "options": [
                {
                  "id": "A",
                  "text": "有意思"
                },
                {
                  "id": "B",
                  "text": "不开心"
                },
                {
                  "id": "C",
                  "text": "没时间玩"
                }
              ],
              "answer": "A",
              "explainVi": "Đoạn văn nói nuôi thú cưng giúp cuộc sống trở nên thú vị hơn ('有意思') và quên đi chuyện buồn -> chọn A."
            },
            {
              "num": 58,
              "passageGroupId": "57-58",
              "passage": "很多人都觉得，养小动物会让生活变得更有意思。比如养一只小猫或者小狗，虽然照顾它们需要花很多时间，也要给它们洗澡、买吃的，但是和小动物一起玩的时候，可以让人忘记不开心的事情。",
              "question": "说话人认为要给养的小动物做什么事情？",
              "options": [
                {
                  "id": "A",
                  "text": "做饭"
                },
                {
                  "id": "B",
                  "text": "洗澡"
                },
                {
                  "id": "C",
                  "text": "买衣服"
                }
              ],
              "answer": "B",
              "explainVi": "Đoạn văn nêu rõ '要给它们洗澡、买吃的' (phải tắm và mua đồ ăn cho chúng) -> chọn B."
            },
            {
              "num": 59,
              "passageGroupId": "59-60",
              "passage": "以前的手机只能打电话，现在的手机就像手里的电脑一样，不但可以上网看新闻，还可以看电影、听音乐、看书。所以，人们看手机的时间越来越长。在饭店里、地铁里、公交车上，很多人都在看手机。手机虽然让我们的生活变得更方便了，但是也让我们少了很多和家人、朋友说话的机会。",
              "question": "说话人认为以前的手机可以：",
              "options": [
                {
                  "id": "A",
                  "text": "打电话"
                },
                {
                  "id": "B",
                  "text": "看新闻"
                },
                {
                  "id": "C",
                  "text": "买东西"
                }
              ],
              "answer": "A",
              "explainVi": "Câu đầu nói rõ: '以前的手机只能打电话' (điện thoại trước đây chỉ có thể gọi điện) -> chọn A."
            },
            {
              "num": 60,
              "passageGroupId": "59-60",
              "passage": "以前的手机只能打电话，现在的手机就像手里的电脑一样，不但可以上网看新闻，还可以看电影、听音乐、看书。所以，人们看手机的时间越来越长。在饭店里、地铁里、公交车上，很多人都在看手机。手机虽然让我们的生活变得更方便了，但是也让我们少了很多和家人、朋友说话的机会。",
              "question": "说话人认为现在的手机：",
              "options": [
                {
                  "id": "A",
                  "text": "让生活变得不方便了"
                },
                {
                  "id": "B",
                  "text": "让人不会用电脑了"
                },
                {
                  "id": "C",
                  "text": "让我们和家人说话变少了"
                }
              ],
              "answer": "C",
              "explainVi": "Câu cuối nêu rõ tuy điện thoại làm cuộc sống tiện hơn nhưng khiến chúng ta ít cơ hội trò chuyện với gia đình và bạn bè hơn ('让我们和家人说话变少了') -> chọn C."
            }
          ]
        }
      ]
    },
    {
      "id": "writing",
      "title": "三、书写 · Viết",
      "parts": [
        {
          "id": "w1",
          "title": "第一部分（61–65题）· Nhìn Pinyin viết chữ Hán",
          "type": "fill_char",
          "instruction": "Dựa vào Pinyin gợi ý phía trên chỗ trống ( ), viết 1 chữ Hán đúng.",
          "items": [
            {
              "num": 61,
              "text": "他这次考得很 ( )，心里有点儿难过。",
              "targetPinyin": "chà",
              "answer": "差",
              "explainVi": "差 (chà): kém, tệ (考得很差: thi rất kém)."
            },
            {
              "num": 62,
              "text": "这瓶饮料三元五 ( )。",
              "targetPinyin": "jiǎo",
              "answer": "角",
              "explainVi": "角 (jiǎo): hào / giác (đơn vị tiền tệ, 3 tệ 5 hào)."
            },
            {
              "num": 63,
              "text": "我一天没吃饭，现在 ( ) 别饿。",
              "targetPinyin": "tè",
              "answer": "特",
              "explainVi": "特别 (tèbié): đặc biệt, vô cùng."
            },
            {
              "num": 64,
              "text": "暑假我们全家要去 ( ) 边玩。",
              "targetPinyin": "hǎi",
              "answer": "海",
              "explainVi": "海边 (hǎibiān): bờ biển."
            },
            {
              "num": 65,
              "text": "我发现这条街上饭店 ( ) 多的。",
              "targetPinyin": "tǐng",
              "answer": "挺",
              "explainVi": "挺...的 (tǐng...de): khá là... (挺多的: khá nhiều)."
            }
          ]
        },
        {
          "id": "w2",
          "title": "第二部分（66–70题）· Nhìn tranh và từ gợi ý đặt câu",
          "type": "make_sentence",
          "instruction": "Quan sát tranh và dùng từ gợi ý để đặt một câu hoàn chỉnh.",
          "items": [
            {
              "num": 66,
              "img": "assets/exams/hsk3_t2_w2_q66.jpg",
              "keyword": "检票",
              "sampleAnswer": "上火车前要先检票。",
              "explainVi": "Câu mẫu tham khảo từ đáp án chính thức."
            },
            {
              "num": 67,
              "img": "assets/exams/hsk3_t2_w2_q67.jpg",
              "keyword": "假期",
              "sampleAnswer": "假期里，我和朋友去旅游。",
              "explainVi": "Câu mẫu tham khảo từ đáp án chính thức."
            },
            {
              "num": 68,
              "img": "assets/exams/hsk3_t2_w2_q68.jpg",
              "keyword": "信用卡",
              "sampleAnswer": "我办了一张信用卡。",
              "explainVi": "Câu mẫu tham khảo từ đáp án chính thức."
            },
            {
              "num": 69,
              "img": "assets/exams/hsk3_t2_w2_q69.jpg",
              "keyword": "经过",
              "sampleAnswer": "我放学回家的时候会经过一家水果店。",
              "explainVi": "Câu mẫu tham khảo từ đáp án chính thức."
            },
            {
              "num": 70,
              "img": "assets/exams/hsk3_t2_w2_q70.jpg",
              "keyword": "干净",
              "sampleAnswer": "房间里打扫得很干净。",
              "explainVi": "Câu mẫu tham khảo từ đáp án chính thức."
            }
          ]
        }
      ]
    }
  ]
};
