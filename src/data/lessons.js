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
    content: 'asdf jkl; asdf jkl; fjdk sla; asdf jkl; asdf jkl;',
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
    content: 'stable table cable label enable staple fable',
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
    content: 'we use true words from upper rows in pure typing drills.',
    goal: 'Complete with confidence',
    difficulty: 'Medium'
  },
  {
    id: 17,
    title: 'Reaching C and M',
    description: 'Add bottom row center keys C and M.',
    category: 'Bottom Row',
    keysPracticed: 'c m',
    content: 'mimic came comic claim creamy',
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
    content: 'the quick brown fox jumps over a vivid maze and back.',
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
    content: 'TypeWithMixedCaseWords and switch letters with control.',
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
    content: 'Practice, pause, and continue. Add commas, then periods, in sequence.',
    goal: 'Accurate punctuation placement',
    difficulty: 'Medium'
  },
  {
    id: 38,
    title: 'Question Mark and Exclamation Mark',
    description: 'Use shift punctuation confidently.',
    category: 'Punctuation & Symbols',
    keysPracticed: '? !',
    content: 'Ready now? Type this line! Repeat again? Great speed!',
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
    content: 'email@site.com costs $20 & tax. Rank #1 with clean output.',
    goal: 'Correct symbol entry with shift pairing',
    difficulty: 'Hard'
  },
  {
    id: 41,
    title: 'Mixed Punctuation Drill',
    description: 'Blend punctuation naturally in sentence flow.',
    category: 'Punctuation & Symbols',
    keysPracticed: 'mixed punctuation',
    content: 'Wait, what happened? Type this again; keep marks consistent!',
    goal: 'Fewer than 10 mistakes',
    difficulty: 'Hard'
  },
  {
    id: 42,
    title: 'Proper Punctuation Sentence Practice',
    description: 'Type polished sentences with clean punctuation.',
    category: 'Punctuation & Symbols',
    keysPracticed: 'full punctuation set',
    content: 'Typing line one: comma, colon, semicolon; quote marks and apostrophe.',
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
    content: 'I write common lines each day and keep typing accurate and clear.',
    goal: 'Maintain 94% accuracy',
    difficulty: 'Hard'
  },
  {
    id: 45,
    title: 'Paragraph Typing 1',
    description: 'Type your first full paragraph at a steady pace.',
    category: 'Real-world Mastery',
    keysPracticed: 'paragraph flow',
    content: 'Typing paragraph one uses plain words and mixed punctuation. This passage trains rhythm across short and long words while maintaining correct spacing and sentence flow.',
    goal: 'Complete paragraph with fewer than 18 mistakes',
    difficulty: 'Hard'
  },
  {
    id: 46,
    title: 'Paragraph Typing 2',
    description: 'Longer passage for endurance and consistency.',
    category: 'Real-world Mastery',
    keysPracticed: 'paragraph flow',
    content: 'Typing paragraph two expands sentence length and key variety. Continue with even pace, proper spacing, and consistent punctuation across every typed segment.',
    goal: 'Sustain accuracy above 93%',
    difficulty: 'Hard'
  },
  {
    id: 47,
    title: 'Accuracy Challenge',
    description: 'Prioritize precision over speed in a controlled test.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys',
    content: 'Type each character exactly as shown and keep every word unchanged.',
    goal: '97%+ accuracy required',
    difficulty: 'Hard'
  },
  {
    id: 48,
    title: 'Speed Challenge',
    description: 'Push for higher words per minute with discipline.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys',
    content: 'Increase pace across each line without dropping letters or punctuation.',
    goal: 'Reach 30+ WPM',
    difficulty: 'Hard'
  },
  {
    id: 49,
    title: 'Final Practice Test',
    description: 'Comprehensive assessment before mastery.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys',
    content: 'Combine letters, numbers, and punctuation in one structured test line.',
    goal: 'Complete test with balanced speed and accuracy',
    difficulty: 'Expert'
  },
  {
    id: 50,
    title: 'Final Mastery Lesson',
    description: 'Graduate from guided drills to confident, independent typing.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys',
    content: 'Final mastery test includes long words, symbols, numbers, and punctuation to confirm complete keyboard control in practical typing tasks.',
    goal: 'Graduate with 95% accuracy and confidence',
    difficulty: 'Expert',
    tips: 'Practice regularly to maintain consistency.'
  }
  ,
  {
    id: 51,
    title: 'Advanced Number Entry Drill',
    description: 'Type alternating number groups with steady rhythm.',
    category: 'Numbers',
    keysPracticed: '0-9',
    content: '9182 3746 5501 2489 7603 1947 8320 6754',
    goal: 'Hit 92% accuracy on mixed numbers',
    difficulty: 'Hard'
  },
  {
    id: 52,
    title: 'Dates and Time Formatting',
    description: 'Practice practical typing with dates and timestamps.',
    category: 'Numbers',
    keysPracticed: 'numbers + punctuation',
    content: '02/04/2026 09:15 11:45 14:30 18:05 20:40',
    goal: 'Type cleanly with slashes and colons',
    difficulty: 'Hard'
  },
  {
    id: 53,
    title: 'Invoice Style Entry',
    description: 'Train number accuracy inside short business lines.',
    category: 'Numbers',
    keysPracticed: 'letters + numbers',
    content: 'item A12 qty 4 rate 350 total 1400 item B08 qty 2 rate 760 total 1520',
    goal: 'Keep mistakes under 8',
    difficulty: 'Hard'
  },
  {
    id: 54,
    title: 'Symbol Balance Drill',
    description: 'Use symbols and numbers without breaking flow.',
    category: 'Punctuation & Symbols',
    keysPracticed: '@ # $ % & *',
    content: 'plan #4 costs $95 and includes 2 add-ons @ 10% each.',
    goal: 'Maintain 93%+ accuracy',
    difficulty: 'Hard'
  },
  {
    id: 55,
    title: 'Bracket Precision Practice',
    description: 'Improve control over paired symbols and punctuation.',
    category: 'Punctuation & Symbols',
    keysPracticed: '( ) [ ] { }',
    content: 'use (fast mode) [daily drill] and {steady focus} for each session.',
    goal: 'Close all pairs correctly',
    difficulty: 'Hard'
  },
  {
    id: 56,
    title: 'Hyphen and Underscore Flow',
    description: 'Type dashed and underscored tokens accurately.',
    category: 'Punctuation & Symbols',
    keysPracticed: '- _',
    content: 'typing-academy daily_practice long-term plan-ready focus_mode',
    goal: 'Reduce shift symbol errors',
    difficulty: 'Hard'
  },
  {
    id: 57,
    title: 'Contact Details Practice',
    description: 'Type realistic names, phone, and email lines.',
    category: 'Real-world Mastery',
    keysPracticed: 'letters + numbers + symbols',
    content: 'Riya Sharma 9876543210 riya.sharma@samplemail.com',
    goal: 'Keep formatting exact',
    difficulty: 'Hard'
  },
  {
    id: 58,
    title: 'Address Formatting Drill',
    description: 'Practice multi-part address entries with punctuation.',
    category: 'Real-world Mastery',
    keysPracticed: 'sentences + commas',
    content: 'Flat 18, Lake View Road, Sector 4, New Delhi, 110024.',
    goal: 'Type each separator correctly',
    difficulty: 'Hard'
  },
  {
    id: 59,
    title: 'Daily Journal Sentences',
    description: 'Build fluency with natural daily writing.',
    category: 'Real-world Mastery',
    keysPracticed: 'sentences',
    content: 'I practiced for thirty minutes and focused on accuracy before speed.',
    goal: 'Sustain rhythm for full sentence',
    difficulty: 'Hard'
  },
  {
    id: 60,
    title: 'Short Paragraph Endurance',
    description: 'Type a compact paragraph with consistent pacing.',
    category: 'Real-world Mastery',
    keysPracticed: 'paragraph flow',
    content: 'Strong typing comes from posture, patience, and repetition. I keep my eyes forward, press keys gently, and return every finger to home row after each reach.',
    goal: 'Maintain 94% accuracy',
    difficulty: 'Hard'
  },
  {
    id: 61,
    title: 'Meeting Notes Practice',
    description: 'Simulate fast note-taking with readable structure.',
    category: 'Real-world Mastery',
    keysPracticed: 'sentences + punctuation',
    content: 'Agenda: review progress, finalize timeline, assign tasks, and confirm next review date.',
    goal: 'Type fast without dropping punctuation',
    difficulty: 'Hard'
  },
  {
    id: 62,
    title: 'Task List Entry Drill',
    description: 'Practice bullet-style action lines.',
    category: 'Real-world Mastery',
    keysPracticed: 'numbers + words',
    content: '1. draft report 2. email client 3. update tracker 4. schedule demo 5. close notes',
    goal: 'Keep sequence and spacing clean',
    difficulty: 'Hard'
  },
  {
    id: 63,
    title: 'Customer Response Typing',
    description: 'Type polite support lines at steady speed.',
    category: 'Real-world Mastery',
    keysPracticed: 'sentences',
    content: 'Thank you for your message. We have received your request and will respond within one business day.',
    goal: 'High readability with low errors',
    difficulty: 'Hard'
  },
  {
    id: 64,
    title: 'Formal Sentence Accuracy',
    description: 'Improve precision in formal writing tone.',
    category: 'Real-world Mastery',
    keysPracticed: 'capitalization + punctuation',
    content: 'Please review the attached summary and share your approval by Friday evening.',
    goal: '96%+ accuracy target',
    difficulty: 'Hard'
  },
  {
    id: 65,
    title: 'Programming Symbols Warmup',
    description: 'Prepare for code-like symbol usage.',
    category: 'Punctuation & Symbols',
    keysPracticed: '() {} [] ; :',
    content: 'if (ready) { start(); } else { wait(); }',
    goal: 'Accurate symbol pairing',
    difficulty: 'Expert'
  },
  {
    id: 66,
    title: 'Variable Naming Practice',
    description: 'Type camelCase and snake_case tokens cleanly.',
    category: 'Punctuation & Symbols',
    keysPracticed: 'letters + _',
    content: 'dailyProgress currentLesson totalSessions bestAccuracy averageWpm user_profile',
    goal: 'Minimize underscore mistakes',
    difficulty: 'Expert'
  },
  {
    id: 67,
    title: 'Path and URL Typing',
    description: 'Practice slashes, dots, and hyphens in technical strings.',
    category: 'Punctuation & Symbols',
    keysPracticed: '/ . - :',
    content: 'https://typing-academy.app/lessons/67 and /src/components/typing-panel.jsx',
    goal: 'Maintain precision on separators',
    difficulty: 'Expert'
  },
  {
    id: 68,
    title: 'Command Line Style Drill',
    description: 'Type shell-like lines with symbols and options.',
    category: 'Punctuation & Symbols',
    keysPracticed: '- / .',
    content: 'npm run build && git status -s then git commit -m update',
    goal: 'Keep spacing exact',
    difficulty: 'Expert'
  },
  {
    id: 69,
    title: 'Data Entry Mixed Tokens',
    description: 'Alternate words, numbers, and symbols.',
    category: 'Numbers',
    keysPracticed: 'letters + numbers + symbols',
    content: 'user_92 score=38 accuracy=96% level=advanced session=12',
    goal: '94% accuracy with mixed tokens',
    difficulty: 'Expert'
  },
  {
    id: 70,
    title: 'Advanced Capitalization Drill',
    description: 'Switch case and punctuation quickly but cleanly.',
    category: 'Shift & Capitals',
    keysPracticed: 'shift + punctuation',
    content: 'Typing Academy: Build Speed, Keep Accuracy, and Stay Consistent Daily.',
    goal: 'Reduce uppercase misses',
    difficulty: 'Expert'
  },
  {
    id: 71,
    title: 'Long Sentence Flow 1',
    description: 'Improve stamina on longer sentence structures.',
    category: 'Real-world Mastery',
    keysPracticed: 'long sentence',
    content: 'When I keep a calm rhythm and avoid rushing, my typing becomes faster, cleaner, and more reliable over time.',
    goal: 'Complete with fewer than 10 mistakes',
    difficulty: 'Expert'
  },
  {
    id: 72,
    title: 'Long Sentence Flow 2',
    description: 'Sustain consistent speed through punctuation-rich text.',
    category: 'Real-world Mastery',
    keysPracticed: 'long sentence + punctuation',
    content: 'Practice is effective when every session has purpose: warm up, build control, and finish with a focused speed run.',
    goal: '95%+ accuracy and steady pace',
    difficulty: 'Expert'
  },
  {
    id: 73,
    title: 'Paragraph Typing 3',
    description: 'Extended paragraph for endurance and composure.',
    category: 'Real-world Mastery',
    keysPracticed: 'paragraph flow',
    content: 'This advanced paragraph trains sustained focus. Maintain posture, keep your wrists relaxed, and let each finger return to home row before the next reach. Precision first, then speed.',
    goal: 'Hold form across full paragraph',
    difficulty: 'Expert'
  },
  {
    id: 74,
    title: 'Paragraph Typing 4',
    description: 'Higher complexity paragraph with varied punctuation.',
    category: 'Real-world Mastery',
    keysPracticed: 'paragraph + symbols',
    content: 'A premium typing routine includes warmup drills, timed sprints, and review. Track WPM, track accuracy, and adjust your pace when errors rise above your target.',
    goal: 'Keep accuracy above 94%',
    difficulty: 'Expert'
  },
  {
    id: 75,
    title: 'Paragraph Typing 5',
    description: 'Business style paragraph with numbers and dates.',
    category: 'Real-world Mastery',
    keysPracticed: 'paragraph + numbers',
    content: 'On 02 April 2026, the team completed 3 focused sessions and improved average speed by 4 WPM while maintaining strong formatting quality.',
    goal: 'Type numbers and words without drift',
    difficulty: 'Expert'
  },
  {
    id: 76,
    title: 'Email Composition Practice 1',
    description: 'Type a short professional email quickly and clearly.',
    category: 'Real-world Mastery',
    keysPracticed: 'formal sentences',
    content: 'Hello Team, Please share your updated progress notes by 6:00 PM. Regards, Training Lead.',
    goal: 'Preserve punctuation and capitalization',
    difficulty: 'Expert'
  },
  {
    id: 77,
    title: 'Email Composition Practice 2',
    description: 'Train clean typing for follow-up communication.',
    category: 'Real-world Mastery',
    keysPracticed: 'formal sentences',
    content: 'Hi Rohan, Thanks for the quick update. I reviewed the draft and added comments in section two.',
    goal: 'Maintain 95% accuracy',
    difficulty: 'Expert'
  },
  {
    id: 78,
    title: 'Report Summary Entry',
    description: 'Practice concise summary writing with stable speed.',
    category: 'Real-world Mastery',
    keysPracticed: 'summary sentences',
    content: 'This week we increased consistency, reduced errors, and improved completion speed across all practice sessions.',
    goal: 'Target 32+ WPM',
    difficulty: 'Expert'
  },
  {
    id: 79,
    title: 'Quotation and Dialogue Drill',
    description: 'Control quote marks and punctuation in dialogue text.',
    category: 'Punctuation & Symbols',
    keysPracticed: '" " , . ?',
    content: 'She asked, "Are you ready?" I replied, "Yes, let us begin now."',
    goal: 'Accurate quote placement',
    difficulty: 'Expert'
  },
  {
    id: 80,
    title: 'Semicolon and Colon Mastery',
    description: 'Use advanced punctuation with confidence.',
    category: 'Punctuation & Symbols',
    keysPracticed: '; :',
    content: 'Focus on three goals: speed, precision, and consistency; improve one step at a time.',
    goal: 'No punctuation omissions',
    difficulty: 'Expert'
  },
  {
    id: 81,
    title: 'Accuracy Sprint 1',
    description: 'Short high-precision sprint.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys',
    content: 'Type exactly what you see and correct every small drift immediately.',
    goal: '97%+ accuracy',
    difficulty: 'Expert'
  },
  {
    id: 82,
    title: 'Accuracy Sprint 2',
    description: 'Another controlled sprint with punctuation.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys + punctuation',
    content: 'Do not skip commas, periods, or apostrophes; each mark matters.',
    goal: 'Mistakes below 5',
    difficulty: 'Expert'
  },
  {
    id: 83,
    title: 'Speed Sprint 1',
    description: 'Push pace while keeping line readability.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys',
    content: 'Increase speed in clean bursts and keep your rhythm stable from start to finish.',
    goal: 'Reach 34+ WPM',
    difficulty: 'Expert'
  },
  {
    id: 84,
    title: 'Speed Sprint 2',
    description: 'Repeat sprint challenge with stricter control.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys',
    content: 'Fast typing wins only when errors stay low and each word remains complete.',
    goal: 'Reach 36+ WPM',
    difficulty: 'Expert'
  },
  {
    id: 85,
    title: 'Mixed Challenge 1',
    description: 'Blend numbers, symbols, and sentences.',
    category: 'Real-world Mastery',
    keysPracticed: 'mixed all',
    content: 'Session 5 scored 37 WPM at 95% accuracy, with 4 minor punctuation misses.',
    goal: 'Balanced speed and precision',
    difficulty: 'Expert'
  },
  {
    id: 86,
    title: 'Mixed Challenge 2',
    description: 'Advanced mixed typing under steady pacing.',
    category: 'Real-world Mastery',
    keysPracticed: 'mixed all',
    content: 'Project alpha-2 closed on 30/04/2026; target score: 40 WPM, accuracy: 96%.',
    goal: 'Maintain control in mixed text',
    difficulty: 'Expert'
  },
  {
    id: 87,
    title: 'Live Note Simulation 1',
    description: 'Simulate real-time note capture with structure.',
    category: 'Real-world Mastery',
    keysPracticed: 'sentences + lists',
    content: 'Notes: finalize scope, review blockers, confirm timeline, and assign ownership today.',
    goal: 'Keep line structure intact',
    difficulty: 'Expert'
  },
  {
    id: 88,
    title: 'Live Note Simulation 2',
    description: 'Longer simulated note capture.',
    category: 'Real-world Mastery',
    keysPracticed: 'sentences + punctuation',
    content: 'Action items include drafting the report, sending follow-up mail, and preparing the Friday demo deck.',
    goal: 'Stay accurate at higher speed',
    difficulty: 'Expert'
  },
  {
    id: 89,
    title: 'Timed Assessment 1',
    description: 'First advanced timed evaluation.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys',
    content: 'Complete this assessment with steady speed, clean punctuation, and deliberate key control.',
    goal: '94%+ accuracy and 34+ WPM',
    difficulty: 'Expert'
  },
  {
    id: 90,
    title: 'Timed Assessment 2',
    description: 'Second timed evaluation with mixed content.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys + numbers',
    content: 'Assessment line 2 includes values 14, 28, and 56 with symbols and sentence flow.',
    goal: 'Hold consistency for full run',
    difficulty: 'Expert'
  },
  {
    id: 91,
    title: 'Timed Assessment 3',
    description: 'Third assessment focused on punctuation density.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys + punctuation',
    content: 'Stay calm, type each mark exactly, and keep spacing correct: commas, colons, and quotes.',
    goal: 'Fewer than 7 mistakes',
    difficulty: 'Expert'
  },
  {
    id: 92,
    title: 'Timed Assessment 4',
    description: 'Fourth assessment focused on endurance.',
    category: 'Real-world Mastery',
    keysPracticed: 'paragraph flow',
    content: 'Endurance typing improves when breathing stays even and every finger returns to home position after each reach.',
    goal: 'Complete with stable tempo',
    difficulty: 'Expert'
  },
  {
    id: 93,
    title: 'Final Prep Drill 1',
    description: 'Final-stage warmup before master tests.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys',
    content: 'Warm up with control, sharpen accuracy, and commit to clean technique on every key.',
    goal: '96%+ accuracy',
    difficulty: 'Expert'
  },
  {
    id: 94,
    title: 'Final Prep Drill 2',
    description: 'Final-stage mixed punctuation warmup.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys + symbols',
    content: 'Use symbols like @ # % & with smooth shift timing and accurate spacing.',
    goal: 'No missed symbols',
    difficulty: 'Expert'
  },
  {
    id: 95,
    title: 'Final Prep Drill 3',
    description: 'Final-stage speed and rhythm rehearsal.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys',
    content: 'Push speed in a controlled manner, but pause mentally when precision begins to fall.',
    goal: 'Reach 38+ WPM',
    difficulty: 'Expert'
  },
  {
    id: 96,
    title: 'Final Prep Drill 4',
    description: 'Final-stage composure drill for completion.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys',
    content: 'Keep your eyes forward, shoulders relaxed, and fingertips light through the complete passage.',
    goal: 'Finish with low fatigue and low errors',
    difficulty: 'Expert'
  },
  {
    id: 97,
    title: 'Master Test 1',
    description: 'Comprehensive advanced mastery checkpoint.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys',
    content: 'Master test one combines sentence flow, punctuation, and numbers in a balanced evaluation.',
    goal: '95%+ accuracy and 36+ WPM',
    difficulty: 'Expert'
  },
  {
    id: 98,
    title: 'Master Test 2',
    description: 'Comprehensive mastery checkpoint with longer text.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys + paragraph',
    content: 'Master test two demands sustained focus, complete punctuation control, and consistent spacing throughout each line.',
    goal: 'Complete with fewer than 9 mistakes',
    difficulty: 'Expert'
  },
  {
    id: 99,
    title: 'Master Test 3',
    description: 'Final checkpoint before graduation.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys + mixed content',
    content: 'Master test three validates real-world readiness across words, numbers, symbols, and practical sentence structure.',
    goal: 'Maintain high precision under pressure',
    difficulty: 'Expert'
  },
  {
    id: 100,
    title: 'Grand Mastery Graduation',
    description: 'Capstone lesson proving complete typing fluency.',
    category: 'Real-world Mastery',
    keysPracticed: 'all keys',
    content: 'Congratulations on reaching lesson one hundred. Complete this final passage with calm focus, consistent rhythm, and confident full-keyboard control.',
    goal: 'Graduate with 96%+ accuracy and strong speed',
    difficulty: 'Expert',
    tips: 'You are done with the full 100-lesson track. Keep practicing to stay sharp.'
  }

  ,
  {
    id: 101,
    title: "Foundation Posture Drill 1",
    description: "Reinforce calm posture, breathing, and home-row alignment.",
    category: "Foundations",
    keysPracticed: "posture + home row",
    content: "Sit upright, relax shoulders, keep wrists neutral, and type asdf jkl; cycle 1 with steady rhythm.",
    goal: "Maintain controlled rhythm and 92%+ accuracy",
    difficulty: "Easy"
  },
  {
    id: 102,
    title: "Foundation Posture Drill 2",
    description: "Reinforce calm posture, breathing, and home-row alignment.",
    category: "Foundations",
    keysPracticed: "posture + home row",
    content: "Sit upright, relax shoulders, keep wrists neutral, and type asdf jkl; cycle 2 with steady rhythm.",
    goal: "Maintain controlled rhythm and 92%+ accuracy",
    difficulty: "Easy"
  },
  {
    id: 103,
    title: "Foundation Posture Drill 3",
    description: "Reinforce calm posture, breathing, and home-row alignment.",
    category: "Foundations",
    keysPracticed: "posture + home row",
    content: "Sit upright, relax shoulders, keep wrists neutral, and type asdf jkl; cycle 3 with steady rhythm.",
    goal: "Maintain controlled rhythm and 92%+ accuracy",
    difficulty: "Easy"
  },
  {
    id: 104,
    title: "Foundation Posture Drill 4",
    description: "Reinforce calm posture, breathing, and home-row alignment.",
    category: "Foundations",
    keysPracticed: "posture + home row",
    content: "Sit upright, relax shoulders, keep wrists neutral, and type asdf jkl; cycle 4 with steady rhythm.",
    goal: "Maintain controlled rhythm and 92%+ accuracy",
    difficulty: "Easy"
  },
  {
    id: 105,
    title: "Foundation Posture Drill 5",
    description: "Reinforce calm posture, breathing, and home-row alignment.",
    category: "Foundations",
    keysPracticed: "posture + home row",
    content: "Sit upright, relax shoulders, keep wrists neutral, and type asdf jkl; cycle 5 with steady rhythm.",
    goal: "Maintain controlled rhythm and 92%+ accuracy",
    difficulty: "Easy"
  },
  {
    id: 106,
    title: "Foundation Posture Drill 6",
    description: "Reinforce calm posture, breathing, and home-row alignment.",
    category: "Foundations",
    keysPracticed: "posture + home row",
    content: "Sit upright, relax shoulders, keep wrists neutral, and type asdf jkl; cycle 6 with steady rhythm.",
    goal: "Maintain controlled rhythm and 92%+ accuracy",
    difficulty: "Easy"
  },
  {
    id: 107,
    title: "Foundation Posture Drill 7",
    description: "Reinforce calm posture, breathing, and home-row alignment.",
    category: "Foundations",
    keysPracticed: "posture + home row",
    content: "Sit upright, relax shoulders, keep wrists neutral, and type asdf jkl; cycle 7 with steady rhythm.",
    goal: "Maintain controlled rhythm and 92%+ accuracy",
    difficulty: "Easy"
  },
  {
    id: 108,
    title: "Foundation Posture Drill 8",
    description: "Reinforce calm posture, breathing, and home-row alignment.",
    category: "Foundations",
    keysPracticed: "posture + home row",
    content: "Sit upright, relax shoulders, keep wrists neutral, and type asdf jkl; cycle 8 with steady rhythm.",
    goal: "Maintain controlled rhythm and 92%+ accuracy",
    difficulty: "Easy"
  },
  {
    id: 109,
    title: "Foundation Posture Drill 9",
    description: "Reinforce calm posture, breathing, and home-row alignment.",
    category: "Foundations",
    keysPracticed: "posture + home row",
    content: "Sit upright, relax shoulders, keep wrists neutral, and type asdf jkl; cycle 9 with steady rhythm.",
    goal: "Maintain controlled rhythm and 92%+ accuracy",
    difficulty: "Easy"
  },
  {
    id: 110,
    title: "Foundation Posture Drill 10",
    description: "Reinforce calm posture, breathing, and home-row alignment.",
    category: "Foundations",
    keysPracticed: "posture + home row",
    content: "Sit upright, relax shoulders, keep wrists neutral, and type asdf jkl; cycle 10 with steady rhythm.",
    goal: "Maintain controlled rhythm and 92%+ accuracy",
    difficulty: "Easy"
  },
  {
    id: 111,
    title: "Foundation Reach Control 1",
    description: "Practice short key reaches and return to home row instantly.",
    category: "Foundations",
    keysPracticed: "e i",
    content: "Practice e i with gentle presses, then return all fingers to home row before each next reach.",
    goal: "Reduce finger drift and keep errors below 9",
    difficulty: "Easy"
  },
  {
    id: 112,
    title: "Foundation Reach Control 2",
    description: "Practice short key reaches and return to home row instantly.",
    category: "Foundations",
    keysPracticed: "r u",
    content: "Practice r u with gentle presses, then return all fingers to home row before each next reach.",
    goal: "Reduce finger drift and keep errors below 9",
    difficulty: "Easy"
  },
  {
    id: 113,
    title: "Foundation Reach Control 3",
    description: "Practice short key reaches and return to home row instantly.",
    category: "Foundations",
    keysPracticed: "w o",
    content: "Practice w o with gentle presses, then return all fingers to home row before each next reach.",
    goal: "Reduce finger drift and keep errors below 9",
    difficulty: "Easy"
  },
  {
    id: 114,
    title: "Foundation Reach Control 4",
    description: "Practice short key reaches and return to home row instantly.",
    category: "Foundations",
    keysPracticed: "q p",
    content: "Practice q p with gentle presses, then return all fingers to home row before each next reach.",
    goal: "Reduce finger drift and keep errors below 9",
    difficulty: "Easy"
  },
  {
    id: 115,
    title: "Foundation Reach Control 5",
    description: "Practice short key reaches and return to home row instantly.",
    category: "Foundations",
    keysPracticed: "c m",
    content: "Practice c m with gentle presses, then return all fingers to home row before each next reach.",
    goal: "Reduce finger drift and keep errors below 9",
    difficulty: "Easy"
  },
  {
    id: 116,
    title: "Foundation Reach Control 6",
    description: "Practice short key reaches and return to home row instantly.",
    category: "Foundations",
    keysPracticed: "v n",
    content: "Practice v n with gentle presses, then return all fingers to home row before each next reach.",
    goal: "Reduce finger drift and keep errors below 9",
    difficulty: "Easy"
  },
  {
    id: 117,
    title: "Foundation Reach Control 7",
    description: "Practice short key reaches and return to home row instantly.",
    category: "Foundations",
    keysPracticed: "x ,",
    content: "Practice x , with gentle presses, then return all fingers to home row before each next reach.",
    goal: "Reduce finger drift and keep errors below 9",
    difficulty: "Easy"
  },
  {
    id: 118,
    title: "Foundation Reach Control 8",
    description: "Practice short key reaches and return to home row instantly.",
    category: "Foundations",
    keysPracticed: "z .",
    content: "Practice z . with gentle presses, then return all fingers to home row before each next reach.",
    goal: "Reduce finger drift and keep errors below 9",
    difficulty: "Easy"
  },
  {
    id: 119,
    title: "Foundation Reach Control 9",
    description: "Practice short key reaches and return to home row instantly.",
    category: "Foundations",
    keysPracticed: "top row + home",
    content: "Practice top row + home with gentle presses, then return all fingers to home row before each next reach.",
    goal: "Reduce finger drift and keep errors below 9",
    difficulty: "Easy"
  },
  {
    id: 120,
    title: "Foundation Reach Control 10",
    description: "Practice short key reaches and return to home row instantly.",
    category: "Foundations",
    keysPracticed: "bottom row + home",
    content: "Practice bottom row + home with gentle presses, then return all fingers to home row before each next reach.",
    goal: "Reduce finger drift and keep errors below 9",
    difficulty: "Easy"
  },
  {
    id: 121,
    title: "Foundation Basic Words 1",
    description: "Build fluency with simple practical words.",
    category: "Foundations",
    keysPracticed: "basic words",
    content: "calm focus clear steady simple practice lesson typing control cycle 1",
    goal: "Type clean words with consistent spacing",
    difficulty: "Easy"
  },
  {
    id: 122,
    title: "Foundation Basic Words 2",
    description: "Build fluency with simple practical words.",
    category: "Foundations",
    keysPracticed: "basic words",
    content: "calm focus clear steady simple practice lesson typing control cycle 2",
    goal: "Type clean words with consistent spacing",
    difficulty: "Easy"
  },
  {
    id: 123,
    title: "Foundation Basic Words 3",
    description: "Build fluency with simple practical words.",
    category: "Foundations",
    keysPracticed: "basic words",
    content: "calm focus clear steady simple practice lesson typing control cycle 3",
    goal: "Type clean words with consistent spacing",
    difficulty: "Easy"
  },
  {
    id: 124,
    title: "Foundation Basic Words 4",
    description: "Build fluency with simple practical words.",
    category: "Foundations",
    keysPracticed: "basic words",
    content: "calm focus clear steady simple practice lesson typing control cycle 4",
    goal: "Type clean words with consistent spacing",
    difficulty: "Easy"
  },
  {
    id: 125,
    title: "Foundation Basic Words 5",
    description: "Build fluency with simple practical words.",
    category: "Foundations",
    keysPracticed: "basic words",
    content: "calm focus clear steady simple practice lesson typing control cycle 5",
    goal: "Type clean words with consistent spacing",
    difficulty: "Easy"
  },
  {
    id: 126,
    title: "Foundation Basic Words 6",
    description: "Build fluency with simple practical words.",
    category: "Foundations",
    keysPracticed: "basic words",
    content: "calm focus clear steady simple practice lesson typing control cycle 6",
    goal: "Type clean words with consistent spacing",
    difficulty: "Easy"
  },
  {
    id: 127,
    title: "Foundation Basic Words 7",
    description: "Build fluency with simple practical words.",
    category: "Foundations",
    keysPracticed: "basic words",
    content: "calm focus clear steady simple practice lesson typing control cycle 7",
    goal: "Type clean words with consistent spacing",
    difficulty: "Easy"
  },
  {
    id: 128,
    title: "Foundation Basic Words 8",
    description: "Build fluency with simple practical words.",
    category: "Foundations",
    keysPracticed: "basic words",
    content: "calm focus clear steady simple practice lesson typing control cycle 8",
    goal: "Type clean words with consistent spacing",
    difficulty: "Easy"
  },
  {
    id: 129,
    title: "Foundation Basic Words 9",
    description: "Build fluency with simple practical words.",
    category: "Foundations",
    keysPracticed: "basic words",
    content: "calm focus clear steady simple practice lesson typing control cycle 9",
    goal: "Type clean words with consistent spacing",
    difficulty: "Easy"
  },
  {
    id: 130,
    title: "Foundation Basic Words 10",
    description: "Build fluency with simple practical words.",
    category: "Foundations",
    keysPracticed: "basic words",
    content: "calm focus clear steady simple practice lesson typing control cycle 10",
    goal: "Type clean words with consistent spacing",
    difficulty: "Easy"
  },
  {
    id: 131,
    title: "Foundation Sentence Builder 1",
    description: "Improve beginner sentence typing with punctuation control.",
    category: "Foundations",
    keysPracticed: "basic sentences",
    content: "I type with calm focus, keep my posture stable, and improve accuracy every day in session 1.",
    goal: "Maintain 94%+ accuracy for full sentence",
    difficulty: "Medium"
  },
  {
    id: 132,
    title: "Foundation Sentence Builder 2",
    description: "Improve beginner sentence typing with punctuation control.",
    category: "Foundations",
    keysPracticed: "basic sentences",
    content: "I type with calm focus, keep my posture stable, and improve accuracy every day in session 2.",
    goal: "Maintain 94%+ accuracy for full sentence",
    difficulty: "Medium"
  },
  {
    id: 133,
    title: "Foundation Sentence Builder 3",
    description: "Improve beginner sentence typing with punctuation control.",
    category: "Foundations",
    keysPracticed: "basic sentences",
    content: "I type with calm focus, keep my posture stable, and improve accuracy every day in session 3.",
    goal: "Maintain 94%+ accuracy for full sentence",
    difficulty: "Medium"
  },
  {
    id: 134,
    title: "Foundation Sentence Builder 4",
    description: "Improve beginner sentence typing with punctuation control.",
    category: "Foundations",
    keysPracticed: "basic sentences",
    content: "I type with calm focus, keep my posture stable, and improve accuracy every day in session 4.",
    goal: "Maintain 94%+ accuracy for full sentence",
    difficulty: "Medium"
  },
  {
    id: 135,
    title: "Foundation Sentence Builder 5",
    description: "Improve beginner sentence typing with punctuation control.",
    category: "Foundations",
    keysPracticed: "basic sentences",
    content: "I type with calm focus, keep my posture stable, and improve accuracy every day in session 5.",
    goal: "Maintain 94%+ accuracy for full sentence",
    difficulty: "Medium"
  },
  {
    id: 136,
    title: "Foundation Sentence Builder 6",
    description: "Improve beginner sentence typing with punctuation control.",
    category: "Foundations",
    keysPracticed: "basic sentences",
    content: "I type with calm focus, keep my posture stable, and improve accuracy every day in session 6.",
    goal: "Maintain 94%+ accuracy for full sentence",
    difficulty: "Medium"
  },
  {
    id: 137,
    title: "Foundation Sentence Builder 7",
    description: "Improve beginner sentence typing with punctuation control.",
    category: "Foundations",
    keysPracticed: "basic sentences",
    content: "I type with calm focus, keep my posture stable, and improve accuracy every day in session 7.",
    goal: "Maintain 94%+ accuracy for full sentence",
    difficulty: "Medium"
  },
  {
    id: 138,
    title: "Foundation Sentence Builder 8",
    description: "Improve beginner sentence typing with punctuation control.",
    category: "Foundations",
    keysPracticed: "basic sentences",
    content: "I type with calm focus, keep my posture stable, and improve accuracy every day in session 8.",
    goal: "Maintain 94%+ accuracy for full sentence",
    difficulty: "Medium"
  },
  {
    id: 139,
    title: "Foundation Sentence Builder 9",
    description: "Improve beginner sentence typing with punctuation control.",
    category: "Foundations",
    keysPracticed: "basic sentences",
    content: "I type with calm focus, keep my posture stable, and improve accuracy every day in session 9.",
    goal: "Maintain 94%+ accuracy for full sentence",
    difficulty: "Medium"
  },
  {
    id: 140,
    title: "Foundation Sentence Builder 10",
    description: "Improve beginner sentence typing with punctuation control.",
    category: "Foundations",
    keysPracticed: "basic sentences",
    content: "I type with calm focus, keep my posture stable, and improve accuracy every day in session 10.",
    goal: "Maintain 94%+ accuracy for full sentence",
    difficulty: "Medium"
  },
  {
    id: 141,
    title: "Foundation Master Check 1",
    description: "Consolidate beginner fundamentals before advanced work.",
    category: "Foundations",
    keysPracticed: "foundations review",
    content: "Posture, home row, basic reaches, clean words, and clear sentences form my foundation test 1.",
    goal: "Pass with balanced speed and reliable precision",
    difficulty: "Medium"
  },
  {
    id: 142,
    title: "Foundation Master Check 2",
    description: "Consolidate beginner fundamentals before advanced work.",
    category: "Foundations",
    keysPracticed: "foundations review",
    content: "Posture, home row, basic reaches, clean words, and clear sentences form my foundation test 2.",
    goal: "Pass with balanced speed and reliable precision",
    difficulty: "Medium"
  },
  {
    id: 143,
    title: "Foundation Master Check 3",
    description: "Consolidate beginner fundamentals before advanced work.",
    category: "Foundations",
    keysPracticed: "foundations review",
    content: "Posture, home row, basic reaches, clean words, and clear sentences form my foundation test 3.",
    goal: "Pass with balanced speed and reliable precision",
    difficulty: "Medium"
  },
  {
    id: 144,
    title: "Foundation Master Check 4",
    description: "Consolidate beginner fundamentals before advanced work.",
    category: "Foundations",
    keysPracticed: "foundations review",
    content: "Posture, home row, basic reaches, clean words, and clear sentences form my foundation test 4.",
    goal: "Pass with balanced speed and reliable precision",
    difficulty: "Medium"
  },
  {
    id: 145,
    title: "Foundation Master Check 5",
    description: "Consolidate beginner fundamentals before advanced work.",
    category: "Foundations",
    keysPracticed: "foundations review",
    content: "Posture, home row, basic reaches, clean words, and clear sentences form my foundation test 5.",
    goal: "Pass with balanced speed and reliable precision",
    difficulty: "Medium"
  },
  {
    id: 146,
    title: "Foundation Master Check 6",
    description: "Consolidate beginner fundamentals before advanced work.",
    category: "Foundations",
    keysPracticed: "foundations review",
    content: "Posture, home row, basic reaches, clean words, and clear sentences form my foundation test 6.",
    goal: "Pass with balanced speed and reliable precision",
    difficulty: "Medium"
  },
  {
    id: 147,
    title: "Foundation Master Check 7",
    description: "Consolidate beginner fundamentals before advanced work.",
    category: "Foundations",
    keysPracticed: "foundations review",
    content: "Posture, home row, basic reaches, clean words, and clear sentences form my foundation test 7.",
    goal: "Pass with balanced speed and reliable precision",
    difficulty: "Medium"
  },
  {
    id: 148,
    title: "Foundation Master Check 8",
    description: "Consolidate beginner fundamentals before advanced work.",
    category: "Foundations",
    keysPracticed: "foundations review",
    content: "Posture, home row, basic reaches, clean words, and clear sentences form my foundation test 8.",
    goal: "Pass with balanced speed and reliable precision",
    difficulty: "Medium"
  },
  {
    id: 149,
    title: "Foundation Master Check 9",
    description: "Consolidate beginner fundamentals before advanced work.",
    category: "Foundations",
    keysPracticed: "foundations review",
    content: "Posture, home row, basic reaches, clean words, and clear sentences form my foundation test 9.",
    goal: "Pass with balanced speed and reliable precision",
    difficulty: "Medium"
  },
  {
    id: 150,
    title: "Foundation Master Check 10",
    description: "Consolidate beginner fundamentals before advanced work.",
    category: "Foundations",
    keysPracticed: "foundations review",
    content: "Posture, home row, basic reaches, clean words, and clear sentences form my foundation test 10.",
    goal: "Pass with balanced speed and reliable precision",
    difficulty: "Medium"
  }

];

export const LESSONS = lessons;

export function getLessonById(lessonId) {
  return LESSONS.find((lesson) => lesson.id === Number(lessonId));
}
