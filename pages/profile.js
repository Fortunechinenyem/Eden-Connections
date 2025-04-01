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
import Link from "next/link";
import Image from "next/image";

export default function ProfilePage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    let unsubscribeUsers = () => {};

    const fetchCurrentUser = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setCurrentUser({ id: userDoc.id, ...userDoc.data() });
        }
      }
    };

    const fetchUsers = () => {
      const user = auth.currentUser;
      if (user) {
        const usersQuery = query(
          collection(db, "users"),
          where("uid", "!=", user.uid)
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

    fetchCurrentUser();
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
          <Link href="/" className="text-2xl font-bold text-indigo-900">
            <Image src="/eden.png" width={80} height={80} alt="Logo" priority />
          </Link>
          <div className="space-x-4">
            <button
              onClick={() => router.push("/profile")}
              className="text-gray-700 hover:text-purple-600"
            >
              My Profile
            </button>
            <button
              onClick={() => router.push("/browse")}
              className="text-gray-700 hover:text-purple-600"
            >
              Browse
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <h2 className="text-xl font-bold text-purple-600 mb-4">
                My Profile
              </h2>
              {currentUser && (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    {currentUser.profilePicture ? (
                      <img
                        src={currentUser.profilePicture}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-purple-100"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center border-4 border-purple-100">
                        <span className="text-gray-500">No Photo</span>
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">
                      {currentUser.name}
                    </h3>
                    <p className="text-gray-600">{currentUser.age} years old</p>
                    {currentUser.location && (
                      <p className="text-gray-600">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        {currentUser.location}
                      </p>
                    )}
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-bold text-purple-700 mb-2">About Me</h4>
                    <p className="text-gray-600">
                      {currentUser.bio || "No bio yet"}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <h4 className="font-bold text-purple-700 mb-2">My Faith</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentUser.denomination && (
                        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                          {currentUser.denomination}
                        </span>
                      )}
                      {currentUser.faithValues?.map((value, i) => (
                        <span
                          key={i}
                          className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => router.push("/editprofile")}
                    className="w-full mt-6 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Edit Profile
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-3">
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
                    {user.location && (
                      <p className="text-gray-600 mb-2">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        {user.location}
                      </p>
                    )}
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                      {user.bio || "No bio yet"}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {user.faithValues?.slice(0, 3).map((value, i) => (
                        <span
                          key={i}
                          className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs"
                        >
                          {value}
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
