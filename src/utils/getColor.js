export const getScoreBgColor = (score) => {
    if (score >= 8.5) return `bg-blue-500`;
    if (score >= 7) return `bg-green-500`;
    if (score >= 6) return `bg-yellow-500`;
    return `bg-red-500`;
  };


export const getScoreTextColor = (score) => {
    if (score >= 8.5) return `text-blue-500`;
    if (score >= 7) return `text-green-500`;
    if (score >= 6) return `text-yellow-500`;
    return `text-red-500`;
  };
