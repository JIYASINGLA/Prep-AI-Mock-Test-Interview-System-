import React, { useState } from "react";

// Define type for a chat message
type ChatMessage = {
  sender: "interviewer" | "candidate";
  text: string;
};

const InterviewRoom: React.FC = () => {
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [isInterviewStarted, setIsInterviewStarted] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);

  // Start interview handler
  const handleStartInterview = () => {
    setIsInterviewStarted(true);
    setChat([
      {
        sender: "interviewer",
        text: "Welcome! Let’s start your interview. Please introduce yourself.",
      },
    ]);
  };

  // Record button handler (placeholder for now)
  const handleRecord = () => {
    if (isRecording) {
      setIsRecording(false);
      setChat((prev) => [
        ...prev,
        { sender: "candidate", text: "Candidate answer (recorded audio here)" },
      ]);
    } else {
      setIsRecording(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 border-2 border-gray-200 rounded-xl shadow-md bg-white">
      {/* Interviewer Avatar */}
      <div className="text-center mb-6">
        <img
          src="https://via.placeholder.com/100"
          alt="Interviewer Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-2"
        />
        <h2 className="text-xl font-semibold text-gray-800">AI Interviewer</h2>
      </div>

      {/* Start Button */}
      {!isInterviewStarted ? (
        <button
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          onClick={handleStartInterview}
        >
          Start Interview
        </button>
      ) : (
        <>
          {/* Chat Log */}
          <div className="max-h-80 overflow-y-auto mb-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
            {chat.map((msg, index) => (
              <div
                key={index}
                className={`my-2 p-3 rounded-lg max-w-xs ${
                  msg.sender === "interviewer"
                    ? "bg-blue-100 text-left"
                    : "bg-green-100 text-right ml-auto"
                }`}
              >
                <strong>
                  {msg.sender === "interviewer" ? "👔 Interviewer: " : "🧑 You: "}
                </strong>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Microphone Button */}
          <button
            className={`w-full py-3 rounded-lg font-medium transition ${
              isRecording
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
            onClick={handleRecord}
          >
            {isRecording ? "Stop Recording 🎙️" : "Start Recording 🎤"}
          </button>
        </>
      )}
    </div>
  );
};

export default InterviewRoom;
