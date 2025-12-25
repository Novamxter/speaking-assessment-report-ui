import { feedbackRules } from "../data/feedbackRules";
import { getScoreBgColor } from "../utils/getColor";
import feedbackSections from "../data/feedbackSections";
import { getFeedbackText } from "../utils/getFeedbackText";

function Feedback({ scores }) {
  return (
    <div className="mt-6 py-8 space-y-6">
      <h2 className="text-xl font-semibold bg-gray-100 px-3 py-2 rounded-lg">Descriptive Feedback</h2>
      <div className="mx-8 flex flex-col gap-4">
        {feedbackSections.map((section) => {
          const score = scores[section.key];
          return (
            <div key={section.key}>
              <div className="flex gap-3 items-center border-b border-gray-300 py-1">
                <div
                  className={`${getScoreBgColor(score)} h-4 w-4 rounded-full`}
                ></div>
                <h3 className="font-semibold">
                  {section.label} ({score})
                </h3>
              </div>
              <p className="text-gray-700">
                {getFeedbackText(score, feedbackRules[section.key])}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Feedback;


