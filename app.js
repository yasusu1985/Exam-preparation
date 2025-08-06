// Beauty Salon Exam App - Complete Version with 160 Questions

class ExamApp {
    constructor() {
        this.questions = [
            // 関係法規・制度 (20 questions)
            {
                "id": 1,
                "subject": "kanseigaku",
                "question": "美容師免許の有効期間は何年ですか？",
                "choices": ["3年", "5年", "10年", "無期限"],
                "correct": 3,
                "explanation": "美容師免許は一度取得すると、更新の必要がなく無期限で有効です。"
            },
            // 美容技術理論 (20 questions)
            {
                "id": 41,
                "subject": "biyougaku",
                "question": "パーマネントウェーブの原理で正しいものは？",
                "choices": ["毛髪の表面を溶かす", "毛髪のシスチン結合を切断・再結合", "毛髪の色素を分解", "毛髪の水分を除去"],
                "correct": 1,
                "explanation": "パーマネントウェーブは毛髪内部のシスチン結合を化学的に切断し、再結合させることで形成されます。"
            },
            {
                "id": 42,
                "subject": "biyougaku",
                "question": "カットの基本的な切り方で「ブラント」とは？",
                "choices": ["斜めに切る", "水平に真っ直ぐ切る", "ジグザグに切る", "段差をつけて切る"],
                "correct": 1,
                "explanation": "ブラントカットは毛髪を水平に真っ直ぐ切る基本的な切り方です。"
            },
            {
                "id": 43,
                "subject": "biyougaku",
                "question": "ヘアカラーで髪を明るくする働きをするのは？",
                "choices": ["アンモニア", "過酸化水素", "界面活性剤", "保湿剤"],
                "correct": 1,
                "explanation": "過酸化水素は毛髪のメラニン色素を分解し、髪を明るくする働きをします。"
            },
            {
                "id": 44,
                "subject": "biyougaku",
                "question": "シャンプーの主な洗浄成分は？",
                "choices": ["保湿剤", "界面活性剤", "pH調整剤", "防腐剤"],
                "correct": 1,
                "explanation": "シャンプーの洗浄効果は界面活性剤によるものです。"
            },
            {
                "id": 45,
                "subject": "biyougaku",
                "question": "毛髪の主成分であるタンパク質は？",
                "choices": ["コラーゲン", "エラスチン", "ケラチン", "フィブロイン"],
                "correct": 2,
                "explanation": "毛髪の約85%はケラチンというタンパク質で構成されています。"
            },
            {
                "id": 46,
                "subject": "biyougaku",
                "question": "パーマ液の1剤に含まれる主成分は？",
                "choices": ["過酸化水素", "チオグリコール酸", "アンモニア", "クエン酸"],
                "correct": 1,
                "explanation": "パーマ液の1剤にはチオグリコール酸などの還元剤が含まれ、シスチン結合を切断します。"
            },
            {
                "id": 47,
                "subject": "biyougaku",
                "question": "毛髪の断面構造で最も外側にあるのは？",
                "choices": ["毛髄質", "毛皮質", "毛表皮", "毛乳頭"],
                "correct": 2,
                "explanation": "毛髪の最外層は毛表皮（キューティクル）です。"
            },
            {
                "id": 48,
                "subject": "biyougaku",
                "question": "ヘアカラーのトーンとは何を表すか？",
                "choices": ["色相", "明度", "彩度", "透明度"],
                "correct": 1,
                "explanation": "トーンは髪の明るさ（明度）を表す指標です。"
            },
            {
                "id": 49,
                "subject": "biyougaku",
                "question": "ドライカットの利点は？",
                "choices": ["時間短縮", "仕上がりの確認が容易", "毛髪への負担軽減", "カット技術が簡単"],
                "correct": 1,
                "explanation": "ドライカットは毛髪が乾いた状態で行うため、仕上がりの長さやバランスが確認しやすいです。"
            },
            {
                "id": 50,
                "subject": "biyougaku",
                "question": "コールドパーマとホットパーマの違いは？",
                "choices": ["薬剤の種類", "温度", "時間", "すべて"],
                "correct": 3,
                "explanation": "コールドパーマとホットパーマは薬剤の種類、温度、時間すべてが異なります。"
            },
            {
                "id": 51,
                "subject": "biyougaku",
                "question": "ブリーチング時に毛髪が受けるダメージの主な原因は？",
                "choices": ["水分の過剰摂取", "タンパク質の分解", "油分の除去", "電気の帯電"],
                "correct": 1,
                "explanation": "ブリーチングによって毛髪のタンパク質が分解され、ダメージを受けます。"
            },
            {
                "id": 52,
                "subject": "biyougaku",
                "question": "毛髪の等電点のpHは？",
                "choices": ["3.5-4.5", "5.5-6.5", "7.0", "8.0-9.0"],
                "correct": 0,
                "explanation": "毛髪の等電点はpH3.5-4.5の弱酸性領域にあります。"
            },
            {
                "id": 53,
                "subject": "biyougaku",
                "question": "トリートメントの主な目的は？",
                "choices": ["洗浄", "毛髪の補修・保護", "色素の定着", "パーマの持続"],
                "correct": 1,
                "explanation": "トリートメントは毛髪の補修と保護を主な目的としています。"
            },
            {
                "id": 54,
                "subject": "biyougaku",
                "question": "カラーリング後のアフターケアで重要なことは？",
                "choices": ["すぐにパーマをかける", "紫外線から保護", "強くブラッシング", "熱いお湯で洗う"],
                "correct": 1,
                "explanation": "カラーリング後は紫外線から毛髪を保護することが色持ちを良くするために重要です。"
            },
            {
                "id": 55,
                "subject": "biyougaku",
                "question": "スタイリング剤のワックスの主な成分は？",
                "choices": ["水", "アルコール", "油脂・ワックス", "界面活性剤"],
                "correct": 2,
                "explanation": "ワックスの主成分は油脂やワックス成分で、髪に束感やツヤを与えます。"
            },
            {
                "id": 56,
                "subject": "biyougaku",
                "question": "毛髪の成長期間は？",
                "choices": ["2-4年", "4-6年", "6-8年", "8-10年"],
                "correct": 1,
                "explanation": "毛髪の成長期間は通常4-6年程度です。"
            },
            {
                "id": 57,
                "subject": "biyougaku",
                "question": "パーマ液の2剤の主な働きは？",
                "choices": ["毛髪の膨潤", "シスチン結合の切断", "シスチン結合の再結合", "毛髪の収束"],
                "correct": 2,
                "explanation": "パーマ液の2剤（酸化剤）は切断されたシスチン結合を再結合させます。"
            },
            {
                "id": 58,
                "subject": "biyougaku",
                "question": "ヘアアイロンを使用する際の注意点は？",
                "choices": ["温度設定を確認", "毛髪の水分を除去", "熱から毛髪を保護", "すべて"],
                "correct": 3,
                "explanation": "ヘアアイロン使用時は温度設定、水分除去、熱保護すべてが重要です。"
            },
            {
                "id": 59,
                "subject": "biyougaku",
                "question": "縮毛矯正の原理は？",
                "choices": ["毛髪を溶かす", "毛髪の結合を組み替える", "毛髪に重りをつける", "毛髪を伸ばす"],
                "correct": 1,
                "explanation": "縮毛矯正は毛髪内部の結合を切断し、ストレートな形で再結合させます。"
            },
            {
                "id": 60,
                "subject": "biyougaku",
                "question": "毛髪の日焼けを防ぐために有効な成分は？",
                "choices": ["紫外線吸収剤", "界面活性剤", "保湿剤", "香料"],
                "correct": 0,
                "explanation": "紫外線吸収剤は紫外線をブロックし、毛髪の日焼けを防ぎます。"
            },

            // 人体の構造・機能 (20 questions) 
            {
                "id": 61,
                "subject": "ningen-kagaku",
                "question": "毛包を形成する細胞で正しいものは？",
                "choices": ["表皮細胞のみ", "真皮細胞のみ", "表皮細胞と真皮細胞", "皮下組織の細胞"],
                "correct": 2,
                "explanation": "毛包は表皮細胞と真皮細胞の両方によって形成されます。"
            },
            {
                "id": 62,
                "subject": "ningen-kagaku", 
                "question": "皮膚の最外層を構成する組織は？",
                "choices": ["真皮", "皮下組織", "表皮", "筋肉組織"],
                "correct": 2,
                "explanation": "皮膚の最外層は表皮で、外部から身体を保護する役割があります。"
            },
            {
                "id": 63,
                "subject": "ningen-kagaku",
                "question": "皮脂腺が最も多く分布している部位は？",
                "choices": ["手のひら", "足の裏", "頭部・顔面", "膝"],
                "correct": 2,
                "explanation": "皮脂腺は頭部や顔面に最も多く分布しています。"
            },
            {
                "id": 64,
                "subject": "ningen-kagaku",
                "question": "毛髪の成長に最も関与するホルモンは？",
                "choices": ["インスリン", "甲状腺ホルモン", "成長ホルモン", "すべて"],
                "correct": 3,
                "explanation": "毛髪の成長には成長ホルモン、甲状腺ホルモンなど複数のホルモンが関与しています。"
            },
            {
                "id": 65,
                "subject": "ningen-kagaku",
                "question": "皮膚のバリア機能を担う主な構造は？",
                "choices": ["角質層", "基底層", "真皮", "皮下組織"],
                "correct": 0,
                "explanation": "角質層は皮膚の最外層で、外部からの刺激や水分の蒸発を防ぐバリア機能を担います。"
            },
            {
                "id": 66,
                "subject": "ningen-kagaku",
                "question": "毛周期で毛髪が最も成長する時期は？",
                "choices": ["成長期", "退行期", "休止期", "発生期"],
                "correct": 0,
                "explanation": "成長期（アナゲン期）は毛髪が最も活発に成長する時期です。"
            },
            {
                "id": 67,
                "subject": "ningen-kagaku",
                "question": "皮膚の色を決める主な色素は？",
                "choices": ["ヘモグロビン", "メラニン", "カロテン", "すべて"],
                "correct": 3,
                "explanation": "皮膚の色はメラニン、ヘモグロビン、カロテンなど複数の色素によって決まります。"
            },
            {
                "id": 68,
                "subject": "ningen-kagaku",
                "question": "汗腺の種類で正しい組み合わせは？",
                "choices": ["エクリン腺とアポクリン腺", "皮脂腺と毛包", "毛乳頭と毛母細胞", "基底細胞と有棘細胞"],
                "correct": 0,
                "explanation": "汗腺にはエクリン腺とアポクリン腺の2種類があります。"
            },
            {
                "id": 69,
                "subject": "ningen-kagaku",
                "question": "皮膚の再生周期（ターンオーバー）は約何日？",
                "choices": ["14日", "21日", "28日", "35日"],
                "correct": 2,
                "explanation": "健康な成人の皮膚のターンオーバーは約28日です。"
            },
            {
                "id": 70,
                "subject": "ningen-kagaku",
                "question": "毛髪の色を決める色素細胞が存在する部位は？",
                "choices": ["毛幹", "毛根", "毛母細胞周辺", "毛包漏斗部"],
                "correct": 2,
                "explanation": "毛髪の色素はメラノサイトが毛母細胞周辺で産生するメラニンによって決まります。"
            },
            {
                "id": 71,
                "subject": "ningen-kagaku",
                "question": "皮膚の弾力性を保つ主な成分は？",
                "choices": ["ケラチン", "コラーゲン・エラスチン", "メラニン", "セラミド"],
                "correct": 1,
                "explanation": "真皮のコラーゲンとエラスチンが皮膚の弾力性を保っています。"
            },
            {
                "id": 72,
                "subject": "ningen-kagaku",
                "question": "頭皮の血行が毛髪に与える影響は？",
                "choices": ["色に影響", "成長に影響", "質感に影響", "すべて"],
                "correct": 3,
                "explanation": "頭皮の血行は毛髪の成長、色、質感すべてに影響を与えます。"
            },
            {
                "id": 73,
                "subject": "ningen-kagaku",
                "question": "皮膚の保湿機能で重要な成分は？",
                "choices": ["天然保湿因子（NMF）", "セラミド", "皮脂膜", "すべて"],
                "correct": 3,
                "explanation": "皮膚の保湿にはNMF、セラミド、皮脂膜がすべて重要な役割を果たします。"
            },
            {
                "id": 74,
                "subject": "ningen-kagaku",
                "question": "毛髪の断面で最も厚い層は？",
                "choices": ["毛表皮", "毛皮質", "毛髄質", "同じ厚さ"],
                "correct": 1,
                "explanation": "毛皮質（コルテックス）は毛髪断面の約90%を占める最も厚い層です。"
            },
            {
                "id": 75,
                "subject": "ningen-kagaku",
                "question": "紫外線から皮膚を守るメカニズムは？",
                "choices": ["メラニン産生の増加", "角質層の肥厚", "皮脂分泌の増加", "メラニン産生と角質層肥厚"],
                "correct": 3,
                "explanation": "紫外線に対してはメラニン産生の増加と角質層の肥厚で皮膚を保護します。"
            },
            {
                "id": 76,
                "subject": "ningen-kagaku",
                "question": "毛髪の立毛筋の働きは？",
                "choices": ["毛髪を成長させる", "毛髪を立たせる", "毛髪に色をつける", "毛髪を抜く"],
                "correct": 1,
                "explanation": "立毛筋は寒冷時や驚いた時などに収縮し、毛髪を立たせる働きがあります。"
            },
            {
                "id": 77,
                "subject": "ningen-kagaku",
                "question": "皮膚の感覚受容器で触覚を感じるのは？",
                "choices": ["メルケル盤", "マイスナー小体", "パチニ小体", "すべて"],
                "correct": 3,
                "explanation": "触覚はメルケル盤、マイスナー小体、パチニ小体などの受容器で感知されます。"
            },
            {
                "id": 78,
                "subject": "ningen-kagaku",
                "question": "加齢による毛髪の変化で正しいものは？",
                "choices": ["毛髪が太くなる", "メラニン産生が増加", "毛髪が細くなる", "成長が早くなる"],
                "correct": 2,
                "explanation": "加齢により毛髪は細くなり、メラニン産生も減少し白髪が増えます。"
            },
            {
                "id": 79,
                "subject": "ningen-kagaku",
                "question": "皮膚のpH値は通常どの範囲？",
                "choices": ["4.5-6.5", "6.5-7.5", "7.5-8.5", "8.5-9.5"],
                "correct": 0,
                "explanation": "健康な皮膚のpHは弱酸性の4.5-6.5の範囲にあります。"
            },
            {
                "id": 80,
                "subject": "ningen-kagaku",
                "question": "毛髪が伸びる1日あたりの平均長は？",
                "choices": ["0.1-0.2mm", "0.3-0.4mm", "0.5-0.6mm", "0.7-0.8mm"],
                "correct": 1,
                "explanation": "毛髪は1日に平均0.3-0.4mm程度伸びます。"
            },

            // 疾病の成り立ち (20 questions)
            {
                "id": 81,
                "subject": "shikkan",
                "question": "アレルギー性接触皮膚炎の原因で最も多いのは？",
                "choices": ["食品", "化粧品・ヘアケア製品", "衣類", "金属"],
                "correct": 1,
                "explanation": "美容業界では化粧品やヘアケア製品によるアレルギー性接触皮膚炎が最も多く見られます。"
            },
            {
                "id": 82,
                "subject": "shikkan",
                "question": "真菌感染症の代表的な疾患は？",
                "choices": ["水虫", "インフルエンザ", "結膜炎", "胃炎"],
                "correct": 0,
                "explanation": "水虫（白癬）は真菌（カビ）による感染症の代表例です。"
            },
            {
                "id": 83,
                "subject": "shikkan", 
                "question": "頭皮の脂漏性皮膚炎の主な原因は？",
                "choices": ["細菌感染", "真菌感染", "アレルギー", "ホルモン異常"],
                "correct": 1,
                "explanation": "脂漏性皮膚炎の主な原因はマラセチア菌という真菌です。"
            },
            {
                "id": 84,
                "subject": "shikkan",
                "question": "男性型脱毛症（AGA）の主な原因は？",
                "choices": ["栄養不足", "ストレス", "男性ホルモン", "外傷"],
                "correct": 2,
                "explanation": "男性型脱毛症は男性ホルモン（ジヒドロテストステロン）が主な原因です。"
            },
            {
                "id": 85,
                "subject": "shikkan",
                "question": "帯状疱疹の原因ウイルスは？",
                "choices": ["単純ヘルペスウイルス", "水痘・帯状疱疹ウイルス", "インフルエンザウイルス", "ノロウイルス"],
                "correct": 1,
                "explanation": "帯状疱疹は水痘・帯状疱疹ウイルス（VZV）の再活性化によって起こります。"
            },
            {
                "id": 86,
                "subject": "shikkan",
                "question": "アトピー性皮膚炎の特徴的な症状は？",
                "choices": ["発熱", "咳", "かゆみを伴う湿疹", "腹痛"],
                "correct": 2,
                "explanation": "アトピー性皮膚炎の特徴は強いかゆみを伴う湿疹です。"
            },
            {
                "id": 87,
                "subject": "shikkan",
                "question": "円形脱毛症の原因として考えられているのは？",
                "choices": ["老化", "自己免疫反応", "栄養失調", "感染症"],
                "correct": 1,
                "explanation": "円形脱毛症は自己免疫反応による毛包への攻撃が原因と考えられています。"
            },
            {
                "id": 88,
                "subject": "shikkan",
                "question": "接触皮膚炎の予防で最も重要なことは？",
                "choices": ["栄養補給", "原因物質の回避", "運動", "睡眠"],
                "correct": 1,
                "explanation": "接触皮膚炎の予防には原因となる物質を避けることが最も重要です。"
            },
            {
                "id": 89,
                "subject": "shikkan",
                "question": "頭皮の感染症で美容師が注意すべきものは？",
                "choices": ["頭部白癬", "脂漏性皮膚炎", "膿痂疹", "すべて"],
                "correct": 3,
                "explanation": "美容師は頭部白癬、脂漏性皮膚炎、膿痂疹などすべての頭皮感染症に注意が必要です。"
            },
            {
                "id": 90,
                "subject": "shikkan",
                "question": "化学熱傷の応急処置で最初に行うべきことは？",
                "choices": ["薬を塗る", "冷水で洗い流す", "包帯を巻く", "病院に行く"],
                "correct": 1,
                "explanation": "化学熱傷の応急処置は大量の冷水で化学物質を洗い流すことが最優先です。"
            },
            {
                "id": 91,
                "subject": "shikkan",
                "question": "ケロイドの特徴は？",
                "choices": ["元の傷より小さくなる", "元の傷の範囲を超えて拡大", "自然に消える", "痛みがない"],
                "correct": 1,
                "explanation": "ケロイドは元の傷の範囲を超えて盛り上がって拡大する異常な瘢痕形成です。"
            },
            {
                "id": 92,
                "subject": "shikkan",
                "question": "蕁麻疹の原因で最も多いのは？",
                "choices": ["食物", "薬物", "物理的刺激", "原因不明"],
                "correct": 3,
                "explanation": "蕁麻疹の約7割は原因が特定できない特発性蕁麻疹です。"
            },
            {
                "id": 93,
                "subject": "shikkan",
                "question": "皮膚の老化の主な原因は？",
                "choices": ["紫外線", "加齢", "乾燥", "すべて"],
                "correct": 3,
                "explanation": "皮膚の老化には紫外線、自然な加齢、乾燥などが複合的に関与します。"
            },
            {
                "id": 94,
                "subject": "shikkan",
                "question": "毛髪の疾患で遺伝的要因が強いものは？",
                "choices": ["円形脱毛症", "男性型脱毛症", "脂漏性脱毛症", "抜毛症"],
                "correct": 1,
                "explanation": "男性型脱毛症は遺伝的要因が最も強い脱毛症です。"
            },
            {
                "id": 95,
                "subject": "shikkan",
                "question": "皮膚炎の急性期の症状で正しいものは？",
                "choices": ["乾燥・落屑", "紅斑・腫脹・水疱", "色素沈着", "瘢痕形成"],
                "correct": 1,
                "explanation": "皮膚炎の急性期には紅斑、腫脹、水疱などの症状が現れます。"
            },
            {
                "id": 96,
                "subject": "shikkan",
                "question": "頭皮の毛包炎の主な原因菌は？",
                "choices": ["大腸菌", "黄色ブドウ球菌", "結核菌", "カンジダ菌"],
                "correct": 1,
                "explanation": "毛包炎の主な原因菌は黄色ブドウ球菌です。"
            },
            {
                "id": 97,
                "subject": "shikkan",
                "question": "薬物による皮膚障害で最も重篤なものは？",
                "choices": ["発疹", "蕁麻疹", "スティーブンス・ジョンソン症候群", "色素沈着"],
                "correct": 2,
                "explanation": "スティーブンス・ジョンソン症候群は薬物による重篤な皮膚粘膜症候群です。"
            },
            {
                "id": 98,
                "subject": "shikkan",
                "question": "乾癬の特徴的な症状は？",
                "choices": ["水疱", "銀白色の鱗屑を伴う紅斑", "色素脱失", "毛髪の脱落"],
                "correct": 1,
                "explanation": "乾癬の特徴は銀白色の鱗屑を伴う境界明瞭な紅斑です。"
            },
            {
                "id": 99,
                "subject": "shikkan",
                "question": "皮膚がんで最も悪性度の高いものは？",
                "choices": ["基底細胞がん", "有棘細胞がん", "悪性黒色腫", "皮膚線維肉腫"],
                "correct": 2,
                "explanation": "悪性黒色腫（メラノーマ）は皮膚がんの中で最も悪性度が高く危険です。"
            },
            {
                "id": 100,
                "subject": "shikkan",
                "question": "ストレスが毛髪に与える影響として正しいものは？",
                "choices": ["成長促進", "脱毛", "色が濃くなる", "太くなる"],
                "correct": 1,
                "explanation": "ストレスは毛髪の成長を阻害し、脱毛の原因となることがあります。"
            },

            // 美容の物理化学 (20 questions)
            {
                "id": 101,
                "subject": "biyou-houkoku",
                "question": "界面活性剤の基本構造は？",
                "choices": ["親水基のみ", "疎水基のみ", "親水基と疎水基", "イオン結合"],
                "correct": 2,
                "explanation": "界面活性剤は親水基（水になじみやすい部分）と疎水基（油になじみやすい部分）を持つ両親媒性分子です。"
            },
            {
                "id": 102,
                "subject": "biyou-houkoku",
                "question": "化粧品の乳化に使用される乳化剤の働きは？",
                "choices": ["油と水を分離", "油と水を混合", "色を変える", "香りをつける"],
                "correct": 1,
                "explanation": "乳化剤は本来混じらない油と水を安定して混合させる働きがあります。"
            },
            {
                "id": 103,
                "subject": "biyou-houkoku",
                "question": "pHが7より小さい溶液は？",
                "choices": ["酸性", "中性", "アルカリ性", "塩基性"],
                "correct": 0,
                "explanation": "pH7未満は酸性、pH7は中性、pH7を超えるとアルカリ性（塩基性）です。"
            },
            {
                "id": 104,
                "subject": "biyou-houkoku",
                "question": "化粧品の保存性を高める成分は？",
                "choices": ["保湿剤", "防腐剤", "香料", "色素"],
                "correct": 1,
                "explanation": "防腐剤は細菌やカビの増殖を防ぎ、化粧品の保存性を高めます。"
            },
            {
                "id": 105,
                "subject": "biyou-houkoku",
                "question": "紫外線の波長による分類で、UVBの波長範囲は？",
                "choices": ["100-280nm", "280-320nm", "320-400nm", "400-500nm"],
                "correct": 1,
                "explanation": "UVBの波長範囲は280-320nmです。UVAは320-400nm、UVCは100-280nmです。"
            },
            {
                "id": 106,
                "subject": "biyou-houkoku",
                "question": "化粧品のテクスチャーに影響を与える主な要因は？",
                "choices": ["粘度", "比重", "表面張力", "すべて"],
                "correct": 3,
                "explanation": "化粧品のテクスチャーには粘度、比重、表面張力などの物理的性質がすべて関与します。"
            },
            {
                "id": 107,
                "subject": "biyou-houkoku",
                "question": "毛髪のブリーチングで使用される酸化剤は？",
                "choices": ["塩化ナトリウム", "過酸化水素", "硫酸", "塩酸"],
                "correct": 1,
                "explanation": "毛髪のブリーチングには過酸化水素が酸化剤として使用されます。"
            },
            {
                "id": 108,
                "subject": "biyou-houkoku",
                "question": "化粧品の色材として使用される酸化鉄の色は？",
                "choices": ["青色", "赤色・黄色・黒色", "緑色", "紫色"],
                "correct": 1,
                "explanation": "酸化鉄は種類により赤色、黄色、黒色の色材として使用されます。"
            },
            {
                "id": 109,
                "subject": "biyou-houkoku",
                "question": "界面張力が低い液体の特徴は？",
                "choices": ["粘度が高い", "よく濡れる", "揮発しにくい", "混じりにくい"],
                "correct": 1,
                "explanation": "界面張力が低い液体は表面に広がりやすく、よく濡れる性質があります。"
            },
            {
                "id": 110,
                "subject": "biyou-houkoku",
                "question": "化粧品の安定性試験で確認する項目に含まれないものは？",
                "choices": ["外観の変化", "においの変化", "pH変化", "販売価格"],
                "correct": 3,
                "explanation": "安定性試験では外観、におい、pH変化などを確認しますが、販売価格は試験項目ではありません。"
            },
            {
                "id": 111,
                "subject": "biyou-houkoku",
                "question": "毛髪の等電点付近での毛髪の状態は？",
                "choices": ["最も膨潤", "最も収縮", "電荷が最小", "最も帯電"],
                "correct": 2,
                "explanation": "等電点では正電荷と負電荷が釣り合い、毛髪の電荷が最小となります。"
            },
            {
                "id": 112,
                "subject": "biyou-houkoku",
                "question": "化粧品の粉体で光の散乱を利用するものは？",
                "choices": ["着色料", "紫外線散乱剤", "保湿剤", "防腐剤"],
                "correct": 1,
                "explanation": "紫外線散乱剤（酸化チタン、酸化亜鉛など）は光の散乱を利用して紫外線を防ぎます。"
            },
            {
                "id": 113,
                "subject": "biyou-houkoku",
                "question": "化粧品の浸透に関与する主な要因は？",
                "choices": ["分子量", "親油性・親水性", "濃度", "すべて"],
                "correct": 3,
                "explanation": "化粧品の浸透には分子量、親油性・親水性、濃度などがすべて関与します。"
            },
            {
                "id": 114,
                "subject": "biyou-houkoku",
                "question": "パーマ液の反応で重要な要素は？",
                "choices": ["温度", "pH", "時間", "すべて"],
                "correct": 3,
                "explanation": "パーマ液の反応には温度、pH、時間のすべてが重要な要素です。"
            },
            {
                "id": 115,
                "subject": "biyou-houkoku",
                "question": "化粧品の品質に影響を与える環境要因は？",
                "choices": ["温度", "湿度", "光", "すべて"],
                "correct": 3,
                "explanation": "化粧品の品質には温度、湿度、光などの環境要因がすべて影響します。"
            },
            {
                "id": 116,
                "subject": "biyou-houkoku",
                "question": "界面活性剤のHLB値が高いと？",
                "choices": ["親油性が強い", "親水性が強い", "中性", "不安定"],
                "correct": 1,
                "explanation": "HLB値が高い界面活性剤は親水性が強く、水系での使用に適しています。"
            },
            {
                "id": 117,
                "subject": "biyou-houkoku",
                "question": "毛髪の膨潤に最も影響する要因は？",
                "choices": ["温度", "湿度", "pH", "すべて"],
                "correct": 3,
                "explanation": "毛髪の膨潤には温度、湿度、pHのすべてが影響します。"
            },
            {
                "id": 118,
                "subject": "biyou-houkoku",
                "question": "化粧品の微生物汚染を防ぐ方法は？",
                "choices": ["防腐剤の添加", "密封包装", "清潔な製造環境", "すべて"],
                "correct": 3,
                "explanation": "微生物汚染防止には防腐剤、密封包装、清潔な製造環境がすべて必要です。"
            },
            {
                "id": 119,
                "subject": "biyou-houkoku",
                "question": "化学結合の強度順序で正しいものは？",
                "choices": ["水素結合>イオン結合>共有結合", "イオン結合>水素結合>共有結合", "共有結合>イオン結合>水素結合", "すべて同じ"],
                "correct": 2,
                "explanation": "化学結合の強度は共有結合>イオン結合>水素結合の順序です。"
            },
            {
                "id": 120,
                "subject": "biyou-houkoku",
                "question": "化粧品の酸化防止剤の働きは？",
                "choices": ["細菌増殖防止", "酸化反応の防止", "pH調整", "保湿効果"],
                "correct": 1,
                "explanation": "酸化防止剤は化粧品成分の酸化反応を防ぎ、品質劣化を防止します。"
            },

            // 美容文化論 (20 questions)
            {
                "id": 121,
                "subject": "bunka",
                "question": "日本の美容文化で「おしろい」が使われ始めたのは？",
                "choices": ["縄文時代", "弥生時代", "奈良時代", "平安時代"],
                "correct": 2,
                "explanation": "おしろい（白粉）は奈良時代に大陸から伝来し、使われ始めました。"
            },
            {
                "id": 122,
                "subject": "bunka",
                "question": "平安時代の貴族女性の眉の特徴は？",
                "choices": ["太い眉", "細い眉", "眉を剃って額に描く", "眉毛を染める"],
                "correct": 2,
                "explanation": "平安時代の貴族女性は眉を剃り、額の高い位置に眉を描く「引眉」をしていました。"
            },
            {
                "id": 123,
                "subject": "bunka",
                "question": "江戸時代の髪型で既婚女性がする代表的なものは？",
                "choices": ["島田髷", "丸髷", "銀杏髷", "桃割髷"],
                "correct": 1,
                "explanation": "江戸時代の既婚女性は丸髷を結うのが一般的でした。"
            },
            {
                "id": 124,
                "subject": "bunka",
                "question": "明治時代に西洋から導入された美容技術は？",
                "choices": ["パーマネントウェーブ", "ヘアカット", "化粧品", "すべて"],
                "correct": 3,
                "explanation": "明治時代の文明開化により、パーマ、ヘアカット、化粧品など西洋の美容技術が導入されました。"
            },
            {
                "id": 125,
                "subject": "bunka",
                "question": "大正時代に流行した髪型は？",
                "choices": ["日本髪", "モダンガール風ショートボブ", "アップスタイル", "三つ編み"],
                "correct": 1,
                "explanation": "大正時代にはモダンガール（モガ）の影響でショートボブが流行しました。"
            },
            {
                "id": 126,
                "subject": "bunka",
                "question": "昭和初期の美容文化の特徴は？",
                "choices": ["伝統的な日本髪回帰", "西洋風の普及", "軍国主義の影響", "個性重視"],
                "correct": 2,
                "explanation": "昭和初期は西洋風の美容文化が一般に普及した時代です。"
            },
            {
                "id": 127,
                "subject": "bunka",
                "question": "戦後復興期の美容文化で象徴的だったものは？",
                "choices": ["パーマネントウェーブの普及", "化粧品不足", "質素な髪型", "すべて"],
                "correct": 0,
                "explanation": "戦後復興期にはパーマネントウェーブが急速に普及し、美容文化の象徴となりました。"
            },
            {
                "id": 128,
                "subject": "bunka",
                "question": "1960年代に日本で流行した髪型は？",
                "choices": ["ツイッギーカット", "ビートルズカット", "モッズカット", "すべて"],
                "correct": 3,
                "explanation": "1960年代にはツイッギーカット、ビートルズカット、モッズカットなどが流行しました。"
            },
            {
                "id": 129,
                "subject": "bunka",
                "question": "美容師法が制定されたのは？",
                "choices": ["1950年", "1957年", "1960年", "1965年"],
                "correct": 1,
                "explanation": "美容師法は1957年（昭和32年）に制定されました。"
            },
            {
                "id": 130,
                "subject": "bunka",
                "question": "日本古来の化粧で「お歯黒」の目的は？",
                "choices": ["装飾", "虫歯予防", "既婚の証", "すべて"],
                "correct": 3,
                "explanation": "お歯黒は装飾、虫歯予防、既婚の証としての意味がすべてありました。"
            },
            {
                "id": 131,
                "subject": "bunka",
                "question": "安土桃山時代の美容文化の特徴は？",
                "choices": ["質素な装い", "豪華絢爛な装い", "西洋風の装い", "軍事的な装い"],
                "correct": 1,
                "explanation": "安土桃山時代は豪華絢爛な文化が花開き、美容においても華やかな装いが特徴でした。"
            },
            {
                "id": 132,
                "subject": "bunka",
                "question": "現代の日本美容文化の特徴は？",
                "choices": ["多様性", "国際性", "個性重視", "すべて"],
                "correct": 3,
                "explanation": "現代の日本美容文化は多様性、国際性、個性重視がすべて特徴として挙げられます。"
            },
            {
                "id": 133,
                "subject": "bunka",
                "question": "江戸時代の「粧い」文化で重視されたものは？",
                "choices": ["自然美", "人工美", "質素美", "個性美"],
                "correct": 1,
                "explanation": "江戸時代の粧い文化では技巧を凝らした人工美が重視されました。"
            },
            {
                "id": 134,
                "subject": "bunka",
                "question": "美容技術の歴史で最も古いものは？",
                "choices": ["ヘアカット", "ヘアカラー", "パーマネントウェーブ", "化粧"],
                "correct": 3,
                "explanation": "化粧は人類最古の美容技術の一つで、先史時代から行われています。"
            },
            {
                "id": 135,
                "subject": "bunka",
                "question": "日本の美容文化に大きな影響を与えた外国文化は？",
                "choices": ["中国・朝鮮文化", "西洋文化", "東南アジア文化", "中国・朝鮮文化と西洋文化"],
                "correct": 3,
                "explanation": "日本の美容文化には古代の中国・朝鮮文化と近世以降の西洋文化が大きな影響を与えました。"
            },
            {
                "id": 136,
                "subject": "bunka",
                "question": "美容師という職業が確立したのは？",
                "choices": ["江戸時代", "明治時代", "大正時代", "昭和時代"],
                "correct": 1,
                "explanation": "美容師という職業は明治時代の西洋文化導入とともに確立されました。"
            },
            {
                "id": 137,
                "subject": "bunka",
                "question": "日本の伝統的な美の概念「わび・さび」が美容文化に与えた影響は？",
                "choices": ["華美を避ける", "自然な美しさを重視", "簡素な美を好む", "すべて"],
                "correct": 3,
                "explanation": "わび・さびの美学は華美を避け、自然で簡素な美を重視する美容文化を生み出しました。"
            },
            {
                "id": 138,
                "subject": "bunka",
                "question": "現代美容文化における「カワイイ」文化の特徴は？",
                "choices": ["若さの重視", "可愛らしさの追求", "世界への発信", "すべて"],
                "correct": 3,
                "explanation": "現代の「カワイイ」文化は若さ、可愛らしさの追求と世界への文化発信が特徴です。"
            },
            {
                "id": 139,
                "subject": "bunka",
                "question": "美容文化の変遷に最も影響を与える要因は？",
                "choices": ["経済状況", "社会情勢", "技術革新", "すべて"],
                "correct": 3,
                "explanation": "美容文化の変遷には経済状況、社会情勢、技術革新のすべてが影響を与えます。"
            },
            {
                "id": 140,
                "subject": "bunka",
                "question": "日本の美容文化の未来への課題は？",
                "choices": ["伝統の継承", "国際化への対応", "技術革新", "すべて"],
                "correct": 3,
                "explanation": "日本美容文化の未来には伝統継承、国際化対応、技術革新すべてが課題となります。"
            },

            // 運営管理 (20 questions)
            {
                "id": 141,
                "subject": "unei-kanri",
                "question": "美容所の経営で最も重要な要素は？",
                "choices": ["立地", "技術", "接客", "すべて"],
                "correct": 3,
                "explanation": "美容所の経営には立地、技術、接客のすべてが重要な要素です。"
            },
            {
                "id": 142,
                "subject": "unei-kanri",
                "question": "顧客満足度を向上させるために最も重要なことは？",
                "choices": ["価格の安さ", "技術力", "コミュニケーション", "技術力とコミュニケーション"],
                "correct": 3,
                "explanation": "顧客満足度向上には優れた技術力と良好なコミュニケーションの両方が不可欠です。"
            },
            {
                "id": 143,
                "subject": "unei-kanri",
                "question": "美容所の衛生管理で最も基本的なことは？",
                "choices": ["器具の消毒", "清掃", "手洗い", "すべて"],
                "correct": 3,
                "explanation": "美容所の衛生管理では器具の消毒、清掃、手洗いのすべてが基本的で重要です。"
            },
            {
                "id": 144,
                "subject": "unei-kanri",
                "question": "スタッフの技術向上で効果的な方法は？",
                "choices": ["研修参加", "練習時間の確保", "先輩からの指導", "すべて"],
                "correct": 3,
                "explanation": "スタッフの技術向上には研修参加、練習時間確保、先輩指導がすべて効果的です。"
            },
            {
                "id": 145,
                "subject": "unei-kanri",
                "question": "美容所の安全管理で注意すべき点は？",
                "choices": ["薬剤の取り扱い", "器具の管理", "環境整備", "すべて"],
                "correct": 3,
                "explanation": "美容所の安全管理では薬剤取り扱い、器具管理、環境整備すべてに注意が必要です。"
            },
            {
                "id": 146,
                "subject": "unei-kanri",
                "question": "顧客情報の管理で最も重要なことは？",
                "choices": ["個人情報の保護", "施術記録の保管", "アレルギー情報の記録", "すべて"],
                "correct": 3,
                "explanation": "顧客情報管理では個人情報保護、施術記録、アレルギー情報記録がすべて重要です。"
            },
            {
                "id": 147,
                "subject": "unei-kanri",
                "question": "美容所の売上向上策として効果的なものは？",
                "choices": ["新メニューの導入", "リピーター獲得", "口コミの活用", "すべて"],
                "correct": 3,
                "explanation": "売上向上には新メニュー導入、リピーター獲得、口コミ活用がすべて効果的です。"
            },
            {
                "id": 148,
                "subject": "unei-kanri",
                "question": "スタッフのモチベーション向上で重要なことは？",
                "choices": ["適正な評価", "教育機会の提供", "働きやすい環境", "すべて"],
                "correct": 3,
                "explanation": "スタッフのモチベーション向上には適正評価、教育機会、働きやすい環境がすべて重要です。"
            },
            {
                "id": 149,
                "subject": "unei-kanri",
                "question": "美容所の在庫管理で注意すべき点は？",
                "choices": ["適正在庫量", "使用期限", "保管方法", "すべて"],
                "correct": 3,
                "explanation": "在庫管理では適正在庫量、使用期限、保管方法のすべてに注意が必要です。"
            },
            {
                "id": 150,
                "subject": "unei-kanri",
                "question": "クレーム対応で最も重要な姿勢は？",
                "choices": ["謝罪", "傾聴", "迅速な対応", "すべて"],
                "correct": 3,
                "explanation": "クレーム対応では謝罪、傾聴、迅速な対応すべてが重要な姿勢です。"
            },
            {
                "id": 151,
                "subject": "unei-kanri",
                "question": "美容所の労働環境改善で重要なことは？",
                "choices": ["労働時間の管理", "職場の安全性", "福利厚生", "すべて"],
                "correct": 3,
                "explanation": "労働環境改善には労働時間管理、職場の安全性、福利厚生がすべて重要です。"
            },
            {
                "id": 152,
                "subject": "unei-kanri",
                "question": "新人スタッフの育成で重要なポイントは？",
                "choices": ["基本技術の習得", "接客マナーの指導", "安全意識の向上", "すべて"],
                "correct": 3,
                "explanation": "新人育成では基本技術、接客マナー、安全意識のすべてが重要なポイントです。"
            },
            {
                "id": 153,
                "subject": "unei-kanri",
                "question": "美容所の収支管理で把握すべき項目は？",
                "choices": ["売上", "経費", "利益", "すべて"],
                "correct": 3,
                "explanation": "収支管理では売上、経費、利益のすべてを正確に把握する必要があります。"
            },
            {
                "id": 154,
                "subject": "unei-kanri",
                "question": "顧客のリピート率向上のために重要なことは？",
                "choices": ["技術の向上", "接客サービス", "アフターフォロー", "すべて"],
                "correct": 3,
                "explanation": "リピート率向上には技術向上、接客サービス、アフターフォローがすべて重要です。"
            },
            {
                "id": 155,
                "subject": "unei-kanri",
                "question": "美容所の差別化戦略として有効なものは？",
                "choices": ["独自の技術", "特別なサービス", "店舗の雰囲気", "すべて"],
                "correct": 3,
                "explanation": "差別化戦略には独自技術、特別サービス、店舗雰囲気づくりがすべて有効です。"
            },
            {
                "id": 156,
                "subject": "unei-kanri",
                "question": "美容所の品質管理で重要な要素は？",
                "choices": ["技術の標準化", "サービスの均質化", "継続的な改善", "すべて"],
                "correct": 3,
                "explanation": "品質管理では技術の標準化、サービス均質化、継続的改善がすべて重要です。"
            },
            {
                "id": 157,
                "subject": "unei-kanri",
                "question": "美容所の予約管理システムの利点は？",
                "choices": ["効率的なスケジュール管理", "顧客の利便性向上", "売上の最大化", "すべて"],
                "correct": 3,
                "explanation": "予約管理システムは効率的スケジュール管理、顧客利便性向上、売上最大化すべての利点があります。"
            },
            {
                "id": 158,
                "subject": "unei-kanri",
                "question": "美容所の市場分析で調査すべき項目は？",
                "choices": ["競合他社", "顧客ニーズ", "市場動向", "すべて"],
                "correct": 3,
                "explanation": "市場分析では競合他社、顧客ニーズ、市場動向のすべてを調査する必要があります。"
            },
            {
                "id": 159,
                "subject": "unei-kanri",
                "question": "美容所の危機管理で準備すべきことは？",
                "choices": ["緊急時対応マニュアル", "保険の加入", "スタッフの訓練", "すべて"],
                "correct": 3,
                "explanation": "危機管理では緊急時マニュアル、保険加入、スタッフ訓練がすべて必要です。"
            },
            {
                "id": 160,
                "subject": "unei-kanri",
                "question": "美容所経営の成功要因として最も重要なものは？",
                "choices": ["優れた技術", "良好な人間関係", "経営戦略", "すべての要因の調和"],
                "correct": 3,
                "explanation": "美容所経営の成功には技術、人間関係、経営戦略など、すべての要因が調和することが最も重要です。"
            }        ];

        this.currentTest = {
            mode: null,
            subject: null,
            questions: [],
            currentIndex: 0,
            answers: {},
            score: 0,
            wrongAnswers: []
        };

        this.init();
    }

