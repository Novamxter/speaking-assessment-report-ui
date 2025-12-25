import { getScoreBgColor } from "../utils/getColor";

function SkillBar({ label, score }) {
  const percentage = (score / 9) * 100;

  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-semibold text-gray-700">{score} / 9</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${getScoreBgColor(
            score
          )} h-2 rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default SkillBar;
