export const feedbackRules = {
  overall: [
    {
      min: 8,
      text: "Shows a high level of speaking proficiency. Pronunciation, fluency, vocabulary, and grammar are well controlled, allowing ideas to be communicated clearly and confidently."
    },
    {
      min: 6,
      text: "Demonstrates good overall speaking ability. Speech is generally clear and fluent with occasional pauses. Vocabulary and grammar are used effectively, though minor inaccuracies may appear."
    },
    {
      min: 0,
      text: "Shows basic speaking skills with noticeable difficulties in clarity, fluency, and accuracy. Further practice is needed to improve overall communication."
    }
  ],

  pronunciation: [
    {
      min: 8,
      text: "Pronunciation is clear and accurate throughout. Words are well articulated, and the accent has little to no impact on understanding."
    },
    {
      min: 6,
      text: "Pronunciation is generally clear, though some mispronunciations occur. Accent may slightly affect understanding at times."
    },
    {
      min: 0,
      text: "Pronunciation difficulties frequently make speech hard to understand."
    }
  ],

  fluency: [
    {
      min: 8,
      text: "Speaks smoothly with minimal hesitation. Ideas are well connected, and speech flows naturally."
    },
    {
      min: 6,
      text: "Maintains reasonable fluency but may show hesitation or repetition. Communication remains mostly clear."
    },
    {
      min: 0,
      text: "Frequent pauses and hesitation interrupt the flow of speech and affect communication."
    }
  ],

  vocabulary: [
    {
      min: 8,
      text: "Uses a strong range of vocabulary accurately and effectively to express ideas clearly."
    },
    {
      min: 6,
      text: "Uses an appropriate range of vocabulary for most situations. Can express ideas clearly, though word choice may occasionally be limited."
    },
    {
      min: 0,
      text: "Limited vocabulary makes it difficult to express ideas clearly."
    }
  ],

  grammar: [
    {
      min: 8,
      text: "Uses a variety of sentence structures accurately, showing good grammatical control."
    },
    {
      min: 6,
      text: "Uses both simple and complex sentence structures with some errors, especially in complex forms, but meaning remains clear."
    },
    {
      min: 0,
      text: "Frequent grammatical errors affect clarity and understanding."
    }
  ]
};
