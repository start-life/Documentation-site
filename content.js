// קובץ: content.js
// כאן נמצא כל הטקסט והתוכן של האתר

const pagesData = {
    "guide": {
        title: "מדריך",
        icon: "fas fa-book-reader",
        content: `# מדריך למשתמש

ברוכים הבאים למערכת.

## התקנה
\`\`\`bash
npm install app-core
\`\`\`

## מצב כהה
נסו ללחוץ על הירח למעלה כדי לראות את המערכת במצב לילה! 🌙
`
    },
    "api": {
        title: "API",
        icon: "fas fa-code",
        content: `# תיעוד API
ממשק ה-API שלנו מאפשר אינטגרציה מלאה.

### Get Users
\`GET /api/v1/users\`
`
    },
    "faq": {
        title: "שאלות",
        icon: "fas fa-question-circle",
        content: `# שאלות נפוצות

### האם זה בחינם?
כן, בגרסה הבסיסית.
`
    },
    "updates": {
        title: "מה חדש",
        icon: "fas fa-wand-magic-sparkles", 
        content: `# מה חדש במערכת? 🚀

כאן תמצאו את כל העדכונים והשדרוגים האחרונים.

## גרסה 3.1 (עכשיו)
הוספנו מצב לילה!

### ✨ פיצ'רים חדשים
1. **Dark Mode**: עיצוב כהה ומודרני ששומר על העיניים.
2. **צבעים דינמיים**: כל האלמנטים משתנים בהתאם לבחירה שלכם.
`
    }
};
