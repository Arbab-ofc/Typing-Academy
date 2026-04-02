export const HINDI_LESSON_CATEGORIES = [
  'मूलभूत',
  'ऊपरी पंक्ति',
  'निचली पंक्ति',
  'शिफ्ट और कैपिटल्स',
  'संख्याएँ',
  'विराम चिह्न और प्रतीक',
  'व्यावहारिक महारत'
];

export const HINDI_LESSONS = [
  { id: 1, title: 'हिंदी टाइपिंग परिचय', description: 'कुंजी स्थिति और लय की शुरुआत।', category: 'मूलभूत', keysPracticed: 'asdf ;lkj', content: 'asdf ;lkj asdf ;lkj asdf ;lkj', goal: '92% शुद्धता', difficulty: 'Easy' },
  { id: 2, title: 'मुद्रा और होम रो', description: 'होम रो पर स्थिर अभ्यास।', category: 'मूलभूत', keysPracticed: 'asdfg hjkl;', content: 'asdfg hjkl; asdfg hjkl; asdfg hjkl;', goal: '8 से कम गलतियाँ', difficulty: 'Easy' },
  { id: 3, title: 'उंगली स्थान ड्रिल', description: 'बाएँ-दाएँ हाथ संतुलन अभ्यास।', category: 'मूलभूत', keysPracticed: 'a s d f g h j k l ;', content: 'a s d f g h j k l ; h j k l ; a s d f g', goal: 'स्थिर लय', difficulty: 'Easy' },
  { id: 4, title: 'होम रो संयोजन 1', description: 'होम रो पैटर्न दोहराव।', category: 'मूलभूत', keysPracticed: 'asdfg ;lkjh', content: 'asdfg ;lkjh asdfg ;lkjh', goal: '10+ WPM', difficulty: 'Easy' },
  { id: 5, title: 'होम रो संयोजन 2', description: 'गति और सटीकता साथ में।', category: 'मूलभूत', keysPracticed: 'fdsa hjkl', content: 'fdsa hjkl fdsa hjkl fdsahjkl', goal: '90 सेकंड में पूरा करें', difficulty: 'Easy' },
  { id: 6, title: 'होम रो नियंत्रण', description: 'गलत कुंजी दबाव कम करें।', category: 'मूलभूत', keysPracticed: 'asdf jkl;', content: 'asdf jkl; asdf jkl; jkl; asdf', goal: '6 से कम गलतियाँ', difficulty: 'Easy' },
  { id: 7, title: 'होम रो शब्द प्रारूप', description: 'कुंजी-पैटर्न आधारित शब्द ड्रिल।', category: 'मूलभूत', keysPracticed: 'asdfg hjkl;', content: 'sad flag ask dash hall slag flask', goal: '93% शुद्धता', difficulty: 'Easy' },
  { id: 8, title: 'होम रो स्पीड', description: 'होम रो पर तेज़ अभ्यास।', category: 'मूलभूत', keysPracticed: 'asdfg ;lkjh', content: 'asdfg ;lkjh asdfg ;lkjh asdfg ;lkjh', goal: '16+ WPM', difficulty: 'Medium' },

  { id: 9, title: 'ऊपरी रो: e और i', description: 'होम रो से ऊपर पहुंच।', category: 'ऊपरी पंक्ति', keysPracticed: 'e i', content: 'deed side file idle slide field', goal: '92% शुद्धता', difficulty: 'Medium' },
  { id: 10, title: 'ऊपरी रो: r और u', description: 'सूचक उंगली पहुंच ड्रिल।', category: 'ऊपरी पंक्ति', keysPracticed: 'r u', content: 'rural sure user ruler route', goal: '7 से कम गलतियाँ', difficulty: 'Medium' },
  { id: 11, title: 'ऊपरी रो: w और o', description: 'रिंग फिंगर नियंत्रण।', category: 'ऊपरी पंक्ति', keysPracticed: 'w o', content: 'wood wool word wow row owl', goal: 'स्थिर गति', difficulty: 'Medium' },
  { id: 12, title: 'ऊपरी रो: q और p', description: 'किनारी कुंजी अभ्यास।', category: 'ऊपरी पंक्ति', keysPracticed: 'q p', content: 'quip equip paper opaque', goal: '90% शुद्धता', difficulty: 'Medium' },
  { id: 13, title: 'ऊपरी रो मिश्रित', description: 'पूरी ऊपरी रो का अभ्यास।', category: 'ऊपरी पंक्ति', keysPracticed: 'qwerty uiop', content: 'qwerty uiop qwerty uiop', goal: '18+ WPM', difficulty: 'Medium' },
  { id: 14, title: 'ऊपरी रो शब्द ड्रिल', description: 'ऊपरी रो शब्द अभ्यास।', category: 'ऊपरी पंक्ति', keysPracticed: 'q w e r t y u i o p', content: 'power route quiet upper wire point', goal: '10 से कम गलतियाँ', difficulty: 'Medium' },
  { id: 15, title: 'होम + ऊपरी संयोजन', description: 'दो रो का संयुक्त अभ्यास।', category: 'ऊपरी पंक्ति', keysPracticed: 'asdf + qwert', content: 'safe write quick read typed words', goal: '92% शुद्धता', difficulty: 'Medium' },
  { id: 16, title: 'होम + ऊपरी वाक्य', description: 'दो रो आधारित वाक्य टाइपिंग।', category: 'ऊपरी पंक्ति', keysPracticed: 'home + top', content: 'we type with proper finger reach and even speed.', goal: 'सतत प्रवाह', difficulty: 'Medium' },

  { id: 17, title: 'निचली रो: c और m', description: 'निचली रो केंद्र अभ्यास।', category: 'निचली पंक्ति', keysPracticed: 'c m', content: 'calm mimic came comic claim', goal: '91% शुद्धता', difficulty: 'Medium' },
  { id: 18, title: 'निचली रो: v और n', description: 'सूचक उंगली निचली पहुंच।', category: 'निचली पंक्ति', keysPracticed: 'v n', content: 'navy oven never vine even', goal: '8 से कम गलतियाँ', difficulty: 'Medium' },
  { id: 19, title: 'निचली रो: x और ,', description: 'अल्पविराम सहित ड्रिल।', category: 'निचली पंक्ति', keysPracticed: 'x ,', content: 'mix, wax, six, index, relax,', goal: '90% शुद्धता', difficulty: 'Medium' },
  { id: 20, title: 'निचली रो: z और .', description: 'पूर्णविराम सहित ड्रिल।', category: 'निचली पंक्ति', keysPracticed: 'z .', content: 'lazy zone. amaze. zero. size.', goal: 'पिंकी नियंत्रण', difficulty: 'Medium' },
  { id: 21, title: 'निचली रो मिश्रित', description: 'पूरी निचली रो अभ्यास।', category: 'निचली पंक्ति', keysPracticed: 'zxcvbnm ,./', content: 'zxcvbnm ,./ zxcvbnm ,./', goal: '18+ WPM', difficulty: 'Medium' },
  { id: 22, title: 'निचली रो शब्द ड्रिल', description: 'निचली रो शब्द पैटर्न।', category: 'निचली पंक्ति', keysPracticed: 'bottom + home', content: 'canvas moment basic vacuum maze', goal: '12 से कम गलतियाँ', difficulty: 'Medium' },
  { id: 23, title: 'पूर्ण अक्षर कुंजी अभ्यास', description: 'तीनों रो का संयुक्त अभ्यास।', category: 'निचली पंक्ति', keysPracticed: 'a-z', content: 'the quick brown fox jumps over a vivid maze.', goal: '94% शुद्धता', difficulty: 'Hard' },
  { id: 24, title: 'पूर्ण अक्षर वाक्य अभ्यास', description: 'सभी अक्षर मिश्रित वाक्य।', category: 'निचली पंक्ति', keysPracticed: 'all letters', content: 'pack my box with five dozen quality jars quickly.', goal: 'स्थिरता', difficulty: 'Hard' },

  { id: 25, title: 'शिफ्ट परिचय', description: 'शिफ्ट कुंजी का सही उपयोग।', category: 'शिफ्ट और कैपिटल्स', keysPracticed: 'Shift', content: 'Type A S D F and J K L with shift.', goal: '5 से कम केस त्रुटि', difficulty: 'Medium' },
  { id: 26, title: 'लेफ्ट शिफ्ट ड्रिल', description: 'दाएँ हाथ अक्षरों के लिए लेफ्ट शिफ्ट।', category: 'शिफ्ट और कैपिटल्स', keysPracticed: 'Left Shift', content: 'J K L U I O P in uppercase.', goal: 'सही शिफ्ट उपयोग', difficulty: 'Medium' },
  { id: 27, title: 'राइट शिफ्ट ड्रिल', description: 'बाएँ हाथ अक्षरों के लिए राइट शिफ्ट।', category: 'शिफ्ट और कैपिटल्स', keysPracticed: 'Right Shift', content: 'A S D F Q W E R in uppercase.', goal: 'सही जोड़ी', difficulty: 'Medium' },
  { id: 28, title: 'कैपिटल अक्षर अभ्यास', description: 'Uppercase शब्द अभ्यास।', category: 'शिफ्ट और कैपिटल्स', keysPracticed: 'Uppercase', content: 'INDIA KEYBOARD SPEED ACCURACY RHYTHM', goal: '91% शुद्धता', difficulty: 'Medium' },
  { id: 29, title: 'मिश्रित केस ड्रिल', description: 'Upper और lower केस स्विच।', category: 'शिफ्ट और कैपिटल्स', keysPracticed: 'Mixed Case', content: 'TypeWithControl and KeepCaseSwitchSmooth', goal: 'संतुलित गति', difficulty: 'Hard' },
  { id: 30, title: 'वाक्य केसिंग अभ्यास', description: 'वाक्य में सही कैपिटलाइजेशन।', category: 'शिफ्ट और कैपिटल्स', keysPracticed: 'Sentence Case', content: 'Every lesson starts small. Every session builds control.', goal: '95% केस शुद्धता', difficulty: 'Hard' },

  { id: 31, title: 'संख्या पंक्ति परिचय', description: 'संख्या कुंजियों का अभ्यास।', category: 'संख्याएँ', keysPracticed: '1 2 3 4 5 6 7 8 9 0', content: '1 2 3 4 5 6 7 8 9 0 1 2 3 4 5', goal: 'कम पहुँच त्रुटि', difficulty: 'Medium' },
  { id: 32, title: 'संख्या 1 से 5', description: 'बाएँ संख्या समूह।', category: 'संख्याएँ', keysPracticed: '1 2 3 4 5', content: '12345 54321 15243 32415', goal: '90% शुद्धता', difficulty: 'Medium' },
  { id: 33, title: 'संख्या 6 से 0', description: 'दाएँ संख्या समूह।', category: 'संख्याएँ', keysPracticed: '6 7 8 9 0', content: '67890 09876 68097 78906', goal: 'कम गलती', difficulty: 'Medium' },
  { id: 34, title: 'मिश्रित संख्या ड्रिल', description: 'पूरी संख्या पंक्ति पर गति।', category: 'संख्याएँ', keysPracticed: '0-9', content: '2048 1998 2026 4512 9087 3410', goal: '20+ WPM', difficulty: 'Hard' },
  { id: 35, title: 'शब्द + संख्या', description: 'व्यावहारिक संयोजन।', category: 'संख्याएँ', keysPracticed: 'letters + numbers', content: 'room 101 level 2 batch 45 unit 9', goal: 'पठनीयता', difficulty: 'Hard' },
  { id: 36, title: 'व्यावहारिक संख्या अभ्यास', description: 'वास्तविक उपयोग ड्रिल।', category: 'संख्याएँ', keysPracticed: 'letters + numbers', content: 'I practiced 25 minutes and scored 31 wpm.', goal: 'स्थिर गति', difficulty: 'Hard' },

  { id: 37, title: 'पूर्णविराम और अल्पविराम', description: 'विराम चिह्न ड्रिल।', category: 'विराम चिह्न और प्रतीक', keysPracticed: '. ,', content: 'Practice, pause, continue. Repeat, improve, type.', goal: 'सही विराम', difficulty: 'Medium' },
  { id: 38, title: 'प्रश्न और विस्मय', description: 'Shift आधारित विराम चिह्न।', category: 'विराम चिह्न और प्रतीक', keysPracticed: '? !', content: 'Are you ready? Keep going! Repeat again?', goal: 'प्रवाह बनाएँ', difficulty: 'Hard' },
  { id: 39, title: 'कोलन सेमीकोलन अपोस्ट्रॉफ', description: 'जटिल विराम चिह्न नियंत्रण।', category: 'विराम चिह्न और प्रतीक', keysPracticed: ': ; " \'' , content: 'He said: "Type well; type smart."', goal: '92% शुद्धता', difficulty: 'Hard' },
  { id: 40, title: 'प्रतीक परिचय', description: 'सामान्य प्रतीक कुंजियाँ।', category: 'विराम चिह्न और प्रतीक', keysPracticed: '@ # $ % & * ( )', content: 'mail@site.com cost $20 rank #1 score 95%', goal: 'सही प्रतीक', difficulty: 'Hard' },
  { id: 41, title: 'मिश्रित विराम ड्रिल', description: 'वाक्य में मिश्रित विराम।', category: 'विराम चिह्न और प्रतीक', keysPracticed: 'mixed punctuation', content: 'Wait, what happened? Type again; keep marks right!', goal: '10 से कम गलतियाँ', difficulty: 'Hard' },
  { id: 42, title: 'सही विराम वाक्य अभ्यास', description: 'व्यावहारिक विराम वाक्य।', category: 'विराम चिह्न और प्रतीक', keysPracticed: 'full set', content: 'Typing: comma, colon, semicolon; quote and apostrophe.', goal: '95% शुद्धता', difficulty: 'Hard' },

  { id: 43, title: 'सामान्य शब्द अभ्यास', description: 'अक्सर उपयोग होने वाले शब्द।', category: 'व्यावहारिक महारत', keysPracticed: 'common words', content: 'because people should could would before through between', goal: '24+ WPM', difficulty: 'Hard' },
  { id: 44, title: 'सामान्य वाक्य अभ्यास', description: 'दैनिक उपयोग वाक्य।', category: 'व्यावहारिक महारत', keysPracticed: 'sentences', content: 'I practice daily and keep accuracy steady every session.', goal: '94% शुद्धता', difficulty: 'Hard' },
  { id: 45, title: 'पैराग्राफ टाइपिंग 1', description: 'पहला लंबा पैराग्राफ।', category: 'व्यावहारिक महारत', keysPracticed: 'paragraph', content: 'Typing paragraph one trains rhythm across short and long words with steady spacing and punctuation.', goal: '18 से कम गलतियाँ', difficulty: 'Hard' },
  { id: 46, title: 'पैराग्राफ टाइपिंग 2', description: 'दूसरा पैराग्राफ और सहनशक्ति।', category: 'व्यावहारिक महारत', keysPracticed: 'paragraph', content: 'Typing paragraph two increases sentence length and key variety while maintaining consistent control.', goal: '93%+ शुद्धता', difficulty: 'Hard' },
  { id: 47, title: 'शुद्धता चुनौती', description: 'स्पीड से पहले शुद्धता।', category: 'व्यावहारिक महारत', keysPracticed: 'all keys', content: 'Type each character exactly as shown and keep words unchanged.', goal: '97%+ शुद्धता', difficulty: 'Hard' },
  { id: 48, title: 'स्पीड चुनौती', description: 'गति वृद्धि चुनौती।', category: 'व्यावहारिक महारत', keysPracticed: 'all keys', content: 'Increase pace across each line without dropping letters.', goal: '30+ WPM', difficulty: 'Hard' },
  { id: 49, title: 'अंतिम अभ्यास परीक्षण', description: 'समग्र मिश्रित परीक्षण।', category: 'व्यावहारिक महारत', keysPracticed: 'all keys', content: 'Combine letters numbers and punctuation in one test line.', goal: 'संतुलित प्रदर्शन', difficulty: 'Expert' },
  { id: 50, title: 'अंतिम महारत पाठ', description: 'पूर्ण कौशल सत्यापन।', category: 'व्यावहारिक महारत', keysPracticed: 'all keys', content: 'Final mastery test checks complete keyboard control with practical mixed typing.', goal: '95% शुद्धता के साथ पूर्ण करें', difficulty: 'Expert', tips: 'नियमित अभ्यास से गति और शुद्धता स्थिर रहती है।' }
];

export function getHindiLessonById(lessonId) {
  return HINDI_LESSONS.find((lesson) => lesson.id === Number(lessonId));
}
