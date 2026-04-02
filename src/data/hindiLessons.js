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
  { id: 1, title: 'टाइपिंग परिचय', description: 'हिंदी टाइपिंग की शुरुआत और सही गति।', category: 'मूलभूत', keysPracticed: 'क ख ग घ', content: 'कखगघ कखगघ कखगघ कखगघ', goal: '92% शुद्धता', difficulty: 'Easy' },
  { id: 2, title: 'बैठने की सही मुद्रा', description: 'मुद्रा बनाए रखते हुए टाइपिंग अभ्यास।', category: 'मूलभूत', keysPracticed: 'मूल पंक्ति', content: 'सीधी पीठ हल्के कंधे स्थिर कलाई समान दूरी', goal: '8 से कम गलतियाँ', difficulty: 'Easy' },
  { id: 3, title: 'उंगली स्थान अभ्यास', description: 'उंगलियों की सही स्थिति पर नियंत्रण।', category: 'मूलभूत', keysPracticed: 'मूल पंक्ति', content: 'बाएँ हाथ दाएँ हाथ अंगूठा स्पेस पर', goal: 'लय स्थिर रखें', difficulty: 'Easy' },
  { id: 4, title: 'मूल पंक्ति परिचय', description: 'मूल पंक्ति के अक्षरों का अभ्यास।', category: 'मूलभूत', keysPracticed: 'मूल पंक्ति', content: 'असदफ जकल; असदफ जकल; असदफ जकल;', goal: '10+ WPM', difficulty: 'Easy' },
  { id: 5, title: 'मूल पंक्ति पुनरावृत्ति', description: 'दोहराव से मांसपेशी स्मृति मजबूत करें।', category: 'मूलभूत', keysPracticed: 'मूल पंक्ति शब्द', content: 'कलम दलम सरल जलम फलस लश्कर', goal: '90 सेकंड से कम', difficulty: 'Easy' },
  { id: 6, title: 'अक्षर नियंत्रण', description: 'गलत कुंजी दबाव कम करना।', category: 'मूलभूत', keysPracticed: 'मूल पंक्ति', content: 'सरल सलाम सलक दलक कलस फलक', goal: '6 से कम गलतियाँ', difficulty: 'Easy' },
  { id: 7, title: 'मूल पंक्ति शब्द', description: 'छोटे शब्दों में प्रवाह अभ्यास।', category: 'मूलभूत', keysPracticed: 'शब्द', content: 'घर कलम जल फल सरल नगर पल', goal: '93% शुद्धता', difficulty: 'Easy' },
  { id: 8, title: 'मूल पंक्ति गति', description: 'शुद्धता के साथ गति बढ़ाना।', category: 'मूलभूत', keysPracticed: 'मूल पंक्ति', content: 'घर नगर सरल जल कलम फल दर', goal: '16+ WPM', difficulty: 'Medium' },

  { id: 9, title: 'ऊपरी पंक्ति ई और इ', description: 'ऊपरी पंक्ति पहुंच नियंत्रण।', category: 'ऊपरी पंक्ति', keysPracticed: 'ई इ', content: 'ईख इधर ईमान इशारा ईंट इत्र', goal: '92% शुद्धता', difficulty: 'Medium' },
  { id: 10, title: 'ऊपरी पंक्ति र और उ', description: 'सूचक उंगली उठान अभ्यास।', category: 'ऊपरी पंक्ति', keysPracticed: 'र उ', content: 'रूप उरु रुद्र उधर रुला उबाल', goal: '7 से कम गलतियाँ', difficulty: 'Medium' },
  { id: 11, title: 'ऊपरी पंक्ति व और ओ', description: 'ऊपरी कुंजियों पर लय बनाएँ।', category: 'ऊपरी पंक्ति', keysPracticed: 'व ओ', content: 'वोट ओस ओढ़ा वचन ओवन वोल्ट', goal: 'स्थिर गति', difficulty: 'Medium' },
  { id: 12, title: 'ऊपरी पंक्ति क्यू और पी', description: 'किनारी कुंजियों का अभ्यास।', category: 'ऊपरी पंक्ति', keysPracticed: 'Q P', content: 'पाठ पवन पथक पाठ्य पापड़', goal: '90% शुद्धता', difficulty: 'Medium' },
  { id: 13, title: 'ऊपरी मिश्रित ड्रिल', description: 'ऊपरी पंक्ति मिश्रित शब्द।', category: 'ऊपरी पंक्ति', keysPracticed: 'मिश्रित', content: 'ऊर्जा उपयोग प्रवाह योजना प्रयास प्रयास', goal: '18+ WPM', difficulty: 'Medium' },
  { id: 14, title: 'ऊपरी शब्द ड्रिल', description: 'उपयोगी शब्दों का अभ्यास।', category: 'ऊपरी पंक्ति', keysPracticed: 'ऊपरी + मूल', content: 'प्रयास योग्यता अनुभव प्रक्रिया उपयोग', goal: '10 से कम गलतियाँ', difficulty: 'Medium' },
  { id: 15, title: 'मूल + ऊपरी शब्द', description: 'दोनों पंक्तियों का संयुक्त अभ्यास।', category: 'ऊपरी पंक्ति', keysPracticed: 'संयुक्त', content: 'सुगम योजना विचार प्रयास उपयोगी पाठ', goal: '92% शुद्धता', difficulty: 'Medium' },
  { id: 16, title: 'मूल + ऊपरी वाक्य', description: 'सरल वाक्य टाइपिंग।', category: 'ऊपरी पंक्ति', keysPracticed: 'वाक्य', content: 'यह पाठ आपको ऊपरी पंक्ति में बेहतर नियंत्रण देता है।', goal: 'सतत प्रवाह', difficulty: 'Medium' },

  { id: 17, title: 'निचली पंक्ति C और M', description: 'निचली पंक्ति केंद्र कुंजी अभ्यास।', category: 'निचली पंक्ति', keysPracticed: 'C M', content: 'कमल चमक चमचम मकान कमरा चमेली', goal: '91% शुद्धता', difficulty: 'Medium' },
  { id: 18, title: 'निचली पंक्ति V और N', description: 'निचली पहुंच के साथ संतुलन।', category: 'निचली पंक्ति', keysPracticed: 'V N', content: 'वन नदी नवीन जीवन चयन नमन', goal: '8 से कम गलतियाँ', difficulty: 'Medium' },
  { id: 19, title: 'निचली पंक्ति X और कॉमा', description: 'अल्पविराम के साथ संयोजन।', category: 'निचली पंक्ति', keysPracticed: 'X ,', content: 'मिक्स, टेक्स्ट, अभ्यास, क्रम, लक्ष्य,', goal: '90% शुद्धता', difficulty: 'Medium' },
  { id: 20, title: 'निचली पंक्ति Z और पूर्णविराम', description: 'पूर्णविराम के साथ नियंत्रण।', category: 'निचली पंक्ति', keysPracticed: 'Z .', content: 'आज. कल. लक्ष्य. अभ्यास. विजय.', goal: 'पिंकी नियंत्रण', difficulty: 'Medium' },
  { id: 21, title: 'निचली मिश्रित ड्रिल', description: 'निचली पंक्ति मिश्रित अभ्यास।', category: 'निचली पंक्ति', keysPracticed: 'मिश्रित', content: 'चयन, कमान, नवीन, समय, मज़बूत, नियम।', goal: '18+ WPM', difficulty: 'Medium' },
  { id: 22, title: 'निचली शब्द ड्रिल', description: 'शब्द स्तर पर अभ्यास।', category: 'निचली पंक्ति', keysPracticed: 'निचली + मूल', content: 'चमन, वनस्पति, कमान, मंजिल, मेहनत, नमक', goal: '12 से कम गलतियाँ', difficulty: 'Medium' },
  { id: 23, title: 'पूर्ण वर्णमाला कुंजी', description: 'सभी अक्षरों का संयुक्त अभ्यास।', category: 'निचली पंक्ति', keysPracticed: 'अ-ह', content: 'तेज़ भूरी लोमड़ी शांत रास्ते पर चलती और लौटती है।', goal: '94% शुद्धता', difficulty: 'Hard' },
  { id: 24, title: 'पूर्ण वर्णमाला वाक्य', description: 'वर्ण विविधता वाले वाक्य।', category: 'निचली पंक्ति', keysPracticed: 'सभी अक्षर', content: 'मेरे डिब्बे में पाँच दर्जन अच्छी बोतलें और कई छोटे जार हैं।', goal: 'स्थिरता', difficulty: 'Hard' },

  { id: 25, title: 'शिफ्ट कुंजी परिचय', description: 'शिफ्ट के साथ बड़े अक्षर।', category: 'शिफ्ट और कैपिटल्स', keysPracticed: 'Shift', content: 'A S D F और J K L बड़े अक्षरों में लिखें।', goal: '5 से कम केस त्रुटि', difficulty: 'Medium' },
  { id: 26, title: 'लेफ्ट शिफ्ट ड्रिल', description: 'दाएँ हाथ अक्षरों के लिए लेफ्ट शिफ्ट।', category: 'शिफ्ट और कैपिटल्स', keysPracticed: 'Left Shift', content: 'J K L U I O P को बड़े अक्षर में टाइप करें।', goal: 'सही शिफ्ट उपयोग', difficulty: 'Medium' },
  { id: 27, title: 'राइट शिफ्ट ड्रिल', description: 'बाएँ हाथ अक्षरों के लिए राइट शिफ्ट।', category: 'शिफ्ट और कैपिटल्स', keysPracticed: 'Right Shift', content: 'A S D F Q W E R को बड़े अक्षर में टाइप करें।', goal: 'सही जोड़ी', difficulty: 'Medium' },
  { id: 28, title: 'कैपिटल अक्षर अभ्यास', description: 'बड़े अक्षर शब्द टाइपिंग।', category: 'शिफ्ट और कैपिटल्स', keysPracticed: 'Uppercase', content: 'भारत, ज्ञान, कीबोर्ड, अभ्यास, प्रगति, अनुशासन।', goal: '91% शुद्धता', difficulty: 'Medium' },
  { id: 29, title: 'मिश्रित केस ड्रिल', description: 'Uppercase और lowercase परिवर्तन।', category: 'शिफ्ट और कैपिटल्स', keysPracticed: 'Mixed Case', content: 'TypeHindiWithMixedCase और शब्द बदलते जाएँ।', goal: 'संतुलित गति', difficulty: 'Hard' },
  { id: 30, title: 'वाक्य कैपिटलाइजेशन', description: 'वाक्यों में सही कैपिटल नियम।', category: 'शिफ्ट और कैपिटल्स', keysPracticed: 'Sentence Case', content: 'हर पाठ छोटा शुरू होता है। हर अभ्यास परिणाम देता है।', goal: '95% केस शुद्धता', difficulty: 'Hard' },

  { id: 31, title: 'संख्या पंक्ति परिचय', description: 'संख्या कुंजियों का अभ्यास।', category: 'संख्याएँ', keysPracticed: '1 2 3 4 5 6 7 8 9 0', content: '1 2 3 4 5 6 7 8 9 0 बार-बार टाइप करें।', goal: 'कम पहुँच त्रुटि', difficulty: 'Medium' },
  { id: 32, title: 'संख्या 1 से 5', description: 'बाएँ संख्या समूह अभ्यास।', category: 'संख्याएँ', keysPracticed: '1 2 3 4 5', content: '12345 54321 15243 32415', goal: '90% शुद्धता', difficulty: 'Medium' },
  { id: 33, title: 'संख्या 6 से 0', description: 'दाएँ संख्या समूह अभ्यास।', category: 'संख्याएँ', keysPracticed: '6 7 8 9 0', content: '67890 09876 68097 78906', goal: 'कम गलती', difficulty: 'Medium' },
  { id: 34, title: 'मिश्रित संख्या ड्रिल', description: 'संपूर्ण संख्या पंक्ति पर गति।', category: 'संख्याएँ', keysPracticed: '0-9', content: '2048 1998 2026 4512 9087 3410', goal: '20+ WPM', difficulty: 'Hard' },
  { id: 35, title: 'शब्द + संख्या', description: 'व्यावहारिक शब्द और संख्या संयोजन।', category: 'संख्याएँ', keysPracticed: 'अक्षर + संख्या', content: 'कमरा 101, स्तर 2, बैच 45, इकाई 9।', goal: 'पठनीयता', difficulty: 'Hard' },
  { id: 36, title: 'व्यावहारिक संख्या अभ्यास', description: 'वास्तविक उपयोग आधारित संख्या अभ्यास।', category: 'संख्याएँ', keysPracticed: 'अक्षर + संख्या', content: 'मैंने 25 मिनट अभ्यास किया और 31 wpm प्राप्त किया।', goal: 'स्थिर गति', difficulty: 'Hard' },

  { id: 37, title: 'पूर्णविराम और अल्पविराम', description: 'विराम चिह्न गति नियंत्रण।', category: 'विराम चिह्न और प्रतीक', keysPracticed: '. ,', content: 'रुको, लिखो, आगे बढ़ो। फिर, दोहराओ, सुधारो।', goal: 'सही विराम', difficulty: 'Medium' },
  { id: 38, title: 'प्रश्नवाचक और विस्मयादिबोधक', description: 'शिफ्ट आधारित विराम चिह्न अभ्यास।', category: 'विराम चिह्न और प्रतीक', keysPracticed: '? !', content: 'क्या आप तैयार हैं? अब तेज़ लिखो! फिर दोहराएँ?', goal: 'प्रवाह बनाएँ', difficulty: 'Hard' },
  { id: 39, title: 'कोलन सेमीकोलन अपोस्ट्रॉफ', description: 'जटिल विराम चिह्न नियंत्रण।', category: 'विराम चिह्न और प्रतीक', keysPracticed: ': ; " \'', content: 'वह बोला: "धीरे; सही; फिर तेज़।"', goal: '92% शुद्धता', difficulty: 'Hard' },
  { id: 40, title: 'प्रतीक परिचय', description: 'सामान्य प्रतीकों का अभ्यास।', category: 'विराम चिह्न और प्रतीक', keysPracticed: '@ # $ % & * ( )', content: 'mail@site.com, लागत $20, रैंक #1, स्कोर 95%.', goal: 'सही प्रतीक', difficulty: 'Hard' },
  { id: 41, title: 'मिश्रित विराम ड्रिल', description: 'वाक्य में मिश्रित विराम चिह्न।', category: 'विराम चिह्न और प्रतीक', keysPracticed: 'मिश्रित', content: 'रुको, क्या हुआ? फिर लिखो; चिह्न सही रखो!', goal: '10 से कम गलतियाँ', difficulty: 'Hard' },
  { id: 42, title: 'सही विराम वाक्य अभ्यास', description: 'व्यावहारिक विराम वाक्य टाइपिंग।', category: 'विराम चिह्न और प्रतीक', keysPracticed: 'पूर्ण सेट', content: 'टाइपिंग: कॉमा, कोलन, सेमीकोलन; उद्धरण और अपोस्ट्रॉफ।', goal: '95% शुद्धता', difficulty: 'Hard' },

  { id: 43, title: 'सामान्य शब्द अभ्यास', description: 'अक्सर उपयोग होने वाले शब्द।', category: 'व्यावहारिक महारत', keysPracticed: 'सामान्य शब्द', content: 'क्योंकि लोग चाहिए होगा पहले बाद बीच ऊपर नीचे', goal: '24+ WPM', difficulty: 'Hard' },
  { id: 44, title: 'सामान्य वाक्य अभ्यास', description: 'दैनिक उपयोग के वाक्य।', category: 'व्यावहारिक महारत', keysPracticed: 'वाक्य', content: 'मैं रोज थोड़ा अभ्यास करता हूँ और शुद्धता स्थिर रखता हूँ।', goal: '94% शुद्धता', difficulty: 'Hard' },
  { id: 45, title: 'पैराग्राफ टाइपिंग 1', description: 'पहला लंबा पैराग्राफ अभ्यास।', category: 'व्यावहारिक महारत', keysPracticed: 'पैराग्राफ', content: 'यह पैराग्राफ छोटे और लंबे शब्दों का संतुलन देता है। सही स्पेस, सही विराम और स्थिर गति के साथ पूरी पंक्ति टाइप करें।', goal: '18 से कम गलतियाँ', difficulty: 'Hard' },
  { id: 46, title: 'पैराग्राफ टाइपिंग 2', description: 'दूसरा लंबा पैराग्राफ और सहनशक्ति।', category: 'व्यावहारिक महारत', keysPracticed: 'पैराग्राफ', content: 'दूसरे पैराग्राफ में वाक्य लंबाई बढ़ती है और कुंजियों का मिश्रण आता है। एक समान लय रखें और हर पंक्ति को बिना जल्दबाज़ी पूरा करें।', goal: '93%+ शुद्धता', difficulty: 'Hard' },
  { id: 47, title: 'शुद्धता चुनौती', description: 'स्पीड से पहले शुद्धता चुनौती।', category: 'व्यावहारिक महारत', keysPracticed: 'सभी कुंजियाँ', content: 'हर अक्षर जैसा दिखे वैसा ही टाइप करें और शब्द न बदलें।', goal: '97%+ शुद्धता', difficulty: 'Hard' },
  { id: 48, title: 'स्पीड चुनौती', description: 'गति वृद्धि चुनौती।', category: 'व्यावहारिक महारत', keysPracticed: 'सभी कुंजियाँ', content: 'हर पंक्ति में गति बढ़ाएँ लेकिन अक्षर और चिह्न न छूटें।', goal: '30+ WPM', difficulty: 'Hard' },
  { id: 49, title: 'अंतिम अभ्यास परीक्षण', description: 'समग्र मिश्रित परीक्षण।', category: 'व्यावहारिक महारत', keysPracticed: 'सभी कुंजियाँ', content: 'अक्षर, संख्या और विराम चिह्न को एक संयुक्त परीक्षण में टाइप करें।', goal: 'संतुलित प्रदर्शन', difficulty: 'Expert' },
  { id: 50, title: 'अंतिम महारत पाठ', description: 'पूर्ण कौशल सत्यापन पाठ।', category: 'व्यावहारिक महारत', keysPracticed: 'सभी कुंजियाँ', content: 'यह अंतिम परीक्षण लंबे शब्द, प्रतीक, संख्या और विराम के साथ पूर्ण कीबोर्ड नियंत्रण जाँचता है।', goal: '95% शुद्धता के साथ पूर्ण करें', difficulty: 'Expert', tips: 'नियमित अभ्यास से गति और शुद्धता स्थिर रहती है।' }
];

export function getHindiLessonById(lessonId) {
  return HINDI_LESSONS.find((lesson) => lesson.id === Number(lessonId));
}
