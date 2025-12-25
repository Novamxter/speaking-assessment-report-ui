# Speaking Assessment Report

This project is a simple **Speaking Assessment Report** that displays a student’s speaking scores along with descriptive feedback.  
The feedback updates automatically based on the scores, following a clear and easy-to-understand scoring logic.

---

## 🚀 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/Novamxter/speaking-assessment-report-ui.git
   ```

2. Navigate into the project folder:

   ```bash
   cd speaking-assessment-report-ui
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the project in your browser (usually at):

   ```
   http://localhost:3000
   ```

---

## 📊 Where the Scores Are Stored

* Student scores are stored in a **data object / component state** inside the project.
* Each student has individual scores for the following sections:

  * Overall
  * Pronunciation
  * Fluency
  * Vocabulary
  * Grammar

### Example:

```js
{
  overall: 7,
  pronunciation: 6,
  fluency: 8,
  vocabulary: 7,
  grammar: 6
}
```

These scores are used to dynamically render progress bars, color indicators, and feedback text.

---

## 🧠 How the Feedback Logic Works

* The project uses **predefined score ranges** to generate descriptive feedback.
* Feedback rules are defined in a separate configuration object.
* Each score is compared against minimum score thresholds.

### Scoring Logic:

* **Score ≥ 8** → Strong / high-level performance
* **Score ≥ 6** → Good performance with minor improvements needed
* **Score < 6** → Basic or limited performance

Based on the score, the matching feedback text is selected and displayed automatically for each assessment category.

---

## ✅ Key Highlights

* Dynamic feedback based on scores
* Simple and readable logic
* Easy to update or extend
* Focused on clarity and usability


