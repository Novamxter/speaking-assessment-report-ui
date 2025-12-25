import React from "react";
import SkillBar from "./SkillBar";
import { getScoreBgColor } from "../utils/getColor";
import { getFeedbackText } from "../utils/getFeedbackText";
import { overallPerformanceLabels } from "../data/overallPerformanceLabels";

export default function ScoreCard({ scoreData }) {
  return (
    <div className="flex flex-col border border-gray-300 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-600 px-2 py-1 bg-gray-200 rounded-t-lg">
        Score Board
      </h2>
      <div className="py-3">
        <div className="flex gap-4 flex-row-reverse items-center">
          <div className="w-[30%] flex flex-col">
            <h2 className="mx-auto text-lg font-semibold">Overall Score</h2>
            <div
              className={`bg-gray-100 mx-4 mt-2 mb-4 py-13 flex-1 flex justify-center items-center text-3xl font-bold text-white rounded-xl ${getScoreBgColor(
                scoreData.overall
              )}`}
            >
              {scoreData.overall} / 9
            </div>
          </div>

          <div className="mx-4 w-[70%]">
            <SkillBar label="Pronunciation" score={scoreData.pronunciation} />
            <SkillBar label="Fluency" score={scoreData.fluency} />
            <SkillBar label="Vocabulary" score={scoreData.vocabulary} />
            <SkillBar label="Grammar" score={scoreData.grammar} />
          </div>
        </div>
        <div className="flex justify-center text-base text-gray-600">
          {getFeedbackText(scoreData.overall, overallPerformanceLabels)}
        </div>
      </div>
    </div>
  );
}
