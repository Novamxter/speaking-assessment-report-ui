export function getFeedbackText(score, rules) {
  return rules.find((rule) => score >= rule.min)?.text;
}