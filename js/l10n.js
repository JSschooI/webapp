const langs = {};

langs.en = {
  html: {
    utilities: 'Utilities',
    clubs: 'Clubs',
    schedule: 'Schedule',
    staff: 'Staff',
    options: 'Options',
    'pausd-login': 'PAUSD Login Page',
    barcode: 'Barcode',
    'barcode-desc-before-link': 'Click on the eye icon to display; turn up your screen brightness to the max when scanning just in case. Edits are saved automatically. For the curious, student ID cards use Code 39, which you can read about on ',
    wikipedia: 'Wikipedia',
    'barcode-desc-after-link': '.',
    'add-barcode': 'Add barcode',
    minscore: 'Minimum finals score calculator',
    'current-grade': 'Current grade: ',
    'finals-worth': 'Portion of grade the final determines: ',
    'min-grade': 'Minimum acceptable grade: ',
    map: 'Map',
    'for-image': 'For the image:',
    'image-instruct': ' You can use a finger to pan, or two to rotate, zoom, and pan. You can use your mouse to drag, or scroll to zoom or right-click to rotate.',
    'for-gmaps': 'For Google Maps:',
    'gmaps-instruct': " Only works when you're connected to the internet. If you're on touchscreen and can't scroll back up, try scrolling on the buttons.",
    'club-list': 'Club list',
    'clubs-disclaimer-before-link': "Please note that club information was taken from the administration's ",
    'clubs-disclaimer-link': 'chartered club list as of September 13th, 2019',
    'clubs-disclaimer-after-link': ', so attribute inaccuracies to them.',
    'lists-disabled': "You've disabled the club and staff lists",
    'turn-back-on': 'Turn back on',
    'select-date': 'select date',
    events: 'Events',
    'staff-list': 'Staff list',
    'before-version': 'You are using the ',
    'after-version': ' version.',
    theme: 'Theme',
    'light-theme': 'Light theme',
    'dark-theme': 'Dark theme',
    'neither-theme': 'Neither theme',
    'time-formatting': 'Time formatting',
    '12h': '12-hour',
    '24h': '24-hour',
    'title-compact': 'Tab title compactness',
    units: 'Units included',
    numbers: 'Numbers only',
    'disable-lists': 'Disable club/staff lists',
    periods: 'Periods',
    'periods-desc': 'Click on the coloured square to change period colour.',
    'control-centre': 'Control Centre',
    'control-centre-desc': "If UGWA isn't updating, try these buttons.",
    reload: 'Restart UGWA',
    'trick-cache': 'trick the cache',
    'staff-name': 'Staff name',
    close: 'Close',
    'club-name': 'Club name',
    ok: 'OK',
    'add-ugwa': 'To add UGWA to your home screen',
    desktop: 'Desktop',
    'desktop-instruct': '—bookmark this page or pin this tab (right click on the tab and select "Pin tab")',
    chromebook: 'Chromebook',
    'chromebook-instruct': '—pin this page to the shelf (menu > more tools > add to shelf)',
    ios: 'iOS',
    'ios-instruct': '—tap on the share icon and select "add to home screen"',
    android: 'Android',
    'android-instruct': '—tap on the menu and select "add to home screen"',
    bugs: 'Bug reports',
    'before-gh-link': 'You can ',
    'gh-link': 'make a new issue on GitHub',
    'inter-link': ' or email ',
    'sean-email': 'sy24484@pausd.us',
    'after-email': ' to make a feature request or bug report.',
    browsers: 'UGWA only aims to support the latest versions of Chrome and iOS Safari (not MacOS Safari); other versions are low-priority.',
    about: 'About',
    intent: 'The app was originally made to make the features of TheGunnApp available to Chromebook users.',
    'before-source-link': 'UGWA is open sourced on ',
    github: 'GitHub',
    'after-source-link': '.',
    'other-versions': 'Other versions: ',
    'gunn-schedule': 'Gunn Schedule',
    'inter-link-1': ' (no alternate schedules) · ',
    ugwita: 'Ugwita',
    'inter-link-2': ' (ugly) · ',
    ugwa2: 'Ugwa 2',
    'inter-link-3': ' (not done) · ',
    ugwisha: 'Ugwisha',
    'after-links': '',
    lonely: 'UGWA is lonely and needs friends! You should make your own schedule app.',
    'other-apps': 'Gunn apps made by other people: ',
    'tga-ios': 'TheGunnApp',
    'inter-link-4': ' by the iOS App Development club · ',
    'tga-android': 'TheGunnApp',
    'inter-link-5': ' by David C. · ',
    nugwa: 'Not UGWA',
    'after-apps': ' by Tomer S.',
    credits: 'Credits',
    sean: 'Sean',
    'sean-creds': ' made most of the app.',
    henry: 'Henry',
    'henry-creds': ' made the Google Maps overlay.',
    search: 'Google Search',
    'inter-comma': ', ',
    so: 'Stack Overflow',
    'inter-and': ', and ',
    mdn: 'MDN',
    'service-creds': ' helped.',
    'feature-based': 'Many features based on the original Gunn App.',
    'before-material': 'Design based on ',
    material: 'Material Design',
    'after-material': "'s icons, colours, and specifications.",
    languages: 'Languages',
    'this-is-joke': '(This is a joke.)',
    'no-hour': 'No hours',
    'comm': 'Interstudent communication',
    'prev-chats': 'Previous chats',
    'open-chat': 'Join chat',
    'send': 'Send',
    'msg-note': 'Only consonants, numbers, spaces, and a few punctuation marks are allowed. 5 messages per 10 seconds.',
    'want-ugwa-normal': 'To install UGWA like a normal app:',
    'safari-only': '(this can only be done in the Safari app)',
    'b4-share-icon': 'Tap the share button ',
    'b4-add-home': ', select "',
    'add-home': 'Add to Home Screen',
    'b4-add-home-img': '" in the bottom row,',
    'b4-add': 'then tap "',
    add: 'Add',
    'after-add': '."',
    'use-safari': "Open UGWA in Safari first; this can't be done anywhere else.",
    naw: 'Thanks but no thanks',
    heaucques: 'OK.',
    assignments: 'Assignments',
    'asgn-display': 'Upcoming assignments position',
    'asgn-before': 'Before the schedule',
    'asgn-after': 'After the schedule',
    'asgn-none': 'New Zealand',
    'asgn-sort': 'Sorting method',
    'asgn-chrono-primero': 'By due date',
    'asgn-important-importance': 'By priority',
    'asgn-algorithms': 'By use of A L G O R I T H M S',
    'edit-asgn': 'Assignment properties',
    'delete-asgn': 'Delete',
    'cancel-asgn': 'Cancel',
    'save-asgn': 'Save',
    'asgn-before-pd': 'Due by ',
    'asgn-between-pd-date': ' on ',
    'asgn-after-date': '.',
    category: 'Category:',
    importance: 'Priority:',
    low: 'low',
    medium: 'medium',
    high: 'high',
    transfer: 'Cross-device settings transfer',
    'export-copy': 'copy export code',
    'export-file': 'download export code',
    'import-file': 'Or upload a file: ',
    import: 'import',
    assync: 'Assignment Synchronization System (Assync)',
    'assync-desc': 'Assync allows you to sync your assignments across devices. This is an experimental feature.',
    'create-assync': 'Create Assync account',
    'or-assync': ' or ',
    'join-assync': 'Sync to account',
    'leave-assync': 'Stop synching',
    'assync-id': 'Your Assync account ID: ',
    'loading-assync': 'Loading...',
    errors: 'Runtime error log',
    'edit-h': 'Set H period times',
    'h-editor': 'H period settings',
    'toggle-pd-add-asgn': 'Show "Add assignment" button on period cards?',
    support: 'Student resources',
    sponsor: 'Sponsored by the ROCK team.',
    'show-self-toggle': 'Show SELF?',
    show0: 'Show zero period?',
    s1a: 'Crisis Text Line',
    s1b: '741-741',
    s1c: 'For everyone in crisis; text "Help"\nText "LGBTQ" for LGBTQQ-specific support',
    s2a: 'Suicide Prevention Hotline',
    s2b: '800-273-8256',
    s2c: 'Prevention and crisis resources (national)',
    s3a: 'Suicide & Crisis Line',
    s3b: '855-278-4204',
    s3c: 'For individuals in crisis (Santa Clara County)',
    s4a: 'Star Vista',
    s4b: '650-579-0350',
    s4c: 'Crisis intervention (San Mateo County)',
    s5a: 'Uplift',
    s5b: '408-379-9085',
    s5c: 'Mobile crisis intervention and safety planning',
    s6a: 'Trevor Lifeline',
    s6b: '866-488-7386',
    s6c: 'LGBTQ crisis intervention and suicide prevention',
    'staff-disclaimer-before-link': "Please note that staff information was taken from the administration's ",
    'staff-disclaimer-link': 'staff directory as of September 11th, 2019',
    'staff-disclaimer-after-link': ', so attribute inaccuracies to them.',
    announcements: 'Announcements',
    loading: 'Loading...',
    new: 'NEW'
  },
  other: {
    'anti-ugwaga': 'Click/tap to continue to the Unofficial Gunn Web App',
    'no-study-before-emph': 'You ',
    'no-study-emph': "don't need to study",
    'no-study-after-emph': "; even if you score 0%, you'll be above your threshold.",
    'zero-error': "Please don't enter so many zeroes.",
    'minscore-before-emph': "You'll need to score at least ",
    'minscore-after-emph': ' to keep your parents happy.',
    'minscore-too-high-addendum': " If there's no extra credit, you're screwed.",
    gmaps: 'use google maps',
    image: 'use the image',
    'gmaps-error': "Google Maps not loading! Maybe you aren't connected to the internet?",
    you: 'You',
    'barcode-legacy-default': 'Student #{N}',
    'barcode-default': 'Intellectual student',
    'barcode-student-placeholder': "Whose ID is this?",
    ds: 'S  M  T  W  &Theta;  F  S',
    mos: 'jan  feb  mar  apr  may  jun  jul  aug  sep  oct  nov  dec',
    'no-school': 'No school today!',
    flex: 'Flex',
    brunch: 'Brunch',
    lunch: 'Lunch',
    self: 'SELF',
    periodx: 'Period {X}',
    months: 'January  February  March  April  May  June  July  August  September  October  November  December',
    loading: 'Loading',
    'no-events': 'No events today :(',
    'events-error': "; couldn't get events; maybe you aren't connected to the internet?",
    days: 'Sunday  Monday  Tuesday  Wednesday  Thursday  Friday  Saturday',
    'default-alt-msg': 'good luck with our schedule lol',
    'period-name-label': 'Set label for ',
    'enable-lists': 'Enable club/staff lists',
    'supreme-leader': 'Supreme Leader',
    universe: 'Universe',
    'blamed-teacher': 'Blamed Teacher',
    'staff-error': "; couldn't get staff data; maybe you aren't connected to the internet?",
    title: 'Title:',
    department: 'Department:',
    email: 'Email:',
    phone: 'Phone:',
    website: 'Website:',
    basement: 'Basement:',
    'oc-basement': "OC's Basement",
    'sophomore-club': 'No Senior Club',
    'soph-desc': 'A club to develop our empathy, resilience and other core social-emotional skills; to help us build trusting relationships with our peers and mentors; and to establish spaces where we feel safe and supported. We believe that we will benefit from challenging our assumptions about the world and each other by asking questions, having meaningful discussions, and remaining open-minded while maintaining our core values. In so doing, we will develop our own identity, without the pressure of formal grading or assessment, and with every effort to play, explore, and appreciate diversity. Our goal is to help ourselves realize that each of us is immeasurably valuable not because of what we have achieved but because of who we are and who we can become. We have one of the best attendance rates; no seniors allowed!',
    'soph-day': 'Thursday',
    'soph-time': 'Flex',
    'soph-room': 'Any room',
    'soph-prez': 'Tara Firenzi',
    'soph-teacher': 'Courtney Carlomagno',
    'soph-email': 'ccarlomagno@pausd.org',
    'club-error': "; couldn't get club data; maybe you aren't connected to the internet?",
    day: 'Meeting day:',
    time: 'Meeting time:',
    location: 'Location:',
    desc: 'Description:',
    presidents: 'President(s):',
    advisors: 'Teacher Advisor(s):',
    'teacher-email': 'Teacher Email:',
    donation: 'Suggested donation:',
    'before-alt-msg': 'This is an alternate schedule. The school says, "',
    'after-alt-msg': '"',
    appname: 'Unofficial Gunn Web App (UGWA)',
    'add-to-list': 'Add to my clubs',
    'remove-from-list': 'Remove from my clubs',
    'lunch-clubs': 'Clubs',
    summer: 'Enjoy your summer!',
    'image-url': 'Image URL',
    cannot: 'There was a problem fetching the image.',
    'add-asgn': 'Add assignment',
    asgn: 'Upcoming assignments',
    overdue: 'overdue',
    doneify: 'Mark as done',
    undoneify: 'Unmark as done',
    'asgn-cat-homework': 'homework',
    'asgn-cat-preparation': 'preparation',
    'asgn-cat-worksheet': 'worksheet',
    'asgn-cat-reading': 'reading',
    'asgn-cat-quiz': 'quiz',
    'asgn-cat-test': 'test',
    'asgn-cat-exam': 'exam',
    'asgn-cat-presentation': 'presentation',
    'asgn-cat-materials': 'materials',
    'asgn-cat-lab': 'lab',
    'asgn-cat-other': 'other',
    'import-warning': 'This will permanently override your existing settings. Do you want that?',
    'import-problem': 'There was a problem.',
    'export-file-name': 'the-settings-of-a-great-intellectual-gunn-student.json',
    'assync-loading': 'Loading assignments...',
    'assync-loaded': 'Assignments loaded.',
    'assync-loading-problem': 'There was a problem loading the assignments.',
    'assync-saving': 'Saving changes...',
    'assync-saved': 'Changes saved.',
    'assync-saving-problem': 'There was a problem saving the changes.',
    p0: 'Zero period',
    'dead-club': 'This club no longer exists at Gunn.',
    'psa-date': 'Created on {D}.',
    'psa-error': 'Could not load PSA: '
  },
  placeholders: {
    clubs: 'Search clubs',
    staff: 'Search staff',
    'send-msg': 'Send a message',
    assignment: 'Assignment',
    import: 'Paste exported settings here',
    assync: 'Assync ID',
    errors: 'JavaScript runtime errors will be logged here'
  },
  times: {
    duration({T: minutes}) {
      if (minutes < 1) return 'less than a minute';
      return (minutes >= 120 ? Math.floor(minutes / 60) + ' hours' : minutes >= 60 ? 'an hour' : '')
        + (minutes % 60 === 0 ? '' : (minutes >= 60 ? ' and ' : '') + (minutes % 60 === 1 ? 'a minute' : (minutes % 60) + ' minutes'));
    },
    date: '{M} {D}',
    ended: '{P} ended {T} ago.',
    ending: '{P} ending in {T}.',
    'ending-short': '{T} left',
    starting: '{P} starting in {T}.',
    'starting-short': '{T} until {P}',
    long: '{T} long',
    'self-ended': 'Ended {T} ago.',
    'self-starting': 'Starting in {T}.',
    'self-ending': 'Ending in {T1}; started {T2} ago.',
    'due-date'({P: periodSpan, D: dateStr}) {
      return 'due by ' + (periodSpan ? periodSpan + ' on ' : '') + dateStr;
    }
  }
};

