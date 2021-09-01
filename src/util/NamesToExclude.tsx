const NamesToExclude = [
  {
    Exclude: "Кумтор"
  },
  {
    Exclude: "Кыргызстан"
  },
  {
    Exclude: "Вася Пупкин"
  },
  {
    Exclude: "90-Летие Ч.Айтматов"
  },
  {
    Exclude: "Aca Mma"
  },
  {
    Exclude: "12129"
  },
  {
    Exclude: "17-летний С. А."
  },
  {
    Exclude: "17-летний С.А."
  },
  {
    Exclude: "22-Летняя М. М."
  },
  {
    Exclude: "24-летний Д.С.Я."
  },
  {
    Exclude: "28-Летняя Ш.А."
  },
  {
    Exclude: "30-летний М. С"
  },
  {
    Exclude: "30-летний М.С"
  },
  {
    Exclude: "30-Летний М. С"
  },
  {
    Exclude: "30-Летний М.С"
  },
  {
    Exclude: "30-летний Ф.А."
  },
  {
    Exclude: "30-Летний Ф.А."
  },
  {
    Exclude: "32-Летняя О.А."
  },
  {
    Exclude: "47-летний Ш. М."
  },
  {
    Exclude: "50 Cent"
  },
  {
    Exclude: "63-Летняя Б. Ж."
  },
  {
    Exclude: "66-Летняя М. К"
  },
  {
    Exclude: "Ajay Devgn"
  },
  {
    Exclude: "Aset"
  },
  {
    Exclude: "Aфганистан Ахундзада"
  },
  {
    Exclude: "B."
  },
  {
    Exclude: "Bahamondes"
  },
  {
    Exclude: "Bav Majithia"
  },
  {
    Exclude: "Blitzscaling"
  },
  {
    Exclude: "Bruno Boelpaep"
  },
  {
    Exclude: "C."
  },
  {
    Exclude: "Carl Schou"
  },
  {
    Exclude: "Casey O’Neill Ufc"
  },
  {
    Exclude: "Christopher Mah"
  },
  {
    Exclude: "Chris Vagasky"
  },
  {
    Exclude: "Colin Dacre"
  },
  {
    Exclude: "David Liu / Getty Images"
  },
  {
    Exclude: "David Martinon"
  },
  {
    Exclude: "Dr. Fahrettin Koca"
  },
  {
    Exclude: "E."
  },
  {
    Exclude: "Eddie Fadel"
  },
  {
    Exclude: "GurbetçI GençLer"
  },
  {
    Exclude: "Haibatullah Akhundzada Abdul Ghani Baradar Mohammad Yaqoob Sirajuddin Haqqani"
  },
  {
    Exclude: "Hande Gülbahar"
  },
  {
    Exclude: "Jason Wu Лины Ю"
  },
  {
    Exclude: "Jeremy Cliffe"
  },
  {
    Exclude: "Jordan Nelson"
  },
  {
    Exclude: "Juan Ignacio Schaab"
  },
  {
    Exclude: "Kaktus"
  },
  {
    Exclude: "Kara Prank"
  },
  {
    Exclude: "Kloop.Kg Кыргызстан"
  },
  {
    Exclude: "Kyle Brittain"
  },
  {
    Exclude: "Maddie Meyer / Gettyimages Тыныбекова"
  },
  {
    Exclude: "Mahboob Ahmad"
  },
  {
    Exclude: "Maria Brendle"
  },
  {
    Exclude: "Marina Popova"
  },
  {
    Exclude: "Mma"
  },
  {
    Exclude: "N."
  },
  {
    Exclude: "Naftali Bennett"
  },
  {
    Exclude: "Nurbek Urmatzhanov"
  },
  {
    Exclude: "Oleg Artemyev"
  },
  {
    Exclude: "Pato"
  },
  {
    Exclude: "Patrick Moster"
  },
  {
    Exclude: "Paulina Porizkova"
  },
  {
    Exclude: "Pepsi А"
  },
  {
    Exclude: "Pink"
  },
  {
    Exclude: "P.S"
  },
  {
    Exclude: "Rafael Fiziev"
  },
  {
    Exclude: "Rebecca Rambar"
  },
  {
    Exclude: "Reyhan İNandı"
  },
  {
    Exclude: "Rhys Mcclenaghan"
  },
  {
    Exclude: "Ricardo Lawlor"
  },
  {
    Exclude: "Richard Branson"
  },
  {
    Exclude: "Rightside101"
  },
  {
    Exclude: "Saddick Adams"
  },
  {
    Exclude: "Shamsia Hassani"
  },
  {
    Exclude: "Sheikh Abdul Hakim Haqqani"
  },
  {
    Exclude: "Şırnak Haberleri"
  },
  {
    Exclude: "Snowwolf_Jku"
  },
  {
    Exclude: "Sputnik Кыргызстан"
  },
  {
    Exclude: "Ssssaadat Asylbekova"
  },
  {
    Exclude: "Steve Mccurry"
  },
  {
    Exclude: "Straydogs_Kg"
  },
  {
    Exclude: "Tarun Shukla"
  },
  {
    Exclude: "Tom Daley"
  },
  {
    Exclude: "Tynchtyk Mukhambetov"
  },
  {
    Exclude: "Tynybekova Aisuluu"
  },
  {
    Exclude: "Ulan Uncle"
  },
  {
    Exclude: "Urmat Nasykulov"
  },
  {
    Exclude: "Vera"
  },
  {
    Exclude: "Vladislav Shuliko"
  },
  {
    Exclude: "Yalda Hakim"
  },
  {
    Exclude: "Zack Guzmán"
  },
  {
    Exclude: "А"
  },
  {
    Exclude: "А."
  },
  {
    Exclude: "А. 1990 Г.Р."
  },
  {
    Exclude: "А. А."
  },
  {
    Exclude: "А.А"
  },
  {
    Exclude: "А.А."
  },
  {
    Exclude: "А. А. А."
  },
  {
    Exclude: "А.А.А."
  },
  {
    Exclude: "А.А.Абдыкалыков"
  },
  {
    Exclude: "А. А. Абытов"
  },
  {
    Exclude: "А. А. Айдарбеков"
  },
  {
    Exclude: "А.А.Айдарбеков"
  },
  {
    Exclude: "А. А. Акматалиев"
  },
  {
    Exclude: "А.А. Акматалиев"
  },
  {
    Exclude: "А.А.Акматалиев"
  },
  {
    Exclude: "А. А. Асанканов"
  },
  {
    Exclude: "А.А. Асанканов"
  },
  {
    Exclude: "А.Абдуразаков"
  },
  {
    Exclude: "А. Абдухакимов"
  },
  {
    Exclude: "А. Абдыкалыков"
  },
  {
    Exclude: "А.Абдыкалыков"
  },
  {
    Exclude: "А. А. Бекназаров"
  },
  {
    Exclude: "А. Абжаппаров"
  },
  {
    Exclude: "А.Адигинеев"
  },
  {
    Exclude: "А.А. и 41-Летняя А.О"
  },
  {
    Exclude: "А.А. и 41-Летняя А.О."
  },
  {
    Exclude: "А. А. К."
  },
  {
    Exclude: "А.А.К."
  },
  {
    Exclude: "А. А. Кадыров"
  },
  {
    Exclude: "А. Акаев"
  },
  {
    Exclude: "А.Акаев"
  },
  {
    Exclude: "А. А. Касымалиев"
  },
  {
    Exclude: "А.А.Касымалиев"
  },
  {
    Exclude: "А. Али"
  },
  {
    Exclude: "А. Алимбаев"
  },
  {
    Exclude: "А.Алимбаев"
  },
  {
    Exclude: "А.Алимбаев Бишкек"
  },
  {
    Exclude: "А.Алимова"
  },
  {
    Exclude: "А.Алтыбаева"
  },
  {
    Exclude: "А.Алтынбеков"
  },
  {
    Exclude: "А.Алыбаев"
  },
  {
    Exclude: "А.Аль-Саид"
  },
  {
    Exclude: "А. А. М."
  },
  {
    Exclude: "А.А.М."
  },
  {
    Exclude: "А.Анаров"
  },
  {
    Exclude: "А. А. Озубеков"
  },
  {
    Exclude: "А.А.Озубеков"
  },
  {
    Exclude: "А.А.Өзүбеков"
  },
  {
    Exclude: "А.Апостолов"
  },
  {
    Exclude: "А.Апышев"
  },
  {
    Exclude: "А.Артыкбаев"
  },
  {
    Exclude: "А. А. Сабырбеков"
  },
  {
    Exclude: "А. Аскарбеков"
  },
  {
    Exclude: "А.Аскарбеков"
  },
  {
    Exclude: "А. Атамбаев"
  },
  {
    Exclude: "А.Атамбаев"
  },
  {
    Exclude: "А. Ахангар"
  },
  {
    Exclude: "А. А. Холмирзаев"
  },
  {
    Exclude: "А.А.Холмирзаев Ик-10"
  },
  {
    Exclude: "А.Аширов"
  },
  {
    Exclude: "А.А.Ь"
  },
  {
    Exclude: "А. Б."
  },
  {
    Exclude: "А.Б."
  },
  {
    Exclude: "А. Баатырбеков"
  },
  {
    Exclude: "А.Баатырбеков"
  },
  {
    Exclude: "Абаев"
  },
  {
    Exclude: "Жогорка Кенеш"
  },
  {
    Exclude: "Нацстаток"
  },
  {
    Exclude: "Баткенская"
  },
  {
    Exclude: "Таласская"
  },
  {
    Exclude: "Нарынская"
  },
  {
    Exclude: "Ошская"
  },
  {
    Exclude: "Иссык-Кульская"
  },
  {
    Exclude: "Джалал-Абадская"
  },
  {
    Exclude: "Нур-Султан"
  },
  {
    Exclude: "Кыргызстанец"
  },
  {
    Exclude: "Манас"
  },
  {
    Exclude: "Нейрокорпус"
  },
  {
    Exclude: "Токмак"
  },
  {
    Exclude: "Кыргызский"
  },
  {
    Exclude: "А.А."
  },
  {
    Exclude: "К.А."
  },
  {
    Exclude: "Абдрахманов"
  },
  {
    Exclude: "Кыргызгидромёт"
  },
  {
    Exclude: "Жапаров"
  },
  {
    Exclude: "Азаттык"
  },
  {
    Exclude: "Курман"
  },
  {
    Exclude: "А. А."
  },
  {
    Exclude: "М.А."
  },
  {
    Exclude: "Жибек Жол"
  },
  {
    Exclude: "Президент"
  },
  {
    Exclude: "Кыргызстанка"
  },
  {
    Exclude: "А.М."
  },
  {
    Exclude: "К. А."
  },
  {
    Exclude: "Талибан"
  },
  {
    Exclude: "Бакиев"
  },
  {
    Exclude: "Тоголока Молдо"
  },
  {
    Exclude: "Махмудов"
  },
  {
    Exclude: "Атамбаев"
  },
  {
    Exclude: "Б.А."
  },
  {
    Exclude: "Логвиненко"
  },
  {
    Exclude: "Акаев"
  },
  {
    Exclude: "А.К."
  },
  {
    Exclude: "Максим"
  },
  {
    Exclude: "Жээнбеков"
  },
  {
    Exclude: "Панфилов"
  },
  {
    Exclude: "Ленин"
  },
  {
    Exclude: "Давыдов"
  },
  {
    Exclude: "Токмокнуть"
  },
  {
    Exclude: "Балыкч"
  },
  {
    Exclude: "А.Ч."
  },
  {
    Exclude: "Маликов"
  },
  {
    Exclude: "Гоголь"
  },
  {
    Exclude: "Чуять"
  },
  {
    Exclude: "Б.М."
  },
  {
    Exclude: "Жапарова"
  },
  {
    Exclude: "Ташиев"
  },
  {
    Exclude: "Д.Ж."
  },
  {
    Exclude: "С.А."
  },
  {
    Exclude: "Пцр-Тест"
  },
  {
    Exclude: "А.Н."
  },
  {
    Exclude: "Sputnik Кыргызстан"
  },
  {
    Exclude: "М. А."
  },
  {
    Exclude: "Курманжан Датка"
  },
  {
    Exclude: "Курманджан Датка"
  },
  {
    Exclude: "Лысый"
  },
  {
    Exclude: "Баткен"
  },
  {
    Exclude: "Бишкекчанин"
  },
  {
    Exclude: "М.М."
  },
  {
    Exclude: "Госагентство"
  },
  {
    Exclude: "Васильева"
  },
  {
    Exclude: "Госэкотехинспекция"
  },
  {
    Exclude: "А.Б."
  },
  {
    Exclude: "Бишкек"
  },
  {
    Exclude: "Чрезвычайный"
  },
  {
    Exclude: "Токтогул"
  },
  {
    Exclude: "Дело Кумтор"
  },
  {
    Exclude: "Д. Ж."
  },
  {
    Exclude: "Чуйская"
  },
  {
    Exclude: "Малдыбаева"
  },
  {
    Exclude: "К.М."
  },
  {
    Exclude: "И.А."
  },
  {
    Exclude: "Кумтора"
  },
  {
    Exclude: "Аксыйский"
  },
  {
    Exclude: "А. М."
  },
  {
    Exclude: "Индира Камчыбекова - Кабар"
  },
  {
    Exclude: "Соцфонд"
  },
  {
    Exclude: "Почему"
  },
  {
    Exclude: "Сак"
  },
  {
    Exclude: "Манас Великодушный"
  },
  {
    Exclude: "Хиберника"
  },
  {
    Exclude: "Блю Чип"
  },
  {
    Exclude: "Б.А"
  },
  {
    Exclude: "Айдаркенский"
  },
  {
    Exclude: "Чынгыз"
  },
  {
    Exclude: "А. Ч."
  },
  {
    Exclude: "Мун Глоу"
  },
  {
    Exclude: "Голд Старый"
  },
  {
    Exclude: "Смарагд"
  },
  {
    Exclude: "Тумберг"
  },
  {
    Exclude: "Сок"
  }
]

export default NamesToExclude