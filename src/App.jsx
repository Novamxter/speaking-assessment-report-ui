import studentData from "./data/scoreData";
import ScoreCard from "./components/ScoreCard";
import Feedback from "./components/FeedBack";
import StudentInfo from "./components/StudentInfo";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow py-8 px-12">
        <h1 className="text-2xl font-bold pb-3 mb-3 border-b border-gray-400">Speaking Assessment Report</h1>
        <div className="w-[90%] mx-auto">
          <StudentInfo student={studentData.student} />
          <ScoreCard scoreData={studentData.scores} />
        </div>
        <Feedback scores={studentData.scores} />
      </div>
    </div>
  );
}

export default App;
