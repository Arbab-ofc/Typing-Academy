export const LESSON_CATEGORIES = [
  'Foundations',
  'Top Row',
  'Bottom Row',
  'Shift & Capitals',
  'Numbers',
  'Punctuation & Symbols',
  'Real-world Mastery'
];

const lessons = [
  {
    id: 1,
    title: 'Introduction to Typewriting',
    description: 'Get comfortable with rhythm, breathing, and steady key presses.',
    category: 'Foundations',
    keysPracticed: 'a s d f j k l ;',
    content: 'asdf jkl; asdf jkl; keep your eyes forward and type with calm focus.',
    goal: 'Reach 92% accuracy',
    difficulty: 'Easy',
    tips: 'Type smoothly. Do not rush early lessons.'
  },
  {
    id: 2,
    title: 'Proper Sitting Posture',
    description: 'Practice while maintaining neutral posture and wrist alignment.',
    category: 'Foundations',
    keysPracticed: 'home row',
    content: 'sit tall shoulders relaxed elbows light wrists level and fingers curved.',
    goal: 'Finish with fewer than 8 mistakes',
    difficulty: 'Easy',
    tips: 'Feet flat, back supported, wrists not bent.'
  },
  {
    id: 3,
    title: 'Finger Placement Basics',
    description: 'Lock in standard starting positions for all fingers.',
    category: 'Foundations',
    keysPracticed: 'a s d f j k l ;',
    content: 'left hand on asdf right hand on jkl; thumbs rest on the space bar.',
    goal: 'Maintain rhythm for entire lesson',
    difficulty: 'Easy',
    tips: 'Return every finger to the home row after each strike.'
  },
  {
    id: 4,
    title: 'Home Row Keys Introduction',
    description: 'Learn controlled presses across the home row.',
    category: 'Foundations',
    keysPracticed: 'a s d f j k l ;',
    content: 'asdf asdf jkl; jkl; asdf jkl; fjdsa ;lkj',
    goal: 'Hit 10+ WPM with 90% accuracy',
    difficulty: 'Easy'
  },
  {
    id: 5,
    title: 'Home Row Repetition Drill',
    description: 'Build muscle memory with repeated patterns.',
    category: 'Foundations',
    keysPracticed: 'a s d f j k l ;',
    content: 'dad fad sad lad ask flask all fall salad',
    goal: 'Complete lesson in under 90 seconds',
    difficulty: 'Easy'
  },
  {
    id: 6,
    title: 'Home Row Letter Control',
    description: 'Control finger travel and reduce accidental keys.',
    category: 'Foundations',
    keysPracticed: 'a s d f j k l ;',
    content: 'all shall ask flask salad lads fall as lad asks',
    goal: 'Keep mistakes below 6',
    difficulty: 'Easy'
  },
  {
    id: 7,
    title: 'Home Row Words Practice',
    description: 'Transition from drills to meaningful short words.',
    category: 'Foundations',
    keysPracticed: 'home row words',
    content: 'sad fall ask dash shall flask all lads',
    goal: 'Maintain 93% accuracy',
    difficulty: 'Easy'
  },
  {
    id: 8,
    title: 'Home Row Speed Practice',
    description: 'Push controlled speed while preserving form.',
    category: 'Foundations',
    keysPracticed: 'home row',
    content: 'ask all lads dash flask shall fall all ask',
    goal: 'Reach 16+ WPM',
    difficulty: 'Medium'
  },
  {
    id: 9,
    title: 'Reaching E and I',
    description: 'Stretch from home row to E and I with proper finger return.',
    category: 'Top Row',
    keysPracticed: 'e i',
    content: 'deed side file idle slide field isle',
    goal: 'Keep accuracy above 92%',
    difficulty: 'Medium'
  },
  {
    id: 10,
    title: 'Reaching R and U',
    description: 'Practice index finger lifts to R and U.',
    category: 'Top Row',
    keysPracticed: 'r u',
    content: 'rural sure user ruler juror drurur',
    goal: 'Less than 7 mistakes',
    difficulty: 'Medium'
  },
  {
    id: 11,
    title: 'Reaching W and O',
    description: 'Coordinate ring finger reaches for W and O.',
    category: 'Top Row',
    keysPracticed: 'w o',
    content: 'wood wool word sow row wow owl',
    goal: 'Type with smooth tempo',
    difficulty: 'Medium'
  },
  {
    id: 12,
    title: 'Reaching Q and P',
    description: 'Build pinky precision for Q and P.',
    category: 'Top Row',
    keysPracticed: 'q p',
    content: 'quip equip pail palace equal opaque',
    goal: '90%+ accuracy',
    difficulty: 'Medium'
  },
  {
    id: 13,
    title: 'Top Row Mixed Drill',
    description: 'Blend top-row reaches in balanced drills.',
    category: 'Top Row',
    keysPracticed: 'q w e r u i o p',
    content: 'power require wire upper quiet pioneer pure rope',
    goal: 'Reach 18+ WPM',
    difficulty: 'Medium'
  },
  {
    id: 14,
    title: 'Top Row Word Drill',
    description: 'Type practical top-row dominant words.',
    category: 'Top Row',
    keysPracticed: 'top row + home row',
    content: 'owner power purpose wise equip pure route proud',
    goal: 'Keep mistakes below 10',
    difficulty: 'Medium'
  },
  {
    id: 15,
    title: 'Home + Top Row Words',
    description: 'Integrate home row and top row in fluent words.',
    category: 'Top Row',
    keysPracticed: 'home + top',
    content: 'regular wise idea shallow phrase secure loud repose',
    goal: '92%+ accuracy and steady pace',
    difficulty: 'Medium'
  },
  {
    id: 16,
    title: 'Home + Top Row Sentences',
    description: 'Type simple mixed-row sentences.',
    category: 'Top Row',
    keysPracticed: 'home + top',
    content: 'we are sure this lesson will improve your pure typing posture.',
    goal: 'Complete with confidence',
    difficulty: 'Medium'
  },
  {
    id: 17,
    title: 'Reaching C and M',
    description: 'Add bottom row center keys C and M.',
    category: 'Bottom Row',
    keysPracticed: 'c m',
    content: 'calm mimic came comic claim creamy',
    goal: 'Keep accuracy above 91%',
    difficulty: 'Medium'
  },
  {
    id: 18,
    title: 'Reaching V and N',
    description: 'Practice pointer movement to V and N.',
    category: 'Bottom Row',
    keysPracticed: 'v n',
    content: 'navy oven never vine even novice',
    goal: 'Limit mistakes to 8',
    difficulty: 'Medium'
  },
  {
    id: 19,
    title: 'Reaching X and Comma',
    description: 'Control left ring finger and right middle finger reaches.',
    category: 'Bottom Row',
    keysPracticed: 'x ,',
    content: 'mix, wax, six, axis, relax, fix, index,',
    goal: '90%+ accuracy',
    difficulty: 'Medium'
  },
  {
    id: 20,
    title: 'Reaching Z and Period',
    description: 'Anchor pinkies while extending to Z and period.',
    category: 'Bottom Row',
    keysPracticed: 'z .',
    content: 'lazy zone, amaze. zero haze. size prize.',
    goal: 'Reduce pinky misses',
    difficulty: 'Medium'
  },
  {
    id: 21,
    title: 'Bottom Row Mixed Drill',
    description: 'Mixed bottom-row targets with rhythm.',
    category: 'Bottom Row',
    keysPracticed: 'z x c v b n m , .',
    content: 'zinc, comic, brave, avenue, cabin, move, amaze, basic.',
    goal: '18+ WPM and 91% accuracy',
    difficulty: 'Medium'
  },
  {
    id: 22,
    title: 'Bottom Row Word Drill',
    description: 'Build confidence with full-word bottom-row usage.',
    category: 'Bottom Row',
    keysPracticed: 'bottom + home',
    content: 'canvas, moment, dynamic, civic, banana, vacuum, maze.',
    goal: 'Finish with fewer than 12 mistakes',
    difficulty: 'Medium'
  },
  {
    id: 23,
    title: 'Full Alphabet Key Practice',
    description: 'Cycle through alphabet patterns with control.',
    category: 'Bottom Row',
    keysPracticed: 'a-z',
    content: 'the quick brown fox jumps over a calm and vivid maze.',
    goal: '94% accuracy target',
    difficulty: 'Hard'
  },
  {
    id: 24,
    title: 'Full Alphabet Sentence Practice',
    description: 'Type complete alphabet-rich sentences.',
    category: 'Bottom Row',
    keysPracticed: 'all letters',
    content: 'pack my box with five dozen quality jars and bring them quickly.',
    goal: 'Consistency over raw speed',
    difficulty: 'Hard'
  },
  {
    id: 25,
    title: 'Shift Key Introduction',
    description: 'Learn pairing Shift with opposite hand.',
    category: 'Shift & Capitals',
    keysPracticed: 'Shift',
    content: 'Type A S D F and J K L with smooth shift timing.',
    goal: 'Keep uppercase errors below 5',
    difficulty: 'Medium'
  },
  {
    id: 26,
    title: 'Left Shift Drill',
    description: 'Use left Shift for right-hand uppercase keys.',
    category: 'Shift & Capitals',
    keysPracticed: 'left Shift',
    content: 'J K L U I O P become J K L U I O P with left Shift.',
    goal: 'Correct shift pairing',
    difficulty: 'Medium'
  },
  {
    id: 27,
    title: 'Right Shift Drill',
    description: 'Use right Shift for left-hand uppercase keys.',
    category: 'Shift & Capitals',
    keysPracticed: 'right Shift',
    content: 'A S D F Q W E R with right Shift and gentle hand balance.',
    goal: 'Accurate opposite-hand shift',
    difficulty: 'Medium'
  },
  {
    id: 28,
    title: 'Capital Letters Practice',
    description: 'Practice uppercase words in practical patterns.',
    category: 'Shift & Capitals',
    keysPracticed: 'uppercase letters',
    content: 'India, Earth, Keyboard, Focus, Muscle, Rhythm, Accuracy.',
    goal: 'Maintain 91%+ accuracy',
    difficulty: 'Medium'
  },
  {
    id: 29,
    title: 'Mixed Uppercase Lowercase Drill',
    description: 'Switch case fluidly without breaking flow.',
    category: 'Shift & Capitals',
    keysPracticed: 'mixed case',
    content: 'TypingFeelsBetterWhenYouStayCalm and keep steady breathing.',
    goal: 'Complete with balanced speed',
    difficulty: 'Hard'
  },
  {
    id: 30,
    title: 'Sentence Capitalization Practice',
    description: 'Apply sentence-case rules naturally.',
    category: 'Shift & Capitals',
    keysPracticed: 'capitalization',
    content: 'Every lesson starts small. Every practice session builds mastery.',
    goal: '95% punctuation and case correctness',
    difficulty: 'Hard'
  },
  {
    id: 31,
    title: 'Number Row Introduction',
    description: 'Understand finger zones for number row keys.',
    category: 'Numbers',
    keysPracticed: '1 2 3 4 5 6 7 8 9 0',
    content: '1 2 3 4 5 6 7 8 9 0 then back to home row every time.',
    goal: 'Minimal reach errors',
    difficulty: 'Medium'
  },
  {
    id: 32,
    title: 'Numbers 1 to 5',
    description: 'Practice left-side numbers with control.',
    category: 'Numbers',
    keysPracticed: '1 2 3 4 5',
    content: '12345 54321 15243 32415 45123',
    goal: '90%+ accuracy',
    difficulty: 'Medium'
  },
  {
    id: 33,
    title: 'Numbers 6 to 0',
    description: 'Practice right-side numbers with precision.',
    category: 'Numbers',
    keysPracticed: '6 7 8 9 0',
    content: '67890 09876 68097 78906 97068',
    goal: 'Reduce ring and pinky misses',
    difficulty: 'Medium'
  },
  {
    id: 34,
    title: 'Mixed Number Drill',
    description: 'Improve speed across entire number row.',
    category: 'Numbers',
    keysPracticed: '0-9',
    content: '2048 1998 2026 4512 9087 3410 7755',
    goal: 'Reach 20+ WPM',
    difficulty: 'Hard'
  },
  {
    id: 35,
    title: 'Words + Numbers',
    description: 'Combine words and numbers in realistic entries.',
    category: 'Numbers',
    keysPracticed: 'letters + numbers',
    content: 'room 101, level 2, batch 45, unit 9, phase 3 ready.',
    goal: 'Maintain readability and rhythm',
    difficulty: 'Hard'
  },
  {
    id: 36,
    title: 'Practical Mixed Number Exercises',
    description: 'Use numbers in practical typed statements.',
    category: 'Numbers',
    keysPracticed: 'letters + numbers',
    content: 'I practiced 25 minutes and scored 31 wpm at 94 percent accuracy.',
    goal: 'Stable speed with low errors',
    difficulty: 'Hard'
  },
  {
    id: 37,
    title: 'Full Stop and Comma',
    description: 'Master sentence pacing with period and comma.',
    category: 'Punctuation & Symbols',
    keysPracticed: '. ,',
    content: 'Practice, pause, and continue. Keep calm, stay focused, type cleanly.',
    goal: 'Accurate punctuation placement',
    difficulty: 'Medium'
  },
  {
    id: 38,
    title: 'Question Mark and Exclamation Mark',
    description: 'Use shift punctuation confidently.',
    category: 'Punctuation & Symbols',
    keysPracticed: '? !',
    content: 'Are you ready? Keep going! Is your posture stable? Great!',
    goal: 'Maintain flow while using shift symbols',
    difficulty: 'Hard'
  },
  {
    id: 39,
    title: 'Colon Semicolon Apostrophe Quotation Marks',
    description: 'Refine precision on paired punctuation.',
    category: 'Punctuation & Symbols',
    keysPracticed: ": ; ' \"",
    content: 'She said: "Type well; type smart." It\'s all about control.',
    goal: 'Accuracy above 92%',
    difficulty: 'Hard'
  },
  {
    id: 40,
    title: 'Basic Symbols Introduction',
    description: 'Practice common symbols used in coding and writing.',
    category: 'Punctuation & Symbols',
    keysPracticed: '@ # $ % & * ( )',
    content: 'email@site.com costs $20 & tax. Score #1 with 95% focus.',
    goal: 'Correct symbol entry with shift pairing',
    difficulty: 'Hard'
  },
  {
    id: 41,
    title: 'Mixed Punctuation Drill',
    description: 'Blend punctuation naturally in sentence flow.',
    category: 'Punctuation & Symbols',
    keysPracticed: 'mixed punctuation',
    content: 'Wait, what happened? We improved fast; now keep it consistent!',
    goal: 'Fewer than 10 mistakes',
    difficulty: 'Hard'
  },
  {
    id: 42,
    title: 'Proper Punctuation Sentence Practice',
    description: 'Type polished sentences with clean punctuation.',
    category: 'Punctuation & Symbols',
    keysPracticed: 'full punctuation set',
    content: 'Typing is a craft: practice daily, review errors, and celebrate progress.',
    goal: '95%+ accuracy',
    difficulty: 'Hard'
  },
  {
    id: 43,
    title: 'Common Words Practice',
    description: 'Train speed on frequently used English words.',
    category: 'Real-world Mastery',
    keysPracticed: 'common words',
    content: 'because people should could would before through between around',
    goal: 'Reach 24+ WPM',
    difficulty: 'Hard'
  },
  {
    id: 44,
    title: 'Common Sentence Practice',
    description: 'Type fluent high-frequency sentence structures.',
    category: 'Real-world Mastery',
    keysPracticed: 'sentences',
    content: 'I will improve a little every day and keep my typing calm and accurate.',
    goal: 'Maintain 94% accuracy',
    difficulty: 'Hard'
  },
  {
    id: 45,
    title: 'Paragraph Typing 1',
    description: 'Type your first full paragraph at a steady pace.',
    category: 'Real-world Mastery',
    keysPracticed: 'paragraph flow',
    content: 'Typing well is not about rushing. It is about control, rhythm, and deliberate movement. When your posture is correct and your focus is steady, speed arrives naturally with practice.',
    goal: 'Complete paragraph with fewer than 18 mistakes',
    difficulty: 'Hard'
  },
  {
    id: 46,
    title: 'Paragraph Typing 2',
    description: 'Longer passage for endurance and consistency.',
    category: 'Real-world Mastery',
    keysPracticed: 'paragraph flow',
    content: 'Consistent practice creates confidence. Confident typists keep their eyes on the screen, trust their fingers, and review mistakes without frustration. Progress is built one focused session at a time.',
    goal: 'Sustain accuracy above 93%',
    difficulty: 'Hard'
  },
  {
    id: 47,
    title: 'Accuracy Challenge',
    description: 'Prioritize precision over speed in a controlled test.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys',
    content: 'Slow down and type each character exactly as shown. Precision now builds speed later.',
    goal: '97%+ accuracy required',
    difficulty: 'Hard'
  },
  {
    id: 48,
    title: 'Speed Challenge',
    description: 'Push for higher words per minute with discipline.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys',
    content: 'Maintain posture, breathe lightly, and increase pace without losing control of each line.',
    goal: 'Reach 30+ WPM',
    difficulty: 'Hard'
  },
  {
    id: 49,
    title: 'Final Practice Test',
    description: 'Comprehensive assessment before mastery.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys',
    content: 'Today you combine letters, numbers, and punctuation in one structured test. Stay calm, trust your training, and type with intention.',
    goal: 'Complete test with balanced speed and accuracy',
    difficulty: 'Expert'
  },
  {
    id: 50,
    title: 'Final Mastery Lesson',
    description: 'Graduate from guided drills to confident, independent typing.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys',
    content: 'Master typists do not panic when mistakes happen. They recover quickly, stay composed, and finish strong. You are now ready to type efficiently in real work every day.',
    goal: 'Graduate with 95% accuracy and confidence',
    difficulty: 'Expert',
    tips: 'Celebrate progress, then keep practicing for consistency.'
  }
];

export const LESSONS = lessons;

export function getLessonById(lessonId) {
  return LESSONS.find((lesson) => lesson.id === Number(lessonId));
}
