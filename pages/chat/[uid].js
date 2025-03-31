import { useState, useEffect, useRef } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  onSnapshot,
  orderBy,
  doc,
  getDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/firebase";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [receiver, setReceiver] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { uid: receiverId } = router.query;
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!router.isReady) return;

    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/login");
        return;
      }

      try {
        setCurrentUser(user);

        // Get receiver data
        const receiverDoc = await getDoc(doc(db, "users", receiverId));
        if (!receiverDoc.exists()) {
          throw new Error("User not found");
        }
        setReceiver({
          id: receiverDoc.id,
          ...receiverDoc.data(),
        });

        // Simple query to get messages between these users
        const messagesQuery = query(
          collection(db, "messages"),
          where("senderId", "in", [user.uid, receiverId]),
          where("receiverId", "in", [user.uid, receiverId]),
          orderBy("timestamp", "asc")
        );

        const unsubscribeMessages = onSnapshot(messagesQuery, (snapshot) => {
          const messagesData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setMessages(messagesData);
        });

        setLoading(false);
        return () => unsubscribeMessages();
      } catch (err) {
        console.error("Chat error:", err);
        setLoading(false);
      }
    });

    return () => unsubscribeAuth();
  }, [router.isReady, receiverId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!message.trim() || !currentUser || !receiverId) return;

    try {
      await addDoc(collection(db, "messages"), {
        senderId: currentUser.uid,
        receiverId: receiverId,
        message: message,
        timestamp: serverTimestamp(),
      });
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-white shadow-lg p-4 flex items-center sticky top-0 z-10">
        <button
          onClick={() => router.back()}
          className="mr-4 text-purple-600 hover:text-purple-800"
        >
          &larr;
        </button>
        <div className="flex items-center">
          {receiver?.profilePicture ? (
            <img
              src={receiver.profilePicture}
              alt={receiver.name}
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
              <span className="text-gray-500 text-sm">?</span>
            </div>
          )}
          <h1 className="text-xl font-bold text-purple-600">
            {receiver?.name || "Chat"}
          </h1>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Start a conversation
              </h3>
              <p className="text-gray-600 mb-4">
                Send your first message to {receiver?.name || "this user"}
              </p>
            </div>
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-4 ${
                msg.senderId === currentUser?.uid ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block p-3 rounded-lg max-w-[75%] ${
                  msg.senderId === currentUser?.uid
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <p className="break-words">{msg.message}</p>
                <p
                  className={`text-xs mt-1 ${
                    msg.senderId === currentUser?.uid
                      ? "text-purple-200"
                      : "text-gray-500"
                  }`}
                >
                  {msg.timestamp?.toDate().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={sendMessage}
        className="bg-white p-4 shadow-lg sticky bottom-0"
      >
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={!receiver}
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-5 py-3 rounded-r-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!message.trim() || !receiver}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