const availableLangs = {
  'en': 'English',
  'en-gt': 'English (Google Translated through Chinese)',
  'es': 'español',
  'test': 'le language test',
  'x-mleng': "L'leng"
};
const publicLangs = /(?:\?|&)all-langs/.exec(window.location.search)
  ? Object.keys(availableLangs)
  : ['en', 'en-gt'];
if (!availableLangs[cookie.getItem('[gunn-web-app] language')]) {
  let lang = 'en';
  if (navigator.languages) {
    lang = navigator.languages.find(lang => availableLangs[lang]) || lang;
  } else {
    const userLang = navigator.language || navigator.userLanguage;
    if (availableLangs[userLang]) lang = userLang;
  }
  cookie.setItem('[gunn-web-app] language', lang);
}
let currentLang = cookie.getItem('[gunn-web-app] language');
function localize(id, src = 'other') {
  if (!langs[currentLang]) {
    console.warn(`Language ${currentLang} not loaded.`);
    langs[currentLang] = {};
  }
  if (!langs[currentLang][src]) {
    langs[currentLang][src] = {};
  }
  if (langs[currentLang][src][id] !== undefined) return langs[currentLang][src][id];
  if (!langs.en[src]) {
    console.warn(`Source ${src} does not exist.`);
    return id;
  }
  if (langs.en[src][id] === undefined) {
    console.warn(`Nothing set for ${src}/${id}`);
    return id;
  }
  return langs.en[src][id];
}
if (currentLang !== 'en') {
  const script = document.createElement('script');
  script.src = `./js/languages/${currentLang}.js`;
  document.head.appendChild(script);
}
