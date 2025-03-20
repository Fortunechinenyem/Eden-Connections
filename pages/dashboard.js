import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUser(userDoc.data());
        }
      }
    };

    const fetchMatches = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const matchesQuery = query(
          collection(db, "users"),
          where("uid", "!=", currentUser.uid)
        );
        const unsubscribe = onSnapshot(matchesQuery, (snapshot) => {
          const matchesData = snapshot.docs.map((doc) => doc.data());
          setMatches(matchesData);
          setLoading(false);
        });
        return unsubscribe;
      }
    };

    fetchUserProfile();
    const unsubscribe = fetchMatches();
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600">
            EdenConnections
          </h1>
          <div className="space-x-4">
            <button
              onClick={() => router.push("/profile")}
              className="text-gray-700 hover:text-purple-600"
            >
              Profile
            </button>
            <button
              onClick={() => router.push("/chat")}
              className="text-gray-700 hover:text-purple-600"
            >
              Chat
            </button>
            <button
              onClick={() => auth.signOut()}
              className="text-gray-700 hover:text-purple-600"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-purple-600 mb-4">
              Your Profile
            </h2>
            {user && (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <img
                    src={user.profilePicture || "/default-profile.png"}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold">{user.name}</p>
                  <p className="text-gray-600">{user.age} years old</p>
                  <p className="text-gray-600">{user.bio}</p>
                </div>
              </div>
            )}
          </div>

          <div className="col-span-2 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-purple-600 mb-4">
              Your Matches
            </h2>
            {matches.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {matches.map((match, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-center">
                      <img
                        src={match.profilePicture || "/default-profile.png"}
                        alt={match.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                    <div className="text-center mt-2">
                      <p className="font-semibold">{match.name}</p>
                      <p className="text-gray-600">{match.age} years old</p>
                      <button
                        onClick={() => router.push(`/chat/${match.uid}`)}
                        className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                      >
                        Message
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No matches found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