    init() {
        this.bindEvents();
        this.updateReviewCount();
    }

    bindEvents() {
        // Mode selection
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectMode(e.target.dataset.mode);
            });
        });

        // Subject selection
        document.querySelectorAll('.subject-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectSubject(e.target.dataset.subject);
            });
        });

        // Start button
        document.getElementById('start-btn').addEventListener('click', () => {
            this.startTest();
        });

        // Navigation buttons
        document.getElementById('prev-btn').addEventListener('click', () => {
            this.previousQuestion();
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        // Action buttons
        document.getElementById('finish-btn').addEventListener('click', () => {
            this.finishTest();
        });

        document.getElementById('back-to-menu-btn').addEventListener('click', () => {
            this.showScreen('subject-screen');
        });

        // Results buttons
        document.getElementById('retry-btn').addEventListener('click', () => {
            this.retryTest();
        });

        document.getElementById('review-wrong-btn').addEventListener('click', () => {
            this.reviewWrongAnswers();
        });

        document.getElementById('new-test-btn').addEventListener('click', () => {
            this.showScreen('subject-screen');
        });

        // Review button
        document.getElementById('review-btn').addEventListener('click', () => {
            this.startReview();
        });
    }

    selectMode(mode) {
        this.currentTest.mode = mode;

        // Update button states
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        document.querySelector(`[data-mode="${mode}"]`).classList.add('selected');

        // Show/hide subject selection
        const subjectSelection = document.getElementById('subject-selection');
        if (mode === 'subject') {
            subjectSelection.classList.remove('hidden');
            this.updateStartButton();
        } else {
            subjectSelection.classList.add('hidden');
            this.currentTest.subject = null;
            document.querySelectorAll('.subject-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            this.updateStartButton();
        }
    }

    selectSubject(subject) {
        this.currentTest.subject = subject;

        // Update button states
        document.querySelectorAll('.subject-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        document.querySelector(`[data-subject="${subject}"]`).classList.add('selected');

        this.updateStartButton();
    }

    updateStartButton() {
        const startBtn = document.getElementById('start-btn');
        const canStart = this.currentTest.mode && 
                        (this.currentTest.mode !== 'subject' || this.currentTest.subject);

        if (canStart) {
            startBtn.classList.remove('disabled');
        } else {
            startBtn.classList.add('disabled');
        }
    }

    startTest() {
        if (!this.canStartTest()) return;

        this.prepareQuestions();
        this.currentTest.currentIndex = 0;
        this.currentTest.answers = {};
        this.showScreen('question-screen');
        this.displayQuestion();
    }

    canStartTest() {
        return this.currentTest.mode && 
               (this.currentTest.mode !== 'subject' || this.currentTest.subject);
    }

    prepareQuestions() {
        let availableQuestions = [];

        if (this.currentTest.mode === 'subject') {
            availableQuestions = this.questions.filter(q => q.subject === this.currentTest.subject);
        } else {
            availableQuestions = [...this.questions];
        }

        // Shuffle questions
        this.shuffleArray(availableQuestions);

        // Select appropriate number of questions
        let questionCount;
        switch (this.currentTest.mode) {
            case 'quick':
                questionCount = 10;
                break;
            case 'practice':
                questionCount = 55;
                break;
            case 'subject':
                questionCount = 20;
                break;
        }

        this.currentTest.questions = availableQuestions.slice(0, questionCount);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    displayQuestion() {
        const question = this.currentTest.questions[this.currentTest.currentIndex];

        // Update progress
        document.getElementById('current-question').textContent = this.currentTest.currentIndex + 1;
        document.getElementById('total-questions').textContent = this.currentTest.questions.length;

        const progressFill = document.getElementById('progress-fill');
        const progressPercent = ((this.currentTest.currentIndex + 1) / this.currentTest.questions.length) * 100;
        progressFill.style.width = `${progressPercent}%`;

        // Update subject display
        const subjectNames = {
            'kanseigaku': '関係法規・制度',
            'eiseigaku': '衛生管理',
            'biyougaku': '美容技術理論',
            'ningen-kagaku': '人体の構造・機能',
            'shikkan': '疾病の成り立ち',
            'biyou-houkoku': '美容の物理化学',
            'bunka': '美容文化論',
            'unei-kanri': '運営管理'
        };
        document.getElementById('current-subject-display').textContent = subjectNames[question.subject];

        // Display question
        document.getElementById('question-text').textContent = question.question;

        // Display choices
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';

        question.choices.forEach((choice, index) => {
            const choiceBtn = document.createElement('button');
            choiceBtn.className = 'choice';
            choiceBtn.textContent = `${String.fromCharCode(65 + index)}. ${choice}`;

            // Check if this choice was previously selected
            if (this.currentTest.answers[question.id] === index) {
                choiceBtn.classList.add('selected');
            }

            choiceBtn.addEventListener('click', () => {
                this.selectChoice(index);
            });

            choicesContainer.appendChild(choiceBtn);
        });

        this.updateNavigationButtons();
    }

    selectChoice(choiceIndex) {
        const question = this.currentTest.questions[this.currentTest.currentIndex];
        this.currentTest.answers[question.id] = choiceIndex;

        // Update choice display
        document.querySelectorAll('.choice').forEach((btn, index) => {
            btn.classList.toggle('selected', index === choiceIndex);
        });

        // Enable next button
        document.getElementById('next-btn').disabled = false;

        // Show finish button on last question
        if (this.currentTest.currentIndex === this.currentTest.questions.length - 1) {
            document.getElementById('finish-btn').classList.remove('hidden');
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const finishBtn = document.getElementById('finish-btn');

        // Previous button
        prevBtn.disabled = this.currentTest.currentIndex === 0;

        // Next button
        const question = this.currentTest.questions[this.currentTest.currentIndex];
        const hasAnswer = this.currentTest.answers.hasOwnProperty(question.id);
        nextBtn.disabled = !hasAnswer;

        // Finish button
        if (this.currentTest.currentIndex === this.currentTest.questions.length - 1 && hasAnswer) {
            finishBtn.classList.remove('hidden');
        } else {
            finishBtn.classList.add('hidden');
        }
    }

    previousQuestion() {
        if (this.currentTest.currentIndex > 0) {
            this.currentTest.currentIndex--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentTest.currentIndex < this.currentTest.questions.length - 1) {
            this.currentTest.currentIndex++;
            this.displayQuestion();
        }
    }

    finishTest() {
        this.calculateScore();
        this.saveWrongAnswers();
        this.showResults();
        this.showScreen('results-screen');
    }

    calculateScore() {
        let correct = 0;
        this.currentTest.wrongAnswers = [];

        this.currentTest.questions.forEach(question => {
            const userAnswer = this.currentTest.answers[question.id];
            if (userAnswer === question.correct) {
                correct++;
            } else {
                this.currentTest.wrongAnswers.push({
                    question: question,
                    userAnswer: userAnswer,
                    correctAnswer: question.correct
                });
            }
        });

        this.currentTest.score = correct;
    }

    saveWrongAnswers() {
        const existingWrong = JSON.parse(localStorage.getItem('wrongAnswers')) || [];

        this.currentTest.wrongAnswers.forEach(wrong => {
            // Check if this question is already in wrong answers
            const exists = existingWrong.some(existing => existing.question.id === wrong.question.id);
            if (!exists) {
                existingWrong.push(wrong);
            }
        });

        localStorage.setItem('wrongAnswers', JSON.stringify(existingWrong));
        this.updateReviewCount();
    }

    showResults() {
        const scorePercent = Math.round((this.currentTest.score / this.currentTest.questions.length) * 100);

        document.getElementById('score-percentage').textContent = `${scorePercent}%`;
        document.getElementById('correct-count').textContent = this.currentTest.score;
        document.getElementById('total-count').textContent = this.currentTest.questions.length;

        // Show subject breakdown if multiple subjects
        this.showSubjectBreakdown();

        // Show wrong questions
        this.showWrongQuestions();
    }

    showSubjectBreakdown() {
        const breakdown = {};

        this.currentTest.questions.forEach(question => {
            if (!breakdown[question.subject]) {
                breakdown[question.subject] = { total: 0, correct: 0 };
            }
            breakdown[question.subject].total++;

            if (this.currentTest.answers[question.id] === question.correct) {
                breakdown[question.subject].correct++;
            }
        });

        const subjectNames = {
            'kanseigaku': '関係法規・制度',
            'eiseigaku': '衛生管理',
            'biyougaku': '美容技術理論',
            'ningen-kagaku': '人体の構造・機能',
            'shikkan': '疾病の成り立ち',
            'biyou-houkoku': '美容の物理化学',
            'bunka': '美容文化論',
            'unei-kanri': '運営管理'
        };

        const breakdownContainer = document.getElementById('subject-breakdown');
        breakdownContainer.innerHTML = '<h3>📊 科目別成績</h3>';

        Object.keys(breakdown).forEach(subject => {
            const data = breakdown[subject];
            const percent = Math.round((data.correct / data.total) * 100);

            const subjectDiv = document.createElement('div');
            subjectDiv.className = 'subject-result';
            subjectDiv.innerHTML = `
                <span>${subjectNames[subject]}</span>
                <span>${data.correct}/${data.total} (${percent}%)</span>
            `;
            breakdownContainer.appendChild(subjectDiv);
        });
    }

    showWrongQuestions() {
        const wrongContainer = document.getElementById('wrong-list');
        wrongContainer.innerHTML = '';

        if (this.currentTest.wrongAnswers.length === 0) {
            wrongContainer.innerHTML = '<p style="text-align: center; color: #43e97b;">🎉 全問正解です！素晴らしいです！</p>';
            return;
        }

        this.currentTest.wrongAnswers.forEach(wrong => {
            const wrongDiv = document.createElement('div');
            wrongDiv.className = 'wrong-item';

            const userAnswerText = wrong.userAnswer !== undefined ? wrong.question.choices[wrong.userAnswer] : '未回答';

            wrongDiv.innerHTML = `
                <strong>Q: ${wrong.question.question}</strong><br>
                あなたの回答: ${userAnswerText}<br>
                正解: ${wrong.question.choices[wrong.correctAnswer]}<br>
                <small>解説: ${wrong.question.explanation}</small>
            `;
            wrongContainer.appendChild(wrongDiv);
        });
    }

    updateReviewCount() {
        const wrongAnswers = JSON.parse(localStorage.getItem('wrongAnswers')) || [];
        const count = wrongAnswers.length;

        document.getElementById('review-count').textContent = `${count}問`;

        const reviewBtn = document.getElementById('review-btn');
        reviewBtn.disabled = count === 0;
    }

    startReview() {
        const wrongAnswers = JSON.parse(localStorage.getItem('wrongAnswers')) || [];
        if (wrongAnswers.length === 0) return;

        this.currentTest.mode = 'review';
        this.currentTest.subject = null;
        this.currentTest.questions = wrongAnswers.map(wrong => wrong.question);
        this.shuffleArray(this.currentTest.questions);
        this.currentTest.currentIndex = 0;
        this.currentTest.answers = {};

        this.showScreen('question-screen');
        this.displayQuestion();
    }

    reviewWrongAnswers() {
        this.startReview();
    }

    retryTest() {
        this.currentTest.currentIndex = 0;
        this.currentTest.answers = {};
        this.showScreen('question-screen');
        this.displayQuestion();
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');

        // Reset selections when going back to subject screen
        if (screenId === 'subject-screen') {
            this.currentTest.mode = null;
            this.currentTest.subject = null;
            document.querySelectorAll('.mode-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            document.querySelectorAll('.subject-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            document.getElementById('subject-selection').classList.add('hidden');
            this.updateStartButton();
        }
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new ExamApp();
});