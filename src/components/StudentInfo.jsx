import React from "react";

export default function StudentInfo({ student }) {
  return (
    <div className="flex flex-col px-4 py-2 mb-2">
      <h2 className="text-xl font-semibold text-gray-900">{student.name}</h2>

      <p className="text-sm text-gray-600">
        {student.assessmentDate} • Level: {student.level}
      </p>
    </div>
  );
}
