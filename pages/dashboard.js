import { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { auth, db } from "@/firebase";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let unsubscribeUsers = () => {};

    const fetchUserProfile = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUser(userDoc.data());
        }
      }
    };

    const fetchUsers = () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const usersQuery = query(
          collection(db, "users"),
          where("uid", "!=", currentUser.uid)
        );
        unsubscribeUsers = onSnapshot(usersQuery, (snapshot) => {
          const usersData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setUsers(usersData);
          setLoading(false);
        });
      }
    };

    fetchUserProfile();
    fetchUsers();

    return () => unsubscribeUsers();
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
              onClick={() => router.push("/dashboard")}
              className="text-gray-700 hover:text-purple-600"
            >
              Browse
            </button>
            <button
              onClick={() => router.push("/chat")}
              className="text-gray-700 hover:text-purple-600"
            >
              Chats
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-1">
            <h2 className="text-xl font-bold text-purple-600 mb-4">
              Your Profile
            </h2>
            {user && (
              <div className="space-y-4">
                <div className="flex justify-center">
                  {user.profilePicture ? (
                    <img
                      src={user.profilePicture}
                      alt="Profile"
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No Photo</span>
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold">{user.name}</p>
                  <p className="text-gray-600">{user.age} years old</p>
                  <p className="text-gray-600 text-sm">{user.bio}</p>
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-purple-600 mb-4">
                Browse Christians
              </h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, location, or interests..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-purple-100 relative">
                    {user.profilePicture ? (
                      <img
                        src={user.profilePicture}
                        alt={user.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-500 text-lg">No Photo</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-purple-800">
                      {user.name}, {user.age}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {user.location || "No location specified"}
                    </p>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                      {user.bio || "No bio yet"}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {user.interests?.slice(0, 3).map((interest, i) => (
                        <span
                          key={i}
                          className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => router.push(`/chat/${user.id}`)}
                      className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Start Chat
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
