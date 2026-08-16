/* Übersetzungen — die zwölf Sprachen, in denen das Spiel verfügbar ist.
   `days` sind Kurzformen Montag..Sonntag. Ländernamen bleiben bewusst
   unübersetzt: sie müssen 1:1 zum Text auf dem Paketlabel passen.
   Jeder Block hat einen Kurzhinweis (*Hint) — entweder alle oder keiner. */
const I18N = {

  'de': {
    name: 'Deutsch', flag: 'de',
    title: 'Kriterien',
    days: ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO'],
    shipping: 'Versendbar', shippingHint: 'Frachttyp steht oben links auf dem Label',
    truck: 'LKW', train: 'ZUG', plane: 'FLUGZEUG', ship: 'SCHIFF',
    none: 'nichts',
    forbidden: 'Verbotene Inhalte', forbiddenHint: 'nur bei „Inhaltskontrolle erforderlich“',
    iChem: 'Bleichmittel & Chemikalien', iGas: 'Gaskanister & Benzinkanister',
    iBat: 'Lose Batterien', iCash: 'Bargeld', iKnife: 'Messer',
    stamps: 'Gültige Stempel', stampsHint: 'Paket muss einen dieser Stempel tragen',
    weights: 'Gewichtsklassen', weightsHint: 'mit der Waage prüfen, Klasse nicht überschreiten',
    countries: 'Länder', countriesHint: 'Name auf dem Label muss zur Flagge passen',
    language: 'Sprache'
  },

  'en': {
    name: 'English', flag: 'gb',
    title: 'Criteria',
    days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
    shipping: 'Shipping', shippingHint: 'cargo type is top left on the label',
    truck: 'TRUCK', train: 'TRAIN', plane: 'PLANE', ship: 'SHIP',
    none: 'nothing',
    forbidden: 'Prohibited contents', forbiddenHint: 'only for “Content check required”',
    iChem: 'Bleach & chemicals', iGas: 'Gas & fuel canisters',
    iBat: 'Loose batteries', iCash: 'Cash', iKnife: 'Knives',
    stamps: 'Valid stamps', stampsHint: 'parcel must carry one of these stamps',
    weights: 'Weight classes', weightsHint: 'check on the scales, must not exceed its class',
    countries: 'Countries', countriesHint: 'name on the label must match the flag',
    language: 'Language'
  },

  'fr': {
    name: 'Français', flag: 'fr',
    title: 'Critères',
    days: ['LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM', 'DIM'],
    shipping: 'Expédiable', shippingHint: 'le type de fret est en haut à gauche de l’étiquette',
    truck: 'CAMION', train: 'TRAIN', plane: 'AVION', ship: 'NAVIRE',
    none: 'rien',
    forbidden: 'Contenus interdits', forbiddenHint: 'uniquement si « Contrôle du contenu requis »',
    iChem: 'Eau de Javel et produits chimiques', iGas: 'Bidons de gaz et d’essence',
    iBat: 'Piles non emballées', iCash: 'Argent liquide', iKnife: 'Couteaux',
    stamps: 'Tampons valides', stampsHint: 'le colis doit porter l’un de ces tampons',
    weights: 'Classes de poids', weightsHint: 'peser le colis, ne pas dépasser sa classe',
    countries: 'Pays', countriesHint: 'le nom sur l’étiquette doit correspondre au drapeau',
    language: 'Langue'
  },

  'es': {
    name: 'Español (España)', flag: 'es',
    title: 'Criterios',
    days: ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB', 'DOM'],
    shipping: 'Se envía', shippingHint: 'el tipo de carga está arriba a la izquierda en la etiqueta',
    truck: 'CAMIÓN', train: 'TREN', plane: 'AVIÓN', ship: 'BARCO',
    none: 'nada',
    forbidden: 'Contenido prohibido', forbiddenHint: 'solo con «Control de contenido requerido»',
    iChem: 'Lejía y productos químicos', iGas: 'Bidones de gas y gasolina',
    iBat: 'Pilas sueltas', iCash: 'Dinero en efectivo', iKnife: 'Cuchillos',
    stamps: 'Sellos válidos', stampsHint: 'el paquete debe llevar uno de estos sellos',
    weights: 'Clases de peso', weightsHint: 'comprobar en la báscula, no superar su clase',
    countries: 'Países', countriesHint: 'el nombre de la etiqueta debe coincidir con la bandera',
    language: 'Idioma'
  },

  'es-419': {
    name: 'Español (Latinoamérica)', flag: 'mx',
    title: 'Criterios',
    days: ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB', 'DOM'],
    shipping: 'Se envía', shippingHint: 'el tipo de carga está arriba a la izquierda en la etiqueta',
    truck: 'CAMIÓN', train: 'TREN', plane: 'AVIÓN', ship: 'BARCO',
    none: 'nada',
    forbidden: 'Contenido prohibido', forbiddenHint: 'solo con “Control de contenido requerido”',
    iChem: 'Blanqueador y productos químicos', iGas: 'Bidones de gas y gasolina',
    iBat: 'Pilas sueltas', iCash: 'Efectivo', iKnife: 'Cuchillos',
    stamps: 'Sellos válidos', stampsHint: 'el paquete debe llevar uno de estos sellos',
    weights: 'Clases de peso', weightsHint: 'comprobar en la balanza, no superar su clase',
    countries: 'Países', countriesHint: 'el nombre en la etiqueta debe coincidir con la bandera',
    language: 'Idioma'
  },

  'pt-BR': {
    name: 'Português (Brasil)', flag: 'br',
    title: 'Critérios',
    days: ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM'],
    shipping: 'Envio', shippingHint: 'o tipo de carga fica no canto superior esquerdo da etiqueta',
    truck: 'CAMINHÃO', train: 'TREM', plane: 'AVIÃO', ship: 'NAVIO',
    none: 'nada',
    forbidden: 'Conteúdo proibido', forbiddenHint: 'apenas com “Verificação de conteúdo necessária”',
    iChem: 'Alvejante e produtos químicos', iGas: 'Botijões de gás e galões de gasolina',
    iBat: 'Pilhas soltas', iCash: 'Dinheiro', iKnife: 'Facas',
    stamps: 'Selos válidos', stampsHint: 'a encomenda deve ter um destes selos',
    weights: 'Classes de peso', weightsHint: 'pesar na balança, não exceder a classe',
    countries: 'Países', countriesHint: 'o nome na etiqueta deve corresponder à bandeira',
    language: 'Idioma'
  },

  'it': {
    name: 'Italiano', flag: 'it',
    title: 'Criteri',
    days: ['LUN', 'MAR', 'MER', 'GIO', 'VEN', 'SAB', 'DOM'],
    shipping: 'Spedibile', shippingHint: 'il tipo di trasporto è in alto a sinistra sull’etichetta',
    truck: 'CAMION', train: 'TRENO', plane: 'AEREO', ship: 'NAVE',
    none: 'niente',
    forbidden: 'Contenuti vietati', forbiddenHint: 'solo con «Controllo del contenuto richiesto»',
    iChem: 'Candeggina e prodotti chimici', iGas: 'Bombole di gas e taniche di benzina',
    iBat: 'Batterie sfuse', iCash: 'Contanti', iKnife: 'Coltelli',
    stamps: 'Timbri validi', stampsHint: 'il pacco deve avere uno di questi timbri',
    weights: 'Classi di peso', weightsHint: 'pesare sulla bilancia, non superare la classe',
    countries: 'Paesi', countriesHint: 'il nome sull’etichetta deve corrispondere alla bandiera',
    language: 'Lingua'
  },

  'pl': {
    name: 'Polski', flag: 'pl',
    title: 'Kryteria',
    days: ['PN', 'WT', 'ŚR', 'CZW', 'PT', 'SO', 'ND'],
    shipping: 'Wysyłka', shippingHint: 'rodzaj transportu jest u góry po lewej na etykiecie',
    truck: 'CIĘŻARÓWKA', train: 'POCIĄG', plane: 'SAMOLOT', ship: 'STATEK',
    none: 'nic',
    forbidden: 'Zawartość zabroniona', forbiddenHint: 'tylko przy „Wymagana kontrola zawartości”',
    iChem: 'Wybielacz i chemikalia', iGas: 'Kanistry na gaz i paliwo',
    iBat: 'Luźne baterie', iCash: 'Gotówka', iKnife: 'Noże',
    stamps: 'Ważne pieczątki', stampsHint: 'paczka musi mieć jedną z tych pieczątek',
    weights: 'Klasy wagowe', weightsHint: 'zważyć na wadze, nie przekraczać klasy',
    countries: 'Kraje', countriesHint: 'nazwa na etykiecie musi zgadzać się z flagą',
    language: 'Język'
  },

  'ru': {
    name: 'Русский', flag: 'ru',
    title: 'Критерии',
    days: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
    shipping: 'Отправка', shippingHint: 'тип перевозки указан слева вверху на этикетке',
    truck: 'ГРУЗОВИК', train: 'ПОЕЗД', plane: 'САМОЛЁТ', ship: 'СУДНО',
    none: 'ничего',
    forbidden: 'Запрещённое содержимое', forbiddenHint: 'только при «Требуется проверка содержимого»',
    iChem: 'Отбеливатель и химикаты', iGas: 'Газовые и бензиновые канистры',
    iBat: 'Батарейки россыпью', iCash: 'Наличные', iKnife: 'Ножи',
    stamps: 'Действительные штампы', stampsHint: 'на посылке должен быть один из этих штампов',
    weights: 'Весовые классы', weightsHint: 'взвесить на весах, класс не превышать',
    countries: 'Страны', countriesHint: 'название на этикетке должно совпадать с флагом',
    language: 'Язык'
  },

  'zh': {
    name: '简体中文', flag: 'cn',
    title: '检查标准',
    days: ['一', '二', '三', '四', '五', '六', '日'],
    shipping: '可发货', shippingHint: '货运类型位于标签左上角',
    truck: '卡车', train: '火车', plane: '飞机', ship: '轮船',
    none: '无',
    forbidden: '违禁物品', forbiddenHint: '仅限“需要检查内容”的包裹',
    iChem: '漂白剂与化学品', iGas: '气罐与油桶',
    iBat: '散装电池', iCash: '现金', iKnife: '刀具',
    stamps: '有效邮戳', stampsHint: '包裹必须带有其中一个邮戳',
    weights: '重量等级', weightsHint: '用秤称重，不得超过所属等级',
    countries: '国家', countriesHint: '标签上的国名必须与国旗一致',
    language: '语言'
  },

  'ja': {
    name: '日本語', flag: 'jp',
    title: '検査基準',
    days: ['月', '火', '水', '木', '金', '土', '日'],
    shipping: '発送可能', shippingHint: '輸送手段はラベル左上に記載',
    truck: 'トラック', train: '列車', plane: '航空機', ship: '船舶',
    none: 'なし',
    forbidden: '禁止品', forbiddenHint: '「内容物検査が必要」の荷物のみ',
    iChem: '漂白剤・化学薬品', iGas: 'ガス缶・ガソリン携行缶',
    iBat: 'むき出しの電池', iCash: '現金', iKnife: '刃物',
    stamps: '有効なスタンプ', stampsHint: '荷物にはこのいずれかのスタンプが必要',
    weights: '重量クラス', weightsHint: 'はかりで計量し、クラスを超えないこと',
    countries: '国', countriesHint: 'ラベルの国名と国旗が一致すること',
    language: '言語'
  },

  'ko': {
    name: '한국어', flag: 'kr',
    title: '검사 기준',
    days: ['월', '화', '수', '목', '금', '토', '일'],
    shipping: '발송 가능', shippingHint: '운송 수단은 라벨 좌측 상단에 표시',
    truck: '트럭', train: '기차', plane: '항공기', ship: '선박',
    none: '없음',
    forbidden: '금지 물품', forbiddenHint: '‘내용물 검사 필요’ 소포만 해당',
    iChem: '표백제 및 화학물질', iGas: '가스통 및 연료통',
    iBat: '낱개 배터리', iCash: '현금', iKnife: '칼',
    stamps: '유효한 스탬프', stampsHint: '소포에 이 스탬프 중 하나가 있어야 함',
    weights: '무게 등급', weightsHint: '저울로 재고 등급을 초과하지 말 것',
    countries: '국가', countriesHint: '라벨의 국가명이 국기와 일치해야 함',
    language: '언어'
  }
};
