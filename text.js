// akuTranslations.js
export const akuTranslations = {
  id: { language: "Indonesian", nativeName: "Bahasa Indonesia", translation: "aku" },
  ar: { language: "Arabic", nativeName: "العربية", translation: "أنا" },
  zh: { language: "Chinese (Mandarin)", nativeName: "中文", translation: "我" },
  en: { language: "English", nativeName: "English", translation: "I" },
  fr: { language: "French", nativeName: "Français", translation: "je" },
  ru: { language: "Russian", nativeName: "Русский", translation: "я" },
  es: { language: "Spanish", nativeName: "Español", translation: "yo" },

  pt: { language: "Portuguese", nativeName: "Português", translation: "eu" },
  de: { language: "German", nativeName: "Deutsch", translation: "ich" },
  it: { language: "Italian", nativeName: "Italiano", translation: "io" },
  nl: { language: "Dutch", nativeName: "Nederlands", translation: "ik" },
  sv: { language: "Swedish", nativeName: "Svenska", translation: "jag" },
  da: { language: "Danish", nativeName: "Dansk", translation: "jeg" },
  no: { language: "Norwegian", nativeName: "Norsk", translation: "jeg" },
  fi: { language: "Finnish", nativeName: "Suomi", translation: "minä" },
  pl: { language: "Polish", nativeName: "Polski", translation: "ja" },
  cs: { language: "Czech", nativeName: "Čeština", translation: "já" },
  hu: { language: "Hungarian", nativeName: "Magyar", translation: "én" },
  ro: { language: "Romanian", nativeName: "Română", translation: "eu" },
  el: { language: "Greek", nativeName: "Ελληνικά", translation: "εγώ" },
  tr: { language: "Turkish", nativeName: "Türkçe", translation: "ben" },
  he: { language: "Hebrew", nativeName: "עברית", translation: "אני" },
  fa: { language: "Persian", nativeName: "فارسی", translation: "من" },
  hi: { language: "Hindi", nativeName: "हिन्दी", translation: "मैं" },
  bn: { language: "Bengali", nativeName: "বাংলা", translation: "আমি" },
  ur: { language: "Urdu", nativeName: "اردو", translation: "میں" },
  ta: { language: "Tamil", nativeName: "தமிழ்", translation: "நான்" },
  vi: { language: "Vietnamese", nativeName: "Tiếng Việt", translation: "tôi" },
  th: { language: "Thai", nativeName: "ไทย", translation: "ฉัน" },
  ja: { language: "Japanese", nativeName: "日本語", translation: "私" },
  ko: { language: "Korean", nativeName: "한국어", translation: "나" },
  ms: { language: "Malay", nativeName: "Bahasa Melayu", translation: "aku" },
  tl: { language: "Tagalog/Filipino", nativeName: "Tagalog", translation: "ako" },
  sw: { language: "Swahili", nativeName: "Kiswahili", translation: "mimi" }
};

export function translateAku(lang = "en") {
  const item = akuTranslations[lang];
  if (!item) {
    throw new Error(`Bahasa dengan kode "${lang}" tidak ditemukan.`);
  }
  return item.translation;
}

export default akuTranslations;
